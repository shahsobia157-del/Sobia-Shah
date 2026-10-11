import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { SpecialistsSection } from './components/SpecialistsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AppointmentSection } from './components/AppointmentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { JournalSection } from './components/JournalSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>('cardiology');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');

  const handleOpenBookingModal = (specialtyId?: string, doctorId?: string) => {
    if (specialtyId) setSelectedSpecialtyId(specialtyId);
    if (doctorId) setSelectedDoctorId(doctorId);
    setIsBookingModalOpen(true);
  };

  const handleScrollToAppointment = (specialtyId?: string, doctorId?: string) => {
    if (specialtyId) setSelectedSpecialtyId(specialtyId);
    if (doctorId) setSelectedDoctorId(doctorId);
    
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  const handleExploreServices = () => {
    const element = document.getElementById('specialties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDoctorForBooking = (doctorId: string, specialtyId: string) => {
    setSelectedDoctorId(doctorId);
    setSelectedSpecialtyId(specialtyId);
    handleScrollToAppointment(specialtyId, doctorId);
  };

  const handleSelectSpecialtyForBooking = (specialtyId: string) => {
    setSelectedSpecialtyId(specialtyId);
    setSelectedDoctorId('');
    handleScrollToAppointment(specialtyId, '');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#273437] font-sans antialiased selection:bg-[#C6A66B]/30 selection:text-[#123F46]">
      {/* Primary Sticky Header */}
      <Navbar onOpenBooking={() => handleOpenBookingModal()} />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBookingModal()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Trust Bar (Clinical Statistics Strip) */}
        <TrustBar />

        {/* 3. About Our Hospital */}
        <AboutSection />

        {/* 4. Medical Specialties */}
        <SpecialtiesSection
          onSelectSpecialtyForBooking={handleSelectSpecialtyForBooking}
        />

        {/* 5. Meet Our Specialists */}
        <SpecialistsSection
          onSelectDoctorForBooking={handleSelectDoctorForBooking}
        />

        {/* 6. Why Choose Us (Bento / Editorial Grid) */}
        <WhyChooseUs />

        {/* 7. Our Facilities (Suites, MRI, Surgery) */}
        <FacilitiesSection />

        {/* 8. Appointment Booking (Direct Inline Form) */}
        <AppointmentSection
          initialSpecialtyId={selectedSpecialtyId}
          initialDoctorId={selectedDoctorId}
        />

        {/* 9. Patient Testimonials */}
        <TestimonialsSection />

        {/* 10. Health & Wellness Journal */}
        <JournalSection />

        {/* 11. Emergency Contact Banner */}
        <EmergencyBanner />

        {/* 12. FAQ Section */}
        <FaqSection />

        {/* 13. Contact & Campus Wayfinding */}
        <ContactSection />
      </main>

      {/* 14. Premium Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBookingModal()} />

      {/* Global Appointment Booking Modal (Accessible from any floating trigger) */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedSpecialtyId={selectedSpecialtyId}
        selectedDoctorId={selectedDoctorId}
      />
    </div>
  );
}
