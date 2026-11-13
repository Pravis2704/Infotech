import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/companyConfig';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = encodeURIComponent(
    `Hello NexoraTech! I am interested in digital solutions for my jewellery business (Website / Mobile App / Billing Software). Please share details.`
  );

  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.contact.whatsappClean}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-charcoal-900 text-white px-3.5 py-2 rounded-2xl shadow-xl border border-gold-500/30 text-xs">
          <span>Chat on WhatsApp for instant quote</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-cream-400 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-emerald-400/40 relative"
        aria-label="Chat with NexoraTech on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-white animate-pulse" />
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
