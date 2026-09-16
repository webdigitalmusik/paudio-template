import React, { useState } from 'react';
import { TransducerProduct } from '../types';

interface ProductDetailModalProps {
  product: TransducerProduct | null;
  onClose: () => void;
  onOpenCalculatorWithDriver: (product: TransducerProduct) => void;
  onNavigateProductDetail?: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenCalculatorWithDriver,
  onNavigateProductDetail,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'ts' | 'graph' | 'box'>('specs');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) return null;

  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const whatsappMessage = encodeURIComponent(
    `Halo Admin P.Audio Indonesia, saya ingin konsultasi teknis & ketersediaan stok untuk model ${product.name} (${product.powerAes}W AES, ${product.size}). Mohon info dan panduan boksnya.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white border border-[#2E2E33] rounded-lg shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#111111] text-white px-6 py-4 flex items-center justify-between border-b border-[#2E2E33]">
          <div className="flex items-center gap-3">
            <span className="bg-[#ED1C24] text-white font-mono text-xs font-bold px-2 py-0.5 rounded">
              {product.series}
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
              {product.name}
            </h2>
            <span className="hidden sm:inline-block font-mono text-xs text-gray-400">
              {product.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onNavigateProductDetail && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateProductDetail(product.id);
                }}
                className="hidden sm:flex items-center gap-1 text-xs font-mono text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded transition-colors cursor-pointer"
                title="Buka Halaman Detail Produk"
              >
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                <span>Halaman Penuh</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Tutup modal spesifikasi"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Modal Body with Scroll */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 bg-[#F7F7F8]">
          {/* Top Hero Summary in Modal */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-5 rounded-lg border border-[#E5E7EB]">
            <div className="md:col-span-5 flex flex-col space-y-2">
              <div className="bg-[#F0F0F2] rounded p-4 flex items-center justify-center relative aspect-square sm:aspect-auto sm:h-56">
                <img
                  src={productImages[activeImageIndex]}
                  alt={`${product.name} foto ${activeImageIndex + 1}`}
                  className="max-h-52 max-w-full object-contain drop-shadow-md transition-all duration-200"
                />
                {product.klippelVerified && (
                  <div className="absolute top-2 left-2 bg-[#111111] text-[#ED1C24] border border-[#2E2E33] px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                    KLIPPEL VERIFIED
                  </div>
                )}
                {productImages.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black/75 text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
                    {activeImageIndex + 1}/{productImages.length}
                  </div>
                )}
              </div>

              {/* Thumbnails row */}
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-1.5 pt-1">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`aspect-square p-1 rounded border bg-[#F7F7F8] flex items-center justify-center cursor-pointer transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#ED1C24] ring-1 ring-[#ED1C24]'
                          : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#ED1C24]">P.AUDIO ENGINEERING SPEC SHEET</span>
                  <span className="text-gray-300">•</span>
                  <span className="font-mono text-xs text-gray-500">AES2-1984 Standard</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#111827]">
                  {product.name} – {product.size} {product.categoryLabel}
                </h3>
                <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quick Stat Pill Bar */}
              <div className="grid grid-cols-4 gap-2 pt-3 border-t border-[#E5E7EB] text-center font-mono">
                <div className="bg-[#F7F7F8] p-2 rounded">
                  <span className="text-[10px] text-gray-400 block">AES POWER</span>
                  <span className="font-bold text-sm text-[#111827]">{product.powerAes}W</span>
                </div>
                <div className="bg-[#F7F7F8] p-2 rounded">
                  <span className="text-[10px] text-gray-400 block">IMPEDANCE</span>
                  <span className="font-bold text-sm text-[#111827]">{product.impedance}Ω</span>
                </div>
                <div className="bg-[#F7F7F8] p-2 rounded">
                  <span className="text-[10px] text-gray-400 block">SENSITIVITY</span>
                  <span className="font-bold text-sm text-[#111827]">{product.sensitivity} dB</span>
                </div>
                <div className="bg-[#F7F7F8] p-2 rounded">
                  <span className="text-[10px] text-gray-400 block">VOICE COIL</span>
                  <span className="font-bold text-xs text-[#ED1C24] truncate block" title={product.voiceCoil}>
                    {product.voiceCoil.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-[#E5E7EB]">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-2.5 px-3 font-heading text-xs font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? 'border-[#ED1C24] text-[#ED1C24]'
                  : 'border-transparent text-gray-500 hover:text-[#111827]'
              }`}
            >
              Spesifikasi Umum
            </button>
            <button
              onClick={() => setActiveTab('ts')}
              className={`pb-2.5 px-3 font-heading text-xs font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'ts'
                  ? 'border-[#ED1C24] text-[#ED1C24]'
                  : 'border-transparent text-gray-500 hover:text-[#111827]'
              }`}
            >
              Parameter Thiele-Small (T/S)
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`pb-2.5 px-3 font-heading text-xs font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'graph'
                  ? 'border-[#ED1C24] text-[#ED1C24]'
                  : 'border-transparent text-gray-500 hover:text-[#111827]'
              }`}
            >
              Kurva Respon Akustik
            </button>
            <button
              onClick={() => setActiveTab('box')}
              className={`pb-2.5 px-3 font-heading text-xs font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'box'
                  ? 'border-[#ED1C24] text-[#ED1C24]'
                  : 'border-transparent text-gray-500 hover:text-[#111827]'
              }`}
            >
              Rekomendasi Boks
            </button>
          </div>

          {/* Tab 1: General Specs */}
          {activeTab === 'specs' && (
            <div className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden">
              <table className="w-full text-xs font-mono">
                <tbody className="divide-y divide-[#E5E7EB]">
                  <tr className="bg-[#F7F7F8]">
                    <td className="px-4 py-3 font-semibold text-gray-600 w-1/2">Diameter Nominal</td>
                    <td className="px-4 py-3 text-[#111827] font-bold">{product.size} ({product.categoryLabel})</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-600">Continuous AES Power Handling</td>
                    <td className="px-4 py-3 text-[#111827] font-bold">{product.powerAes} Watt</td>
                  </tr>
                  <tr className="bg-[#F7F7F8]">
                    <td className="px-4 py-3 font-semibold text-gray-600">Continuous Program Power</td>
                    <td className="px-4 py-3 text-[#111827] font-bold">{product.powerProgram} Watt</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-600">Nominal Impedance</td>
                    <td className="px-4 py-3 text-[#111827] font-bold">{product.impedance} Ohm</td>
                  </tr>
                  <tr className="bg-[#F7F7F8]">
                    <td className="px-4 py-3 font-semibold text-gray-600">Sensitivity (1W / 1m)</td>
                    <td className="px-4 py-3 text-[#111827] font-bold">{product.sensitivity} dB SPL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-600">Frequency Response</td>
                    <td className="px-4 py-3 text-[#111827] font-bold">{product.frequencyRange}</td>
                  </tr>
                  <tr className="bg-[#F7F7F8]">
                    <td className="px-4 py-3 font-semibold text-gray-600">Voice Coil Diameter &amp; Winding</td>
                    <td className="px-4 py-3 text-[#111827] font-bold">{product.voiceCoil} ({product.voiceCoilDiameterMm} mm)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-600">Tipe Magnet Motor</td>
                    <td className="px-4 py-3 text-[#111827] font-bold">{product.magnetType}</td>
                  </tr>
                  <tr className="bg-[#F7F7F8]">
                    <td className="px-4 py-3 font-semibold text-gray-600">Struktur Rangka (Chassis)</td>
                    <td className="px-4 py-3 text-[#111827] font-bold">{product.chassis}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Tab 2: Thiele-Small Parameters */}
          {activeTab === 'ts' && (
            <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span>PARAMETER THIELE-SMALL (HASIL PENGUJIAN ELEKTRO-AKUSTIK)</span>
                <span className="text-[#ED1C24] font-semibold">Toleransi ±5%</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">Fs (Resonant Frequency)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.fs} Hz</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">Re (DC Resistance)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.re} Ω</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">Qts (Total Q-Factor)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.qts || '-'}</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">Qes (Electrical Q)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.qes || '-'}</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">Qms (Mechanical Q)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.qms || '-'}</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">Vas (Equivalent Volume)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.vas ? `${product.thieleSmall.vas} L` : '-'}</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">BL (Motor Factor)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.bl} T-m</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">Mms (Moving Mass)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.mms} g</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">Xmax (Peak Linear Excursion)</span>
                  <span className="font-bold text-base text-[#ED1C24]">{product.thieleSmall.xmax} mm</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">Sd (Effective Cone Area)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.sd} cm²</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">EBP (Efficiency Bandwidth)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.ebp || '-'}</span>
                </div>
                <div className="p-3 bg-[#F7F7F8] rounded border border-[#E5E7EB]">
                  <span className="text-gray-400 block text-[10px]">Efficiency (Half Space)</span>
                  <span className="font-bold text-base text-[#111827]">{product.thieleSmall.efficiency}%</span>
                </div>
              </div>

              {product.thieleSmall.ebp > 0 && (
                <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-[#ED1C24] font-mono">
                  <span className="font-bold">Analisis EBP ({product.thieleSmall.ebp}):</span>{' '}
                  {product.thieleSmall.ebp >= 90
                    ? 'Nilai EBP tinggi (>90) menandakan motor magnet sangat kuat, sangat cocok untuk boks Horn-Loaded (Scooper, Planar, CBS) dan Bass-Reflex konser.'
                    : 'Nilai EBP ideal untuk boks Bass-Reflex ported konvensional dengan respon bass frekuensi rendah yang dalam.'}
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Acoustic Frequency Curve Graph (SVG) */}
          {activeTab === 'graph' && (
            <div className="bg-white rounded-lg border border-[#E5E7EB] p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-gray-500 gap-2">
                <span className="font-bold text-[#111827]">RESPON FREKUENSI 1W/1M &amp; KURVA IMPEDANSI (ON-AXIS)</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-[#ED1C24]">
                    <span className="w-3 h-0.5 bg-[#ED1C24] inline-block"></span> SPL (dB)
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-blue-600">
                    <span className="w-3 h-0.5 bg-blue-600 inline-block"></span> Impedansi (Ω)
                  </span>
                </div>
              </div>

              {/* Realistic Acoustic Graph SVG */}
              <div className="relative w-full h-64 bg-[#111111] rounded border border-[#2E2E33] p-4 flex flex-col justify-between">
                {/* SVG Graphic Area */}
                <svg className="w-full h-full" viewBox="0 0 700 220" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  {[30, 60, 90, 120, 150, 180].map((y) => (
                    <line key={y} x1="40" y1={y} x2="680" y2={y} stroke="#2E2E33" strokeDasharray="3 3" strokeWidth="1" />
                  ))}
                  {[100, 200, 300, 400, 500, 600].map((x) => (
                    <line key={x} x1={x} y1="10" x2={x} y2="190" stroke="#2E2E33" strokeDasharray="3 3" strokeWidth="1" />
                  ))}

                  {/* Impedance Resonance Peak Curve (Blue) */}
                  <path
                    d={
                      product.category === 'sub'
                        ? 'M 40 170 Q 120 160 160 30 Q 200 160 300 165 Q 500 170 680 140'
                        : product.category === 'mid'
                        ? 'M 40 175 Q 180 170 240 40 Q 300 165 500 160 Q 600 150 680 120'
                        : 'M 40 180 Q 220 175 320 50 Q 400 160 550 150 680 130'
                    }
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2.5"
                  />

                  {/* SPL Frequency Curve (Red) */}
                  <path
                    d={
                      product.category === 'sub'
                        ? 'M 40 180 C 100 170 140 70 200 65 C 280 60 350 70 420 85 C 500 110 580 160 680 200'
                        : product.category === 'mid'
                        ? 'M 40 190 C 140 160 220 80 320 70 C 450 65 540 60 620 90 C 650 120 680 180 680 190'
                        : 'M 40 195 C 180 190 280 150 360 65 C 460 60 560 62 640 70 C 660 75 680 90 680 95'
                    }
                    fill="none"
                    stroke="#ED1C24"
                    strokeWidth="3"
                  />
                </svg>

                {/* X-Axis Freq labels */}
                <div className="flex justify-between text-[10px] font-mono text-gray-500 pt-2 border-t border-[#2E2E33]">
                  <span>20 Hz</span>
                  <span>50 Hz</span>
                  <span>100 Hz</span>
                  <span>500 Hz</span>
                  <span>1 kHz</span>
                  <span>5 kHz</span>
                  <span>10 kHz</span>
                  <span>20 kHz</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 font-mono text-center">
                Pengukuran dilakukan di ruang Anechoic Chamber resmi pabrikan P.Audio R&amp;D Center dengan daya 1 Watt @ 1 Meter.
              </p>
            </div>
          )}

          {/* Tab 4: Box Tuning Recommendations */}
          {activeTab === 'box' && (
            <div className="bg-white rounded-lg border border-[#E5E7EB] p-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ED1C24] font-bold">
                <span className="material-symbols-outlined text-[18px]">build</span>
                PANDUAN PEMBUATAN BOKS SPEAKER OLEH SOUND ENGINEER
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="bg-[#F7F7F8] p-4 rounded border border-[#E5E7EB] space-y-2">
                  <span className="text-gray-400 block text-[11px]">TIPE ENCLOSURE DIREKOMENDASIKAN</span>
                  <span className="text-sm font-bold text-[#111827] block">
                    {product.boxRecommendations.type}
                  </span>
                </div>

                <div className="bg-[#F7F7F8] p-4 rounded border border-[#E5E7EB] space-y-2">
                  <span className="text-gray-400 block text-[11px]">VOLUME BOKS (VB) &amp; TUNING (FB)</span>
                  <span className="text-sm font-bold text-[#111827] block">
                    Vb: {product.boxRecommendations.recommendedVb}
                  </span>
                  <span className="text-xs text-gray-600 block">
                    Fb: {product.boxRecommendations.recommendedFb}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-200 text-xs text-[#4B5563] space-y-2">
                <div className="font-bold text-[#111827] font-mono">Catatan Teknis Pemasangan:</div>
                <p className="leading-relaxed">{product.boxRecommendations.usageNote}</p>
                <p className="leading-relaxed">
                  Gunakan bahan multipleks meranti berkualitas tebal minimal 18 mm dengan sistem peredam rockwool/dakron tipis di dinding boks untuk meredam gelombang berdiri (standing waves).
                </p>
              </div>

              <button
                onClick={() => onOpenCalculatorWithDriver(product)}
                className="w-full bg-[#18181B] hover:bg-[#ED1C24] text-white font-mono text-xs font-semibold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">calculate</span>
                <span>Hitung Volume Boks Anda dengan Driver Ini</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-white border-t border-[#E5E7EB] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-gray-500 text-center sm:text-left">
            Kode Produk: <span className="text-[#111827] font-bold">{product.id.toUpperCase()}</span> • Garansi Resmi 1 Tahun
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/6281289902818?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>Pesan / Konsultasi WA</span>
            </a>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-1.5 border border-[#E5E7EB] hover:border-gray-400 bg-white text-[#111827] text-xs font-semibold px-3 py-2.5 rounded transition-colors cursor-pointer"
              title="Cetak lembar spesifikasi teknis"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Cetak Spec</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
