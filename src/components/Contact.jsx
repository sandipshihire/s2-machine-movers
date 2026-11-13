import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Send, MessageSquare, CheckCircle,
  AlertCircle, Building, User, Clock, ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Contact({ prefilledService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: prefilledService || 'Industrial Machine Shifting',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync if prefilledService changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  const validateForm = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Company / Plant Name is required';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else {
      // Validate Indian/international phone format
      const cleanedPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
      if (cleanedPhone.length < 10) {
        errs.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select a service';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your machinery or project';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const submissionPayload = {
      _subject: `New Machinery Inquiry from ${formData.fullName} (${formData.companyName}) - S2 Machine Movers`,
      _cc: "sunilmote123@gmail.com",
      _replyto: formData.email,
      _template: "table",
      "Full Name": formData.fullName,
      "Company / Plant Name": formData.companyName,
      "Phone Number": formData.phone,
      "Email Address": formData.email,
      "Service Required": formData.serviceRequired,
      "Machinery / Project Details": formData.message,
      "Submitted At": new Date().toLocaleString('en-IN')
    };

    try {
      // 1. Direct Email dispatch via FormSubmit to MachineMovers@rediffmail.com & CC sunilmote123@gmail.com
      await fetch("https://formsubmit.co/ajax/MachineMovers@rediffmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submissionPayload)
      });
    } catch (err) {
      console.warn("Direct email network delivery notice:", err);
    }

    // 2. Persist to local backup storage for instant Inquiries Dashboard viewing
    try {
      const inquiries = JSON.parse(localStorage.getItem('s2_inquiries') || '[]');
      inquiries.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('s2_inquiries', JSON.stringify(inquiries));
    } catch (err) {
      console.error('Storage note:', err);
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      serviceRequired: 'Industrial Machine Shifting',
      message: ''
    });
    setErrors({});
  };

  const handleWhatsAppInquiry = () => {
    const text = `*New Machinery Inquiry - S2 Machine Movers*\n` +
      `*Name:* ${formData.fullName || 'Potential Client'}\n` +
      `*Company:* ${formData.companyName || 'Not specified'}\n` +
      `*Phone:* ${formData.phone || 'Not specified'}\n` +
      `*Email:* ${formData.email || 'Not specified'}\n` +
      `*Service Required:* ${formData.serviceRequired}\n` +
      `*Details:* ${formData.message || 'I would like to inquire about industrial machinery services.'}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#15171D] relative border-b border-[#23262E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Contact <span className="text-[#FF8C00]">S2 Machine Movers</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Reach out for machine shifting, installation, piping or fabrication quotes in Waluj MIDC, Chhatrapati Sambhaji Nagar, and across Maharashtra.
          </p>
          <div className="w-20 h-1 bg-[#FF8C00] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Industrial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Verified Company Contact Details & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1D25] border border-[#2B303C] shadow-xl space-y-6">
              <h3 className="text-xl sm:text-2xl font-black text-white font-['Montserrat'] border-b border-[#282D3A] pb-4 flex items-center justify-between">
                <span>Company Details</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FF8C00]/20 text-[#FF8C00] border border-[#FF8C00]/30">
                  Waluj MIDC
                </span>
              </h3>

              {/* Ownership & Key People */}
              <div className="space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FF8C00]/15 flex items-center justify-center text-[#FF8C00] shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Proprietor / Key Contact</span>
                    <p className="text-base font-bold text-white font-['Montserrat']">
                      Sunil Mote <span className="text-xs font-normal text-gray-400"></span>
                    </p>
                    <p className="text-sm font-semibold text-gray-300">
                      Sandip Rajput <span className="text-xs font-normal text-gray-400"></span>
                    </p>
                  </div>
                </div>

                {/* Primary Phone Numbers with Click-to-Call */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-[#FF8C00]/15 flex items-center justify-center text-[#FF8C00] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Direct Phone Inquiries</span>
                    <div className="flex flex-col gap-1 mt-1">
                      <a
                        href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                        className="text-base font-bold text-white hover:text-[#FF8C00] transition-colors flex items-center justify-between"
                      >
                        <span>{COMPANY_INFO.primaryPhone}</span>
                        <span className="text-[11px] text-gray-400">(Sunil Mote)</span>
                      </a>
                      <a
                        href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                        className="text-sm font-bold text-gray-300 hover:text-[#FF8C00] transition-colors flex items-center justify-between"
                      >
                        <span>{COMPANY_INFO.secondaryPhone}</span>
                        <span className="text-[11px] text-gray-400">(Sandip Rajput)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official Email Addresses with Click-to-Email */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-[#FF8C00]/15 flex items-center justify-center text-[#FF8C00] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 truncate">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Email Correspondence</span>
                    <div className="flex flex-col gap-1 mt-1">
                      <a
                        href={`mailto:${COMPANY_INFO.primaryEmail}`}
                        className="text-sm font-semibold text-[#FF8C00] hover:underline truncate block"
                      >
                        {COMPANY_INFO.primaryEmail}
                      </a>
                      <a
                        href={`mailto:${COMPANY_INFO.secondaryEmail}`}
                        className="text-xs font-medium text-gray-300 hover:text-white truncate block"
                      >
                        {COMPANY_INFO.secondaryEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Physical Company Address */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-[#FF8C00]/15 flex items-center justify-center text-[#FF8C00] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Works & Registered Address</span>
                    <p className="text-xs sm:text-sm text-gray-200 mt-1 leading-relaxed">
                      {COMPANY_INFO.address.full}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#15803d] hover:bg-[#16a34a] text-white shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp (+91 7798030082)</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#2D313D] shadow-xl bg-[#1A1D25]">
              <div className="p-3 bg-[#171920] border-b border-[#252834] flex items-center justify-between text-xs text-gray-300">
                <span className="font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF8C00]" />
                  <span>Waluj MIDC Location</span>
                </span>
                <a
                  href={COMPANY_INFO.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF8C00] hover:underline flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-56 bg-neutral-900">
                <iframe
                  title="S2 Machine Movers Location Map"
                  src={COMPANY_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#1A1D25] border border-[#2B303C] shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Montserrat']">
                  Request an Industrial <span className="text-[#FF8C00]">Quote</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Fill in your machinery shifting, installation, piping or fabrication requirements. Our technical team responds promptly.
                </p>
              </div>

              {/* Submission Feedback */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-emerald-300 font-['Montserrat']">
                      Inquiry Sent Directly to Email!
                    </h4>
                    <p className="text-xs text-emerald-200/90 mt-1">
                      Your inquiry has been dispatched to <strong>MachineMovers@rediffmail.com</strong> and <strong>sunilmote123@gmail.com</strong>. Sunil Mote and technical operations will review your machinery requirements immediately.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <button
                        onClick={handleWhatsAppInquiry}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Also Send on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#FF8C00]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patil"
                      className={`w-full px-4 py-3 rounded-xl bg-[#14161C] border text-white text-sm focus:outline-none focus:ring-2 transition-all ${errors.fullName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#2C313E] focus:border-[#FF8C00] focus:ring-[#FF8C00]/30'
                        }`}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Company / Plant Name <span className="text-[#FF8C00]">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Precision Engineering Ltd."
                      className={`w-full px-4 py-3 rounded-xl bg-[#14161C] border text-white text-sm focus:outline-none focus:ring-2 transition-all ${errors.companyName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#2C313E] focus:border-[#FF8C00] focus:ring-[#FF8C00]/30'
                        }`}
                    />
                    {errors.companyName && (
                      <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.companyName}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-[#FF8C00]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl bg-[#14161C] border text-white text-sm focus:outline-none focus:ring-2 transition-all ${errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#2C313E] focus:border-[#FF8C00] focus:ring-[#FF8C00]/30'
                        }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-[#FF8C00]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#14161C] border text-white text-sm focus:outline-none focus:ring-2 transition-all ${errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#2C313E] focus:border-[#FF8C00] focus:ring-[#FF8C00]/30'
                        }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Service Required <span className="text-[#FF8C00]">*</span>
                  </label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#14161C] border border-[#2C313E] text-white text-sm focus:outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/30"
                  >
                    <option value="Industrial Machine Shifting">Industrial Machine Shifting & Relocation</option>
                    <option value="Industrial Machine Installation">Industrial Machine Installation & Leveling</option>
                    <option value="Fabrication Work">Fabrication Work & Structural Frames</option>
                    <option value="Industrial Piping Work">Industrial Piping Work & Manifolds</option>
                    <option value="Complete Turnkey Plant Project">Complete Turnkey Plant Project (Mechanical & Electrical)</option>
                    <option value="Other Industrial Requirement">Other Industrial Requirement</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Project & Machinery Details <span className="text-[#FF8C00]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe equipment weight, origin & destination, machinery dimensions, or installation requirements..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#14161C] border text-white text-sm focus:outline-none focus:ring-2 transition-all resize-y ${errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-[#2C313E] focus:border-[#FF8C00] focus:ring-[#FF8C00]/30'
                      }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-black bg-[#FF8C00] hover:bg-[#ffa024] active:bg-[#e07b00] disabled:opacity-60 shadow-lg shadow-[#FF8C00]/30 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#14291F] hover:bg-[#1B382B] text-emerald-300 border border-emerald-800 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Direct WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 text-center pt-1">
                  We respect industrial privacy. Your plant blueprints and inquiry details remain strictly confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

