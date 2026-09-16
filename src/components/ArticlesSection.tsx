import React from 'react';
import { TECHNICAL_ARTICLES } from '../data/products';

interface ArticlesSectionProps {
  onNavigateArticle: (slug: string) => void;
  onNavigateBlogList: () => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  onNavigateArticle,
  onNavigateBlogList,
}) => {
  // Show first 3 articles on the homepage preview
  const displayArticles = TECHNICAL_ARTICLES.slice(0, 3);

  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-4 sm:px-6 md:px-12 border-b border-[#E5E7EB]" id="panduan">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[#ED1C24] font-mono text-xs uppercase font-semibold tracking-wider">
              // PANDUAN &amp; RISET TEKNIS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mt-1">
              Artikel &amp; Panduan Box Speaker
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl">
              Wawasan akustik praktis seputar parameter T/S, desain boks subwoofer lapangan, dan manajemen daya limiter DSP.
            </p>
          </div>

          <button
            onClick={onNavigateBlogList}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#ED1C24] hover:text-[#B51017] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>Lihat Semua Artikel ({TECHNICAL_ARTICLES.length})</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigateArticle(article.slug)}
              className="group bg-[#F7F7F8] hover:bg-white border border-[#E5E7EB] hover:border-gray-400 rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between cursor-pointer hover:shadow-md"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
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

                <div className="p-6">
                  <div className="font-mono text-[11px] text-[#9CA3AF] mb-1.5 flex items-center gap-2">
                    <span>{article.datePublished}</span>
                    <span>•</span>
                    <span className="text-gray-600 truncate">{article.category}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#111827] group-hover:text-[#ED1C24] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-2 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 font-mono text-xs text-[#ED1C24] font-semibold flex items-center justify-between border-t border-gray-100/80">
                <span className="flex items-center gap-1">
                  <span>Buka Halaman Artikel</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
                <span className="text-[11px] text-gray-400 font-normal">{article.author.name.split(' ')[0]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

