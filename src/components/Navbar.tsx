import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Calendar, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-xs border-b border-[#123F46]/10 py-3.5'
            : 'bg-[#FAF8F3] border-b border-[#123F46]/5 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark / Emblem */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#123F46] rounded-sm"
              aria-label="Aurevia Medical Center Home"
            >
              <BrandLogo variant="dark" size="md" />
            </a>

            {/* Zone 2: Navigation Links (single line, clean typography) */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#273437]"
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="whitespace-nowrap shrink-0 hover:text-[#123F46] transition-colors relative py-1 text-[14.5px] cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#123F46] rounded-xs group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A66B] transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href="tel:18005550199"
                className="hidden xl:flex items-center gap-2 text-xs text-[#273437] font-medium hover:text-[#123F46] transition-colors"
                title="Direct 24/7 Rapid Medical Helpline"
              >
                <span className="w-2 h-2 rounded-full bg-[#A9B9A7]" />
                <Phone className="w-3.5 h-3.5 text-[#123F46]" />
                <span className="tracking-wide">24/7: +1 (800) 555-0199</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#123F46] hover:bg-[#0D2D32] active:bg-[#081D20] rounded-sm shadow-xs transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#123F46]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 text-xs font-medium bg-[#123F46] text-white rounded-xs"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#273437] hover:text-[#123F46] rounded-md focus-visible:ring-2 focus-visible:ring-[#123F46]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] z-30 bg-[#FAF8F3] border-b border-[#123F46]/15 shadow-xl sm:hidden p-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-[#273437] py-2 border-b border-[#123F46]/5 hover:text-[#123F46]"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#123F46] text-white text-center font-medium rounded-xs text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C6A66B]" />
                Book an Appointment
              </button>
              <a
                href="tel:18005550199"
                className="text-xs text-center text-[#536468] py-1"
              >
                Emergency Rapid Line: +1 (800) 555-0199
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
