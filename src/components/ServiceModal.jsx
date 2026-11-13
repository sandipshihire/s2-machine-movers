import React from 'react';
import { X, CheckCircle2, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ServiceModal({ service, onClose, onOpenQuote }) {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#1A1D24] border border-[#2F3442] rounded-2xl overflow-hidden shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-black">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover filter brightness-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D24] via-[#1A1D24]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-[#FF8C00] text-white hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-1 rounded bg-[#FF8C00] text-black text-xs font-bold uppercase tracking-wider">
              Service Scope
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-['Montserrat'] mt-2">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-sm font-bold text-[#FF8C00] uppercase tracking-wider mb-2 font-['Montserrat']">
              Overview
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-['Montserrat']">
              Capabilities & Execution Scope
            </h4>
            <div className="space-y-2.5">
              {service.detailedScope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8C00] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#14161C] border-t border-[#282C38] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#20232C] text-gray-200 hover:text-white border border-[#2F3442]"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF8C00]" />
              <span>Call: {COMPANY_INFO.primaryPhone}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello S2 Machine Movers, I am inquiring about ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#142A20] text-emerald-300 border border-emerald-900"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(service.title);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-[#FF8C00] hover:bg-[#ffa024] text-black shadow-lg shadow-[#FF8C00]/20 cursor-pointer"
          >
            <span>Request Quote for this Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

