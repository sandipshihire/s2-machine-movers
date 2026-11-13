import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function CTA({ onOpenQuote }) {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#171920] via-[#1A1D24] to-[#171920] border-y border-[#292D38] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#FF8C00]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-[#FF8C00]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#1C1F28] to-[#121317] border-2 border-[#FF8C00]/40 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative Industrial Pattern */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #FF8C00 0, #FF8C00 2px, transparent 0, transparent 40px)'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FF8C00]/20 text-[#FF8C00] text-xs font-extrabold uppercase tracking-widest border border-[#FF8C00]/30">
              Turnkey Mechanical Solutions
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Montserrat'] tracking-tight leading-tight">
              Looking for Reliable <br className="hidden sm:inline" />
              <span className="text-[#FF8C00]">Industrial Machinery Solutions?</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get in touch with S2 Machine Movers for professional industrial machinery shifting, installation and fabrication services.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-extrabold text-black bg-[#FF8C00] hover:bg-[#ffa024] active:bg-[#e07b00] shadow-xl shadow-[#FF8C00]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-[#22252F] hover:bg-[#2B2F3D] border border-[#353A49] transition-all"
              >
                <Phone className="w-4 h-4 text-[#FF8C00]" />
                <span>Call {COMPANY_INFO.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-emerald-300 bg-[#142B20] hover:bg-[#1A382A] border border-emerald-800 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

