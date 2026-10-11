import React, { useState } from 'react';
import { DOCTORS } from '../data/hospitalData';
import { Doctor } from '../types/hospital';
import { Calendar, Award, GraduationCap, Globe, X, CheckCircle2, Info } from 'lucide-react';

interface SpecialistsSectionProps {
  onSelectDoctorForBooking: (doctorId: string, specialtyId: string) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({
  onSelectDoctorForBooking,
}) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="py-20 md:py-28 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-3">
              <span>Distinguished Medical Faculty</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#536468]">Clinical Leaders</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123F46] tracking-tight [text-wrap:balance]">
              Meet Our Department Heads
            </h2>
            <p className="text-base text-[#536468] mt-3">
              Leaders in international medical research, surgical innovation, and compassionate bedside care, dedicated to individualized treatment outcomes.
            </p>
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-[#123F46]/10 hover:border-[#C6A66B]/50 transition-all duration-300 flex flex-col group"
            >
              {/* Doctor Portrait */}
              <div className="relative aspect-square overflow-hidden bg-[#EBF1EA]">
                <img
                  src={doc.image}
                  alt={`Portrait of ${doc.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Experience badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-sm border border-[#123F46]/10 text-[11px] font-semibold text-[#123F46]">
                  {doc.experienceYears}+ Yrs Exp
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C6A66B] block mb-1">
                    {doc.specialtyName}
                  </span>
                  <h3 className="text-base font-bold text-[#123F46] leading-snug">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-[#536468] mt-1 line-clamp-2">
                    {doc.title}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#123F46]/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedDoctor(doc)}
                    className="text-xs font-semibold text-[#123F46] hover:text-[#0D2D32] py-1 cursor-pointer focus-visible:outline-hidden"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => onSelectDoctorForBooking(doc.id, doc.specialtyId)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#123F46] hover:bg-[#0D2D32] text-white rounded-xs text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3 h-3 text-[#C6A66B]" />
                    <span>Book</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Fictional Doctor Placeholder Notice */}
        <div className="mt-8 pt-4 border-t border-[#123F46]/10 flex items-center justify-center gap-2 text-xs text-[#536468]">
          <Info className="w-4 h-4 text-[#C6A66B] shrink-0" />
          <span>
            Doctor profiles shown are fictional clinical representations created for the Aurevia Medical Center platform demonstration.
          </span>
        </div>

      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FAF8F3] rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#123F46]/20 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-5 right-5 p-2 text-[#536468] hover:text-[#123F46] rounded-full hover:bg-black/5"
              aria-label="Close doctor profile"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden shrink-0 shadow-md border border-[#123F46]/10">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B]">
                  {selectedDoctor.specialtyName}
                </span>
                <h3 className="text-2xl font-bold text-[#123F46] mt-1">
                  {selectedDoctor.name}
                </h3>
                <p className="text-sm font-medium text-[#536468] mt-0.5">
                  {selectedDoctor.title}
                </p>
                <p className="text-xs text-[#273437] mt-2 font-mono">
                  {selectedDoctor.degrees} · {selectedDoctor.experienceYears} Years Clinical Practice
                </p>
              </div>
            </div>

            <div className="space-y-5 text-sm text-[#536468] leading-relaxed">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#123F46] mb-2">
                  Clinical Biography
                </h4>
                <p className="bg-white p-4 rounded-xl border border-[#123F46]/10 text-xs sm:text-sm text-[#273437]">
                  {selectedDoctor.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#123F46]/10">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#123F46] flex items-center gap-1.5 mb-2.5">
                    <Award className="w-4 h-4 text-[#C6A66B]" /> Board Certifications
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#273437]">
                    {selectedDoctor.boardCertifications.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123F46] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#123F46]/10">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#123F46] flex items-center gap-1.5 mb-2.5">
                    <GraduationCap className="w-4 h-4 text-[#C6A66B]" /> Medical Education
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#273437]">
                    {selectedDoctor.education.map((e, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123F46] shrink-0 mt-0.5" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-[#F3EFE7] rounded-xl border border-[#123F46]/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-semibold text-[#123F46] block">Consultation Days</span>
                  <span className="text-[#536468]">{selectedDoctor.consultationDays.join(', ')}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#123F46] flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-[#C6A66B]" /> Languages Spoken
                  </span>
                  <span className="text-[#536468]">{selectedDoctor.spokenLanguages.join(', ')}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#123F46]/10 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#536468] hover:text-[#123F46]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const docId = selectedDoctor.id;
                  const specId = selectedDoctor.specialtyId;
                  setSelectedDoctor(null);
                  onSelectDoctorForBooking(docId, specId);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#123F46] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#0D2D32]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Schedule Consultation with {selectedDoctor.name.split(',')[0]}</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
