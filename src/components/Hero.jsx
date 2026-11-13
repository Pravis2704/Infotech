import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Smartphone, Globe, ReceiptText } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/companyConfig';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-28 lg:pb-20 overflow-hidden bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-charcoal-900 border border-charcoal-700/60 min-h-[580px] lg:min-h-[620px] flex flex-col lg:flex-row">
          
          {/* Subtle Ambient Background Lighting Effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Headline, Description & CTAs */}
          <div className="relative z-10 w-full lg:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            
            {/* Brand Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-800/90 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium w-fit mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>{COMPANY_CONFIG.name} · Digital Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-bold text-white tracking-tight leading-[1.18] mb-6">
              Smart Digital Solutions <br className="hidden sm:inline" />
              for Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 font-serif italic">
                Jewellery Business
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-cream-300/90 max-w-xl font-normal leading-relaxed mb-8">
              From beautiful jewellery websites to powerful mobile applications and reliable billing software, we help jewellery businesses grow with technology.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-charcoal-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 rounded-full shadow-gold-sm hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold-400 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-cream-100 hover:text-white bg-charcoal-800/80 hover:bg-charcoal-700/80 border border-gold-500/40 hover:border-gold-400 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-charcoal-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-cream-400/80">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gold-400" />
                <span>Jewellery E-Commerce</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-gold-400" />
                <span>Mobile Shopping Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <ReceiptText className="w-4 h-4 text-gold-400" />
                <span>GST & Hallmarked Billing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Jewellery Display with Gold Wave Divider */}
          <div className="relative w-full lg:w-5/12 min-h-[340px] sm:min-h-[420px] lg:min-h-[580px] overflow-hidden">
            
            {/* Elegant Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/hero-jewellery.jpg"
                alt="Luxury diamond and gold jewellery showcase for NexoraTech digital solutions"
                className="w-full h-full object-cover object-center lg:object-right scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-transparent to-transparent lg:hidden" />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-charcoal-900 via-charcoal-900/50 to-transparent" />
            </div>

            {/* Elegant Flowing Golden Curve Divider on Desktop */}
            <div className="hidden lg:block absolute inset-y-0 -left-1 w-20 pointer-events-none z-10">
              <svg viewBox="0 0 100 600" preserveAspectRatio="none" className="h-full w-full">
                <path
                  d="M0,0 L40,0 C80,200 10,400 45,600 L0,600 Z"
                  fill="#111113"
                />
                <path
                  d="M40,0 C80,200 10,400 45,600"
                  fill="none"
                  stroke="#C69235"
                  strokeWidth="3.5"
                  strokeOpacity="0.85"
                />
              </svg>
            </div>

            {/* Floating Live Badge Overlay on Hero */}
            <div className="absolute bottom-6 right-6 z-20 bg-charcoal-950/85 backdrop-blur-md border border-gold-500/40 rounded-2xl p-4 shadow-xl max-w-xs text-left hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                  Live Gold Rate Ready
                </span>
              </div>
              <p className="text-xs text-cream-300 leading-tight">
                Automated 22K/24K rate feeds integrated directly into web catalogues and POS systems.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
