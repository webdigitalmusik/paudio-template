import React, { useState } from 'react';
import { P_AUDIO_FOOTER_LOGO } from '../data/products';

interface FooterProps {
  onOpenCalculator: () => void;
  onFilterCategory: (category: 'all' | 'sub' | 'mid' | 'hf') => void;
  onNavigateBlogList: () => void;
  onNavigateProductList?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCalculator,
  onFilterCategory,
  onNavigateBlogList,
  onNavigateProductList,
}) => {
  const [showPolicyModal, setShowPolicyModal] = useState<string | null>(null);

  return (
    <footer className="w-full bg-[#111111] text-white border-t border-[#2E2E33]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img
            src={P_AUDIO_FOOTER_LOGO}
            alt="P.Audio Official Logo"
            className="h-10 w-auto object-contain bg-white rounded p-1"
          />
          <p className="text-xs text-gray-400 leading-relaxed">
            Penyedia transduser profesional resmi P.Audio di Indonesia untuk sistem tata suara konser, rental lapangan, dan instalasi komersial.
          </p>
          {onNavigateProductList && (
            <button
              onClick={onNavigateProductList}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ED1C24] hover:text-white transition-colors cursor-pointer"
            >
              <span>Lihat Semua Produk P.Audio</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          )}
        </div>

        <div className="space-y-3">
          <div className="font-mono text-xs text-[#ED1C24] uppercase font-semibold">
            Produk Transduser
          </div>
          <ul className="space-y-2 text-xs text-gray-400 font-medium">
            {onNavigateProductList && (
              <li>
                <button
                  onClick={onNavigateProductList}
                  className="hover:text-white text-gray-300 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Katalog Lengkap (Grid &amp; Filter)</span>
                  <span className="text-[10px] font-mono bg-[#25D366]/20 text-[#25D366] px-1 rounded">WA</span>
                </button>
              </li>
            )}
            <li>
              <a 
                href="#katalog" 
                onClick={() => onFilterCategory('sub')}
                className="hover:text-white transition-colors"
              >
                LF Drivers (10" – 21")
              </a>
            </li>
            <li>
              <a 
                href="#katalog" 
                onClick={() => onFilterCategory('hf')}
                className="hover:text-white transition-colors"
              >
                HF Compression Drivers
              </a>
            </li>
            <li>
              <a 
                href="#kategori" 
                className="hover:text-white transition-colors"
              >
                Horns &amp; Constant Directivity
              </a>
            </li>
            <li>
              <a 
                href="#kategori" 
                className="hover:text-white transition-colors"
              >
                Recone Kit &amp; Diafragma Asli
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="font-mono text-xs text-[#ED1C24] uppercase font-semibold">
            Dukungan Teknis &amp; Edukasi
          </div>
          <ul className="space-y-2 text-xs text-gray-400 font-medium">
            <li>
              <button
                onClick={onNavigateBlogList}
                className="hover:text-white text-[#ED1C24] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Blog &amp; Riset Akustik (5)</span>
                <span className="text-[10px] font-mono bg-[#ED1C24]/20 text-[#ED1C24] px-1 rounded">SEO</span>
              </button>
            </li>
            <li>
              <button
                onClick={onNavigateBlogList}
                className="hover:text-white transition-colors text-left text-xs cursor-pointer"
              >
                Parameter Thiele-Small &amp; EBP
              </button>
            </li>
            <li>
              <button 
                onClick={onOpenCalculator} 
                className="hover:text-white transition-colors text-left text-xs cursor-pointer"
              >
                Kalkulator Tuning Enclosure
              </button>
            </li>
            <li>
              <a href="#kualitas" className="hover:text-white transition-colors">
                Sertifikasi Klippel R&amp;D
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/6281289902818?text=Halo%20Admin%20Paudio.id,%20saya%20ingin%20konsultasi%20boks%20speaker"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Konsultasi Boks Speaker
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="font-mono text-xs text-[#ED1C24] uppercase font-semibold">
            Kantor &amp; Distribusi
          </div>
          <div className="text-xs text-gray-400 space-y-1.5 leading-relaxed">
            <p className="text-white font-semibold">P.Audio Distributor Indonesia</p>
            <p>Kawasan Industri Pulogadung, Jakarta Timur, Indonesia</p>
            <p className="text-gray-300 font-mono pt-1">WhatsApp: +62 812-8990-2818</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2E2E33]/80 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 font-mono">
          <div>© 2025 P.Audio Indonesia. All rights reserved. AES2-1984 Compliant.</div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPolicyModal('garansi')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Garansi Resmi
            </button>
            <span>•</span>
            <button
              onClick={() => setShowPolicyModal('syarat')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Syarat Pemesanan
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {showPolicyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#18181B] border border-[#2E2E33] rounded-lg max-w-md w-full p-6 space-y-4 text-white">
            <div className="flex items-center justify-between border-b border-[#2E2E33] pb-3">
              <h4 className="font-heading font-bold text-base">
                {showPolicyModal === 'garansi' ? 'Garansi Resmi P.Audio' : 'Syarat Pemesanan & Pengiriman'}
              </h4>
              <button onClick={() => setShowPolicyModal(null)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              {showPolicyModal === 'garansi'
                ? 'Seluruh produk transduser P.Audio yang didistribusikan oleh kami memiliki stiker hologram keaslian dan garansi cacat produksi pabrik selama 1 tahun (tidak mencakup spool gosong akibat amplifier clipping berlebih atau cone sobek akibat mekanikal).'
                : 'Pemesanan dapat dilakukan langsung melalui tim sales WhatsApp. Kami melayani pengiriman ke seluruh kota di Indonesia dengan packing kayu standar ekspedisi logistik kargo aman.'}
            </p>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowPolicyModal(null)}
                className="bg-[#ED1C24] text-white text-xs font-semibold px-4 py-2 rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
