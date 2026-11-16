import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight, ShieldCheck, Inbox } from 'lucide-react';
import logoImg from '../assets/images/logo_optimized.webp';
import { COMPANY_INFO } from '../data/company';

export default function Navbar({ onOpenQuote, onOpenInquiries }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Industrial Announcement Bar */}
      <div className="bg-[#101114] border-b border-[#2A2D35] text-xs text-gray-300 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Waluj MIDC, Chhatrapati Sambhaji Nagar, Maharashtra, India
            </span>
            <span className="text-gray-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.primaryEmail}`}
              className="text-gray-300 hover:text-[#FF8C00] transition-colors"
            >
              {COMPANY_INFO.primaryEmail}
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
              className="flex items-center gap-1.5 text-gray-200 hover:text-[#FF8C00] font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF8C00]" />
              <span>Call Us: {COMPANY_INFO.primaryPhone}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiry</span>
            </a>
            <button
              onClick={onOpenInquiries}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#20232C] hover:bg-[#FF8C00] text-gray-300 hover:text-black font-semibold text-[11px] transition-colors cursor-pointer border border-[#2F3443]"
              title="View all submitted customer inquiries"
            >
              <Inbox className="w-3.5 h-3.5 text-[#FF8C00]" />
              <span>Inquiries</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#141519]/95 backdrop-blur-md shadow-xl border-b border-[#2A2D35] py-2'
          : 'bg-[#16171C] border-b border-[#23262E] py-3'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#FF8C00] rounded-lg p-1"
              aria-label="S2 Machine Movers Home"
            >
              <img
                src={logoImg}
                alt="S2 Machine Movers Logo"
                className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white font-['Montserrat'] leading-tight">
                  S2 <span className="text-[#FF8C00]">MACHINE MOVERS</span>
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-widest uppercase">
                  Relocation & Installation
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 rounded-md text-sm font-semibold text-gray-200 hover:text-[#FF8C00] hover:bg-[#1E2128] transition-all tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-black bg-[#FF8C00] hover:bg-[#ffa024] active:bg-[#e07b00] shadow-lg shadow-[#FF8C00]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center md:hidden gap-2">
              <button
                onClick={onOpenQuote}
                className="px-3 py-1.5 rounded text-xs font-bold text-black bg-[#FF8C00] shadow"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#20232A] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#FF8C00]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] border-b border-[#2E323D] bg-[#16181F]' : 'max-h-0'
            }`}
        >
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-200 hover:text-[#FF8C00] hover:bg-[#20232C] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#2A2D37] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-black bg-[#FF8C00] hover:bg-[#ffa024] shadow-md"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold bg-[#22252F] text-gray-200 border border-[#2E323E]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF8C00]" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold bg-[#1a2f26] text-emerald-300 border border-emerald-900/50"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiries();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-[#1F222B] text-gray-300 border border-[#2E3342] hover:text-[#FF8C00]"
              >
                <Inbox className="w-3.5 h-3.5 text-[#FF8C00]" />
                <span>View Received Customer Inquiries</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
