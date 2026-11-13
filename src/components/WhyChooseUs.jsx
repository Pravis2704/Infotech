import React from 'react';
import { ArrowRight, Gem, BadgePercent, LayoutTemplate, Sliders, Headphones, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/companyConfig';

export default function WhyChooseUs() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const iconMap = {
    Gem,
    BadgePercent,
    LayoutTemplate,
    Sliders,
    Headphones,
    ShieldCheck
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-cream-100 relative overflow-hidden border-y border-cream-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Card Container */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-cream-300 shadow-xl flex flex-col lg:flex-row">
          
          {/* Left Side: Value Propositions & Call to Action */}
          <div className="w-full lg:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-2 block">
                The NexoraTech Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight mb-4">
                Why Choose NexoraTech?
              </h2>
              <p className="text-base text-darkgrey-muted max-w-xl">
                We bridge the gap between traditional jewellery trade craftsmanship and modern software engineering. Here is why jewellery businesses choose to partner with us:
              </p>
            </div>

            {/* Benefit Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {COMPANY_CONFIG.whyChooseUs.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Gem;
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300/60 flex items-center justify-center flex-shrink-0 text-gold-700 shadow-sm group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-charcoal-900 mb-1 group-hover:text-gold-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-darkgrey-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-charcoal-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 rounded-full shadow-gold-sm hover:shadow-gold-glow transition-all duration-300 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Side: Flowing Golden Curve Framing Luxury Gold Bangles */}
          <div className="relative w-full lg:w-5/12 min-h-[320px] sm:min-h-[400px] lg:min-h-[560px] overflow-hidden bg-charcoal-950">
            
            {/* High-res Image of Gold Bangles on Silk */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/why-us-bangles.jpg"
                alt="Exquisite gold bangles on silk cloth representing precision jewellery craft"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent lg:hidden" />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
            </div>

            {/* Golden organic curve separator matching reference design */}
            <div className="hidden lg:block absolute inset-y-0 -left-1 w-24 pointer-events-none z-20">
              <svg viewBox="0 0 100 600" preserveAspectRatio="none" className="h-full w-full">
                <path
                  d="M0,0 L15,0 C90,240 5,380 40,600 L0,600 Z"
                  fill="#ffffff"
                />
                <path
                  d="M15,0 C90,240 5,380 40,600"
                  fill="none"
                  stroke="#C69235"
                  strokeWidth="3.5"
                  strokeOpacity="0.85"
                />
              </svg>
            </div>

            {/* Bottom Overlay Badge */}
            <div className="absolute bottom-6 right-6 z-20 bg-charcoal-950/85 backdrop-blur-md border border-gold-500/40 rounded-2xl p-4 shadow-xl max-w-xs text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-300 block mb-1">
                Precision & Integrity
              </span>
              <p className="text-xs text-cream-300 leading-tight">
                Software engineered to match the purity and accuracy demanded by the jewellery industry.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
