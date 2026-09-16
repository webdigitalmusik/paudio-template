import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { TransducerProduct } from '../types';
import { updateDocumentSEO } from '../utils/seo';

interface ProductListPageProps {
  onNavigateHome: () => void;
  onNavigateProductDetail: (productId: string) => void;
  onOpenCalculatorWithDriver: (product: TransducerProduct) => void;
}

export const ProductListPage: React.FC<ProductListPageProps> = ({
  onNavigateHome,
  onNavigateProductDetail,
  onOpenCalculatorWithDriver,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const productListItems = PRODUCTS.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: `P.Audio ${p.name}`,
      url: typeof window !== 'undefined' ? `${window.location.origin}/produk/${p.id}` : `https://paudio.id/produk/${p.id}`,
    }));

    const itemListSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Katalog Transduser Loudspeaker P.Audio Indonesia',
      description: 'Daftar lengkap komponen speaker transduser P.Audio original distributor resmi Indonesia.',
      numberOfItems: PRODUCTS.length,
      itemListElement: productListItems,
    };

    updateDocumentSEO({
      title: 'Katalog Produk P.Audio Indonesia - Subwoofer, Mid-Bass & Driver Tweeter',
      description: 'Daftar produk resmi komponen speaker P.Audio: Subwoofer 18 & 21 inch, Mid-Bass Line Array 15 inch, Titanium Compression Driver. Hubungi WhatsApp distributor untuk harga.',
      keywords: [
        'katalog paudio',
        'harga speaker paudio',
        'distributor paudio indonesia',
        'subwoofer 18 inch paudio',
        'driver tweeter paudio',
      ],
      canonicalPath: '/produk',
      jsonLd: [itemListSchema],
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory =
        selectedCategory === 'all'
          ? true
          : selectedCategory === 'sub'
          ? p.category === 'sub'
          : selectedCategory === 'mid'
          ? p.category === 'mid'
          : selectedCategory === 'hf'
          ? p.category === 'hf'
          : true;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.series.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.size.toLowerCase().includes(q) ||
        p.voiceCoil.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-[#F7F7F8] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-gray-500 overflow-x-auto py-1">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#ED1C24] transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">home</span>
            <span>Beranda</span>
          </button>
          <span>/</span>
          <span className="text-[#111827] font-semibold">Katalog Produk</span>
        </nav>

        {/* Page Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <span className="text-[#ED1C24] font-mono text-xs uppercase font-bold tracking-wider">
              // KATALOG RESMI DISTRIBUTOR
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] mt-1">
              Koleksi Transduser P.Audio
            </h1>
            <p className="text-sm text-gray-600 mt-2 max-w-2xl font-sans">
              Pilihan lengkap komponen speaker touring konser, subwoofer lapangan, line array, dan compression driver bergaransi resmi 1 tahun. Klik produk untuk melihat galeri multi-foto dan detail spesifikasi, atau langsung chat WhatsApp untuk penawaran harga.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6281289902818?text=Halo%20Admin%20P.Audio%20Indonesia,%20saya%20mau%20minta%20pricelist%20katalog%20lengkap%20transduser%20speaker%20P.Audio.%20Terima%20kasih."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all hover:scale-102"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Minta Pricelist via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari tipe, ukuran, atau model (cth: SD-18EL, 15 inch, Titanium)..."
                className="w-full bg-[#F7F7F8] border border-gray-300 focus:border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24] pl-10 pr-8 py-2.5 rounded-xl text-xs sm:text-sm font-sans text-gray-800 placeholder-gray-400 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Total Results Counter */}
            <div className="font-mono text-xs text-gray-500 flex items-center justify-between sm:justify-end gap-2">
              <span>Menampilkan:</span>
              <strong className="text-gray-900 bg-gray-100 px-2.5 py-1 rounded-md font-bold">
                {filteredProducts.length} Model
              </strong>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#111827] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Semua Kategori ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('sub')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                selectedCategory === 'sub'
                  ? 'bg-[#ED1C24] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Subwoofer 18" &amp; 21"
            </button>
            <button
              onClick={() => setSelectedCategory('mid')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                selectedCategory === 'mid'
                  ? 'bg-[#ED1C24] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Mid-Bass &amp; Line Array 15"
            </button>
            <button
              onClick={() => setSelectedCategory('hf')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                selectedCategory === 'hf'
                  ? 'bg-[#ED1C24] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Compression Driver / Tweeter
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-12 text-center space-y-3">
            <span className="material-symbols-outlined text-4xl text-gray-400">speaker_notes_off</span>
            <h3 className="font-heading font-bold text-gray-800 text-base">Tidak Ada Produk yang Cocok</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto font-sans">
              Coba gunakan kata kunci lain atau pilih kategori "Semua Kategori".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-mono font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const photoCount = product.images?.length || 1;
              const waText = encodeURIComponent(
                `Halo Admin P.Audio Indonesia, saya tertarik dengan produk:\n\n*Model: P.Audio ${product.name} (${product.size})*\n- Daya: ${product.powerAes}W AES\n- Impedansi: ${product.impedance} Ohm\n- Voice Coil: ${product.voiceCoil}\n\nApakah barang ready stok dan bisa info penawaran harga terbaiknya? Terima kasih.`
              );

              return (
                <div
                  key={product.id}
                  className="bg-white border border-[#E5E7EB] hover:border-gray-400 rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-lg group relative"
                >
                  <div className="space-y-4">
                    {/* Top Badges */}
                    <div className="flex items-center justify-between">
                      <span className="bg-[#111827] text-[#ED1C24] font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                        {product.series}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {photoCount > 1 && (
                          <span className="bg-gray-100 text-gray-600 font-mono text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px]">photo_library</span>
                            {photoCount} Foto
                          </span>
                        )}
                        <span className="bg-[#ED1C24]/10 text-[#ED1C24] font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                          {product.badge}
                        </span>
                      </div>
                    </div>

                    {/* Image Stage */}
                    <div
                      onClick={() => onNavigateProductDetail(product.id)}
                      className="aspect-square bg-[#F7F7F8] rounded-xl p-4 flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-[#F2F3F5] transition-colors relative"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
                      />
                      <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-mono px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Klik Detail
                      </span>
                    </div>

                    {/* Title & Category */}
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-gray-500 uppercase font-semibold">
                          {product.categoryLabel}
                        </span>
                        <span className="font-mono text-xs text-[#ED1C24] font-bold">
                          {product.powerAes}W AES
                        </span>
                      </div>
                      <h2
                        onClick={() => onNavigateProductDetail(product.id)}
                        className="font-heading font-bold text-lg text-[#111827] group-hover:text-[#ED1C24] transition-colors cursor-pointer mt-0.5"
                      >
                        {product.name}
                      </h2>
                    </div>

                    {/* Quick Specs 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-2 bg-[#F9FAFB] p-2.5 rounded-xl font-mono text-[11px] text-gray-700">
                      <div>
                        <span className="text-[10px] text-gray-400 block">Impedansi</span>
                        <strong>{product.impedance} Ohm</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 block">Sensitivitas</span>
                        <strong>{product.sensitivity} dB</strong>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] text-gray-400 block">Voice Coil</span>
                        <span className="truncate block font-semibold text-gray-900">{product.voiceCoil}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dual CTA: Lihat Detail & Direct WhatsApp */}
                  <div className="space-y-2 pt-4 mt-4 border-t border-gray-100">
                    <button
                      onClick={() => onNavigateProductDetail(product.id)}
                      className="w-full bg-[#111827] hover:bg-black text-white text-xs font-mono font-semibold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">visibility</span>
                      <span>Lihat Spesifikasi &amp; Galeri</span>
                    </button>

                    <a
                      href={`https://wa.me/6281289902818?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#1EBE5D] hover:text-white border border-[#25D366]/30 text-xs font-mono font-bold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 text-center"
                    >
                      <span className="material-symbols-outlined text-[16px]">chat</span>
                      <span>Tanya Harga via WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* WhatsApp Sound System Consultation Banner */}
        <div className="bg-gradient-to-r from-[#111111] to-[#1E1E24] text-white rounded-2xl p-6 sm:p-8 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[#ED1C24] font-mono text-xs uppercase font-bold tracking-wider">
              // LAYANAN KONSULTASI GRATIS
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              Butuh Rekomendasi Speaker untuk Proyek Lapangan Anda?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl font-sans">
              Tim engineering P.Audio Indonesia siap membantu menghitung kebutuhan driver, matching power amplifier, rekomendasi skema boks, dan setting crossover DSP audio management.
            </p>
          </div>

          <a
            href="https://wa.me/6281289902818?text=Halo%20Technical%20Support%20P.Audio%20Indonesia,%20saya%20mau%20konsultasi%20pemilihan%20transduser%20speaker%20dan%20skema%20boks%20untuk%20sound%20system%20saya.%20Terima%20kasih."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">support_agent</span>
            <span>Konsultasi Teknis via WA</span>
          </a>
        </div>
      </div>
    </div>
  );
};
