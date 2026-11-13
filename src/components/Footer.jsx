import React from 'react';
import { COMPANY_CONFIG } from '../config/companyConfig';
import { Instagram, Facebook, Linkedin, Youtube, Twitter, ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer({ onSelectService }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal-950 text-cream-300 border-t border-charcoal-800">
      
      {/* Top Pre-Footer Callout Banner inspired directly by the reference image */}
      <div className="border-b border-charcoal-800 py-8 bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 48 48" className="w-6 h-6 text-white" fill="none">
                <path
                  d="M10 8C10 5.8 11.8 4 14 4H16C18.2 4 20 5.8 20 8V28.5L31.8 10.8C33.2 8.7 35.6 7.5 38.1 7.6C41.4 7.8 44 10.5 44 13.8V40C44 42.2 42.2 44 40 44H38C35.8 44 34 42.2 34 40V19.5L22.2 37.2C20.8 39.3 18.4 40.5 15.9 40.4C12.6 40.2 10 37.5 10 34.2V8Z"
                  fill="currentColor"
                />
                <circle cx="39" cy="9" r="4" fill="#E8C77E" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block leading-none">
                {COMPANY_CONFIG.name}
              </span>
              <span className="text-xs text-cream-400/80 mt-1 block">
                {COMPANY_CONFIG.tagline}
              </span>
            </div>
          </div>

          {/* Center Callout */}
          <div className="text-center">
            <p className="text-base sm:text-lg font-medium text-white tracking-tight">
              Let's build something great together!
            </p>
          </div>

          {/* Right Action & Socials */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-charcoal-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-full shadow-gold-sm transition-all"
            >
              Contact Us
            </button>

            {/* Social Placeholder Icons */}
            <div className="flex items-center gap-2">
              <a
                href={COMPANY_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-charcoal-700 bg-charcoal-800 flex items-center justify-center text-cream-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-charcoal-700 bg-charcoal-800 flex items-center justify-center text-cream-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-charcoal-700 bg-charcoal-800 flex items-center justify-center text-cream-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-charcoal-700 bg-charcoal-800 flex items-center justify-center text-cream-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-tight">
              NexoraTech
            </h4>
            <p className="text-xs sm:text-sm text-cream-400 leading-relaxed">
              Empowering jewellery businesses with high-converting online catalogue websites, seamless mobile shopping applications, and high-precision billing software.
            </p>
            <div className="pt-2 text-xs text-gold-400/90 font-mono">
              Tagline: "{COMPANY_CONFIG.tagline}"
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('home')}
                  className="hover:text-gold-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="hover:text-gold-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="hover:text-gold-400 transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('why-us')}
                  className="hover:text-gold-400 transition-colors text-left"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('showcase')}
                  className="hover:text-gold-400 transition-colors text-left"
                >
                  Our Work & Showcase
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="hover:text-gold-400 transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Services
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleServiceClick('Website Designing & Development')}
                  className="hover:text-gold-400 transition-colors text-left"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleServiceClick('Mobile Application Development')}
                  className="hover:text-gold-400 transition-colors text-left"
                >
                  Mobile App Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleServiceClick('Jewellery Billing Software')}
                  className="hover:text-gold-400 transition-colors text-left"
                >
                  Jewellery Billing Software
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleServiceClick('Complete Digital Package')}
                  className="hover:text-gold-400 transition-colors text-left text-gold-400"
                >
                  Integrated Jewellery Package
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white">
              Showroom Support
            </h5>
            <div className="space-y-2 text-xs text-cream-400">
              <p>Mon - Sat: 10AM - 7:30PM</p>
              <p className="text-white font-medium">{COMPANY_CONFIG.contact.phone}</p>
              <p className="text-gold-400">{COMPANY_CONFIG.contact.email}</p>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-cream-300 text-xs transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-charcoal-900 py-6 text-center text-xs text-cream-400/60">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 NexoraTech. All Rights Reserved.</p>
          <p className="text-[11px]">
            Designed for jewellery retailers, wholesalers, and manufacturers.
          </p>
        </div>
      </div>

    </footer>
  );
}
