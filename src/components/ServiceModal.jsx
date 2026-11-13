import React, { useEffect } from 'react';
import { X, Check, ArrowRight, MessageSquare, Shield, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/companyConfig';

export default function ServiceModal({ service, isOpen, onClose, onSelectService }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const handleEnquire = () => {
    onClose();
    if (onSelectService) {
      onSelectService(service.title);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-cream-100 rounded-3xl shadow-2xl border border-cream-300 overflow-hidden z-10 my-8">
        
        {/* Header with image & title */}
        <div className="relative h-48 sm:h-56 bg-charcoal-900 overflow-hidden flex items-end p-6">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-900/80 text-cream-300 hover:text-white hover:bg-charcoal-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              NexoraTech Solution
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base text-darkgrey leading-relaxed">
            {service.description}
          </p>

          {/* Included Capabilities List */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              Core Capabilities Included:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-cream-300/80 shadow-xs"
                >
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-gold-700">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-darkgrey">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits */}
          {service.benefits && (
            <div className="p-4 rounded-2xl bg-gold-50/60 border border-gold-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold-800 mb-2">
                Why Jewellers Love This Solution:
              </h4>
              <ul className="space-y-1.5">
                {service.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="text-xs sm:text-sm text-gold-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-darkgrey-muted text-center sm:text-left">
              Tailored specifically to your jewellery shop size and workflow.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 text-sm font-medium text-darkgrey hover:text-charcoal-900 bg-cream-200 hover:bg-cream-300/70 rounded-full transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleEnquire}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-charcoal-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-full shadow-gold-sm hover:shadow-gold-glow transition-all"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
