import React from 'react';
import { Target, Compass, ShieldCheck, Wrench, CheckCircle, MapPin, Factory } from 'lucide-react';
import aboutImage from '../assets/images/project_p1_img3.jpeg';
import craneImage from '../assets/images/project_p1_img2.jpeg';
import { COMPANY_INFO } from '../data/company';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#15171D] relative overflow-hidden border-b border-[#23262F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] text-xs font-semibold uppercase tracking-wider mb-3">
            <Factory className="w-3.5 h-3.5" />
            <span>Industrial Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            About <span className="text-[#FF8C00]">S2 Machine Movers</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF8C00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Media with Authentic Industrial Photographs */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#2D313D] shadow-2xl bg-[#1A1C23]">
              <img
                src={aboutImage}
                alt="S2 Machine Movers Precision Machine Alignment and Leveling on Site"
                className="w-full h-80 sm:h-96 object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#181A22]/90 backdrop-blur-md border border-[#2D313D]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF8C00] flex items-center justify-center text-black font-bold shrink-0">
                    S2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-['Montserrat']">
                      Precision On-Site Alignment
                    </h4>
                    <p className="text-xs text-gray-300">
                      Optical theodolite leveling & turnkey mechanical execution
                    </p>
                  </div>
                </div>
              </div>
            </div>



            {/* Industrial Location Accent */}
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-400 bg-[#1A1C24] p-3 rounded-lg border border-[#262933]">
              <MapPin className="w-4 h-4 text-[#FF8C00] shrink-0" />
              <span>Operating from Waluj MIDC, Chhatrapati Sambhaji Nagar, Maharashtra</span>
            </div>
          </div>

          {/* Right Column: Exact Verified Description and Core Commitments */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                <span className="font-bold text-white">S2 Machine Movers</span> is dedicated to providing reliable industrial machinery shifting, installation and fabrication solutions. We focus on delivering efficient, safe and professional industrial services according to our clients' requirements.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal mt-4">
                Our commitment is to provide dependable services, quality workmanship and customer satisfaction.
              </p>
            </div>

            {/* Key Service Scope Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#1B1E26] border border-[#292D38]">
                <CheckCircle className="w-4 h-4 text-[#FF8C00] mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200 font-medium">
                  Turnkey Mechanical Solutions (Unloading, Shifting & Installation)
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#1B1E26] border border-[#292D38]">
                <CheckCircle className="w-4 h-4 text-[#FF8C00] mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200 font-medium">
                  On-to-On Pipe & Cable Installation with Field Experts
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#1B1E26] border border-[#292D38]">
                <CheckCircle className="w-4 h-4 text-[#FF8C00] mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200 font-medium">
                  Dismantling & Installation of Industrial Electrical Switchboards
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#1B1E26] border border-[#292D38]">
                <CheckCircle className="w-4 h-4 text-[#FF8C00] mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200 font-medium">
                  Tailored Industrial & Structural Fabrication
                </span>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Mission Card */}
              <div className="p-5 rounded-xl bg-[#1B1D25] border border-[#292D38] hover:border-[#FF8C00]/40 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FF8C00]/15 flex items-center justify-center text-[#FF8C00]">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Montserrat']">
                    Our Mission
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-5 rounded-xl bg-[#1B1D25] border border-[#292D38] hover:border-[#FF8C00]/40 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FF8C00]/15 flex items-center justify-center text-[#FF8C00]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Montserrat']">
                    Our Vision
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

