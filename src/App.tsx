/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { CatalogSection } from './components/CatalogSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { QualityStandardsSection } from './components/QualityStandardsSection';
import { ConsultationBanner } from './components/ConsultationBanner';
import { ArticlesSection } from './components/ArticlesSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BoxCalculatorModal } from './components/BoxCalculatorModal';
import { BlogListPage } from './pages/BlogListPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ProductListPage } from './pages/ProductListPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { TransducerProduct } from './types';
import { updateDocumentSEO } from './utils/seo';

type AppRoute = 
  | { view: 'home' }
  | { view: 'product-list' }
  | { view: 'product-detail'; productId: string }
  | { view: 'blog-list' }
  | { view: 'blog-detail'; slug: string };

function parseCurrentRoute(): AppRoute {
  if (typeof window === 'undefined') return { view: 'home' };

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const hash = window.location.hash.replace(/^#\/?/, '');

  // 1. Check Product HTML5 paths
  if (pathname.startsWith('/produk/')) {
    const productId = pathname.replace('/produk/', '').trim();
    if (productId) return { view: 'product-detail', productId };
  } else if (pathname === '/produk') {
    return { view: 'product-list' };
  }

  // 2. Check Blog HTML5 paths
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '').trim();
    if (slug) return { view: 'blog-detail', slug };
  } else if (pathname === '/blog') {
    return { view: 'blog-list' };
  }

  // 3. Check hash fallback (e.g., #/produk/c18-650el or #/blog/cara-memilih-driver-18)
  if (hash.startsWith('produk/')) {
    const productId = hash.replace('produk/', '').trim();
    if (productId) return { view: 'product-detail', productId };
  } else if (hash === 'produk') {
    return { view: 'product-list' };
  }

  if (hash.startsWith('blog/')) {
    const slug = hash.replace('blog/', '').trim();
    if (slug) return { view: 'blog-detail', slug };
  } else if (hash === 'blog') {
    return { view: 'blog-list' };
  }

  return { view: 'home' };
}

export default function App() {
  const [route, setRoute] = useState<AppRoute>(parseCurrentRoute);
  const [selectedProduct, setSelectedProduct] = useState<TransducerProduct | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sub' | 'mid' | 'hf'>('all');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorDriver, setCalculatorDriver] = useState<TransducerProduct | null>(null);

  // Synchronize with browser Back / Forward buttons and Hash changes
  useEffect(() => {
    const handleUrlChange = () => {
      setRoute(parseCurrentRoute());
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Set home SEO metadata when viewing homepage
  useEffect(() => {
    if (route.view === 'home') {
      updateDocumentSEO({
        title: 'P.Audio Indonesia - Komponen Loudspeaker Profesional',
        description:
          'Distribusi dan suku cadang transduser resmi P.Audio untuk sound engineer, box builder, dan instalasi audio profesional di Indonesia.',
        keywords: [
          'paudio indonesia',
          'speaker lapangan',
          'transduser profesional',
          'sd 18el paudio',
          'driver horn paudio',
          'bm d750 ii'
        ],
        canonicalPath: '/',
        ogType: 'website',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'P.Audio Indonesia',
          url: typeof window !== 'undefined' ? window.location.origin : 'https://paudio.id',
          logo: 'https://lh3.googleusercontent.com/aida/AEtjO1UGfQy3QyJ-5tP1rKxS63gRkZkWqTfW1a2b3c4d5e6f7g8h9i0j',
          description:
            'Distributor resmi transduser speaker, driver neodymium, tweeter titanium, dan suku cadang P.Audio di Indonesia.',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+62-812-8990-2818',
            contactType: 'customer service',
            areaServed: 'ID',
          },
        },
      });
    }
  }, [route.view]);

  // Route Navigation Handlers
  const handleNavigateHome = () => {
    setRoute({ view: 'home' });
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProductList = () => {
    setRoute({ view: 'product-list' });
    if (window.location.pathname !== '/produk') {
      window.history.pushState({}, '', '/produk');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProductDetail = (productId: string) => {
    setRoute({ view: 'product-detail', productId });
    const targetPath = `/produk/${productId}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateBlogList = () => {
    setRoute({ view: 'blog-list' });
    if (window.location.pathname !== '/blog') {
      window.history.pushState({}, '', '/blog');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateArticle = (slug: string) => {
    setRoute({ view: 'blog-detail', slug });
    const targetPath = `/blog/${slug}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCalculatorWithDriver = (driver: TransducerProduct) => {
    setSelectedProduct(null);
    setCalculatorDriver(driver);
    setIsCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F8] font-sans text-[#111827] flex flex-col selection:bg-[#ED1C24] selection:text-white">
      {/* Top Header */}
      <Header
        onSelectProduct={(product) => setSelectedProduct(product)}
        onOpenCalculator={() => {
          setCalculatorDriver(null);
          setIsCalculatorOpen(true);
        }}
        onNavigateHome={handleNavigateHome}
        onNavigateProductList={handleNavigateProductList}
        onNavigateProductDetail={handleNavigateProductDetail}
        onNavigateBlogList={handleNavigateBlogList}
        currentView={route.view}
      />

      <main className="w-full pt-20 flex-1">
        {route.view === 'home' && (
          <>
            {/* Section 1: Hero */}
            <Hero onSelectProduct={(product) => setSelectedProduct(product)} />

            {/* Section 2: Categories */}
            <CategoriesSection onSelectCategory={(cat) => setSelectedCategory(cat)} />

            {/* Section 3: Catalog */}
            <CatalogSection
              selectedCategory={selectedCategory}
              onCategoryChange={(cat) => setSelectedCategory(cat)}
              onSelectProduct={(product) => setSelectedProduct(product)}
              onNavigateProductDetail={handleNavigateProductDetail}
              onNavigateProductList={handleNavigateProductList}
            />

            {/* Section 4: System Applications */}
            <ApplicationsSection onSelectProduct={(product) => setSelectedProduct(product)} />

            {/* Section 5: Engineering Quality Standards */}
            <QualityStandardsSection />

            {/* Section 6: Acoustic Consultation Banner */}
            <ConsultationBanner
              onOpenCalculator={() => {
                setCalculatorDriver(null);
                setIsCalculatorOpen(true);
              }}
            />

            {/* Section 7: Articles & Knowledge Base with Thumbnails */}
            <ArticlesSection
              onNavigateArticle={handleNavigateArticle}
              onNavigateBlogList={handleNavigateBlogList}
            />
          </>
        )}

        {route.view === 'product-list' && (
          <ProductListPage
            onNavigateHome={handleNavigateHome}
            onNavigateProductDetail={handleNavigateProductDetail}
            onOpenCalculator={() => {
              setCalculatorDriver(null);
              setIsCalculatorOpen(true);
            }}
          />
        )}

        {route.view === 'product-detail' && (
          <ProductDetailPage
            productId={route.productId}
            onNavigateHome={handleNavigateHome}
            onNavigateProductList={handleNavigateProductList}
            onNavigateProductDetail={handleNavigateProductDetail}
            onOpenCalculatorWithDriver={handleOpenCalculatorWithDriver}
          />
        )}

        {route.view === 'blog-list' && (
          <BlogListPage
            onNavigateHome={handleNavigateHome}
            onNavigateArticle={handleNavigateArticle}
            onOpenCalculator={() => {
              setCalculatorDriver(null);
              setIsCalculatorOpen(true);
            }}
          />
        )}

        {route.view === 'blog-detail' && (
          <BlogDetailPage
            slug={route.slug}
            onNavigateHome={handleNavigateHome}
            onNavigateBlogList={handleNavigateBlogList}
            onNavigateArticle={handleNavigateArticle}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onOpenCalculatorWithDriver={handleOpenCalculatorWithDriver}
            onOpenCalculator={() => {
              setCalculatorDriver(null);
              setIsCalculatorOpen(true);
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenCalculator={() => {
          setCalculatorDriver(null);
          setIsCalculatorOpen(true);
        }}
        onFilterCategory={(cat) => {
          setSelectedCategory(cat);
          if (route.view !== 'home') {
            handleNavigateHome();
            setTimeout(() => {
              const el = document.querySelector('#katalog');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }}
        onNavigateBlogList={handleNavigateBlogList}
        onNavigateProductList={handleNavigateProductList}
      />

      {/* Floating Action Quick Access */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        <button
          onClick={() => {
            setCalculatorDriver(null);
            setIsCalculatorOpen(true);
          }}
          className="flex items-center gap-2 bg-[#18181B] hover:bg-[#111111] text-white border border-[#2E2E33] px-3.5 py-2.5 rounded-full text-xs font-mono font-semibold shadow-xl transition-transform hover:scale-105 cursor-pointer"
          title="Buka kalkulator tuning boks speaker"
        >
          <span className="material-symbols-outlined text-[#ED1C24] text-[18px]">calculate</span>
          <span className="hidden sm:inline">Kalkulator Boks</span>
        </button>

        <a
          href="https://wa.me/6281289902818?text=Halo%20Admin%20Paudio.id,%20saya%20ingin%20tanya%20produk%20dan%20harga"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-2xl transition-transform hover:scale-110"
          title="Chat WhatsApp P.Audio Indonesia"
          aria-label="Chat WhatsApp P.Audio Indonesia"
        >
          <span className="material-symbols-outlined text-[26px]">chat</span>
        </a>
      </div>

      {/* Detailed Technical Specification Sheet Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenCalculatorWithDriver={handleOpenCalculatorWithDriver}
        onNavigateProductDetail={handleNavigateProductDetail}
      />

      {/* Interactive Box Tuning Calculator Modal */}
      {isCalculatorOpen && (
        <BoxCalculatorModal
          initialDriver={calculatorDriver}
          onClose={() => setIsCalculatorOpen(false)}
          onSelectProduct={(p) => {
            setIsCalculatorOpen(false);
            setSelectedProduct(p);
          }}
        />
      )}
    </div>
  );
}
