import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ImageModal({ image, title, subtitle, isOpen, onClose }) {
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

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Lightbox Container */}
      <div className="relative w-full max-w-5xl bg-charcoal-900 rounded-2xl shadow-2xl border border-charcoal-700 overflow-hidden z-10">
        
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-charcoal-950/90 border-b border-charcoal-800 flex items-center justify-between">
          <div>
            <h4 className="text-base font-semibold text-white">{title}</h4>
            {subtitle && <p className="text-xs text-gold-400">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-cream-300 hover:text-white hover:bg-charcoal-800 transition-colors"
            aria-label="Close image modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="p-4 sm:p-6 bg-charcoal-950/50 flex items-center justify-center max-h-[75vh] overflow-auto">
          <img
            src={image}
            alt={title || "Software preview"}
            className="max-h-[70vh] w-auto max-w-full rounded-lg shadow-lg object-contain border border-charcoal-800"
          />
        </div>

        {/* Bottom Bar */}
        <div className="px-6 py-3 bg-charcoal-950/90 border-t border-charcoal-800 flex items-center justify-between text-xs text-cream-400">
          <span>* Illustrative product interface designed by NexoraTech</span>
          <button
            type="button"
            onClick={onClose}
            className="text-gold-400 hover:underline font-medium"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
