import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function QuickQuoteModal({ isOpen, onClose, defaultService }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: defaultService || 'Industrial Machine Shifting',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[\s\-\(\)\+]/g, '').length < 10) {
      errs.phone = 'Enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please specify machinery weight or requirements';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const payload = {
      _subject: `New Quick Quote Request from ${formData.fullName} (${formData.companyName}) - S2 Machine Movers`,
      _cc: "sunilmote123@gmail.com, Sandiprajput33@gmail.com",
      _replyto: formData.email,
      _template: "table",
      "Full Name": formData.fullName,
      "Company / Plant Name": formData.companyName,
      "Phone Number": formData.phone,
      "Email Address": formData.email,
      "Service Requested": formData.serviceRequired,
      "Machinery Specifications": formData.message,
      "Timestamp": new Date().toLocaleString('en-IN')
    };

    try {
      // Direct Email dispatch to MachineMovers@rediffmail.com
      await fetch("https://formsubmit.co/ajax/MachineMovers@rediffmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn("Direct email delivery notice:", err);
    }

    try {
      const list = JSON.parse(localStorage.getItem('s2_inquiries') || '[]');
      list.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('s2_inquiries', JSON.stringify(list));
    } catch (e) {
      console.error(e);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleWhatsApp = () => {
    const text = `*Quick Quote Request - S2 Machine Movers*\n` +
      `*Name:* ${formData.fullName || 'Client'}\n` +
      `*Company:* ${formData.companyName || 'Not specified'}\n` +
      `*Phone:* ${formData.phone || 'Not specified'}\n` +
      `*Email:* ${formData.email || 'Not specified'}\n` +
      `*Service:* ${formData.serviceRequired}\n` +
      `*Details:* ${formData.message || 'Looking for industrial machinery quote.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#191B22] border border-[#2D313E] rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-7 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#252834]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
          <span className="px-2.5 py-1 rounded bg-[#FF8C00]/20 text-[#FF8C00] text-xs font-bold uppercase tracking-wider border border-[#FF8C00]/30">
            Rapid Quote
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white font-['Montserrat'] mt-2">
            Get an Industrial <span className="text-[#FF8C00]">Quote</span>
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Fast turnaround for machinery moving, installation, piping, and fabrication.
          </p>
        </div>

        {isSuccess ? (
          <div className="p-5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-3">
            <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="font-bold text-white text-base font-['Montserrat']">
              Quote Request Sent to Email!
            </h4>
            <p className="text-xs text-gray-300">
              Your inquiry has been emailed directly to <strong>MachineMovers@rediffmail.com</strong> and <strong>sunilmote123@gmail.com</strong>. Sunil Mote will review your equipment specifications promptly.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Also Follow up on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="text-xs text-gray-400 hover:text-white underline"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#14151B] border border-[#2B2F3C] text-sm text-white focus:border-[#FF8C00] focus:outline-none"
              />
              {errors.fullName && <span className="text-[11px] text-red-400">{errors.fullName}</span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Plant / Company"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#14151B] border border-[#2B2F3C] text-sm text-white focus:border-[#FF8C00] focus:outline-none"
                />
                {errors.companyName && <span className="text-[11px] text-red-400">{errors.companyName}</span>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#14151B] border border-[#2B2F3C] text-sm text-white focus:border-[#FF8C00] focus:outline-none"
                />
                {errors.phone && <span className="text-[11px] text-red-400">{errors.phone}</span>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#14151B] border border-[#2B2F3C] text-sm text-white focus:border-[#FF8C00] focus:outline-none"
              />
              {errors.email && <span className="text-[11px] text-red-400">{errors.email}</span>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Service Required *
              </label>
              <select
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#14151B] border border-[#2B2F3C] text-sm text-white focus:border-[#FF8C00] focus:outline-none"
              >
                <option value="Industrial Machine Shifting">Industrial Machine Shifting</option>
                <option value="Industrial Machine Installation">Industrial Machine Installation</option>
                <option value="Fabrication Work">Fabrication Work</option>
                <option value="Industrial Piping Work">Industrial Piping Work</option>
                <option value="Turnkey Mechanical Shifting & Installation">Turnkey Mechanical Project</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Brief Requirement / Machinery Details *
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Machine tonnage, origin/destination, or site specs..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#14151B] border border-[#2B2F3C] text-sm text-white focus:border-[#FF8C00] focus:outline-none resize-none"
              />
              {errors.message && <span className="text-[11px] text-red-400">{errors.message}</span>}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-4 rounded-xl text-sm font-bold bg-[#FF8C00] hover:bg-[#ffa024] text-black shadow-lg shadow-[#FF8C00]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Request Quote'}</span>
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="p-3 rounded-xl bg-[#142A20] hover:bg-[#1A382A] text-emerald-400 border border-emerald-900"
                title="Send via WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

