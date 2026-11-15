import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, ShieldCheck, ChevronRight } from 'lucide-react';
import logoImg from '../assets/images/logo_optimized.webp';
import { COMPANY_INFO } from '../data/company';

export default function Footer({ onOpenInquiries }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1013] text-gray-400 border-t border-[#232630] relative">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src={logoImg}
                alt="S2 Machine Movers"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-white font-['Montserrat']">
                  S2 <span className="text-[#FF8C00]">MACHINE MOVERS</span>
                </span>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                  Relocation & Installation
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              S2 Machine Movers is dedicated to providing reliable industrial machinery shifting, installation and fabrication solutions. Delivering efficient, safe and professional services from Waluj MIDC across Maharashtra and India.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#142B20] text-emerald-400 border border-emerald-900/60 hover:bg-[#1C3B2D] transition-colors text-xs font-semibold"
                aria-label="Chat with S2 Machine Movers on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Support</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1D2028] text-gray-200 border border-[#2D313D] hover:text-[#FF8C00] transition-colors text-xs font-semibold"
                aria-label="Call Sunil Mote"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF8C00]" />
                <span>{COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Montserrat'] border-l-2 border-[#FF8C00] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Home', 'About Us', 'Services', 'Projects', 'Why Choose Us', 'Contact'].map((item) => {
                const anchor = '#' + item.toLowerCase().replace(/\s+/g, '-');
                return (
                  <li key={item}>
                    <a
                      href={anchor}
                      className="text-gray-400 hover:text-[#FF8C00] transition-colors inline-flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF8C00]/60" />
                      <span>{item}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Montserrat'] border-l-2 border-[#FF8C00] pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                'Industrial Machine Shifting',
                'Machinery Relocation & Rigging',
                'Industrial Machine Installation',
                'Optical Theodolite Leveling',
                'Structural & Industrial Fabrication',
                'Process Piping Installation',
                'Turnkey Mechanical Solutions'
              ].map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#FF8C00] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF8C00]/60" />
                    <span>{srv}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Montserrat'] border-l-2 border-[#FF8C00] pl-2.5">
              Contact Details
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-snug">
                  {COMPANY_INFO.address.full}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${COMPANY_INFO.primaryPhoneRaw}`} className="text-gray-200 hover:text-[#FF8C00]">
                    {COMPANY_INFO.primaryPhone} (Sunil Mote)
                  </a>
                  <a href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`} className="text-gray-400 hover:text-[#FF8C00]">
                    {COMPANY_INFO.secondaryPhone} (Sandip Rajput)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 truncate text-xs">
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-[#FF8C00] hover:underline truncate" title="Primary Official Email">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="text-gray-300 hover:text-white truncate" title="Sunil Mote">
                    {COMPANY_INFO.secondaryEmail} <span className="text-[11px] text-gray-400">(Sunil Mote)</span>
                  </a>
                  {COMPANY_INFO.tertiaryEmail && (
                    <a href={`mailto:${COMPANY_INFO.tertiaryEmail}`} className="text-gray-400 hover:text-white truncate" title="Sandip Rajput">
                      {COMPANY_INFO.tertiaryEmail} <span className="text-[11px] text-gray-500">(Sandip Rajput)</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Back-to-Top Bar */}
      <div className="border-t border-[#1F222B] bg-[#0B0C0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 S2 Machine Movers. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenInquiries}
              className="text-xs font-semibold text-gray-400 hover:text-[#FF8C00] transition-colors underline cursor-pointer"
            >
              📋 View Received Inquiries
            </button>
            <span>Machine Relocation & Industrial Moving</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1A1D24] hover:bg-[#FF8C00] text-gray-300 hover:text-black transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
