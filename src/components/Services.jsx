import React, { useState } from 'react';
import { Truck, Cpu, Hammer, Workflow, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import ServiceModal from './ServiceModal';

export default function Services({ onOpenQuote }) {
  const [selectedService, setSelectedService] = useState(null);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#FF8C00]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#FF8C00]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#FF8C00]" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-[#FF8C00]" />;
      default:
        return <Truck className="w-6 h-6 text-[#FF8C00]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#121316] relative border-b border-[#23262E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Our Industrial <span className="text-[#FF8C00]">Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Comprehensive mechanical solutions delivering safe equipment handling, precision machine positioning, structural fabrication, and certified industrial piping.
          </p>
          <div className="w-20 h-1 bg-[#FF8C00] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Responsive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl overflow-hidden bg-[#181A20] border border-[#262A34] hover:border-[#FF8C00]/60 transition-all duration-300 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:shadow-[#FF8C00]/10"
            >
              {/* Card Image with Industrial Badge */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181A20] via-transparent to-black/30" />
                
                {/* Floating Icon */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#14161C]/90 backdrop-blur-md border border-[#2B2F3C] shadow-lg">
                  {getServiceIcon(service.icon)}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-semibold text-[#FF8C00] uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat'] group-hover:text-[#FF8C00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-4 pt-4 border-t border-[#252834] space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#252834] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF8C00] hover:text-[#ffa533] transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-black bg-[#FF8C00] hover:bg-[#ffa024] shadow transition-all cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Lightbox / Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenQuote={onOpenQuote}
        />
      )}
    </section>
  );
}

