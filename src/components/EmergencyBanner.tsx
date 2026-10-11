import React, { useState } from 'react';
import { ShieldAlert, Phone, MapPin, Clock, Edit2, Check, AlertTriangle } from 'lucide-react';

export const EmergencyBanner: React.FC = () => {
  const [emergencyPhone, setEmergencyPhone] = useState('+1 (800) 555-0199');
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [tempPhone, setTempPhone] = useState(emergencyPhone);

  const handleSavePhone = () => {
    if (tempPhone.trim()) {
      setEmergencyPhone(tempPhone.trim());
    }
    setIsEditingPhone(false);
  };

  return (
    <section className="bg-[#0D2D32] text-white py-12 border-y border-[#C6A66B]/30 relative overflow-hidden">
      {/* Subtle deep ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#123F46] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#123F46]/80 rounded-2xl p-6 sm:p-10 border border-[#C6A66B]/30 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C6A66B] mb-2">
                <ShieldAlert className="w-4 h-4 text-[#C6A66B]" />
                <span>Level 1 Emergency & Trauma Pavilion</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Immediate Critical Care · 24/7 Rapid Response
              </h2>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                Our emergency resuscitation bays, dedicated cardiac catheterization suites, and acute stroke neurologists are on standby round-the-clock for life-threatening conditions.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
                  Dedicated Ambulance Concourse, Gate 2
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C6A66B]" />
                  No Prior Appointment Required
                </span>
              </div>
            </div>

            {/* Right Action: Editable Emergency Phone */}
            <div className="flex flex-col items-start lg:items-end justify-center shrink-0">
              <div className="p-4 bg-white/10 rounded-xl border border-white/15 w-full sm:w-auto">
                <span className="text-[11px] font-semibold text-[#C6A66B] uppercase tracking-wider block mb-1">
                  24/7 Clinical Emergency Hotline
                </span>

                {isEditingPhone ? (
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="text"
                      value={tempPhone}
                      onChange={(e) => setTempPhone(e.target.value)}
                      className="px-2 py-1 bg-white text-[#123F46] font-mono text-base font-bold rounded-sm border border-[#C6A66B] outline-hidden"
                    />
                    <button
                      onClick={handleSavePhone}
                      className="p-1.5 bg-[#C6A66B] hover:bg-[#9F8046] text-[#123F46] rounded-sm"
                      title="Save Number"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <a
                      href={`tel:${emergencyPhone.replace(/\D/g, '')}`}
                      className="text-xl sm:text-2xl font-bold font-mono text-white hover:text-[#C6A66B] tracking-wider transition-colors"
                    >
                      {emergencyPhone}
                    </a>
                    <button
                      onClick={() => {
                        setTempPhone(emergencyPhone);
                        setIsEditingPhone(true);
                      }}
                      className="p-1 text-white/60 hover:text-white transition-colors"
                      title="Edit Emergency Phone (institutional setting)"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-white/60">
                  <AlertTriangle className="w-3 h-3 text-[#C6A66B]" />
                  <span>Configurable sample line. Dial 911 for regional emergencies.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
