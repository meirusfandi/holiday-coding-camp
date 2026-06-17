import React, { useState, useEffect } from "react";
import { MessageCircle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA if scrolled past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "6285121277161";
    const message = encodeURIComponent(
      "Halo Fansedu Academy! Saya berminat mendaftarkan anak saya ke Holiday Coding Camp (Coming Soon). Boleh minta info pendaftaran dan ketersediaan kuota promo?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] md:hidden pointer-events-auto"
        >
          <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
            {/* Urgency indicator */}
            <div className="text-left shrink-0">
              <div className="flex items-center gap-1.5 text-red-500 font-extrabold text-[11px] uppercase tracking-wide">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-550"></span>
                </span>
                <span>Slot Terbatas!</span>
              </div>
              <p className="text-[10px] text-gray-500 mt-0.5 leading-none font-medium">
                Sisa kuota diskon menipis
              </p>
            </div>

            {/* CTA action Button */}
            <button
              id="mobile-sticky-whatsapp-cta"
              onClick={handleWhatsAppRedirect}
              className="bg-[#25D366] hover:bg-[#20ba56] active:scale-95 text-white text-xs sm:text-sm font-extrabold px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-green-500/20 flex-1 cursor-pointer transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Daftar Lewat WA (Flash Promo)</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
