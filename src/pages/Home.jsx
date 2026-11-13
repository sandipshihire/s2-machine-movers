import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import QuickQuoteModal from '../components/QuickQuoteModal';
import AdminInquiriesModal from '../components/AdminInquiriesModal';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [inquiriesModalOpen, setInquiriesModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('Industrial Machine Shifting');

  const handleOpenQuote = (serviceTitle) => {
    if (serviceTitle && typeof serviceTitle === 'string') {
      setSelectedServiceForQuote(serviceTitle);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121316] text-[#F3F4F6] flex flex-col font-sans selection:bg-[#FF8C00] selection:text-black">
      {/* Sticky Navigation */}
      <Navbar 
        onOpenQuote={() => handleOpenQuote('Industrial Machine Shifting')} 
        onOpenInquiries={() => setInquiriesModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenQuote={() => handleOpenQuote('Industrial Machine Shifting')} />
        <About />
        <Services onOpenQuote={handleOpenQuote} />
        <WhyChooseUs onOpenQuote={() => handleOpenQuote('Industrial Machine Shifting')} />
        <Projects onOpenQuote={handleOpenQuote} />
        <CTA onOpenQuote={() => handleOpenQuote('Industrial Machine Shifting')} />
        <Contact prefilledService={selectedServiceForQuote} />
      </main>

      {/* Global Footer */}
      <Footer onOpenInquiries={() => setInquiriesModalOpen(true)} />

      {/* Interactive Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedServiceForQuote}
      />

      {/* Received Customer Inquiries Modal */}
      <AdminInquiriesModal
        isOpen={inquiriesModalOpen}
        onClose={() => setInquiriesModalOpen(false)}
      />

      {/* Floating Sticky Quick Action Pill (Mobile & Desktop) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* Floating WhatsApp Action */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-[#15803d] hover:bg-[#16a34a] text-white shadow-2xl shadow-black/80 transition-all transform hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp inquiry"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline">WhatsApp Us</span>
        </a>

        {/* Quick Call Pill (Mobile Only) */}
        <a
          href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
          className="sm:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#FF8C00] text-black shadow-xl"
          aria-label="Call Sunil Mote"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

