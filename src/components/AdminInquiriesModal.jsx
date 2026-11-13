import React, { useState, useEffect } from 'react';
import { X, Trash2, Download, Phone, Mail, MessageSquare, Clock, Building, User, RefreshCw, Inbox } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function AdminInquiriesModal({ isOpen, onClose }) {
  const [inquiries, setInquiries] = useState([]);

  const loadInquiries = () => {
    try {
      const data = JSON.parse(localStorage.getItem('s2_inquiries') || '[]');
      // Sort newest first
      data.sort((a, b) => new Date(b.submittedAt || 0) - new Date(a.submittedAt || 0));
      setInquiries(data);
    } catch (e) {
      console.error(e);
      setInquiries([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all inquiries from this device?')) {
      localStorage.removeItem('s2_inquiries');
      setInquiries([]);
    }
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ['Date', 'Full Name', 'Company Name', 'Phone', 'Email', 'Service Required', 'Message'];
    const rows = inquiries.map((item) => [
      item.submittedAt ? new Date(item.submittedAt).toLocaleString() : '',
      `"${(item.fullName || '').replace(/"/g, '""')}"`,
      `"${(item.companyName || '').replace(/"/g, '""')}"`,
      `"${(item.phone || '').replace(/"/g, '""')}"`,
      `"${(item.email || '').replace(/"/g, '""')}"`,
      `"${(item.serviceRequired || '').replace(/"/g, '""')}"`,
      `"${(item.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `S2_Machine_Movers_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#181A22] border border-[#2D313E] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-[#121318] border-b border-[#252834]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF8C00]/20 flex items-center justify-center text-[#FF8C00]">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-['Montserrat'] flex items-center gap-2">
                <span>Received Customer Inquiries</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FF8C00] text-black">
                  {inquiries.length}
                </span>
              </h3>
              <p className="text-xs text-gray-400">
                Logged quote and contact inquiries stored in browser storage
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadInquiries}
              title="Refresh"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#252834] transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#252834] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Controls Bar */}
        <div className="px-5 py-3 bg-[#15171F] border-b border-[#232630] flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-gray-400">
            Total records: <strong className="text-white">{inquiries.length}</strong>
          </span>

          <div className="flex items-center gap-2">
            {inquiries.length > 0 && (
              <>
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#252834] hover:bg-[#FF8C00] text-gray-200 hover:text-black font-semibold transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export to Excel/CSV</span>
                </button>
                <button
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-700 text-red-300 hover:text-white border border-red-800/60 font-semibold transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear List</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {inquiries.length === 0 ? (
            <div className="text-center py-16 text-gray-400 space-y-3">
              <Inbox className="w-12 h-12 mx-auto text-gray-600" />
              <h4 className="text-base font-bold text-gray-300">No Inquiries Found Yet</h4>
              <p className="text-xs max-w-sm mx-auto text-gray-500">
                When visitors submit a form or request a quote on this browser, their inquiries will appear here automatically.
              </p>
            </div>
          ) : (
            inquiries.map((item, idx) => {
              const formattedDate = item.submittedAt
                ? new Date(item.submittedAt).toLocaleString('en-IN', {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })
                : 'Just now';

              const whatsAppReplyUrl = item.phone
                ? `https://wa.me/${item.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello ${item.fullName || 'Customer'}, thank you for contacting S2 Machine Movers regarding ${item.serviceRequired}.`
                  )}`
                : null;

              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#14161C] border border-[#272B36] hover:border-[#FF8C00]/50 transition-colors space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#232630] pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#FF8C00] text-black text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white font-['Montserrat']">
                        {item.fullName || 'Anonymous Client'}
                      </h4>
                      {item.companyName && (
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          • <Building className="w-3 h-3 text-[#FF8C00]" /> {item.companyName}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5 text-[#FF8C00]" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Phone className="w-3.5 h-3.5 text-[#FF8C00] shrink-0" />
                      <a href={`tel:${item.phone}`} className="hover:text-[#FF8C00] font-medium">
                        {item.phone || 'No phone'}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 truncate">
                      <Mail className="w-3.5 h-3.5 text-[#FF8C00] shrink-0" />
                      <a href={`mailto:${item.email}`} className="hover:text-[#FF8C00] font-medium truncate">
                        {item.email || 'No email'}
                      </a>
                    </div>
                    <div>
                      <span className="px-2 py-0.5 rounded bg-[#FF8C00]/20 text-[#FF8C00] font-semibold text-[11px] border border-[#FF8C00]/30 inline-block">
                        {item.serviceRequired || 'General Inquiry'}
                      </span>
                    </div>
                  </div>

                  {item.message && (
                    <div className="bg-[#1C1F28] p-3 rounded-lg border border-[#2B2F3D] text-xs text-gray-300 leading-relaxed">
                      <strong className="text-gray-400 uppercase tracking-wider text-[10px] block mb-1">
                        Requirement Details:
                      </strong>
                      {item.message}
                    </div>
                  )}

                  {/* Quick Action Buttons for Sunil Mote / Team */}
                  <div className="pt-1 flex flex-wrap items-center gap-2 justify-end">
                    {whatsAppReplyUrl && (
                      <a
                        href={whatsAppReplyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#142C20] hover:bg-[#1A3D2C] text-emerald-300 border border-emerald-800 text-xs font-semibold"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Reply on WhatsApp</span>
                      </a>
                    )}
                    {item.phone && (
                      <a
                        href={`tel:${item.phone}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#252834] hover:bg-[#303442] text-gray-200 text-xs font-semibold"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#FF8C00]" />
                        <span>Call Customer</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#111216] border-t border-[#232630] text-center text-[11px] text-gray-500">
          Tip: Inquiries are stored securely on this computer. You can also connect EmailJS to receive them directly in {COMPANY_INFO.primaryEmail}.
        </div>
      </div>
    </div>
  );
}

