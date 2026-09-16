import React from 'react';
import { PRODUCTS } from '../data/products';
import { TransducerProduct } from '../types';

interface HeroProps {
  onSelectProduct: (product: TransducerProduct) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProduct }) => {
  const sd18el = PRODUCTS.find((p) => p.id === 'sd-18el') || PRODUCTS[1];

  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24 px-6 md:px-12 border-b border-[#2E2E33]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Column */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 bg-[#18181B] border border-[#2E2E33] px-3 py-1 rounded">
            <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse"></span>
            <span className="font-mono text-xs text-gray-300 uppercase tracking-wider font-semibold">
              P.Audio Precision Transducers
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Komponen Loudspeaker <br />
            <span className="text-[#ED1C24]">Profesional.</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
            Distribusi dan suku cadang transduser resmi P.Audio untuk sound engineer, box builder, dan instalasi audio profesional di Indonesia.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ED1C24] hover:bg-[#D0141C] text-white font-semibold text-sm px-7 py-3.5 rounded transition-colors shadow-sm cursor-pointer"
            >
              <span>Katalog Transduser</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
            <a
              href="https://wa.me/6281289902818?text=Halo%20Admin%20Paudio.id,%20saya%20ingin%20konsultasi%20transduser%20speaker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#2E2E33] hover:border-gray-400 bg-[#18181B] text-white font-medium text-sm px-6 py-3.5 rounded transition-colors"
            >
              <span className="material-symbols-outlined text-gray-300 text-[18px]">chat</span>
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Concise Technical Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#2E2E33]/80 w-full max-w-lg">
            <div>
              <div className="font-heading text-2xl font-bold text-white">
                1800<span className="text-[#ED1C24] text-sm font-normal">W</span>
              </div>
              <div className="font-mono text-[11px] text-gray-400 uppercase mt-0.5">
                Continuous AES
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-white">
                99.0<span className="text-[#ED1C24] text-sm font-normal">dB</span>
              </div>
              <div className="font-mono text-[11px] text-gray-400 uppercase mt-0.5">
                Ref 1W / 1m SPL
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-white">100%</div>
              <div className="font-mono text-[11px] text-gray-400 uppercase mt-0.5">
                Original P.Audio
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right Column: Hardware Showcase Card */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <button
            onClick={() => onSelectProduct(sd18el)}
            className="w-full max-w-xl text-left bg-gradient-to-b from-[#18181B] to-[#111111] p-6 rounded-lg border border-[#2E2E33] hover:border-gray-500 transition-all duration-300 group cursor-pointer shadow-2xl relative overflow-hidden"
            title="Klik untuk membuka spesifikasi teknis lengkap SD-18EL"
          >
            {/* Subtle glow highlight on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ED1C24]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ED1C24]/20 transition-all"></div>
            
            <div className="relative w-full overflow-hidden flex items-center justify-center py-4">
              <img
                src={sd18el.image}
                alt="P.Audio Professional Low Frequency Transducer SD-18EL"
                className="w-full max-h-72 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="mt-4 flex items-center justify-between border-t border-[#2E2E33]/80 pt-3 text-xs text-gray-400 font-mono">
              <span className="group-hover:text-white transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]"></span>
                MODEL: SD-18EL SUBWOOFER
              </span>
              <span className="text-[#ED1C24] font-semibold flex items-center gap-1">
                KLIPPEL VERIFIED
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
