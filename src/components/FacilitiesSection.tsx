import React, { useState } from 'react';
import { FACILITIES } from '../data/hospitalData';
import { Facility } from '../types/hospital';
import { CheckCircle2, BedDouble, Scan, Stethoscope, Maximize2, X } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(FACILITIES[0].id);
  const [lightboxFacility, setLightboxFacility] = useState<Facility | null>(null);

  const currentFacility = FACILITIES.find((f) => f.id === activeTab) || FACILITIES[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Patient Rooms':
        return <BedDouble className="w-4 h-4" />;
      case 'Diagnostic Centers':
        return <Scan className="w-4 h-4" />;
      case 'Surgical Suites':
        return <Stethoscope className="w-4 h-4" />;
      default:
        return <BedDouble className="w-4 h-4" />;
    }
  };

  return (
    <section id="facilities" className="py-20 md:py-28 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-3">
              <span>World-Class Infrastructure</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#536468]">Campus Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123F46] tracking-tight [text-wrap:balance]">
              Designed for Physiological & Mental Healing
            </h2>
            <p className="text-base text-[#536468] mt-3">
              Explore our patient suites, robotic operating rooms, and calming diagnostic pavilions engineered to eliminate clinical anxiety.
            </p>
          </div>
        </div>

        {/* Facility Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#123F46]/10 scrollbar-none">
          {FACILITIES.map((facility) => {
            const isActive = facility.id === activeTab;
            return (
              <button
                key={facility.id}
                onClick={() => setActiveTab(facility.id)}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-150 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#123F46] text-white shadow-xs'
                    : 'bg-white text-[#273437] hover:bg-[#F3EFE7] border border-[#123F46]/10'
                }`}
              >
                {getCategoryIcon(facility.category)}
                <span>{facility.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Facility Spotlight Showcase */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#123F46]/10 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Photograph with Lightbox Action */}
          <div className="lg:col-span-7 relative group aspect-4/3 lg:aspect-auto overflow-hidden bg-[#EBF1EA]">
            <img
              src={currentFacility.image}
              alt={currentFacility.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <button
              onClick={() => setLightboxFacility(currentFacility)}
              className="absolute top-4 right-4 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-xs transition-colors"
              title="Expand High-Resolution Image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-sm text-xs font-semibold text-[#123F46] border border-[#123F46]/10">
              {currentFacility.capacity}
            </div>
          </div>

          {/* Right Column: Facility Architectural Specs & Features */}
          <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-2 block">
                {currentFacility.category}
              </span>
              <h3 className="text-2xl font-bold text-[#123F46] mb-3">
                {currentFacility.title}
              </h3>
              <p className="text-sm text-[#536468] leading-relaxed mb-6">
                {currentFacility.fullDesc}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#123F46]">
                  Architectural & Environmental Specifications
                </h4>
                {currentFacility.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#273437]">
                    <CheckCircle2 className="w-4 h-4 text-[#123F46] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#123F46]/10 flex items-center justify-between text-xs text-[#536468]">
              <span>Infection Prevention: ISO Class 5 Cleanroom</span>
              <span className="text-[#C6A66B] font-semibold">24/7 Monitored</span>
            </div>
          </div>

        </div>

      </div>

      {/* Image Lightbox Modal */}
      {lightboxFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxFacility(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#C6A66B] p-2"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxFacility.image}
              alt={lightboxFacility.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-3 text-center text-white text-sm">
              <span className="font-bold">{lightboxFacility.title}</span>
              <span className="text-white/70 ml-2">· {lightboxFacility.capacity}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
