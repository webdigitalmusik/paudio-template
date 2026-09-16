import React, { useEffect, useState, useMemo } from 'react';
import { TECHNICAL_ARTICLES, PRODUCTS } from '../data/products';
import { TechnicalArticle, TransducerProduct } from '../types';
import { updateDocumentSEO } from '../utils/seo';

interface BlogDetailPageProps {
  slug: string;
  onNavigateHome: () => void;
  onNavigateBlogList: () => void;
  onNavigateArticle: (slug: string) => void;
  onSelectProduct: (product: TransducerProduct) => void;
  onOpenCalculatorWithDriver: (driver: TransducerProduct) => void;
  onOpenCalculator: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  slug,
  onNavigateHome,
  onNavigateBlogList,
  onNavigateArticle,
  onSelectProduct,
  onOpenCalculatorWithDriver,
  onOpenCalculator,
}) => {
  const [copyToast, setCopyToast] = useState(false);

  const article: TechnicalArticle | undefined = useMemo(() => {
    return TECHNICAL_ARTICLES.find((a) => a.slug === slug || a.id === slug);
  }, [slug]);

  // Related drivers
  const relatedDrivers = useMemo(() => {
    if (!article?.relatedDriverIds) return [];
    return PRODUCTS.filter((p) => article.relatedDriverIds?.includes(p.id));
  }, [article]);

  // Related articles (exclude current)
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return TECHNICAL_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);
  }, [article]);

  // Update SEO for this specific article
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!article) {
      updateDocumentSEO({
        title: 'Artikel Tidak Ditemukan | P.Audio Indonesia',
        description: 'Artikel teknis akustik tidak ditemukan di portal P.Audio Indonesia.',
        canonicalPath: '/blog',
      });
      return;
    }

    const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${article.slug}` : `https://paudio.id/blog/${article.slug}`;

    // Schema.org BlogPosting
    const blogPostingSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl,
      },
      headline: article.title,
      description: article.summary,
      image: [article.heroImage, article.thumbnail],
      datePublished: article.datePublished,
      dateModified: article.dateModified || article.datePublished,
      author: {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.role,
      },
      publisher: {
        '@type': 'Organization',
        name: 'P.Audio Indonesia',
        logo: {
          '@type': 'ImageObject',
          url: 'https://lh3.googleusercontent.com/aida/AEtjO1UGfQy3QyJ-5tP1rKxS63gRkZkWqTfW1a2b3c4d5e6f7g8h9i0j',
        },
      },
      articleSection: article.category,
      keywords: article.seo.keywords.join(', '),
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: typeof window !== 'undefined' ? window.location.origin : 'https://paudio.id',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: typeof window !== 'undefined' ? `${window.location.origin}/blog` : 'https://paudio.id/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: currentUrl,
        },
      ],
    };

    updateDocumentSEO({
      title: article.seo.metaTitle || article.title,
      description: article.seo.metaDescription || article.summary,
      keywords: article.seo.keywords,
      canonicalPath: `/blog/${article.slug}`,
      ogType: 'article',
      ogImage: article.heroImage || article.thumbnail,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      authorName: article.author.name,
      jsonLd: [blogPostingSchema, breadcrumbSchema],
    });
  }, [article]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    if (!article) return;
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = encodeURIComponent(`Baca artikel teknis audio menarik: "${article.title}" dari P.Audio Indonesia: ${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  if (!article) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 text-center">
        <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">article</span>
        <h1 className="font-heading text-2xl font-bold text-gray-900 mb-2">Artikel Tidak Ditemukan</h1>
        <p className="text-sm text-gray-600 mb-6 max-w-md">
          Artikel dengan tautan tersebut mungkin telah dipindahkan atau tautan tidak valid.
        </p>
        <button
          onClick={onNavigateBlogList}
          className="bg-[#ED1C24] text-white px-5 py-2.5 rounded-lg text-xs font-mono font-semibold hover:bg-[#D0141C] transition-colors"
        >
          Kembali ke Daftar Blog
        </button>
      </div>
    );
  }

  return (
    <article className="w-full bg-[#F7F7F8] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-gray-500 overflow-x-auto py-1">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#ED1C24] transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">home</span>
            <span>Beranda</span>
          </button>
          <span>/</span>
          <button
            onClick={onNavigateBlogList}
            className="hover:text-[#ED1C24] transition-colors shrink-0 cursor-pointer"
          >
            Blog &amp; Panduan
          </button>
          <span>/</span>
          <span className="text-[#111827] font-semibold truncate">{article.tag}</span>
        </nav>

        {/* Article Header Card */}
        <header className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="bg-[#ED1C24]/10 text-[#ED1C24] border border-[#ED1C24]/20 text-xs font-mono font-bold px-3 py-1 rounded">
                {article.tag}
              </span>
              <span className="text-xs font-mono text-gray-500">{article.category}</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                <span>{article.datePublished}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans border-l-4 border-[#ED1C24] pl-4 py-1 italic bg-gray-50/50 rounded-r">
            {article.summary}
          </p>

          {/* Author & Share Bar */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {article.author.avatar && (
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
              )}
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#111827]">{article.author.name}</span>
                  <span className="material-symbols-outlined text-[#ED1C24] text-[16px]" title="Penulis Teknis Terverifikasi">
                    verified
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-mono">{article.author.role}</p>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2 relative">
              <button
                onClick={handleShareWhatsApp}
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors shadow-xs cursor-pointer"
                title="Bagikan ke WhatsApp"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>Bagikan</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-mono font-medium px-3 py-2 rounded-lg transition-colors cursor-pointer"
                title="Salin Tautan Artikel"
              >
                <span className="material-symbols-outlined text-[16px]">link</span>
                <span>Salin Link</span>
              </button>

              {copyToast && (
                <div className="absolute right-0 -top-10 bg-[#111111] text-white text-xs font-mono px-3 py-1.5 rounded shadow-lg animate-fade-in flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#25D366] text-[16px]">check_circle</span>
                  <span>Link berhasil disalin!</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Hero Image / Diagram Section */}
        <div className="rounded-2xl overflow-hidden bg-gray-900 border border-gray-200 shadow-sm">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-auto max-h-[480px] object-cover"
          />
          {article.imageCaption && (
            <div className="px-4 py-2.5 bg-gray-900/90 text-gray-300 text-xs font-mono flex items-center gap-2 border-t border-gray-800">
              <span className="material-symbols-outlined text-[16px] text-[#ED1C24]">photo_camera</span>
              <span>{article.imageCaption}</span>
            </div>
          )}
        </div>

        {/* Key Takeaways Box (Sound Engineer Highlight) */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="bg-[#18181B] text-white border border-[#2E2E33] rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
            <div className="flex items-center gap-2 text-[#ED1C24] font-mono text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Poin Kunci untuk Sound Engineer &amp; Box Builder</span>
            </div>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <span className="text-[#ED1C24] font-bold font-mono">0{index + 1}.</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Article Body */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm text-[#111827]">
          {/* Introductory Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-800">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Structured Deep-Dive Sections */}
          {article.sections && article.sections.length > 0 && (
            <div className="space-y-8 pt-4 border-t border-gray-100">
              {article.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
                    {section.heading}
                  </h2>
                  
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed text-gray-700">
                    {section.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Section Callout (Formula, Tip, or Warning) */}
                  {section.callout && (
                    <div
                      className={`p-4 sm:p-5 rounded-xl border font-mono text-xs leading-relaxed space-y-1.5 ${
                        section.callout.type === 'formula'
                          ? 'bg-[#18181B] text-white border-[#3E3E42]'
                          : section.callout.type === 'warning'
                          ? 'bg-red-50 text-red-900 border-red-200'
                          : 'bg-amber-50 text-amber-900 border-amber-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[18px]">
                          {section.callout.type === 'formula'
                            ? 'functions'
                            : section.callout.type === 'warning'
                            ? 'warning'
                            : 'tips_and_updates'}
                        </span>
                        <span>{section.callout.title}</span>
                      </div>
                      <div className="whitespace-pre-line font-sans text-xs sm:text-sm">
                        {section.callout.text}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Interactive Calculator Callout Block within Content */}
          <div className="mt-8 bg-gradient-to-r from-gray-50 to-red-50/40 border border-red-100 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-heading font-bold text-base text-gray-900">
                Mau Menguji Parameter Driver Ini pada Simulator Boks?
              </h3>
              <p className="text-xs text-gray-600 font-sans">
                Simulasikan kurva respon bass, frekuensi tuning port Helmholtz, dan kapasitas liter boks speaker Anda secara gratis.
              </p>
            </div>
            <button
              onClick={onOpenCalculator}
              className="bg-[#ED1C24] hover:bg-[#D0141C] text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg shrink-0 transition-colors shadow-sm cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">calculate</span>
              <span>Buka Kalkulator Boks</span>
            </button>
          </div>
        </div>

        {/* Recommended Transducers Matching This Article */}
        {relatedDrivers.length > 0 && (
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[#ED1C24] font-mono text-xs uppercase font-semibold">
                  // REKOMENDASI TRANSDUSER
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111827]">
                  Driver P.Audio yang Dibahas dalam Artikel Ini
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedDrivers.map((driver) => (
                <div
                  key={driver.id}
                  className="bg-[#F7F7F8] border border-gray-200 hover:border-gray-400 rounded-xl p-4 flex flex-col justify-between transition-colors group"
                >
                  <div className="space-y-3">
                    <div className="aspect-square bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden">
                      <img
                        src={driver.image}
                        alt={driver.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading font-bold text-sm text-[#111827]">{driver.name}</h4>
                        <span className="text-[#ED1C24] font-mono text-xs font-bold">{driver.powerAes}W</span>
                      </div>
                      <p className="text-[11px] text-gray-500 font-mono mt-0.5">
                        {driver.categoryLabel} • {driver.size} • {driver.impedance}Ω
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-gray-200 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(driver)}
                      className="flex-1 bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 text-[11px] font-mono font-semibold py-1.5 rounded text-center transition-colors cursor-pointer"
                    >
                      Lihat Spek
                    </button>
                    <button
                      onClick={() => onOpenCalculatorWithDriver(driver)}
                      className="bg-[#111111] hover:bg-black text-white text-[11px] font-mono font-semibold p-1.5 rounded transition-colors cursor-pointer"
                      title="Hitung Tuning Boks Driver Ini"
                    >
                      <span className="material-symbols-outlined text-[16px] text-[#ED1C24]">calculate</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111827]">
                Artikel Teknis Lainnya
              </h3>
              <button
                onClick={onNavigateBlogList}
                className="text-xs font-mono text-[#ED1C24] hover:underline cursor-pointer"
              >
                Lihat Semua Artikel →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onNavigateArticle(rel.slug)}
                  className="bg-white border border-[#E5E7EB] hover:border-gray-400 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-gray-900">
                      <img
                        src={rel.thumbnail}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 space-y-1.5">
                      <span className="text-[10px] font-mono text-[#ED1C24] font-bold uppercase">
                        {rel.tag}
                      </span>
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-[#111827] group-hover:text-[#ED1C24] transition-colors line-clamp-2 leading-snug">
                        {rel.title}
                      </h4>
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-2 text-[10px] font-mono text-gray-400 flex items-center justify-between">
                    <span>{rel.readTime}</span>
                    <span className="text-[#ED1C24] font-semibold flex items-center">
                      Baca <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back navigation action */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <button
            onClick={onNavigateBlogList}
            className="inline-flex items-center gap-1.5 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 text-xs font-mono font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Kembali ke Daftar Blog</span>
          </button>

          <button
            onClick={onNavigateHome}
            className="text-xs font-mono text-gray-500 hover:text-[#111827] transition-colors cursor-pointer"
          >
            Menuju Beranda Utama
          </button>
        </div>
      </div>
    </article>
  );
};
