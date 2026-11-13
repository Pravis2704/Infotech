import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Monitor, Smartphone, Calculator } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/companyConfig';
import ServiceModal from './ServiceModal';

export default function Services({ onSelectService }) {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleContactClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceIcons = [Monitor, Smartphone, Calculator];

  return (
    <section id="services" className="py-20 lg:py-28 bg-cream-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100/80 border border-gold-300/50 text-gold-800 text-xs sm:text-sm font-semibold mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Specialised Jewellery Tech</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight mb-4">
            Our Services
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-5" />
          
          <p className="text-base sm:text-lg text-darkgrey-muted leading-relaxed">
            Tailor-made digital products created specifically to empower jewellers with modern web catalogues, mobile customer experiences, and high-precision billing.
          </p>
        </div>

        {/* 3 Main Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_CONFIG.services.map((service, index) => {
            const Icon = serviceIcons[index] || Monitor;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl p-6 sm:p-7 border border-cream-300 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Subtle Top Gold Highlight on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Mockup Image Container */}
                  <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-cream-100 mb-6 border border-cream-300/60 flex items-center justify-center p-2 group-hover:border-gold-300/50 transition-colors">
                    <img
                      src={service.image}
                      alt={`${service.title} Mockup`}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-cream-300 flex items-center justify-center text-gold-600 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight mb-2 group-hover:text-gold-700 transition-colors">
                    {service.shortTitle}
                  </h3>
                  
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-darkgrey-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Included Features Bullet Points */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-cream-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800 block mb-2">
                      Key Highlights:
                    </span>
                    {service.features.slice(0, 4).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2.5 text-xs sm:text-sm text-darkgrey">
                        <div className="w-4 h-4 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0 text-gold-700">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <span className="text-xs text-gold-700 font-medium pl-6 block">
                        + {service.features.length - 4} more specialized features
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-cream-200 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => openServiceModal(service)}
                    className="inline-flex items-center text-sm font-semibold text-gold-700 hover:text-gold-800 transition-colors py-2 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleContactClick(service.title)}
                    className="px-4 py-2 text-xs sm:text-sm font-semibold text-charcoal-950 bg-gold-100 hover:bg-gold-500 hover:text-charcoal-950 rounded-full transition-all duration-200 border border-gold-300/60"
                  >
                    Contact Us
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Services Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-charcoal-900 border border-charcoal-700/80 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Need an Integrated Website + Mobile App + Billing Package?
            </h4>
            <p className="text-sm text-cream-300/80 max-w-2xl">
              We offer synchronised digital ecosystems where your website catalogue, mobile app, and in-store billing software share the exact same inventory and live gold rate.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleContactClick("Complete Digital Package")}
            className="flex-shrink-0 px-6 py-3 text-sm font-semibold text-charcoal-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 rounded-full shadow-gold-sm transition-all"
          >
            Request Custom Combo Quote
          </button>
        </div>

      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectService={onSelectService}
      />
    </section>
  );
}
