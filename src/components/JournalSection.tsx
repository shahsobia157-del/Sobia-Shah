import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/hospitalData';
import { JournalArticle } from '../types/hospital';
import { ArrowRight, Clock, Calendar, User, X, BookOpen } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-20 md:py-28 bg-white border-t border-[#123F46]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-3">
              <span>Health & Wellness Journal</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#536468]">Clinical Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123F46] tracking-tight [text-wrap:balance]">
              Evidence-Based Medicine & Longevity
            </h2>
            <p className="text-base text-[#536468] mt-3">
              Perspectives written by our practicing physicians on cardiovascular prevention, neuro-resilience, and comprehensive health monitoring.
            </p>
          </div>
        </div>

        {/* 3 Journal Cards Grid (Each with unique image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-[#FAF8F3] rounded-2xl overflow-hidden border border-[#123F46]/10 hover:border-[#C6A66B]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Unique Article Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#EBF1EA]">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-sm text-[11px] font-semibold text-[#123F46] border border-[#123F46]/10">
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-[#536468] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
                      {article.date}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C6A66B]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#123F46] leading-snug mb-3 group-hover:text-[#0D2D32] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#536468] leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read More Bar */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#123F46]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#123F46]/10 flex items-center justify-center text-[#123F46]">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-[#273437] truncate max-w-[140px]">
                      {article.author}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#123F46] group-hover:text-[#0D2D32]">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B] transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FAF8F3] rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-[#123F46]/20 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 text-[#536468] hover:text-[#123F46] rounded-full hover:bg-black/5"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-16/9 rounded-xl overflow-hidden mb-6 border border-[#123F46]/10">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-2">
              <span>{selectedArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#536468]">{selectedArticle.readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#123F46] leading-tight mb-4">
              {selectedArticle.title}
            </h3>

            {/* Author Byline */}
            <div className="p-3 bg-white rounded-lg border border-[#123F46]/10 flex items-center gap-3 mb-6 text-xs text-[#536468]">
              <div className="w-8 h-8 rounded-full bg-[#123F46] text-white flex items-center justify-center font-bold">
                {selectedArticle.author.charAt(4) || 'D'}
              </div>
              <div>
                <span className="font-semibold text-[#123F46] block">{selectedArticle.author}</span>
                <span className="text-[11px] block">{selectedArticle.authorRole}</span>
              </div>
            </div>

            {/* Article Body */}
            <div className="space-y-4 text-sm text-[#273437] leading-relaxed">
              {selectedArticle.fullContent.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#123F46]/10 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-[#123F46] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#0D2D32]"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
