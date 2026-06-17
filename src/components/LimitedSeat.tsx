import React, { useState, useEffect } from "react";
import { Users2, Flame, MessageCircle, Gift, Info, Check, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function LimitedSeat() {
  // CRO technique: Simulated seats counter that decreases or stays low
  const [seatsLeft, setSeatsLeft] = useState(4);

  useEffect(() => {
    // Random seat update simulation to prompt urgency
    const interval = setInterval(() => {
      setSeatsLeft((prev) => {
        if (prev <= 2) return 3; // Keep it low and urgent
        return prev - 1;
      });
    }, 45000); // changes very slowly
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppRedirect = (intent: string) => {
    const phoneNumber = "6281234567890";
    const message = encodeURIComponent(
      `Halo Fansedu Academy! Saya berminat mendaftarkan anak saya di kelas Game Creator Camp untuk slot ${intent}. Mohon informasi diskon promo terdekatnya. Terima kasih!`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="register" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradient backdrops */}
      <div className="absolute top-0 right-1/2 w-[60%] h-[100%] bg-blue-50/40 rounded-full blur-[140px] pointer-events-none translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main urgency wrapper */}
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-6 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-white/10">
            {/* Visual background noise/stripes */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left text parameters */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 bg-amber-400 text-gray-950 font-black text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-flex self-start select-none w-fit">
                  <Flame className="w-3.5 h-3.5 text-gray-950 fill-current animate-bounce" />
                  <span>KUOTA SANGAT TERBATAS (SISA {seatsLeft} SLOT)</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-6 tracking-tight leading-tight">
                  Saatnya Anak Menjadi <br />
                  <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-300 to-amber-400 bg-clip-text">
                    Creator, Bukan Hanya Player
                  </span>
                </h2>

                <p className="text-blue-100 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                  Fokus interaksi yang personal membuat kami membatasi kapasitas maksimal hanya <span className="font-bold text-amber-300">10-15 murid per kelas</span>. Kami menyembunyikan harga biaya investasi agar Anda bisa mendapatkan skema kupon diskon dan penawaran paling sesuai!
                </p>

                {/* Simulated Wave schedule info wrapper */}
                <div className="mt-8 space-y-3.5">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">
                        1
                      </div>
                      <div>
                        <span className="text-xs text-blue-200 block">GELOMBANG I (JUNI)</span>
                        <span className="text-sm font-bold block text-white">Full & Kelas Sedang Berjalan</span>
                      </div>
                    </div>
                    <span className="bg-red-500/20 text-red-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-red-500/30">
                      Closed
                    </span>
                  </div>

                  <div className="bg-primary/20 backdrop-blur-md rounded-2xl p-4 border border-primary/20 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-xs shadow-md">
                        2
                      </div>
                      <div>
                        <span className="text-xs text-blue-300 block font-bold">GELOMBANG II (JULI REGISTRATION)</span>
                        <span className="text-sm font-black block text-amber-300">Tersisa Sisa {seatsLeft} Kursi Terakhir!</span>
                      </div>
                    </div>
                    <span className="bg-green-500/20 text-green-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-green-500/30 flex items-center gap-1">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                      </span>
                      <span>Sisa {seatsLeft} Slot</span>
                    </span>
                  </div>
                </div>

                {/* Visual guarantee tag */}
                <div className="mt-8 flex flex-wrap gap-4 text-xs text-blue-200">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-green-400 stroke-[3]" />
                    <span>Promo Early-Bird Aktif</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-green-400 stroke-[3]" />
                    <span>Garansi Refund Full Jika Tidak Sesuai</span>
                  </div>
                </div>
              </div>

              {/* Right column: Form inquiry Call For Pricing box */}
              <div className="lg:col-span-5">
                <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">BEST VALUE REGISTER</span>
                  <h3 className="text-xl font-extrabold text-gray-900 mt-1 leading-snug">
                    Hubungi Kami Untuk Informasi & Promo Terbaik
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Isi form pendaftaran WhatsApp instan di bawah ini untuk mengunci kupon diskon Anda.
                  </p>

                  <div className="mt-6 border-b border-gray-150 pb-5">
                    <span className="text-xs text-gray-400 block font-bold">PROMO KUPON BULAN INI</span>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1.5 rounded-lg font-mono font-extrabold text-sm uppercase tracking-wider">
                        CAMPJULI20
                      </span>
                      <span className="text-xs text-gray-500 font-semibold leading-tight">
                        Potongan Rp 200.000,- Khusus 5 Pendaftar Pertama!
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <button
                      id="wave2-whatsapp-cta-btn"
                      onClick={() => handleWhatsAppRedirect("GELOMBANG_II_JULI")}
                      className="w-full bg-[#25D366] hover:bg-[#20ba56] active:scale-95 text-white font-extrabold text-md py-4 rounded-full shadow-lg shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>Daftar via WhatsApp</span>
                    </button>

                    <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                      Seketika setelah tombol ditekan, Anda akan dialihkan ke ruang obrolan WhatsApp resmi dengan Customer Representative Fansedu Academy.
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 text-gray-600">
                    <ShieldCheck className="w-4 h-4 text-primary stroke-[2.5]" />
                    <span className="text-[11px] font-semibold text-gray-500">
                      Sistem Pendaftaran Terverifikasi & Aman
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
