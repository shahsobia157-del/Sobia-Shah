import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Navigation,
  Info
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'General Inquiries',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeBuilding, setActiveBuilding] = useState<string>('Tower A');

  const campusBuildings = [
    {
      name: 'Tower A (Pavilion of Surgery & Cardiology)',
      desc: 'Floors 1-6: Hybrid Operating Theaters, Catheterization Labs, Private Inpatient Suites 101-160',
    },
    {
      name: 'Tower B (Neurosciences & Diagnostic Imaging)',
      desc: 'Floors 1-5: 3T MRI Imaging Pavilion, Neurology Clinics, Stroke Critical Care Unit',
    },
    {
      name: 'Pavilion C (Women & Children’s Center)',
      desc: 'Floors 1-4: Labor & Delivery, NICU Level IV, Pediatric Subspecialties & Child Play Garden',
    },
    {
      name: 'Emergency Pavilion (Gate 2)',
      desc: 'Ground Level: Direct Ambulance Bay, Trauma Resuscitation, Rapid Triage Bay',
    },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-[#123F46]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-3">
            <span>Hospital Campus & Access</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#536468]">Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#123F46] tracking-tight [text-wrap:balance]">
            Visit or Inquire Directly
          </h2>
          <p className="text-base text-[#536468] mt-3">
            Conveniently situated in the medical arts district with dedicated subterranean valet parking and private patient arrival drives.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          <div className="p-6 bg-[#FAF8F3] rounded-xl border border-[#123F46]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#123F46] text-white flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#C6A66B]" />
              </div>
              <h4 className="text-sm font-bold text-[#123F46] mb-1">Campus Location</h4>
              <p className="text-xs text-[#536468] leading-relaxed">
                740 Grandview Boulevard, Suite 100<br />
                Sanctuary Medical District<br />
                Metropolis, MP 90210
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#C6A66B] mt-4 block">
              Valet Parking Available at Gate 1
            </span>
          </div>

          <div className="p-6 bg-[#FAF8F3] rounded-xl border border-[#123F46]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#123F46] text-white flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-[#C6A66B]" />
              </div>
              <h4 className="text-sm font-bold text-[#123F46] mb-1">Telephone Contacts</h4>
              <p className="text-xs text-[#536468] leading-relaxed">
                Main Reception: +1 (800) 555-0140<br />
                Emergency Line: +1 (800) 555-0199<br />
                International Concierge: Ext. 4099
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#C6A66B] mt-4 block">
              24/7 Telephone Assistance
            </span>
          </div>

          <div className="p-6 bg-[#FAF8F3] rounded-xl border border-[#123F46]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#123F46] text-white flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#C6A66B]" />
              </div>
              <h4 className="text-sm font-bold text-[#123F46] mb-1">Operating Hours</h4>
              <p className="text-xs text-[#536468] leading-relaxed">
                Outpatient: Mon–Sat 7:30 AM–8:00 PM<br />
                Diagnostics: Mon–Fri 8:00 AM–6:00 PM<br />
                Emergency Department: 24/7 Continuous
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#C6A66B] mt-4 block">
              Emergency Never Closes
            </span>
          </div>

          <div className="p-6 bg-[#FAF8F3] rounded-xl border border-[#123F46]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#123F46] text-white flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-[#C6A66B]" />
              </div>
              <h4 className="text-sm font-bold text-[#123F46] mb-1">Direct Correspondence</h4>
              <p className="text-xs text-[#536468] leading-relaxed">
                General: concierge@aurevia-medical.com<br />
                Admissions: admissions@aurevia-medical.com<br />
                Medical Records: records@aurevia-medical.com
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#C6A66B] mt-4 block">
              Responses within 4 Business Hours
            </span>
          </div>

        </div>

        {/* Split Grid: Interactive Campus Navigator & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Campus Map Visualization */}
          <div className="lg:col-span-6 bg-[#FAF8F3] rounded-2xl p-6 sm:p-8 border border-[#123F46]/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B]">
                  Campus Directory
                </span>
                <h3 className="text-lg font-bold text-[#123F46]">
                  Aurevia Medical Pavilion Wayfinding
                </h3>
              </div>
              <Navigation className="w-5 h-5 text-[#123F46]" />
            </div>

            {/* Custom Interactive Architectural Vector Map */}
            <div className="relative rounded-xl overflow-hidden bg-white p-4 border border-[#123F46]/10 aspect-16/10 mb-6 flex items-center justify-center">
              <svg viewBox="0 0 500 300" className="w-full h-full" fill="none">
                {/* Background Landscaping */}
                <rect width="500" height="300" fill="#F4EFE6" rx="8" />
                
                {/* Internal Access Roads & Walkways */}
                <path d="M 40 150 Q 250 150 460 150" stroke="#E2D9CC" strokeWidth="24" strokeLinecap="round" />
                <path d="M 250 40 L 250 260" stroke="#E2D9CC" strokeWidth="20" strokeLinecap="round" />
                
                {/* Central Botanical Garden Atrium */}
                <circle cx="250" cy="150" r="42" fill="#A9B9A7" fillOpacity="0.4" stroke="#6C826A" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="250" y="153" textAnchor="middle" fill="#123F46" fontSize="10" fontWeight="bold">Healing Garden</text>

                {/* Building: Tower A */}
                <g
                  onClick={() => setActiveBuilding('Tower A')}
                  className="cursor-pointer group"
                >
                  <rect x="70" y="50" width="130" height="75" rx="6" fill={activeBuilding === 'Tower A' ? '#123F46' : '#FFFFFF'} stroke="#123F46" strokeWidth="1.5" />
                  <text x="135" y="85" textAnchor="middle" fill={activeBuilding === 'Tower A' ? '#FFFFFF' : '#123F46'} fontSize="11" fontWeight="bold">Tower A</text>
                  <text x="135" y="100" textAnchor="middle" fill={activeBuilding === 'Tower A' ? '#C6A66B' : '#536468'} fontSize="8">Surgery & Heart</text>
                </g>

                {/* Building: Tower B */}
                <g
                  onClick={() => setActiveBuilding('Tower B')}
                  className="cursor-pointer group"
                >
                  <rect x="300" y="50" width="130" height="75" rx="6" fill={activeBuilding === 'Tower B' ? '#123F46' : '#FFFFFF'} stroke="#123F46" strokeWidth="1.5" />
                  <text x="365" y="85" textAnchor="middle" fill={activeBuilding === 'Tower B' ? '#FFFFFF' : '#123F46'} fontSize="11" fontWeight="bold">Tower B</text>
                  <text x="365" y="100" textAnchor="middle" fill={activeBuilding === 'Tower B' ? '#C6A66B' : '#536468'} fontSize="8">Neuro & 3T MRI</text>
                </g>

                {/* Building: Pavilion C */}
                <g
                  onClick={() => setActiveBuilding('Pavilion C')}
                  className="cursor-pointer group"
                >
                  <rect x="70" y="175" width="130" height="75" rx="6" fill={activeBuilding === 'Pavilion C' ? '#123F46' : '#FFFFFF'} stroke="#123F46" strokeWidth="1.5" />
                  <text x="135" y="210" textAnchor="middle" fill={activeBuilding === 'Pavilion C' ? '#FFFFFF' : '#123F46'} fontSize="11" fontWeight="bold">Pavilion C</text>
                  <text x="135" y="225" textAnchor="middle" fill={activeBuilding === 'Pavilion C' ? '#C6A66B' : '#536468'} fontSize="8">Women & Child</text>
                </g>

                {/* Building: Emergency Pavilion */}
                <g
                  onClick={() => setActiveBuilding('Emergency Pavilion')}
                  className="cursor-pointer group"
                >
                  <rect x="300" y="175" width="130" height="75" rx="6" fill={activeBuilding === 'Emergency Pavilion' ? '#123F46' : '#FFFFFF'} stroke="#123F46" strokeWidth="1.5" />
                  <text x="365" y="210" textAnchor="middle" fill={activeBuilding === 'Emergency Pavilion' ? '#FFFFFF' : '#123F46'} fontSize="11" fontWeight="bold">Emergency Bay</text>
                  <text x="365" y="225" textAnchor="middle" fill={activeBuilding === 'Emergency Pavilion' ? '#C6A66B' : '#C6A66B'} fontSize="8">24/7 Gate 2</text>
                </g>
              </svg>
            </div>

            {/* Selected Building Details */}
            <div className="space-y-2">
              {campusBuildings.map((b) => (
                <div
                  key={b.name}
                  className={`p-3 rounded-lg border text-xs transition-colors cursor-pointer ${
                    activeBuilding.toLowerCase().includes(b.name.split(' ')[0].toLowerCase())
                      ? 'bg-white border-[#123F46] shadow-xs'
                      : 'bg-transparent border-transparent text-[#536468] hover:bg-white/50'
                  }`}
                  onClick={() => setActiveBuilding(b.name.split(' ')[0])}
                >
                  <h5 className="font-bold text-[#123F46] flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#C6A66B]" />
                    {b.name}
                  </h5>
                  <p className="text-[11px] text-[#536468] mt-0.5">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-6 bg-[#FAF8F3] rounded-2xl p-6 sm:p-8 border border-[#123F46]/10">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B]">
                Patient Inquiry
              </span>
              <h3 className="text-xl font-bold text-[#123F46] mt-0.5">
                Send a Message to Clinical Administration
              </h3>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-white rounded-xl border border-[#123F46]/10 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#123F46] mx-auto mb-3" />
                <h4 className="text-lg font-bold text-[#123F46] mb-1">Message Received</h4>
                <p className="text-xs text-[#536468] leading-relaxed mb-4">
                  Thank you, {formData.name}. Our patient services desk has received your correspondence and will reply via email within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', department: 'General Inquiries', message: '' });
                  }}
                  className="px-4 py-2 bg-[#123F46] text-white text-xs font-semibold uppercase tracking-wider rounded-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jonathan Reynolds"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-lg border outline-hidden ${
                      errors.name ? 'border-red-500' : 'border-[#123F46]/15'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="j.reynolds@example.com"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-lg border outline-hidden ${
                      errors.email ? 'border-red-500' : 'border-[#123F46]/15'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1">
                    Department Recipient
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-lg border border-[#123F46]/15 outline-hidden"
                  >
                    <option value="General Inquiries">General Hospital Inquiries</option>
                    <option value="Executive Health">Executive Health & Screenings</option>
                    <option value="International Patients">International Patient Concierge</option>
                    <option value="Billing & Insurance">Insurance & Financial Counseling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#123F46] uppercase tracking-wider mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How may our clinical staff assist you today?..."
                    className={`w-full p-3 text-xs sm:text-sm bg-white rounded-lg border outline-hidden resize-none ${
                      errors.message ? 'border-red-500' : 'border-[#123F46]/15'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#123F46] hover:bg-[#0D2D32] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#C6A66B]" />
                      <span>Transmitting Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Editable Contact Replacement Notice */}
            <div className="mt-4 pt-3 border-t border-[#123F46]/10 flex items-center gap-2 text-[10px] text-[#536468]">
              <Info className="w-3.5 h-3.5 text-[#C6A66B] shrink-0" />
              <span>
                Sample institutional address and department extensions provided for demonstration. Replace with actual campus credentials upon live rollout.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
