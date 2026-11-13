import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import SolutionsShowcase from './components/SolutionsShowcase';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState('Website Designing & Development');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-200 text-darkgrey selection:bg-gold-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Solutions & Work Showcase */}
        <SolutionsShowcase onSelectService={handleSelectService} />

        {/* About Us Section */}
        <AboutUs />

        {/* Contact Us - Final Section immediately before Footer */}
        <ContactSection
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
