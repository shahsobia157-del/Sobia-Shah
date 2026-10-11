import React, { useState } from 'react';
import { SPECIALTIES } from '../data/hospitalData';
import { Specialty } from '../types/hospital';
import {
  HeartPulse,
  Brain,
  Activity,
  Baby,
  Sparkles,
  HeartHandshake,
  ShieldAlert,
  ScanLine,
  ArrowRight,
  X,
  Calendar,
  CheckCircle2,
  MapPin,
  PhoneCall
} from 'lucide-react';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking: (specialtyId: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForBooking,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  const getSpecialtyIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-[#123F46]" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#123F46]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#123F46]" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-[#123F46]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#123F46]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#123F46]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#123F46]" />;
      case 'ScanLine':
        return <ScanLine className="w-6 h-6 text-[#123F46]" />;
      default:
        return <Activity className="w-6 h-6 text-[#123F46]" />;
    }
  };

  return (
    <section id="specialties" className="py-20 md:py-28 bg-white border-t border-[#123F46]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-3">
              <span>Centers of Clinical Excellence</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#536468]">Subspecialized Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123F46] tracking-tight [text-wrap:balance]">
              Comprehensive Medical Specialties
            </h2>
            <p className="text-base text-[#536468] mt-3">
              Eight state-of-the-art departments staffed by distinguished faculty physicians, utilizing the latest therapeutic modalities and medical technology.
            </p>
          </div>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              onClick={() => setSelectedSpecialty(spec)}
              className="group p-6 rounded-xl bg-[#FAF8F3] hover:bg-[#FAF8F3]/60 border border-[#123F46]/10 hover:border-[#C6A66B]/50 transition-all duration-200 flex flex-col justify-between cursor-pointer hover:shadow-lg relative overflow-hidden"
            >
              {/* Subtle top indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C6A66B] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-white border border-[#123F46]/10 flex items-center justify-center mb-5 group-hover:bg-[#123F46]/5 transition-colors">
                  {getSpecialtyIcon(spec.iconName)}
                </div>

                <h3 className="text-lg font-bold text-[#123F46] mb-2 group-hover:text-[#0D2D32]">
                  {spec.name}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#536468] leading-relaxed line-clamp-3 mb-4">
                  {spec.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[#123F46]/5 flex items-center justify-between text-xs font-semibold text-[#123F46]">
                <span>Explore Department</span>
                <ArrowRight className="w-4 h-4 text-[#C6A66B] transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Specialty Detail Modal */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FAF8F3] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#123F46]/20 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedSpecialty(null)}
              className="absolute top-5 right-5 p-2 text-[#536468] hover:text-[#123F46] rounded-full hover:bg-black/5"
              aria-label="Close specialty details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white border border-[#123F46]/10 flex items-center justify-center">
                {getSpecialtyIcon(selectedSpecialty.iconName)}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B]">
                  Department Profile
                </span>
                <h3 className="text-2xl font-bold text-[#123F46]">
                  {selectedSpecialty.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#536468] leading-relaxed mb-6">
              {selectedSpecialty.fullDescription}
            </p>

            {/* Department Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#123F46] mb-3">
                Key Clinical Procedures & Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedSpecialty.treatments.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 bg-white rounded-md border border-[#123F46]/10 text-xs text-[#273437]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#123F46] shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Details */}
            <div className="p-4 bg-[#F3EFE7] rounded-xl border border-[#123F46]/10 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-xs text-[#536468]">
              <div>
                <span className="font-semibold text-[#123F46] block">Department Head</span>
                <span className="text-[11px] mt-0.5 block">{selectedSpecialty.headPhysician}</span>
              </div>
              <div>
                <span className="font-semibold text-[#123F46] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C6A66B]" /> Location
                </span>
                <span className="text-[11px] mt-0.5 block">{selectedSpecialty.departmentFloor}</span>
              </div>
              <div>
                <span className="font-semibold text-[#123F46] flex items-center gap-1">
                  <PhoneCall className="w-3 h-3 text-[#C6A66B]" /> Contact
                </span>
                <span className="text-[11px] mt-0.5 block">{selectedSpecialty.contactExtension}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#123F46]/10">
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#536468] hover:text-[#123F46] rounded-sm"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const specId = selectedSpecialty.id;
                  setSelectedSpecialty(null);
                  onSelectSpecialtyForBooking(specId);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#123F46] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#0D2D32]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Book Appointment in this Department</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
