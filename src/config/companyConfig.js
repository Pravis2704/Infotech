/**
 * NexoraTech Central Company Configuration
 * Update company contact details, services, and branding from this single file.
 */

export const COMPANY_CONFIG = {
  name: "NexoraTech",
  tagline: "From Ideas to Digital Solutions.",
  shortDescription: "Smart digital solutions for jewellery businesses, including custom websites, mobile applications, and reliable jewellery billing software.",
  foundedYear: 2026,

  // Contact Information
  contact: {
    phone: "+91 98765 43210",
    phoneClean: "919876543210",
    email: "contact@nexoratech.com",
    supportEmail: "support@nexoratech.com",
    whatsapp: "+91 98765 43210",
    whatsappClean: "919876543210",
    location: "402, Jewel Plaza, Zaveri Bazaar Road, Mumbai, Maharashtra 400002",
    businessHours: "Monday – Saturday: 10:00 AM – 7:30 PM IST",
    workingDays: "Monday to Saturday (Sunday Closed)",
  },

  // Social Links (Configurable placeholders)
  social: {
    instagram: "https://instagram.com/nexoratech",
    facebook: "https://facebook.com/nexoratech",
    linkedin: "https://linkedin.com/company/nexoratech",
    youtube: "https://youtube.com/@nexoratech",
    twitter: "https://twitter.com/nexoratech",
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Our Work", href: "#showcase" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ],

  // Core Services
  services: [
    {
      id: "website-designing",
      title: "Website Designing & Development",
      shortTitle: "Website Designing",
      tagline: "High-converting online presence for modern jewellers",
      description: "We create modern, responsive and attractive websites that help jewellery businesses showcase their collections and reach more customers.",
      image: "/images/service-web.jpg",
      features: [
        "Jewellery catalogue websites",
        "Dynamic product management",
        "E-commerce websites",
        "Live gold rate integration",
        "WhatsApp enquiry integration",
        "Payment gateway integration"
      ],
      benefits: [
        "High-definition zoom for intricate jewellery details",
        "Mobile-first responsive design for luxury shoppers",
        "Real-time gold rate price calculation for products",
        "Search engine optimized for local jewellery store ranking"
      ]
    },
    {
      id: "mobile-app-development",
      title: "Mobile Application Development",
      shortTitle: "Mobile App Development",
      tagline: "Convenient shopping & loyalty on customers' smartphones",
      description: "We develop user-friendly mobile applications that help jewellery businesses connect with customers and provide a convenient shopping experience.",
      image: "/images/service-mobile.jpg",
      features: [
        "Android applications",
        "Digital jewellery catalogues",
        "Product browsing",
        "Customer accounts",
        "Shopping cart and checkout",
        "Gold rate display",
        "Order management"
      ],
      benefits: [
        "Instant push notifications for new designs and festive offers",
        "Saved wishlist and gold booking schemes integration",
        "Fast one-click checkout and local payment options",
        "Smooth navigation designed specifically for jewellery buyers"
      ]
    },
    {
      id: "jewellery-billing-software",
      title: "Jewellery Billing Software",
      shortTitle: "Jewellery Billing Software",
      tagline: "Effortless POS, inventory, GST & old-gold calculations",
      description: "Manage your jewellery shop efficiently with easy-to-use billing and inventory management software.",
      image: "/images/service-billing.jpg",
      features: [
        "Gold and silver billing",
        "22K, 24K and 18K rate management",
        "Making charges and GST calculations",
        "Inventory management",
        "Purchase and sales management",
        "Old gold exchange",
        "Customer and supplier management",
        "Reports and invoice printing"
      ],
      benefits: [
        "Automatic net weight and purity calculation in seconds",
        "A4 and thermal roll invoice printing with barcode tags",
        "Old gold exchange valuation with pure metal deduction",
        "100% offline desktop stability with secure local data backup"
      ]
    }
  ],

  // Why Choose Us Pillars
  whyChooseUs: [
    {
      title: "Solutions Designed for Jewellery Businesses",
      description: "We specialise strictly in the jewellery domain. We understand karats, gross vs net weight, stone charges, and traditional billing workflows.",
      icon: "Gem"
    },
    {
      title: "Affordable Development Packages",
      description: "Transparent, honest pricing tailored to small family jewellery shops as well as multi-counter jewellery showrooms.",
      icon: "BadgePercent"
    },
    {
      title: "Modern & User-Friendly Designs",
      description: "Intuitive interfaces that require zero technical training for your sales counter staff and delight your retail customers.",
      icon: "LayoutTemplate"
    },
    {
      title: "Customised Software Solutions",
      description: "Tailored to your specific retail, wholesale, or manufacturing processes rather than one-size-fits-all generic templates.",
      icon: "Sliders"
    },
    {
      title: "Reliable Technical Support",
      description: "Dedicated assistance via phone and WhatsApp whenever you need invoice customizations or product catalogue updates.",
      icon: "Headphones"
    },
    {
      title: "Focus on Quality and Security",
      description: "Robust data protection, automated database backups, and strict compliance with Indian GST and hallmark standards.",
      icon: "ShieldCheck"
    }
  ]
};
