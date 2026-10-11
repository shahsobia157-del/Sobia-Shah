import React, { useState, useEffect } from 'react';
import { SPECIALTIES, DOCTORS } from '../data/hospitalData';
import { AppointmentFormData, AppointmentBookingResult } from '../types/hospital';
import {
  Calendar,
  User,
  Mail,
  Phone,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  Info,
  RotateCcw
} from 'lucide-react';

interface AppointmentSectionProps {
  initialSpecialtyId?: string;
  initialDoctorId?: string;
  onBookingComplete?: (result: AppointmentBookingResult) => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialSpecialtyId,
  initialDoctorId,
  onBookingComplete,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    specialtyId: initialSpecialtyId || 'cardiology',
    doctorId: initialDoctorId || '',
    preferredDate: '',
    preferredTime: '09:30 AM',
    visitType: 'consultation',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<AppointmentBookingResult | null>(null);

  // Sync external props if selected from Doctor or Specialty cards
  useEffect(() => {
    if (initialSpecialtyId) {
      setFormData((prev) => ({ ...prev, specialtyId: initialSpecialtyId }));
    }
  }, [initialSpecialtyId]);

  useEffect(() => {
    if (initialDoctorId) {
      setFormData((prev) => ({ ...prev, doctorId: initialDoctorId }));
    }
  }, [initialDoctorId]);

  // Filter available doctors for the chosen specialty
  const availableDoctors = DOCTORS.filter(
    (d) => d.specialtyId === formData.specialtyId
  );

  // Auto-set min date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your legal full name (at least 3 letters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid contact email address.';
    }

    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please provide a valid contact phone number (e.g. 555-0199).';
    }

    if (!formData.specialtyId) {
      newErrors.specialtyId = 'Please select a clinical specialty.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred consultation date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clinical triage intake transmission
    setTimeout(() => {
      const generatedId = `AUR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const result: AppointmentBookingResult = {
        ...formData,
        bookingId: generatedId,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
        status: 'Pending Review',
      };
      setIsSubmitting(false);
      setBookingResult(result);
      if (onBookingComplete) {
        onBookingComplete(result);
      }
    }, 800);
  };

  const handleReset = () => {
    setBookingResult(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      specialtyId: 'cardiology',
      doctorId: '',
      preferredDate: '',
      preferredTime: '09:30 AM',
      visitType: 'consultation',
      notes: '',
    });
    setErrors({});
  };

  const selectedSpecialtyName =
    SPECIALTIES.find((s) => s.id === formData.specialtyId)?.name || 'General Specialty';
  const selectedDoctorName =
    DOCTORS.find((d) => d.id === formData.doctorId)?.name || 'Next Available Department Specialist';

  return (
    <section id="appointment" className="py-20 md:py-28 bg-[#123F46] text-white relative overflow-hidden">
      {/* Subtle organic light accent background */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#C6A66B]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#A9B9A7]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Scheduling Guidelines */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-3">
              <span>Concierge Scheduling</span>
              <span aria-hidden="true">·</span>
              <span className="text-white/60">Direct Intake</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 [text-wrap:balance]">
              Request Your Medical Consultation
            </h2>

            <p className="text-base text-white/80 leading-relaxed mb-8">
              Experience seamless priority scheduling. Our patient access coordinator will contact you to verify details and coordinate medical records prior to your visit.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Rapid Confirmation</h4>
                  <p className="text-xs text-white/70 mt-0.5">Online requests receive direct nursing triage coordination within 2 business hours.</p>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                <Stethoscope className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Specialist Access</h4>
                  <p className="text-xs text-white/70 mt-0.5">Choose your preferred department or consult with our senior medical directors.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#0D2D32] rounded-xl border border-[#C6A66B]/30 text-xs text-white/70">
              <p className="font-semibold text-[#C6A66B] mb-1">Notice for Emergency Patients:</p>
              <p>
                If you are experiencing severe chest pain, shortness of breath, or neurological symptoms, please do not use this form. Call 911 or proceed immediately to the Aurevia 24/7 Emergency Pavilion.
              </p>
            </div>
          </div>

          {/* Right Column: Accessible Booking Form or Confirmed State */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F3] text-[#273437] rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#C6A66B]/20">
              
              {bookingResult ? (
                /* Success Submission State (Honest & Informative, not pretending booking is final backend) */
                <div className="animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#123F46] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#C6A66B]" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A66B] block mb-1">
                    Request Transmitted
                  </span>
                  <h3 className="text-2xl font-bold text-[#123F46] mb-3">
                    Provisional Intake Registered
                  </h3>
                  <p className="text-sm text-[#536468] leading-relaxed mb-6">
                    Thank you, <span className="font-semibold text-[#123F46]">{bookingResult.fullName}</span>. Your appointment request has been logged in our intake queue. An Aurevia Clinical Care Coordinator will reach out via phone or email to confirm your consultation time and guide you through any pre-appointment requirements.
                  </p>

                  {/* Summary Card */}
                  <div className="p-5 bg-white rounded-xl border border-[#123F46]/10 mb-6 space-y-3 text-xs">
                    <div className="flex justify-between items-center pb-2 border-b border-[#123F46]/5">
                      <span className="text-[#536468]">Provisional Reference ID:</span>
                      <span className="font-mono font-bold text-[#123F46] text-sm">{bookingResult.bookingId}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#123F46]/5">
                      <span className="text-[#536468]">Specialty:</span>
                      <span className="font-semibold text-[#123F46]">{selectedSpecialtyName}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#123F46]/5">
                      <span className="text-[#536468]">Requested Physician:</span>
                      <span className="font-semibold text-[#123F46]">{selectedDoctorName}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#123F46]/5">
                      <span className="text-[#536468]">Preferred Date & Time:</span>
                      <span className="font-semibold text-[#123F46]">{bookingResult.preferredDate} at {bookingResult.preferredTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#536468]">Contact Details:</span>
                      <span className="font-semibold text-[#123F46]">{bookingResult.phone} · {bookingResult.email}</span>
                    </div>
                  </div>

                  {/* Disclaimer per prompt requirement */}
                  <div className="p-3 bg-[#F3EFE7] rounded-lg border border-[#123F46]/10 flex items-start gap-2.5 text-[11px] text-[#536468] mb-6">
                    <Info className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                    <span>
                      Demo System Notice: Real hospital appointments require patient identification verification, insurance eligibility verification, and formal clinician schedule locking.
                    </span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#123F46] hover:bg-[#0D2D32] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 text-[#C6A66B]" />
                    <span>Book Another Consultation</span>
                  </button>
                </div>
              ) : (
                /* The Interactive Booking Form */
                <form onSubmit={handleSubmit} noValidate>
                  
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#123F46]/10">
                    <div>
                      <h3 className="text-xl font-bold text-[#123F46]">Patient Consultation Form</h3>
                      <p className="text-xs text-[#536468] mt-0.5">Please provide your details for intake triage</p>
                    </div>
                    <span className="text-[11px] text-[#C6A66B] font-semibold uppercase tracking-wider">
                      Step 1 of 1
                    </span>
                  </div>

                  <div className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1.5">
                        Full Legal Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#536468] absolute left-3 top-3" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Margaret Sterling"
                          className={`w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white rounded-lg border focus:ring-1 focus:ring-[#123F46] focus:border-[#123F46] outline-hidden transition-colors ${
                            errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#123F46]/15'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#536468] absolute left-3 top-3" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="m.sterling@example.com"
                            className={`w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white rounded-lg border focus:ring-1 focus:ring-[#123F46] focus:border-[#123F46] outline-hidden transition-colors ${
                              errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#123F46]/15'
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1.5">
                          Contact Phone <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#536468] absolute left-3 top-3" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 019-2834"
                            className={`w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white rounded-lg border focus:ring-1 focus:ring-[#123F46] focus:border-[#123F46] outline-hidden transition-colors ${
                              errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#123F46]/15'
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Specialty & Doctor Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1.5">
                          Clinical Specialty <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.specialtyId}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              specialtyId: e.target.value,
                              doctorId: '', // reset doctor when specialty changes
                            })
                          }
                          className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white rounded-lg border border-[#123F46]/15 focus:ring-1 focus:ring-[#123F46] focus:border-[#123F46] outline-hidden"
                        >
                          {SPECIALTIES.map((spec) => (
                            <option key={spec.id} value={spec.id}>
                              {spec.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1.5">
                          Preferred Physician
                        </label>
                        <select
                          value={formData.doctorId}
                          onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white rounded-lg border border-[#123F46]/15 focus:ring-1 focus:ring-[#123F46] focus:border-[#123F46] outline-hidden"
                        >
                          <option value="">Next Available Senior Specialist</option>
                          {availableDoctors.map((doc) => (
                            <option key={doc.id} value={doc.id}>
                              {doc.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date & Time Slot Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1.5">
                          Preferred Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            min={minDateStr}
                            max={maxDateStr}
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className={`w-full px-3 py-2.5 text-xs sm:text-sm bg-white rounded-lg border focus:ring-1 focus:ring-[#123F46] focus:border-[#123F46] outline-hidden ${
                              errors.preferredDate ? 'border-red-500 bg-red-50/20' : 'border-[#123F46]/15'
                            }`}
                          />
                        </div>
                        {errors.preferredDate && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1.5">
                          Preferred Window
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white rounded-lg border border-[#123F46]/15 focus:ring-1 focus:ring-[#123F46] focus:border-[#123F46] outline-hidden"
                        >
                          <option value="09:00 AM">Morning (09:00 AM - 11:00 AM)</option>
                          <option value="11:30 AM">Late Morning (11:30 AM - 01:00 PM)</option>
                          <option value="02:30 PM">Afternoon (02:30 PM - 04:30 PM)</option>
                          <option value="05:00 PM">Evening (05:00 PM - 06:30 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Symptoms & Message */}
                    <div>
                      <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1.5">
                        Symptoms or Clinical Notes (Optional)
                      </label>
                      <div className="relative">
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Briefly describe the reason for your consultation, current symptoms, or previous treatments..."
                          className="w-full p-3 text-xs sm:text-sm bg-white rounded-lg border border-[#123F46]/15 focus:ring-1 focus:ring-[#123F46] focus:border-[#123F46] outline-hidden resize-none"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Submit Button */}
                  <div className="mt-8 pt-4 border-t border-[#123F46]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-[11px] text-[#536468] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#123F46]" />
                      <span>Encrypted HIPAA-compliant transmission</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#123F46] hover:bg-[#0D2D32] active:bg-[#081D20] text-white text-xs font-semibold uppercase tracking-wider rounded-sm shadow-md transition-all duration-150 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#123F46]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Transmitting Intake...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 text-[#C6A66B]" />
                          <span>Submit Appointment Request</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
