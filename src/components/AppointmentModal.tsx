import React from 'react';
import { AppointmentSection } from './AppointmentSection';
import { X } from 'lucide-react';
import { AppointmentBookingResult } from '../types/hospital';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSpecialtyId?: string;
  selectedDoctorId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedSpecialtyId,
  selectedDoctorId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative max-w-4xl w-full my-8 bg-[#123F46] rounded-2xl shadow-2xl border border-[#C6A66B]/30 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Embedded Appointment Form */}
        <div className="p-2 sm:p-4">
          <AppointmentSection
            initialSpecialtyId={selectedSpecialtyId}
            initialDoctorId={selectedDoctorId}
            onBookingComplete={(_res: AppointmentBookingResult) => {
              // keep modal open to show confirmation card
            }}
          />
        </div>
      </div>
    </div>
  );
};
