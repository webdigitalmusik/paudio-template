import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { TransducerProduct } from '../types';

interface BoxCalculatorModalProps {
  initialDriver?: TransducerProduct | null;
  onClose: () => void;
  onSelectProduct: (product: TransducerProduct) => void;
}

export const BoxCalculatorModal: React.FC<BoxCalculatorModalProps> = ({
  initialDriver,
  onClose,
  onSelectProduct,
}) => {
  const eligibleDrivers = PRODUCTS.filter((p) => p.category === 'sub' || p.category === 'mid');
  const [selectedDriverId, setSelectedDriverId] = useState<string>(
    initialDriver?.id || eligibleDrivers[0].id
  );

  const currentDriver = PRODUCTS.find((p) => p.id === selectedDriverId) || eligibleDrivers[0];

  const defaultVb = currentDriver.thieleSmall.vas 
    ? Math.round(currentDriver.thieleSmall.vas * 0.9) 
    : 180;
  const defaultFb = currentDriver.thieleSmall.fs 
    ? Math.round(currentDriver.thieleSmall.fs * 1.05) 
    : 35;

  const [boxVolumeLiters, setBoxVolumeLiters] = useState<number>(defaultVb);
  const [tuningFrequencyHz, setTuningFrequencyHz] = useState<number>(defaultFb);
  const [portShape, setPortShape] = useState<'slot' | 'round'>('slot');
  const [slotWidthCm, setSlotWidthCm] = useState<number>(55);
  const [slotHeightCm, setSlotHeightCm] = useState<number>(10);

  // Speed of sound in cm/s = 34300
  // Helmholz resonance formula:
  // Port Length Lv = (23562.5 * Dv^2 / (Fb^2 * Vb)) - (0.732 * Dv)
  // For slotted/rectangular port with Area Sp:
  // Lv = (c^2 * Sp) / (4 * pi^2 * Fb^2 * Vb) - k*sqrt(Sp)
  const portAreaCm2 = portShape === 'slot' ? slotWidthCm * slotHeightCm : 254; // round 18cm diameter ~ 254 cm2
  const c = 34300; // cm/s
  const vbCm3 = Math.max(20, boxVolumeLiters) * 1000;
  const fb = Math.max(20, tuningFrequencyHz);

  // Approximate physical port length
  const term1 = (Math.pow(c, 2) * portAreaCm2) / (4 * Math.pow(Math.PI, 2) * Math.pow(fb, 2) * vbCm3);
  const endCorrection = 0.825 * Math.sqrt(portAreaCm2);
  const calculatedPortLength = Math.max(5, Math.round(term1 - endCorrection));

  // Golden ratio box dimensions approximation for internal volume:
  // 1 : 1.25 : 1.6 => V = x * 1.25x * 1.6x = 2 * x^3 => x = (V / 2)^(1/3)
  const x = Math.cbrt((boxVolumeLiters * 1000) / 2);
  const depthInternal = Math.round(x);
  const widthInternal = Math.round(x * 1.25);
  const heightInternal = Math.round(x * 1.6);

  const ebp = currentDriver.thieleSmall.ebp;

  const handleDriverChange = (id: string) => {
    setSelectedDriverId(id);
    const d = PRODUCTS.find((p) => p.id === id);
    if (d) {
      if (d.thieleSmall.vas) setBoxVolumeLiters(Math.round(d.thieleSmall.vas * 0.9));
      if (d.thieleSmall.fs) setTuningFrequencyHz(Math.round(d.thieleSmall.fs * 1.05));
    }
  };

  const shareText = encodeURIComponent(
    `Halo Admin P.Audio, saya sedang menghitung boks untuk driver ${currentDriver.name}. Parameter: Volume Vb=${boxVolumeLiters}L, Tuning Fb=${tuningFrequencyHz}Hz, Port=${portAreaCm2}cm² x ${calculatedPortLength}cm. Apakah setting ini optimal?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white border border-[#2E2E33] rounded-lg shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#111111] text-white px-6 py-4 flex items-center justify-between border-b border-[#2E2E33]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ED1C24] text-[26px]">calculate</span>
            <div>
              <h2 className="font-heading text-lg sm:text-xl font-bold tracking-tight">
                Kalkulator Tuning Enclosure Boks Speaker
              </h2>
              <span className="font-mono text-[11px] text-gray-400">
                Simulasi Port Bass Reflex &amp; Perhitungan Volume Efektif P.Audio
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#F7F7F8]">
          {/* Driver Selector */}
          <div className="bg-white p-4 rounded-lg border border-[#E5E7EB] space-y-3">
            <label className="font-mono text-xs font-bold text-[#111827] flex items-center justify-between">
              <span>PILIH TRANSDUSER P.AUDIO:</span>
              <span className="text-[#ED1C24] font-semibold">{currentDriver.categoryLabel}</span>
            </label>
            <select
              value={selectedDriverId}
              onChange={(e) => handleDriverChange(e.target.value)}
              className="w-full bg-[#F7F7F8] border border-[#E5E7EB] rounded p-2.5 text-xs font-mono font-semibold text-[#111827] focus:outline-none focus:border-[#ED1C24]"
            >
              {eligibleDrivers.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.powerAes}W AES, {d.size}, Fs: {d.thieleSmall.fs}Hz, Qts: {d.thieleSmall.qts})
                </option>
              ))}
            </select>

            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-[#E5E7EB] text-center font-mono text-[11px]">
              <div>
                <span className="text-gray-400 block text-[9px]">Fs (Hz)</span>
                <span className="font-bold text-[#111827]">{currentDriver.thieleSmall.fs}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[9px]">Qts</span>
                <span className="font-bold text-[#111827]">{currentDriver.thieleSmall.qts}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[9px]">Vas (L)</span>
                <span className="font-bold text-[#111827]">{currentDriver.thieleSmall.vas || '-'}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[9px]">EBP</span>
                <span className="font-bold text-[#ED1C24]">{ebp}</span>
              </div>
            </div>
          </div>

          {/* Sliders for Volume & Tuning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Box Volume */}
            <div className="bg-white p-4 rounded-lg border border-[#E5E7EB] space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#111827]">Volume Bersih Boks (Vb):</span>
                <span className="text-sm font-bold text-[#ED1C24] bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  {boxVolumeLiters} Liter
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="350"
                step="5"
                value={boxVolumeLiters}
                onChange={(e) => setBoxVolumeLiters(Number(e.target.value))}
                className="w-full accent-[#ED1C24] cursor-pointer"
              />
              <span className="text-[10px] font-mono text-gray-400 block">
                Rekomendasi pabrik: {currentDriver.boxRecommendations.recommendedVb}
              </span>
            </div>

            {/* Tuning Frequency */}
            <div className="bg-white p-4 rounded-lg border border-[#E5E7EB] space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#111827]">Frekuensi Tuning Port (Fb):</span>
                <span className="text-sm font-bold text-[#ED1C24] bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  {tuningFrequencyHz} Hz
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="75"
                step="1"
                value={tuningFrequencyHz}
                onChange={(e) => setTuningFrequencyHz(Number(e.target.value))}
                className="w-full accent-[#ED1C24] cursor-pointer"
              />
              <span className="text-[10px] font-mono text-gray-400 block">
                Rekomendasi tuning: {currentDriver.boxRecommendations.recommendedFb}
              </span>
            </div>
          </div>

          {/* Port Dimension Settings */}
          <div className="bg-white p-4 rounded-lg border border-[#E5E7EB] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#111827]">BENTUK &amp; LUAS LUBANG ANGIN (PORT VENT):</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPortShape('slot')}
                  className={`px-2.5 py-1 rounded text-xs cursor-pointer ${
                    portShape === 'slot'
                      ? 'bg-[#18181B] text-white font-bold'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Slot / Persegi
                </button>
                <button
                  onClick={() => setPortShape('round')}
                  className={`px-2.5 py-1 rounded text-xs cursor-pointer ${
                    portShape === 'round'
                      ? 'bg-[#18181B] text-white font-bold'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Pipa Bulat
                </button>
              </div>
            </div>

            {portShape === 'slot' ? (
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="text-[10px] text-gray-500 block mb-1">Lebar Slot (cm):</label>
                  <input
                    type="number"
                    value={slotWidthCm}
                    onChange={(e) => setSlotWidthCm(Number(e.target.value))}
                    className="w-full bg-[#F7F7F8] border border-[#E5E7EB] rounded p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-gray-500 block mb-1">Tinggi Slot (cm):</label>
                  <input
                    type="number"
                    value={slotHeightCm}
                    onChange={(e) => setSlotHeightCm(Number(e.target.value))}
                    className="w-full bg-[#F7F7F8] border border-[#E5E7EB] rounded p-2 text-xs"
                  />
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-xs">
                Menggunakan 2x pipa PVC 5 inci (Luas total ~ 254 cm²).
              </p>
            )}
            <div className="text-[10px] text-gray-400">
              Total Luas Port: <strong className="text-[#111827]">{portAreaCm2} cm²</strong>
            </div>
          </div>

          {/* Results Card */}
          <div className="bg-[#111111] text-white p-5 rounded-lg border border-[#2E2E33] space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#ED1C24] font-bold uppercase flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                HASIL PERHITUNGAN ENCLOSURE
              </span>
              <span className="text-gray-400">Parameter Helmholtz</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="bg-[#18181B] p-3 rounded border border-[#2E2E33]">
                <span className="text-gray-400 block text-[10px]">PANJANG KANAL PORT</span>
                <span className="text-xl font-bold text-[#ED1C24]">{calculatedPortLength} cm</span>
                <span className="text-[10px] text-gray-400 block mt-1">Termasuk koreksi ujung</span>
              </div>
              <div className="bg-[#18181B] p-3 rounded border border-[#2E2E33]">
                <span className="text-gray-400 block text-[10px]">PERKIRAAN F3 CUT-OFF</span>
                <span className="text-xl font-bold text-white">~ {Math.round(tuningFrequencyHz * 0.95)} Hz</span>
                <span className="text-[10px] text-gray-400 block mt-1">Batas titik frekuensi -3dB</span>
              </div>
              <div className="bg-[#18181B] p-3 rounded border border-[#2E2E33]">
                <span className="text-gray-400 block text-[10px]">REKOMENDASI HPF DSP</span>
                <span className="text-xl font-bold text-green-400">{Math.max(28, tuningFrequencyHz - 4)} Hz</span>
                <span className="text-[10px] text-gray-400 block mt-1">24dB/Oct BW/LR Filter</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-gray-300 pt-2 border-t border-[#2E2E33] flex flex-col sm:flex-row justify-between gap-2">
              <span>Dimensi Dalam Ideal (P x L x T): <strong>{depthInternal} x {widthInternal} x {heightInternal} cm</strong></span>
              <span className="text-[#ED1C24]">Rasio Akustik Golden Ratio 1.25 : 1.6</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-[#E5E7EB] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onSelectProduct(currentDriver);
            }}
            className="text-xs font-mono font-semibold text-gray-600 hover:text-[#ED1C24] flex items-center gap-1 cursor-pointer"
          >
            <span>Buka Lembar Detail {currentDriver.name}</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/6281289902818?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>Validasi Hasil via WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              className="bg-[#18181B] hover:bg-gray-800 text-white font-mono text-xs font-semibold px-4 py-2.5 rounded transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
