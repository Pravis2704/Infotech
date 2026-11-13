import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../config/companyConfig';
import { Phone, Mail, MessageSquare, MapPin, Clock, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export default function ContactSection({ selectedService, setSelectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phoneNumber: '',
    emailAddress: '',
    serviceRequired: selectedService || 'Website Designing & Development',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  // Sync if selectedService prop changes from outside (e.g. clicking a card)
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: selectedService,
      }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your jewellery business or shop name.';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number.';
    } else if (!/^[0-9+() -]{7,18}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your requirements.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Generate formatted message text
  const generateMessageBody = () => {
    return `Hello NexoraTech,

I would like to enquire about your services:
- Name: ${formData.fullName.trim()}
- Business: ${formData.businessName.trim()}
- Phone: ${formData.phoneNumber.trim()}
- Email: ${formData.emailAddress.trim()}
- Service Required: ${formData.serviceRequired}

Project Details:
${formData.message.trim()}

Sent from NexoraTech Website Enquiry Form.`;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const messageText = generateMessageBody();
    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.contact.whatsappClean}?text=${encoded}`;
    
    setSubmittedSuccess(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`NexoraTech Enquiry: ${formData.serviceRequired} - ${formData.businessName}`);
    const body = encodeURIComponent(generateMessageBody());
    const mailtoUrl = `mailto:${COMPANY_CONFIG.contact.email}?subject=${subject}&body=${body}`;

    setSubmittedSuccess(true);
    window.location.href = mailtoUrl;
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight mb-4">
            Let's Build Something Great Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-5" />
          <p className="text-base sm:text-lg text-darkgrey-muted leading-relaxed">
            Have an idea or looking for a digital solution for your business? Get in touch with us. We would be happy to discuss your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Working Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-charcoal-900 border-b border-cream-200 pb-4">
                Contact Information
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-700 flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-darkgrey-muted uppercase tracking-wider block">
                    Phone Call & Support
                  </span>
                  <a
                    href={`tel:${COMPANY_CONFIG.contact.phoneClean}`}
                    className="text-base font-bold text-charcoal-900 hover:text-gold-600 transition-colors"
                  >
                    {COMPANY_CONFIG.contact.phone}
                  </a>
                  <p className="text-xs text-darkgrey-muted mt-0.5">
                    Direct showroom consultation
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-darkgrey-muted uppercase tracking-wider block">
                    WhatsApp Direct Chat
                  </span>
                  <a
                    href={`https://wa.me/${COMPANY_CONFIG.contact.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-charcoal-900 hover:text-emerald-600 transition-colors"
                  >
                    {COMPANY_CONFIG.contact.whatsapp}
                  </a>
                  <p className="text-xs text-darkgrey-muted mt-0.5">
                    Fastest response for demos and pricing
                  </p>
                </div>
              </div>

              {/* Business Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-darkgrey-muted uppercase tracking-wider block">
                    Business Email
                  </span>
                  <a
                    href={`mailto:${COMPANY_CONFIG.contact.email}`}
                    className="text-base font-bold text-charcoal-900 hover:text-gold-600 transition-colors break-all"
                  >
                    {COMPANY_CONFIG.contact.email}
                  </a>
                  <p className="text-xs text-darkgrey-muted mt-0.5">
                    Formal proposals & custom software RFPs
                  </p>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-4 pt-2 border-t border-cream-200">
                <div className="w-11 h-11 rounded-2xl bg-cream-200 flex items-center justify-center text-charcoal-800 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-darkgrey-muted uppercase tracking-wider block">
                    Head Office Location
                  </span>
                  <p className="text-sm text-darkgrey leading-relaxed mt-1">
                    {COMPANY_CONFIG.contact.location}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-cream-200 flex items-center justify-center text-charcoal-800 flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-darkgrey-muted uppercase tracking-wider block">
                    Consultation Hours
                  </span>
                  <p className="text-sm font-semibold text-charcoal-900 mt-1">
                    {COMPANY_CONFIG.contact.businessHours}
                  </p>
                  <p className="text-xs text-darkgrey-muted">
                    {COMPANY_CONFIG.contact.workingDays}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Transparent Notice */}
            <div className="p-5 rounded-2xl bg-gold-50/70 border border-gold-200 text-gold-950 text-xs leading-relaxed">
              <span className="font-bold block mb-1">Direct & Transparent Communication:</span>
              As a static, secure company website, submitting this enquiry opens a pre-composed message directly via WhatsApp or your preferred email application. No confidential data is stored in unverified third-party databases.
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-charcoal-900 tracking-tight">
                  Send Your Requirement
                </h3>
                <p className="text-sm text-darkgrey-muted mt-1">
                  Fill in your details below and submit to connect with our jewellery technology team immediately.
                </p>
              </div>

              {submittedSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">Thank you for your enquiry!</p>
                    <p className="mt-0.5">
                      Your enquiry has been dispatched. Our team will review your requirements and respond promptly.
                    </p>
                  </div>
                </div>
              )}

              <form noValidate className="space-y-5">
                
                {/* Full Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Soni"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-900 placeholder:text-darkgrey-light focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-cream-300 focus:border-gold-500 focus:ring-gold-400/30'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Business Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Soni & Sons Jewellers"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-900 placeholder:text-darkgrey-light focus:outline-none focus:ring-2 transition-all ${
                        errors.businessName
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-cream-300 focus:border-gold-500 focus:ring-gold-400/30'
                      }`}
                    />
                    {errors.businessName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.businessName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Number & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 98765 00000"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-900 placeholder:text-darkgrey-light focus:outline-none focus:ring-2 transition-all ${
                        errors.phoneNumber
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-cream-300 focus:border-gold-500 focus:ring-gold-400/30'
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phoneNumber}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="jeweller@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-900 placeholder:text-darkgrey-light focus:outline-none focus:ring-2 transition-all ${
                        errors.emailAddress
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-cream-300 focus:border-gold-500 focus:ring-gold-400/30'
                      }`}
                    />
                    {errors.emailAddress && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.emailAddress}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    Service Required <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-500 cursor-pointer"
                  >
                    <option value="Website Designing & Development">
                      Website Designing & Development (Catalogue / E-Commerce)
                    </option>
                    <option value="Mobile Application Development">
                      Mobile Application Development (Android Jewellery App)
                    </option>
                    <option value="Jewellery Billing Software">
                      Jewellery Billing Software (Desktop POS & Inventory)
                    </option>
                    <option value="Complete Digital Package">
                      Complete Digital Package (Website + Mobile App + Billing)
                    </option>
                    <option value="Other">
                      Other / Custom Technical Solution
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    Project Requirements / Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your jewellery shop, number of counters, requirement for live gold rates, barcode tags, etc..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-900 placeholder:text-darkgrey-light focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                        : 'border-cream-300 focus:border-gold-500 focus:ring-gold-400/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Actions */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
                  
                  {/* WhatsApp Submission (Primary) */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-charcoal-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 rounded-full shadow-gold-sm hover:shadow-gold-glow transition-all"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Send via WhatsApp</span>
                  </button>

                  {/* Mailto Submission (Secondary) */}
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-charcoal-900 hover:text-white bg-cream-200 hover:bg-charcoal-900 border border-cream-300 hover:border-charcoal-900 rounded-full transition-all"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Send via Email</span>
                  </button>

                </div>

                {/* Copy Message Option for Client Ease */}
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(generateMessageBody(), 'message')}
                    className="inline-flex items-center gap-1.5 text-xs text-darkgrey-muted hover:text-gold-700 transition-colors"
                  >
                    {copiedType === 'message' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Enquiry text copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy enquiry text to clipboard</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
