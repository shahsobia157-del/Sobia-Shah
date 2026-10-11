import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { SPECIALTIES } from '../data/hospitalData';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  ArrowUp,
  X,
  FileText
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const legalContent: Record<string, string[]> = {
    'Privacy Policy': [
      'Aurevia Medical Center complies with the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and international data confidentiality standards.',
      'Protected Health Information (PHI) collected via our online intake scheduling systems is encrypted during transmission and storage using industry-standard AES-256 protocols.',
      'We do not sell, rent, or monetize patient or visitor personal data to third parties. Information is exclusively utilized for clinical coordination and billing purposes.',
    ],
    'Patient Rights & Responsibilities': [
      'Every patient at Aurevia has the right to considerate and respectful care delivered in a safe environment, free from all forms of discrimination.',
      'Patients have the right to receive complete, current information concerning their diagnosis, evaluation, proposed treatments, and anticipated outcomes in terms they can comprehend.',
      'Patients retain the autonomy to accept or refuse any medical treatment, diagnostic procedure, or clinical trial participation after being informed of consequences.',
    ],
    'HIPAA Notice of Privacy Practices': [
      'This notice describes how medical information about you may be used and disclosed and how you can get access to this information.',
      'We may use your health information for treatment coordination across our 18 medical departments, payment processing with your health plan, and healthcare operations quality improvement.',
      'You have the right to request restrictions on certain uses, inspect your medical records, and obtain an electronic copy of your health records upon request.',
    ],
  };

  return (
    <footer className="bg-[#081D20] text-white border-t border-[#C6A66B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <BrandLogo variant="light" size="lg" className="mb-4" />
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm mb-6">
              Where advanced medical expertise meets compassionate care, creating an elevated healthcare experience for every patient.
            </p>

            <div className="flex items-center gap-4 text-xs text-white/60 mb-6">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C6A66B]" />
                <span>JCI Accredited</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#C6A66B]" />
                <span>ISO 9001 Certified</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-[#123F46] hover:bg-[#1A4D55] text-white text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#C6A66B]/30 transition-colors"
            >
              Book an Appointment
            </button>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C6A66B] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Aurevia</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">Medical Specialties</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">Our Specialists</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Hospital Facilities</a>
              </li>
              <li>
                <a href="#journal" className="hover:text-white transition-colors">Wellness Journal</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Campus Wayfinding</a>
              </li>
            </ul>
          </div>

          {/* Medical Specialties */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C6A66B] mb-4">
              Clinical Specialties
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-white/70">
              {SPECIALTIES.slice(0, 6).map((spec) => (
                <li key={spec.id}>
                  <a href="#specialties" className="hover:text-white transition-colors">
                    {spec.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C6A66B] mb-4">
              Campus Concierge
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <span>740 Grandview Blvd, Suite 100, Metropolis MP</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C6A66B] shrink-0" />
                <a href="tel:18005550140" className="hover:text-white">+1 (800) 555-0140 (Main)</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:18005550199" className="text-red-300 hover:text-white font-semibold">
                  +1 (800) 555-0199 (Emergency)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C6A66B] shrink-0" />
                <a href="mailto:concierge@aurevia-medical.com" className="hover:text-white">
                  concierge@aurevia-medical.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links, Scroll-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            <p>© {new Date().getFullYear()} Aurevia Medical Center. All rights reserved.</p>
            <p className="text-[10px] text-white/40 mt-0.5">
              Demonstration medical center website. All doctors and cases presented are fictional representations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button
              onClick={() => setLegalModalTitle('Privacy Policy')}
              className="hover:text-white cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModalTitle('Patient Rights & Responsibilities')}
              className="hover:text-white cursor-pointer"
            >
              Patient Rights
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModalTitle('HIPAA Notice of Privacy Practices')}
              className="hover:text-white cursor-pointer"
            >
              HIPAA Notice
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors flex items-center justify-center"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4 text-[#C6A66B]" />
            </button>
          </div>
        </div>

      </div>

      {/* Legal Information Modal */}
      {legalModalTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn text-[#273437]">
          <div className="bg-[#FAF8F3] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#123F46]/20 relative">
            <button
              onClick={() => setLegalModalTitle(null)}
              className="absolute top-5 right-5 p-2 text-[#536468] hover:text-[#123F46]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-[#123F46]" />
              <h3 className="text-xl font-bold text-[#123F46]">{legalModalTitle}</h3>
            </div>
            <div className="space-y-3 mt-4 text-xs sm:text-sm text-[#536468] leading-relaxed">
              {legalContent[legalModalTitle]?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-[#123F46]/10 flex justify-end">
              <button
                onClick={() => setLegalModalTitle(null)}
                className="px-5 py-2 bg-[#123F46] text-white text-xs font-semibold uppercase tracking-wider rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
