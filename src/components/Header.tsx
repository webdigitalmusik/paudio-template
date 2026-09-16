import React, { useState } from 'react';
import { P_AUDIO_LOGO, PRODUCTS } from '../data/products';
import { TransducerProduct } from '../types';

interface HeaderProps {
  onSelectProduct: (product: TransducerProduct) => void;
  onOpenCalculator: () => void;
  onNavigateHome: () => void;
  onNavigateBlogList: () => void;
  onNavigateProductList?: () => void;
  onNavigateProductDetail?: (productId: string) => void;
  currentView: 'home' | 'product-list' | 'product-detail' | 'blog-list' | 'blog-detail';
}

export const Header: React.FC<HeaderProps> = ({
  onSelectProduct,
  onOpenCalculator,
  onNavigateHome,
  onNavigateBlogList,
  onNavigateProductList,
  onNavigateProductDetail,
  currentView,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavAnchor = (hash: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductClick = (product: TransducerProduct) => {
    setShowSearchDropdown(false);
    setSearchQuery('');
    setMobileMenuOpen(false);
    if (onNavigateProductDetail) {
      onNavigateProductDetail(product.id);
    } else {
      onSelectProduct(product);
    }
  };

  const filteredProducts = searchQuery.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.size.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#111111]/95 backdrop-blur-md border-b border-[#2E2E33]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-3 sm:gap-4 group shrink-0 text-left cursor-pointer border-none bg-transparent p-0"
        >
          <img
            src={P_AUDIO_LOGO}
            alt="P.Audio Official Logo"
            className="h-10 sm:h-11 w-auto object-contain bg-white rounded p-1 shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-white text-base sm:text-lg tracking-tight leading-none group-hover:text-[#ED1C24] transition-colors">
              P.AUDIO
            </span>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">
              Official Distributor ID
            </span>
          </div>
        </button>

        {/* Main Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
          <button
            onClick={() => {
              if (onNavigateProductList) {
                onNavigateProductList();
              } else {
                handleNavAnchor('#katalog');
              }
            }}
            className={`transition-colors cursor-pointer font-medium ${
              currentView === 'product-list' || currentView === 'product-detail'
                ? 'text-[#ED1C24] font-semibold border-b-2 border-[#ED1C24] pb-0.5'
                : 'text-gray-300 hover:text-[#ED1C24]'
            }`}
          >
            Katalog Produk
          </button>
          <button
            onClick={() => handleNavAnchor('#kategori')}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Kategori
          </button>
          <button
            onClick={() => handleNavAnchor('#aplikasi')}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Aplikasi
          </button>
          <button
            onClick={() => handleNavAnchor('#kualitas')}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Standar Mutu
          </button>
          <button
            onClick={onNavigateBlogList}
            className={`flex items-center gap-1 transition-colors cursor-pointer font-semibold ${
              currentView === 'blog-list' || currentView === 'blog-detail'
                ? 'text-[#ED1C24] border-b-2 border-[#ED1C24] pb-0.5'
                : 'text-gray-300 hover:text-[#ED1C24]'
            }`}
          >
            <span>Blog &amp; Panduan</span>
            <span className="bg-[#ED1C24]/20 text-[#ED1C24] text-[10px] font-mono px-1.5 py-0.2 rounded font-bold">
              SEO
            </span>
          </button>
          <button
            onClick={onOpenCalculator}
            className="text-xs font-mono font-medium text-gray-300 hover:text-[#ED1C24] flex items-center gap-1.5 transition-colors cursor-pointer ml-1"
          >
            <span className="material-symbols-outlined text-[16px] text-[#ED1C24]">calculate</span>
            <span>Kalkulator Boks</span>
          </button>
        </nav>

        {/* Action & Search */}
        <div className="flex items-center gap-3">
          {/* Live Search Input with Dropdown */}
          <div className="relative hidden md:block w-56 lg:w-64">
            <div className="flex items-center bg-[#18181B] border border-[#2E2E33] focus-within:border-[#ED1C24] rounded px-3 py-1.5 transition-colors">
              <span className="material-symbols-outlined text-gray-400 text-[18px] mr-2">search</span>
              <input
                type="text"
                placeholder="Cari model komponen..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                className="w-full bg-transparent border-none p-0 text-xs font-sans text-white focus:outline-none placeholder-gray-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-gray-400 hover:text-white text-xs px-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Live Search Result Dropdown */}
            {showSearchDropdown && searchQuery.trim() !== '' && (
              <div 
                className="absolute left-0 right-0 top-full mt-2 bg-[#18181B] border border-[#2E2E33] rounded shadow-2xl overflow-hidden z-50 max-h-72 overflow-y-auto"
                onMouseLeave={() => setShowSearchDropdown(false)}
              >
                {filteredProducts.length > 0 ? (
                  <div className="divide-y divide-[#2E2E33]">
                    {filteredProducts.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleProductClick(p)}
                        className="w-full px-3 py-2.5 flex items-center gap-3 hover:bg-[#222226] text-left transition-colors cursor-pointer"
                      >
                        <img src={p.image} alt={p.name} className="w-8 h-8 object-contain bg-white/5 rounded p-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-heading font-bold text-xs text-white truncate">{p.name}</span>
                            <span className="font-mono text-[10px] text-[#ED1C24] font-semibold">{p.powerAes}W</span>
                          </div>
                          <div className="font-mono text-[10px] text-gray-400 truncate">
                            {p.categoryLabel} • {p.size} • {p.impedance}Ω
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-3 text-xs text-gray-400 text-center font-mono">
                    Model "{searchQuery}" tidak ditemukan
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Contact / Consultation Button */}
          <a
            href="https://wa.me/6281289902818?text=Halo%20Admin%20Paudio.id,%20saya%20ingin%20konsultasi%20spesifikasi%20komponen%20speaker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#ED1C24] hover:bg-[#D0141C] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded transition-all duration-150 shadow-sm shrink-0"
          >
            <span>Kontak / Konsultasi</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#18181B] border-b border-[#2E2E33] px-6 py-4 space-y-3">
          <div className="flex items-center bg-[#111111] border border-[#2E2E33] rounded px-3 py-2 mb-3">
            <span className="material-symbols-outlined text-gray-400 text-[18px] mr-2">search</span>
            <input
              type="text"
              placeholder="Cari model komponen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none p-0 text-xs font-sans text-white focus:outline-none placeholder-gray-500"
            />
          </div>

          {searchQuery && filteredProducts.length > 0 && (
            <div className="border border-[#2E2E33] rounded divide-y divide-[#2E2E33] mb-3 bg-[#111111]">
              {filteredProducts.map(p => (
                <button
                  key={p.id}
                  onClick={() => handleProductClick(p)}
                  className="w-full p-2.5 flex items-center justify-between text-left text-xs text-white hover:bg-white/5"
                >
                  <span className="font-heading font-bold">{p.name}</span>
                  <span className="text-[#ED1C24] font-mono text-[11px]">{p.powerAes}W</span>
                </button>
              ))}
            </div>
          )}

          <nav className="flex flex-col space-y-2 text-sm text-gray-300 font-medium">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateProductList) {
                  onNavigateProductList();
                } else {
                  handleNavAnchor('#katalog');
                }
              }}
              className="py-1.5 text-left text-white font-semibold flex items-center justify-between"
            >
              <span>Katalog Semua Produk</span>
              <span className="text-xs text-[#ED1C24] font-mono">Buka →</span>
            </button>
            <button
              onClick={() => handleNavAnchor('#kategori')}
              className="py-1.5 text-left hover:text-white"
            >
              Kategori
            </button>
            <button
              onClick={() => handleNavAnchor('#aplikasi')}
              className="py-1.5 text-left hover:text-white"
            >
              Aplikasi
            </button>
            <button
              onClick={() => handleNavAnchor('#kualitas')}
              className="py-1.5 text-left hover:text-white"
            >
              Standar Mutu
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateBlogList();
              }}
              className="py-1.5 text-left text-white font-semibold flex items-center justify-between"
            >
              <span>Blog &amp; Panduan Teknis</span>
              <span className="bg-[#ED1C24] text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                SEO
              </span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="py-1.5 text-left text-[#ED1C24] font-semibold flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span>Kalkulator Boks Speaker</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
