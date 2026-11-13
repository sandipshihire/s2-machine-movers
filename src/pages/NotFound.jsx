import React from 'react';
import { ArrowLeft, Home, Phone, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121316] text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-[#1A1D25] border border-[#2B303C] rounded-3xl p-8 sm:p-10 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-[#FF8C00]/15 border border-[#FF8C00]/30 flex items-center justify-center mx-auto text-[#FF8C00]">
          <Wrench className="w-8 h-8" />
        </div>

        <div>
          <span className="text-4xl font-black text-[#FF8C00] font-['Montserrat']">404</span>
          <h1 className="text-2xl font-black text-white font-['Montserrat'] mt-2">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            The page or machine resource you are looking for has been moved or does not exist.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#FF8C00] text-black hover:bg-[#ffa024]"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </a>
          <a
            href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#222530] text-gray-200 border border-[#2F3443]"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF8C00]" />
            <span>Call Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}

