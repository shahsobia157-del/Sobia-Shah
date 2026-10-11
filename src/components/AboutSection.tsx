import React, { useState } from 'react';
import { IMAGES } from '../data/hospitalData';
import { CheckCircle2, ArrowRight, X, Shield, Sparkles, Building2, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Unique Architectural Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#123F46]/10 aspect-4/3 bg-[#EBF1EA]">
              <img
                src={IMAGES.aboutExterior}
                alt="Aurevia Medical Center modern hospital architecture and healing gardens"
                referrerPolicy="no-referrer"
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  imgLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {!imgLoaded && (
                <div className="absolute inset-0 bg-[#EBF1EA] animate-pulse flex items-center justify-center">
                  <span className="text-xs text-[#536468]">Loading campus architecture...</span>
                </div>
              )}
            </div>

            {/* Subtle editorial caption below */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#536468] px-1">
              <span>Main Campus & Wellness Pavilion</span>
              <span className="text-[#C6A66B] font-medium">Design for Healing</span>
            </div>
          </div>

          {/* Right Column: Meaningful Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-4">
              <span>About Aurevia</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#536468]">Our Healthcare Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#123F46] tracking-tight mb-6 [text-wrap:balance]">
              A Sanctuary Where Clinical Rigor Meets Human Kindness
            </h2>

            <p className="text-base sm:text-lg text-[#536468] leading-relaxed mb-6 font-normal">
              Aurevia Medical Center was founded on an uncompromising principle: that modern medicine achieves its highest potential when advanced clinical science is delivered with unhurried empathy and dignity.
            </p>

            <p className="text-sm sm:text-base text-[#536468] leading-relaxed mb-8">
              From our biophilic inpatient recovery suites to our robotic-assisted surgical theaters, every square meter of our campus is engineered to support physiological recovery and reduce patient stress. Our physicians collaborate across 18 specialized departments to formulate unified, patient-tailored care protocols.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-lg border border-[#123F46]/10">
                <CheckCircle2 className="w-5 h-5 text-[#123F46] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#123F46] uppercase tracking-wider">Interdisciplinary Teams</h4>
                  <p className="text-xs text-[#536468] mt-1">Specialists collaborating as one unified care unit</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-lg border border-[#123F46]/10">
                <CheckCircle2 className="w-5 h-5 text-[#123F46] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#123F46] uppercase tracking-wider">Compassionate Privacy</h4>
                  <p className="text-xs text-[#536468] mt-1">Private single-patient suites for serene recovery</p>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#123F46] hover:text-[#0D2D32] transition-colors py-1 group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#123F46]"
            >
              <span>Learn More About Our Standards & Heritage</span>
              <ArrowRight className="w-4 h-4 text-[#C6A66B] transition-transform duration-200 group-hover:translate-x-1" />
            </button>

          </div>

        </div>

      </div>

      {/* Modal: Deep Dive into Hospital Standards */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FAF8F3] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#123F46]/20 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#536468] hover:text-[#123F46] rounded-full hover:bg-black/5"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-2">
              <span>Institutional Overview</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#123F46] mb-4">
              The Aurevia Clinical Heritage & Ethics Charter
            </h3>

            <div className="space-y-4 text-sm text-[#536468] leading-relaxed">
              <p>
                Established with the vision of creating an elevated standard for inpatient and outpatient care, Aurevia Medical Center integrates four foundational pillars:
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2">
                <div className="p-4 bg-white rounded-xl border border-[#123F46]/10 flex gap-3">
                  <Shield className="w-5 h-5 text-[#123F46] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-xs text-[#123F46] uppercase tracking-wider">1. Stringent Quality Benchmarks</h5>
                    <p className="text-xs text-[#536468] mt-1">Our hospital maintains full Joint Commission International (JCI) accreditation and adheres strictly to WHO surgical safety checklists, maintaining infection rates under 0.1% across all suites.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#123F46]/10 flex gap-3">
                  <Building2 className="w-5 h-5 text-[#123F46] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-xs text-[#123F46] uppercase tracking-wider">2. Biophilic Healing Architecture</h5>
                    <p className="text-xs text-[#536468] mt-1">Studies show that daylight exposure, natural acoustic isolation, and green garden views accelerate postoperative discharge by up to 22%. Every wing is oriented toward our central botanical atrium.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#123F46]/10 flex gap-3">
                  <Heart className="w-5 h-5 text-[#123F46] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-xs text-[#123F46] uppercase tracking-wider">3. Patient-Centered Time Stewardship</h5>
                    <p className="text-xs text-[#536468] mt-1">We respect our patients’ time. Outpatient consultations are scheduled with generous durations so no patient ever feels rushed, and diagnostic results are expedited within hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#123F46]/10 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 bg-[#123F46] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#0D2D32]"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
