import React, { useState } from "react";
import { FAQS, FAQItem } from "../data";
import { ChevronDown, HelpCircle, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Start with the first one open by default

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-0">
            Tanya & Jawab (FAQ)
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Menjawab segala keraguan Ayah & Bunda seputar persiapan kelas, materi coding, dan jaminan bimbingan.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq: FAQItem) => {
            const isOpen = faq.id === openId;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-slate-50 border-primary/20 shadow-md"
                    : "bg-white border-gray-150 hover:bg-slate-50/50"
                }`}
              >
                {/* Header Toggle */}
                <button
                  id={`faq-toggle-btn-${faq.id}`}
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-bold text-gray-900 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? "text-primary" : "text-gray-400"}`} />
                    <span className="text-sm sm:text-base text-gray-900">{faq.question}</span>
                  </div>
                  
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-gray-200 transition-transform duration-300 ${isOpen ? "rotate-180 bg-primary/10 border-primary/10 text-primary" : "text-gray-400"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Animated Body panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-gray-150/50 text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still confused bottom CTA info */}
        <div className="mt-12 text-center bg-purple-50/40 rounded-2xl p-6 border border-purple-100/50 max-w-2xl mx-auto">
          <p className="text-sm text-gray-700">
            💬 Ada pertanyaan khusus yang belum terjawab di atas? Chat konsultasi langsung dengan Aira via WhatsApp, gratis tanpa biaya konsultasi apa pun!
          </p>
        </div>

      </div>
    </section>
  );
}
