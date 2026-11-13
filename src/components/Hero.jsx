import React from 'react';
import { ArrowRight, ChevronRight, Truck, Wrench, Shield, CheckCircle2, PhoneCall } from 'lucide-react';
import heroBg from '../assets/images/project_p3_img1.jpeg';
import { COMPANY_INFO } from '../data/company';

export default function Hero({ onOpenQuote }) {
  const highlightCards = [
    {
      title: "Industrial Machine Shifting",
      desc: "Turnkey equipment relocation, crane rigging, safe loading & unloading across Maharashtra & pan-India.",
      icon: Truck,
      link: "#services"
    },
    {
      title: "Machine Installation",
      desc: "Precision optical theodolite leveling, equipment positioning, mechanical assembly & electrical integration.",
      icon: Wrench,
      link: "#services"
    },
    {
      title: "Fabrication Services",
      desc: "Custom industrial structural fabrication, high-pressure piping manifolds, and tailored plant modifications.",
      icon: Shield,
      link: "#services"
    }
  ];

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#121316]">
      {/* Background Industrial Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Heavy Industrial Machinery Shifting and Installation"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-110"
        />
        {/* Multi-layer Gradient Dark Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101114]/95 via-[#121316]/90 to-[#121316]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-[#101114]/80" />
        
        {/* Subtle Industrial Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FF8C00 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF8C00]/15 border border-[#FF8C00]/30 text-[#FF8C00] text-xs sm:text-sm font-semibold mb-6 tracking-wide backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF8C00] animate-ping" />
            <span>Industrial Machinery Shifting & Installation Specialists • Waluj MIDC</span>
          </div>

          {/* Primary H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-['Montserrat'] tracking-tight leading-[1.15] mb-6">
            Reliable Industrial <br />
            <span className="text-[#FF8C00] underline decoration-[#FF8C00]/40 decoration-4 underline-offset-8">
              Machinery Shifting
            </span> <br />
            & Installation Solutions
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl">
            {COMPANY_INFO.subheading}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold text-black bg-[#FF8C00] hover:bg-[#ffa024] active:bg-[#e07b00] shadow-xl shadow-[#FF8C00]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold text-white bg-[#1F2229]/90 hover:bg-[#282C35] border border-[#353A47] hover:border-[#FF8C00]/60 transition-all cursor-pointer backdrop-blur-sm"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-5 h-5 text-[#FF8C00]" />
            </a>
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
              className="inline-flex sm:hidden items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-gray-200 bg-[#16181F] border border-[#2B2F3A]"
            >
              <PhoneCall className="w-4 h-4 text-[#FF8C00]" />
              <span>Call: {COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-gray-300 border-t border-gray-700/60 max-w-xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0" />
              <span>Turnkey Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0" />
              <span>Safety Certified Team</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0" />
              <span>Precision Optical Alignment</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Highlight Cards positioned at bottom of Hero */}
      <div className="relative z-10 border-t border-[#252830] bg-[#14161B]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <a
                  key={idx}
                  href={card.link}
                  className="group p-4 sm:p-5 rounded-xl bg-[#1A1D24] border border-[#282C36] hover:border-[#FF8C00]/60 hover:bg-[#20242D] transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#FF8C00]/15 border border-[#FF8C00]/30 flex items-center justify-center shrink-0 group-hover:bg-[#FF8C00] group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6 text-[#FF8C00] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-['Montserrat'] group-hover:text-[#FF8C00] transition-colors flex items-center gap-1.5">
                      <span>{card.title}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF8C00] transition-transform group-hover:translate-x-1" />
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-snug">
                      {card.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

