import React, { useState, useEffect } from 'react';
import { COMPANY_CONFIG } from '../config/companyConfig';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'services', 'why-us', 'showcase', 'about', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/95 backdrop-blur-md shadow-md py-3 border-b border-cream-300/80'
          : 'bg-cream-100/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <svg viewBox="0 0 48 48" className="w-6 h-6 text-white" fill="none">
                <path
                  d="M10 8C10 5.8 11.8 4 14 4H16C18.2 4 20 5.8 20 8V28.5L31.8 10.8C33.2 8.7 35.6 7.5 38.1 7.6C41.4 7.8 44 10.5 44 13.8V40C44 42.2 42.2 44 40 44H38C35.8 44 34 42.2 34 40V19.5L22.2 37.2C20.8 39.3 18.4 40.5 15.9 40.4C12.6 40.2 10 37.5 10 34.2V8Z"
                  fill="currentColor"
                />
                <circle cx="39" cy="9" r="4" fill="#E8C77E" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-charcoal-900 leading-none">
                {COMPANY_CONFIG.name}
              </span>
              <span className="text-[11px] font-medium text-darkgrey-muted tracking-wide mt-1">
                {COMPANY_CONFIG.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {COMPANY_CONFIG.navLinks.slice(0, 5).map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-700 bg-gold-100/70 font-semibold'
                      : 'text-darkgrey hover:text-gold-600 hover:bg-cream-200'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Contact Us Pill Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-charcoal-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 rounded-full shadow-gold-sm hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-charcoal-900 hover:text-gold-600 hover:bg-cream-300/60 focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-cream-100/98 backdrop-blur-xl border-b border-cream-300 shadow-xl px-5 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-2">
            {COMPANY_CONFIG.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-colors duration-150 flex items-center justify-between ${
                    isActive
                      ? 'bg-gold-500 text-charcoal-950 font-semibold'
                      : 'text-darkgrey hover:bg-cream-200'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-cream-300 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_CONFIG.contact.phoneClean}`}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-darkgrey bg-cream-200 rounded-lg"
            >
              <Phone className="w-4 h-4 text-gold-600" />
              <span>{COMPANY_CONFIG.contact.phone}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-charcoal-950 bg-gradient-to-r from-gold-400 to-gold-500 rounded-xl shadow-gold-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
