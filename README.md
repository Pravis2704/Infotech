# NexoraTech – Official Company Website

> **Tagline:** *From Ideas to Digital Solutions.*  
> **Specialisation:** Smart Digital Solutions for Jewellery Businesses (Websites, Mobile Apps & Billing Software).

---

## 🌟 Overview

This is the official company website for **NexoraTech**, crafted with a modern luxury aesthetic inspired by high-end jewellery brands and cutting-edge software engineering.

The website prominently showcases our flagship solutions:
1. **RMK Jewellers Web Catalogue & E-Commerce Platform:** Live bullion rates ticker (24K, 22K, 18K Gold & 999/925 Silver), dynamic price breakdown modal (Metal + Making + 3% GST), bridal collections, bilingual English/Marathi support, and direct WhatsApp showroom consultation.
2. **RMK Jewellers Mobile Experience:** Mobile-first showroom catalogue, daily gold rate widgets, touch-friendly hallmark specs, and 1-tap WhatsApp consultation.
3. **Jewellery Shop Manager (Jewellery Management Software):** Dedicated desktop management & POS billing system with dynamic metal market rates, gross vs net weight calculations, flexible making charges (% or ₹/g), old gold exchange deduction, GST A4 tax invoice printing, and customer credit ledgers.

The website is a fast, SEO-friendly, fully responsive static web application developed using **React 18**, **Vite**, and **Tailwind CSS**. It contains zero complex backend dependencies, no database requirements, no login walls, and no bloated admin dashboards.

---

## 🎨 Design System & Palette

- **Primary:** Dark Charcoal / Black (`#171717`, `#111113`, `#0B0B0D`)
- **Secondary / Accent:** Warm Gold (`#C69235`, `#DAAA46`)
- **Light Accent:** Cream / Off-White (`#FAF8F3`, `#FCFAF6`)
- **Text:** Dark Grey (`#292929`, `#636260`)
- **Highlights:** Light Gold Shimmer (`#E8C77E`, `#F5DF9E`)
- **Typography:** *Plus Jakarta Sans* (Modern Tech Sans-Serif) & *Playfair Display* (Luxury Serif Accent)

---

## 📁 Project Structure

```
nexoratech/
├── public/
│   ├── images/
│   │   ├── hero-jewellery.jpg        # Hero luxury necklace on velvet bust
│   │   ├── why-us-bangles.jpg        # Gold bangles on silk cloth
│   │   ├── service-web.jpg           # RMK Jewellers web catalogue preview
│   │   ├── service-mobile.jpg        # RMK Jewellers mobile app preview
│   │   └── service-billing.jpg       # Jewellery Shop Manager POS preview
│   ├── screenshots/
│   │   ├── rmk/                      # 16 authentic screenshots of RMK Jewellers (Desktop & Mobile)
│   │   └── billing/                  # 9 authentic screenshots of Jewellery Shop Manager
│   ├── logo.svg                      # Custom vector geometric 'N' logo mark
│   └── favicon.ico
├── src/
│   ├── config/
│   │   └── companyConfig.js          # Centralised configuration file for all contact details
│   ├── components/
│   │   ├── Navbar.jsx                # Sticky responsive navbar with mobile drawer
│   │   ├── Hero.jsx                  # Hero section with dual CTAs and gold wave divider
│   │   ├── Services.jsx              # 3 main service cards with Learn More modals
│   │   ├── ServiceModal.jsx          # Deep-dive feature modal for each service
│   │   ├── WhyChooseUs.jsx           # 6 core pillars & gold bangles showcase
│   │   ├── SolutionsShowcase.jsx     # Interactive showcase: RMK Web, RMK Mobile & Jewellery Management Software
│   │   ├── AboutUs.jsx               # Company mission, tech stack & jewellery pillars
│   │   ├── ContactSection.jsx        # Bottom contact form with WhatsApp/Email dispatch
│   │   ├── Footer.jsx                # Footer with quick links, services & social placeholders
│   │   ├── FloatingWhatsApp.jsx      # Instant floating WhatsApp enquiry button
│   │   └── ImageModal.jsx            # Lightbox zoom viewer for software screenshots
│   ├── App.jsx                       # Main application shell
│   ├── index.css                     # Tailwind directives, custom scrollbar & utilities
│   └── main.jsx                      # React entry point
├── index.html                        # SEO title, meta tags, and Google Fonts
├── package.json                      # Project metadata & scripts
├── tailwind.config.js                # Custom color extensions, fonts & box shadows
└── vite.config.js                    # Vite configuration
```

---

## ⚙️ Centralised Configuration

All company contact details, social links, and phone numbers are managed centrally from **`src/config/companyConfig.js`**:

```javascript
export const COMPANY_CONFIG = {
  name: "NexoraTech",
  tagline: "From Ideas to Digital Solutions.",
  contact: {
    phone: "+91 98765 43210",
    phoneClean: "919876543210",
    email: "contact@nexoratech.com",
    whatsapp: "+91 98765 43210",
    whatsappClean: "919876543210",
    location: "402, Jewel Plaza, Zaveri Bazaar Road, Mumbai, Maharashtra 400002",
    businessHours: "Monday – Saturday: 10:00 AM – 7:30 PM IST",
  },
  social: {
    instagram: "https://instagram.com/nexoratech",
    facebook: "https://facebook.com/nexoratech",
    linkedin: "https://linkedin.com/company/nexoratech",
    youtube: "https://youtube.com/@nexoratech",
    twitter: "https://twitter.com/nexoratech",
  }
};
```

---

## 🚀 Installation & Running

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### 1. Development Mode
Run the local Vite development server with Hot Module Replacement:
```bash
cd nexoratech
npm run dev
```
Open your browser at `http://localhost:5173`.

### 2. Production Build
Compile and bundle optimized static assets:
```bash
npm run build
```
The optimized output is generated inside the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📄 License
© 2026 NexoraTech. All Rights Reserved.
