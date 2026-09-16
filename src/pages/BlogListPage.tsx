import React, { useState, useEffect, useMemo } from 'react';
import { TECHNICAL_ARTICLES } from '../data/products';
import { TechnicalArticle } from '../types';
import { updateDocumentSEO } from '../utils/seo';

interface BlogListPageProps {
  onNavigateHome: () => void;
  onNavigateArticle: (slug: string) => void;
  onOpenCalculator: () => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({
  onNavigateHome,
  onNavigateArticle,
  onOpenCalculator,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const set = new Set<string>();
    TECHNICAL_ARTICLES.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return ['Semua', ...Array.from(set)];
  }, []);

  // Update SEO for Blog List Page
  useEffect(() => {
    window.scrollTo(0, 0);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Blog & Panduan Teknis Box Speaker | P.Audio Indonesia',
      description:
        'Koleksi panduan teknis, tips perhitungan parameter Thiele-Small, desain boks subwoofer CBS vs Planar, dan setting limiter DSP amplifier dari P.Audio Indonesia.',
      url: typeof window !== 'undefined' ? `${window.location.origin}/blog` : 'https://paudio.id/blog',
      publisher: {
        '@type': 'Organization',
        name: 'P.Audio Indonesia',
        logo: {
          '@type': 'ImageObject',
          url: 'https://lh3.googleusercontent.com/aida/AEtjO1UGfQy3QyJ-5tP1rKxS63gRkZkWqTfW1a2b3c4d5e6f7g8h9i0j',
        },
      },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: TECHNICAL_ARTICLES.map((article, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: typeof window !== 'undefined' ? `${window.location.origin}/blog/${article.slug}` : `https://paudio.id/blog/${article.slug}`,
          name: article.title,
        })),
      },
    };

    updateDocumentSEO({
      title: 'Blog & Panduan Teknis Box Speaker | P.Audio Indonesia',
      description:
        'Kumpulan artikel teknis, tips perhitungan parameter T/S (EBP, Fs, Xmax), desain boks subwoofer lapangan, dan manajemen daya limiter DSP untuk soundman Indonesia.',
      keywords: [
        'blog speaker lapangan',
        'panduan box speaker paudio',
        'cara setting dsp limiter',
        'perhitungan ebp speaker',
        'desain boks cbs vs planar',
        'transduser paudio indonesia'
      ],
      canonicalPath: '/blog',
      ogType: 'website',
      ogImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80',
      jsonLd,
    });
  }, []);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return TECHNICAL_ARTICLES.filter((article) => {
      const matchCategory =
        selectedCategory === 'Semua' || article.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = TECHNICAL_ARTICLES[0];

  return (
    <div className="w-full bg-[#F7F7F8] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-gray-500">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#ED1C24] transition-colors cursor-pointer flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>Beranda</span>
          </button>
          <span>/</span>
          <span className="text-[#111827] font-semibold">Blog &amp; Panduan Teknis</span>
        </nav>

        {/* Hero Header Section */}
        <div className="bg-[#111111] text-white rounded-xl p-8 sm:p-12 border border-[#2E2E33] relative overflow-hidden shadow-xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#ED1C24]/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ED1C24]/20 border border-[#ED1C24]/40 text-[#ED1C24] text-xs font-mono font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" />
              P.Audio Technical Knowledge Base
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Panduan &amp; Riset Akustik P.Audio Indonesia
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Referensi komprehensif bagi sound engineer, rental audio, dan perakit boks speaker di Indonesia. Pelajari parameter Thiele-Small, kalibrasi limiter DSP, hingga arsitektur magnet transduser.
            </p>

            {/* Live Search Input within Header */}
            <div className="pt-4 max-w-xl">
              <div className="relative flex items-center bg-[#18181B] border border-[#3E3E42] focus-within:border-[#ED1C24] rounded-lg px-4 py-2.5 transition-colors">
                <span className="material-symbols-outlined text-gray-400 mr-2 text-[20px]">search</span>
                <input
                  type="text"
                  placeholder="Cari topik (misal: EBP, Subwoofer 18, Limiter, Neodymium)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-gray-400 hover:text-white text-xs px-1 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#E5E7EB]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-gray-500 hidden sm:inline">
            Menampilkan {filteredArticles.length} artikel
          </span>
        </div>

        {/* Featured Article Card (shown if query is empty or matched) */}
        {!searchQuery && selectedCategory === 'Semua' && (
          <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-7 relative overflow-hidden bg-gray-900 aspect-video lg:aspect-auto">
              <img
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#ED1C24] text-white text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded shadow-md">
                  ARTIKEL UTAMA
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                  <span className="text-[#ED1C24] font-semibold">{featuredArticle.tag}</span>
                  <span>•</span>
                  <span>{featuredArticle.datePublished}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2
                  onClick={() => onNavigateArticle(featuredArticle.slug)}
                  className="font-heading text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#ED1C24] transition-colors cursor-pointer leading-tight"
                >
                  {featuredArticle.title}
                </h2>

                <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-3">
                  {featuredArticle.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#111827]">{featuredArticle.author.name}</p>
                    <p className="text-[10px] text-gray-500">{featuredArticle.author.role}</p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigateArticle(featuredArticle.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#ED1C24] hover:text-[#B51017] transition-colors cursor-pointer"
                >
                  <span>Buka Artikel</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-xl font-bold text-[#111827]">
              {selectedCategory === 'Semua' ? 'Daftar Artikel & Riset Teknis' : `Kategori: ${selectedCategory}`}
            </h3>
            <span className="font-mono text-xs text-gray-500 sm:hidden">
              {filteredArticles.length} artikel
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-12 text-center space-y-4">
              <span className="material-symbols-outlined text-4xl text-gray-400">search_off</span>
              <p className="text-sm font-semibold text-gray-700">Tidak ada artikel yang cocok dengan pencarian "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua');
                }}
                className="text-xs font-mono text-[#ED1C24] hover:underline"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-[#E5E7EB] hover:border-gray-400 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div
                      onClick={() => onNavigateArticle(article.slug)}
                      className="relative overflow-hidden aspect-[16/10] bg-gray-900 cursor-pointer"
                    >
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#111111]/90 backdrop-blur-xs text-white text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                          {article.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="bg-black/75 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Article Content Metadata */}
                    <div className="p-5 space-y-2.5">
                      <div className="text-[11px] font-mono text-gray-400 flex items-center gap-2">
                        <span>{article.datePublished}</span>
                        <span>•</span>
                        <span className="text-gray-600 truncate">{article.category}</span>
                      </div>

                      <h4
                        onClick={() => onNavigateArticle(article.slug)}
                        className="font-heading text-base font-bold text-[#111827] group-hover:text-[#ED1C24] transition-colors leading-snug cursor-pointer line-clamp-2"
                      >
                        {article.title}
                      </h4>

                      <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  {/* Article Footer Card */}
                  <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      {article.author.avatar && (
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      )}
                      <span className="text-[11px] text-gray-600 font-medium truncate max-w-[120px]">
                        {article.author.name}
                      </span>
                    </div>

                    <button
                      onClick={() => onNavigateArticle(article.slug)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#ED1C24] hover:text-[#B51017] transition-colors cursor-pointer"
                    >
                      <span>Baca</span>
                      <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Interactive Callout Banner */}
        <div className="bg-[#18181B] text-white rounded-xl p-6 sm:p-8 border border-[#2E2E33] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-white">
              Ingin Menghitung Volume Enclosure Boks Speaker Anda?
            </h4>
            <p className="text-xs text-gray-400 max-w-xl leading-relaxed">
              Gunakan simulator Helmholtz Resonance interaktif P.Audio untuk menghitung volume boks (Vb), frekuensi tuning (Fb), serta port ventilasi yang presisi berdasarkan parameter T/S.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-[#D0141C] text-white text-xs font-mono font-bold px-4 py-2.5 rounded transition-colors shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">calculate</span>
              <span>Buka Kalkulator Boks</span>
            </button>
            <a
              href="https://wa.me/6281289902818?text=Halo%20Admin%20Paudio.id,%20saya%20membaca%20artikel%20blog%20dan%20ingin%20konsultasi%20transduser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#222226] hover:bg-[#2c2c31] border border-[#3E3E42] text-gray-200 text-xs font-mono px-3.5 py-2.5 rounded transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#25D366]">chat</span>
              <span>Konsultasi Teknis</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
