import React from 'react';
import { ShieldCheck, Award, Users, HardHat, Cog, Clock } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const reasons = [
    {
      title: "Professional Industrial Solutions",
      desc: "Delivering turnkey mechanical engineering, machine shifting, leveling, and fabrication tailored to specific factory requirements.",
      icon: Cog
    },
    {
      title: "Reliable Service",
      desc: "Dedicated to disciplined execution schedules, dependable equipment handling, and minimizing production downtime.",
      icon: Clock
    },
    {
      title: "Quality Workmanship",
      desc: "High-precision optical theodolite alignment, certified welding practices, and sturdy process piping fabrication.",
      icon: Award
    },
    {
      title: "Customer-Focused Approach",
      desc: "Close technical collaboration with plant engineers and site supervisors to satisfy exacting project deliverables.",
      icon: Users
    },
    {
      title: "Safety-Conscious Operations",
      desc: "Rigorous safety protocols, certified rigging gear, personnel protective gear, and zero-compromise site discipline.",
      icon: HardHat
    },
    {
      title: "Customized Industrial Solutions",
      desc: "Tailored modifications, specialized crane rigging schemes, and custom structures adapted to your machinery blueprints.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#15171D] relative border-b border-[#23262E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Our Strengths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Why Choose <span className="text-[#FF8C00]">S2 Machine Movers?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Built on dependability, precision engineering, and strict safety compliance across industrial moving and fabrication projects.
          </p>
          <div className="w-20 h-1 bg-[#FF8C00] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Core Industrial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#1B1E26] border border-[#282D38] hover:border-[#FF8C00]/60 transition-all duration-300 hover:bg-[#20242E] shadow-lg group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FF8C00]/15 border border-[#FF8C00]/30 flex items-center justify-center text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-black transition-colors mb-5">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-['Montserrat'] group-hover:text-[#FF8C00] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Plant Safety & Technical Standards Commitment Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#1B1D25] border border-[#2B2F3D] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-['Montserrat']">
              Planning a Machine Relocation or Plant Line Installation?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Speak directly with our technical team in Waluj MIDC for site survey, loading evaluation, and turnkey execution.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="shrink-0 px-6 py-3 rounded-lg text-sm font-bold bg-[#FF8C00] hover:bg-[#ffa024] text-black shadow-lg shadow-[#FF8C00]/20 transition-all cursor-pointer"
          >
            Consult With Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}

