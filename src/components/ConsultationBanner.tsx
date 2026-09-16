import React from 'react';

interface ConsultationBannerProps {
  onOpenCalculator: () => void;
}

export const ConsultationBanner: React.FC<ConsultationBannerProps> = ({ onOpenCalculator }) => {
  return (
    <section className="w-full bg-[#F0F0F2] py-16 px-6 md:px-12 border-b border-[#E5E7EB]" id="kontak">
      <div className="max-w-5xl mx-auto bg-white border border-[#E5E7EB] rounded-lg p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl text-left">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ED1C24]"></span>
            <span className="font-mono text-xs text-[#ED1C24] font-semibold uppercase">
              LAYANAN TEKNIS AKUSTIK
            </span>
          </div>

          <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#111827]">
            Butuh Rekomendasi Driver untuk Box Anda?
          </h3>

          <p className="text-[#4B5563] text-sm leading-relaxed">
            Konsultasikan parameter Thiele-Small, volume box (Vb), dan pencocokan daya amplifier bersama staf teknis kami melalui WhatsApp resmi.
          </p>

          <div className="pt-1">
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#ED1C24] hover:text-[#D0141C] underline cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>Gunakan Alat Simulasi &amp; Kalkulator Boks Interaktif</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="https://wa.me/6281289902818?text=Halo%20Admin%20Paudio.id,%20saya%20ingin%20konsultasi%20spesifikasi%20komponen%20speaker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Hubungi via WhatsApp</span>
          </a>
          <span className="font-mono text-xs text-[#9CA3AF] text-center">
            +62 812-8990-2818
          </span>
        </div>
      </div>
    </section>
  );
};
