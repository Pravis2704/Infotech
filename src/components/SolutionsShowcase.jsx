import React, { useState } from 'react';
import { Monitor, Smartphone, Calculator, ZoomIn, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import ImageModal from './ImageModal';

export default function SolutionsShowcase({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('rmk-web');
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const categories = [
    {
      id: 'rmk-web',
      name: 'RMK Jewellers – Web Catalogue',
      icon: Monitor,
      serviceTitle: 'Website Designing & Development',
      badge: 'Client Showcase · RMK Jewellers',
      summary: 'A high-converting luxury web catalogue and e-commerce platform developed for RMK Jewellers, featuring live daily bullion market tickers (24K, 22K, 18K Gold & 999/925 Silver), dynamic price calculation, bilingual Marathi/English support, and direct WhatsApp showroom consultation.',
      features: [
        'Live 24K, 22K & 18K gold rate ticker with automated daily market sync',
        'Dynamic Price Breakdown Modal: Metal Value + Making Charges + 3% GST',
        'Bridal, antique temple jewellery, and diamond solitaire collections',
        '1-click WhatsApp product enquiry with pre-filled SKU code and photo',
        'Integrated Admin CMS dashboard for categories, products, and rate updates'
      ],
      screens: [
        {
          src: '/screenshots/rmk/01_RMK_Jewellers_Hero_Desktop.png',
          title: 'RMK Jewellers Luxury Desktop Homepage & Bullion Ticker',
          desc: 'High-impact Royal Lotus branding, trending bridal collections & live bullion rates header'
        },
        {
          src: '/screenshots/rmk/06_RMK_Product_Catalogue_Collections.png',
          title: 'Dynamic Jewellery Catalogue with Purity & Weight Filters',
          desc: 'Filter by Gold (22K/18K), Antique, Diamond, Occasion, Gross Weight, and Price Range'
        },
        {
          src: '/screenshots/rmk/08_RMK_Live_Price_Breakdown_Modal.png',
          title: 'Real-Time Gold Price Breakdown (Metal + Making + GST)',
          desc: 'Transparent pricing calculator displaying pure metal value, making charges, and 3% GST'
        },
        {
          src: '/screenshots/rmk/03_RMK_Featured_Collections.png',
          title: 'Featured Heritage & Bridal Jewellery Showcase',
          desc: 'Interactive collection cards highlighting bridal necklaces, gold bangles, and diamond rings'
        },
        {
          src: '/screenshots/rmk/07_RMK_Product_Detail_Specs.png',
          title: 'Product Specifications & Hallmark 916 Verification',
          desc: 'Gross weight, stone weight, net metal weight, BIS hallmark certification, and dimensions'
        },
        {
          src: '/screenshots/rmk/12_RMK_Admin_Showroom_Dashboard.png',
          title: 'RMK Admin Dashboard for Products & Daily Metal Rates',
          desc: 'Showroom owners update today\'s bullion market rates and add new catalogue products in seconds'
        }
      ]
    },
    {
      id: 'rmk-mobile',
      name: 'RMK Jewellers – Mobile Experience',
      icon: Smartphone,
      serviceTitle: 'Mobile Application Development',
      badge: 'Client Showcase · RMK Jewellers Mobile',
      summary: 'A fast, touchscreen-optimised mobile shopping experience developed for RMK Jewellers. Designed for smartphone shoppers with 1-tap WhatsApp counter connection, daily bullion rate widgets, and instant festive collections browsing.',
      features: [
        'Optimised touch gestures with smooth swipeable product photo galleries',
        'Mobile bullion widget displaying today\'s 22K/24K gold rates per gram',
        '1-tap WhatsApp consultation with product images and item codes attached',
        'Bilingual regional experience supporting both English and Marathi',
        'Showroom appointment booking modal for bridal trial sessions'
      ],
      screens: [
        {
          src: '/screenshots/rmk/14_RMK_Mobile_Showroom_Home.png',
          title: 'RMK Mobile Showroom Homepage & Daily Gold Rate Widget',
          desc: 'Mobile-first layout with quick category shortcuts and live bullion ticker at the top'
        },
        {
          src: '/screenshots/rmk/15_RMK_Mobile_Product_Detail.png',
          title: 'Mobile Product Detail with 1-Tap WhatsApp Enquiry',
          desc: 'Crystal-clear jewellery photos, BIS hallmark badge, weight breakdown, and direct chat'
        },
        {
          src: '/screenshots/rmk/09_RMK_Showroom_Appointment_Modal.png',
          title: 'Showroom Appointment & Bridal Consultation Modal',
          desc: 'Allows customers to schedule physical showroom visits for bridal set trials'
        },
        {
          src: '/screenshots/rmk/10_RMK_Bilingual_Marathi_Experience.png',
          title: 'Regional Bilingual Experience (English & Marathi)',
          desc: 'Seamless language switching allowing local customers to browse comfortably in their native language'
        }
      ]
    },
    {
      id: 'jewellery-management',
      name: 'Jewellery Management Software',
      icon: Calculator,
      serviceTitle: 'Jewellery Billing Software',
      badge: 'Enterprise Software · JewelleryShopManager',
      summary: 'A complete desktop Jewellery Shop Management System built specifically for jewellery retail showrooms. Features dynamic POS counter billing fetching daily market rates, automatic gross vs net weight calculations, flexible making charges, old gold exchange deduction, GST tax invoice printing, and customer ledger accounts.',
      features: [
        'Dynamic selling price calculation based on daily fluctuating metal market rates',
        'Automatic Net Weight calculation: Gross Weight − Stone Weight',
        'Flexible Making Charges: Percentage (%) or ₹ per gram applied directly at POS',
        'Old Gold Exchange Module: Net Weight × Rate/g − Deduction subtracted instantly',
        'GST-compliant A4 plain paper tax invoice and thermal slip printing with HSN codes',
        'Customer credit/debit ledger balances and supplier inward stock purchase management'
      ],
      screens: [
        {
          src: '/screenshots/billing/03_Billing_POS_Form.png',
          title: 'Counter POS Billing Form with Dynamic Metal Rates',
          desc: 'Multi-metal support (Gold 24K/22K/18K, Silver 925, Platinum) with making charges and old gold deduction'
        },
        {
          src: '/screenshots/billing/02_Dashboard_Overview.png',
          title: 'Showroom Management Dashboard & Inventory Summary',
          desc: 'Real-time sales revenue, daily metal rates, category breakdown, and low stock threshold alerts'
        },
        {
          src: '/screenshots/billing/04_A4_Tax_Invoice_Plain_Paper_Mode.png',
          title: 'GST-Compliant A4 Tax Invoice Printing Layout',
          desc: 'Professional tax invoice showing HSN codes, purity, gross/net weight, SGST/CGST, and terms'
        },
        {
          src: '/screenshots/billing/06_Product_Catalog.png',
          title: 'Jewellery Product Catalog & Barcode Tag Management',
          desc: 'Inventory itemization with SKU, purity grading, making charge presets, and supplier tagging'
        },
        {
          src: '/screenshots/billing/07_Customer_Ledger.png',
          title: 'Customer Credit/Debit Ledger & Due Payment Tracking',
          desc: 'Track outstanding balances, payment debits vs credits, and on-account clearing transactions'
        },
        {
          src: '/screenshots/billing/08_Stock_Management.png',
          title: 'Real-Time Stock Audit History & Low Stock Alerts',
          desc: 'Complete inventory ledger tracking sales, inward stock purchases, and manual adjustments'
        },
        {
          src: '/screenshots/billing/10_Reports_Analytics.png',
          title: 'Sales, Revenue & Daily GST Tax Register Analytics',
          desc: 'Exportable daily, monthly, and custom date range sales reports and valuation summaries'
        }
      ]
    }
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];
  const currentScreen = currentCategory.screens[activeScreenIndex] || currentCategory.screens[0];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveScreenIndex(0);
  };

  const handleEnquireSolution = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-cream-100 relative overflow-hidden border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100/90 border border-gold-300/60 text-gold-800 text-xs sm:text-sm font-semibold mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Real Software & Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight mb-4">
            Our Work: RMK & Jewellery Management Software
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-5" />

          <p className="text-base sm:text-lg text-darkgrey-muted leading-relaxed">
            Explore authentic digital solutions developed by NexoraTech: from the live <strong>RMK Jewellers</strong> omnichannel web & mobile platform to our dedicated <strong>Jewellery Shop Manager</strong> software.
          </p>
        </div>

        {/* 3 Categories Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleTabChange(category.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-md ring-2 ring-gold-400/40'
                    : 'bg-white text-darkgrey border-cream-300 hover:border-gold-400/80 hover:bg-cream-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-gold-600'}`} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Display Card */}
        <div className="bg-white rounded-3xl border border-cream-300 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Solution Details & Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider mb-3">
                  {currentCategory.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900 tracking-tight mb-3">
                  {currentCategory.name}
                </h3>

                <p className="text-sm sm:text-base text-darkgrey-muted leading-relaxed mb-6">
                  {currentCategory.summary}
                </p>

                <div className="space-y-2.5 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900">
                    Key Features & Technical Capabilities:
                  </h4>
                  {currentCategory.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-darkgrey">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action & Note */}
              <div className="pt-6 border-t border-cream-200 space-y-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleEnquireSolution(currentCategory.serviceTitle)}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-charcoal-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-full shadow-gold-sm transition-all group"
                  >
                    <span>Enquire For This Solution</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                <p className="text-[11px] text-darkgrey-muted">
                  * Customised deployment available for independent jewellery shops, wholesale bullions, and multi-counter retail showrooms.
                </p>
              </div>

            </div>

            {/* Right Column: Screen Preview & Thumbnails */}
            <div className="lg:col-span-7">
              
              {/* Main Screen Preview Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-charcoal-950 border-2 border-charcoal-800 shadow-2xl group">
                
                {/* Browser/Device Top Bar */}
                <div className="px-4 py-3 bg-charcoal-900 border-b border-charcoal-800 flex items-center justify-between text-xs text-cream-300">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-cream-400/80 hidden sm:inline">
                      nexoratech://showcase/{activeTab}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setModalImage(currentScreen)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-charcoal-800 hover:bg-charcoal-700 text-gold-300 text-[11px] transition-colors"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Expand High-Res View</span>
                  </button>
                </div>

                {/* Main Screen Image */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-charcoal-900 cursor-pointer flex items-center justify-center"
                  onClick={() => setModalImage(currentScreen)}
                >
                  <img
                    src={currentScreen.src}
                    alt={currentScreen.title}
                    className="w-full h-full object-contain object-top group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                </div>

                {/* Caption Bar */}
                <div className="p-3.5 bg-charcoal-900/95 border-t border-charcoal-800">
                  <h4 className="text-sm font-semibold text-white">
                    {currentScreen.title}
                  </h4>
                  <p className="text-xs text-cream-400">
                    {currentScreen.desc}
                  </p>
                </div>

              </div>

              {/* Screen Selector Thumbnails */}
              <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2">
                {currentCategory.screens.map((screen, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`flex-shrink-0 w-24 sm:w-28 rounded-xl overflow-hidden border-2 transition-all p-0.5 text-left ${
                      activeScreenIndex === idx
                        ? 'border-gold-500 shadow-gold-sm ring-2 ring-gold-400/40'
                        : 'border-cream-300 hover:border-gold-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-[16/10] bg-charcoal-900 rounded-lg overflow-hidden mb-1">
                      <img
                        src={screen.src}
                        alt={screen.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-charcoal-900 truncate block px-1">
                      Screen {idx + 1}
                    </span>
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {modalImage && (
        <ImageModal
          image={modalImage.src}
          title={modalImage.title}
          subtitle={modalImage.desc}
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
        />
      )}
    </section>
  );
}
