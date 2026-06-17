import React, { useState, useEffect } from "react";
import { MessageCircle, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function StickyWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show the tooltip bubble after 4 seconds to catch the parent's attention
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "6281234567890"; // WhatsApp number
    const message = encodeURIComponent(
      "Halo Fansedu Academy! Saya tertarik dengan program Game Creator Camp. Boleh minta info pendaftaran dan ketersediaan kupon promonya? Terima kasih."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div id="sticky-whatsapp-root" className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            id="whatsapp-bubble"
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-3 max-w-xs bg-white rounded-2xl shadow-xl border border-blue-100 p-4 pointer-events-auto relative cursor-pointer"
            onClick={handleWhatsAppRedirect}
          >
            <button
              id="close-whatsapp-bubble-btn"
              onClick={(e) => {
                e.stopPropagation();
                setShowBubble(false);
              }}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              aria-label="Tutup"
            >
              <X className="w-3 h-3" />
            </button>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">KONSULTASI GRATIS</span>
                <p className="text-xs font-semibold text-gray-800 mt-0.5 leading-snug">
                  Kak Irma (Consultant)
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  "Halo Ayah/Bunda! Ada yang bisa kami bantu mengenai kelas Coding Camp ini? Tanya promo di sini ya!"
                </p>
                <div className="flex items-center gap-1 text-[11px] font-bold text-green-600 mt-2">
                  <span>Chat WhatsApp Sekarang</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        id="whatsapp-sticky-btn"
        onClick={handleWhatsAppRedirect}
        className="pointer-events-auto bg-[#25D366] text-white hover:bg-[#20ba56] p-4 rounded-full shadow-2xl flex items-center justify-center relative cursor-pointer group"
        aria-label="Hubungi WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md hidden sm:block">
          Daftar / Konsultasi via WA
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        
        {/* Animated small indicator badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] text-white font-bold items-center justify-center">
            1
          </span>
        </span>
      </motion.button>
    </div>
  );
}
