import React from 'react';
import { COMPANY_CONFIG } from '../config/companyConfig';
import { Target, Lightbulb, HeartHandshake, CheckCircle2, Cpu, Sparkles, Layers } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      title: "Our Mission",
      desc: "To empower jewellery businesses of all sizes with intuitive, affordable, and robust digital tools that automate daily tasks and expand retail reach.",
      icon: Target
    },
    {
      title: "Practical Innovation",
      desc: "We focus on solving real shop-floor friction: eliminating manual calculation errors, syncing live gold rates, and creating frictionless customer catalogues.",
      icon: Lightbulb
    },
    {
      title: "Long-Term Partnership",
      desc: "We don't just deliver code and leave. We provide continuous technical support, training for counter staff, and regular feature updates.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-cream-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-300/60 text-gold-800 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>About NexoraTech</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight mb-4">
            Technology That Helps Your Business Grow
          </h2>

          <p className="text-xl font-serif italic text-gold-700 mb-6">
            "{COMPANY_CONFIG.tagline}"
          </p>

          <p className="text-base sm:text-lg text-darkgrey leading-relaxed mb-6">
            NexoraTech is a technology solutions company focused on helping businesses grow through digital innovation. We provide website development, mobile application development and specialised jewellery billing software. Our goal is to deliver practical, affordable and reliable solutions that make everyday business operations easier.
          </p>
        </div>

        {/* Visual Element & Pillars Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3 Strategic Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0 text-gold-700">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-darkgrey-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Element representing Technology + Jewellery */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-charcoal-900 p-8 text-white border border-charcoal-700 shadow-2xl overflow-hidden">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-charcoal-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">NexoraTech Ecosystem</h4>
                      <span className="text-xs text-gold-400">Jewellery Industry Stack</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold">
                    100% Dedicated
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-charcoal-800/80 border border-charcoal-700">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-white">Online Presence</span>
                      <span className="text-xs text-gold-400">Web & Mobile</span>
                    </div>
                    <p className="text-xs text-cream-300/80">
                      Mobile-first digital catalogues with live 22K/24K rate calculator and instant WhatsApp enquiry.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-charcoal-800/80 border border-charcoal-700">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-white">Showroom Operations</span>
                      <span className="text-xs text-gold-400">POS & Billing</span>
                    </div>
                    <p className="text-xs text-cream-300/80">
                      Multi-counter billing with net weight calculation, making charges, old-gold valuation & GST tax invoices.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-charcoal-800/80 border border-charcoal-700">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-white">Back-Office & Ledger</span>
                      <span className="text-xs text-gold-400">Security & Backup</span>
                    </div>
                    <p className="text-xs text-cream-300/80">
                      Inventory barcodes, customer purchase history, supplier khata ledgers, and automated offline daily backups.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between text-xs text-cream-400">
                  <span>Built for Indian & Global Jewellery Trade</span>
                  <span className="text-gold-400 font-semibold">Reliable & Verified</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
