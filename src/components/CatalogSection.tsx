import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { TransducerProduct } from '../types';

interface CatalogSectionProps {
  selectedCategory: 'all' | 'sub' | 'mid' | 'hf';
  onCategoryChange: (category: 'all' | 'sub' | 'mid' | 'hf') => void;
  onSelectProduct: (product: TransducerProduct) => void;
  onNavigateProductDetail?: (productId: string) => void;
  onNavigateProductList?: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  selectedCategory,
  onCategoryChange,
  onSelectProduct,
  onNavigateProductDetail,
  onNavigateProductList,
}) => {
  const [sortOption, setSortOption] = useState<'default' | 'power-desc' | 'sens-desc'>('default');

  const filteredProducts = PRODUCTS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  }).sort((a, b) => {
    if (sortOption === 'power-desc') return b.powerAes - a.powerAes;
    if (sortOption === 'sens-desc') return b.sensitivity - a.sensitivity;
    return 0;
  });

  return (
    <section className="w-full bg-[#F7F7F8] py-20 px-6 md:px-12 border-b border-[#E5E7EB]" id="katalog">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#ED1C24] font-mono text-xs uppercase font-semibold tracking-wider">
              // KATALOG UNGGULAN
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#111827] mt-1">
              Transduser Paling Banyak Dipakai
            </h2>
            <p className="text-xs text-gray-500 font-mono mt-1">
              Komponen loudspeaker standar touring konser &amp; panggung lapangan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onNavigateProductList && (
              <button
                onClick={onNavigateProductList}
                className="bg-white border border-gray-300 hover:border-[#ED1C24] hover:text-[#ED1C24] text-gray-800 text-xs font-mono font-semibold px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1"
              >
                <span>Buka Katalog Lengkap</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </button>
            )}

            {/* Filter Navigation Tabs */}
            <div className="flex items-center gap-1.5 bg-[#F0F0F2] p-1 rounded border border-[#E5E7EB]">
              <button
                onClick={() => onCategoryChange('all')}
                className={`font-mono text-xs px-3 py-1.5 rounded transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-white text-[#111827] font-semibold shadow-sm'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => onCategoryChange('sub')}
                className={`font-mono text-xs px-3 py-1.5 rounded transition-all cursor-pointer ${
                  selectedCategory === 'sub'
                    ? 'bg-white text-[#111827] font-semibold shadow-sm'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                Subwoofer
              </button>
              <button
                onClick={() => onCategoryChange('mid')}
                className={`font-mono text-xs px-3 py-1.5 rounded transition-all cursor-pointer ${
                  selectedCategory === 'mid'
                    ? 'bg-white text-[#111827] font-semibold shadow-sm'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                Mid-Bass
              </button>
              <button
                onClick={() => onCategoryChange('hf')}
                className={`font-mono text-xs px-3 py-1.5 rounded transition-all cursor-pointer ${
                  selectedCategory === 'hf'
                    ? 'bg-white text-[#111827] font-semibold shadow-sm'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                Compression
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-[#F0F0F2] px-2.5 py-1.5 rounded border border-[#E5E7EB] text-xs font-mono">
              <span className="text-[#9CA3AF]">Urutkan:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                aria-label="Urutkan komponen"
                className="bg-transparent text-[#111827] font-semibold focus:outline-none cursor-pointer"
              >
                <option value="default">Rekomendasi</option>
                <option value="power-desc">Daya (Watt) Tertinggi</option>
                <option value="sens-desc">Sensitivitas (dB) Tertinggi</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const photoCount = product.images?.length || 1;
            const waText = encodeURIComponent(
              `Halo Admin P.Audio Indonesia, saya ingin cek ketersediaan stok & harga resmi untuk produk:\n\n*Model: P.Audio ${product.name} (${product.size})*\n- Daya: ${product.powerAes}W AES\n- Impedansi: ${product.impedance} Ohm\n- Voice Coil: ${product.voiceCoil}\n\nApakah stok ready dan bisa info penawaran harga terbaiknya? Terima kasih.`
            );

            return (
              <div
                key={product.id}
                className="bg-white border border-[#E5E7EB] hover:border-gray-400 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 group hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-[#E5E7EB]">
                    <span className="bg-gray-100 text-[#111827] px-2 py-0.5 rounded font-semibold">
                      {product.badge}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {photoCount > 1 && (
                        <span className="text-[10px] text-gray-500 bg-gray-50 border border-gray-200 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[11px]">photo_camera</span>
                          {photoCount}
                        </span>
                      )}
                      <span className="text-[#ED1C24] font-semibold">
                        {product.series}
                      </span>
                    </div>
                  </div>

                  <div 
                    onClick={() => {
                      if (onNavigateProductDetail) {
                        onNavigateProductDetail(product.id);
                      } else {
                        onSelectProduct(product);
                      }
                    }}
                    className="w-full h-44 bg-[#F0F0F2] rounded my-3 flex items-center justify-center p-3 cursor-pointer overflow-hidden relative"
                  >
                    <img
                      src={product.image}
                      alt={`P.Audio ${product.name}`}
                      className="max-h-full object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                    {photoCount > 1 && (
                      <span className="absolute bottom-2 right-2 bg-black/65 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                        +{photoCount - 1} Foto
                      </span>
                    )}
                  </div>

                  <h3 
                    onClick={() => {
                      if (onNavigateProductDetail) {
                        onNavigateProductDetail(product.id);
                      } else {
                        onSelectProduct(product);
                      }
                    }}
                    className="font-heading text-lg font-bold text-[#111827] group-hover:text-[#ED1C24] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#4B5563] mb-4 line-clamp-1">
                    {product.description.split('.')[0]}
                  </p>

                  {/* Clean Spec Matrix Table */}
                  <div className="bg-[#F7F7F8] rounded p-3 text-xs space-y-1.5 font-mono border border-[#E5E7EB]">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Daya (AES):</span>
                      <span className="font-semibold text-[#111827]">{product.powerAes} Watt</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Impedansi:</span>
                      <span className="font-semibold text-[#111827]">{product.impedance} Ohm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Sensitivitas:</span>
                      <span className="font-semibold text-[#111827]">{product.sensitivity.toFixed(1)} dB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Voice Coil:</span>
                      <span className="font-semibold text-[#111827]">{product.voiceCoil}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => {
                      if (onNavigateProductDetail) {
                        onNavigateProductDetail(product.id);
                      } else {
                        onSelectProduct(product);
                      }
                    }}
                    className="w-full bg-[#18181B] hover:bg-black text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Lihat Detail &amp; Foto</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>

                  <a
                    href={`https://wa.me/6281289902818?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#1EBE5D] hover:text-white border border-[#25D366]/30 text-xs font-mono font-bold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1 text-center"
                  >
                    <span className="material-symbols-outlined text-[15px]">chat</span>
                    <span>Tanya via WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
