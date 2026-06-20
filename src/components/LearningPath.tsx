import React from "react";
import { PROGRAM_PATHS, ProgramPath } from "../data";
import { motion } from "motion/react";
import { Calendar, Users, ArrowRight, MessageCircle } from "lucide-react";

export default function LearningPath() {
  const handleRegister = (programTitle: string) => {
    const phoneNumber = "6285121277161";
    const text = encodeURIComponent(
      `Halo Kak Aira, saya tertarik mendaftarkan anak saya untuk program "${programTitle}" di Fansedu Holiday Coding Camp 2026. Mohon info detil pendaftaran & diskon Early Bird nya ya! 😊`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="learning-path" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative light elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 inline-block mb-3 animate-pulse">
            🔥 GELOMBANG PENDAFTARAN BATCH LIBURAN 2026
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-0">
            Pilih Jalur Belajarmu
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Gali potensi kreator game masa depan anak sesuai dengan jenjang usia kognitifnya. Mulai dari visual blocks hingga scripting professional Lua.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PROGRAM_PATHS.map((path: ProgramPath, index: number) => (
            <motion.div
              key={path.id}
              id={`path-card-${path.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 h-full border ${
                path.isPopular
                  ? "bg-slate-900 text-white border-primary shadow-2xl scale-102 lg:scale-105 z-20"
                  : "bg-white text-gray-900 border-gray-150 shadow-md hover:shadow-xl hover:border-gray-300"
              }`}
            >
              {/* Popular Badge */}
              {path.badge && (
                <span
                  className={`absolute -top-3.5 left-8 text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md z-15 ${
                    path.isPopular
                      ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {path.badge}
                </span>
              )}

              <div>
                {/* Header Information */}
                <div className="mb-6 pt-2">
                  <h3 className={`text-2xl font-black ${path.isPopular ? "text-white" : "text-gray-950"}`}>
                    {path.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2.5 mt-3.5">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      path.isPopular ? "bg-white/10 text-amber-300" : "bg-blue-50 text-blue-700"
                    }`}>
                      👥 {path.age}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      path.isPopular ? "bg-white/10 text-slate-300" : "bg-purple-50 text-purple-700"
                    }`}>
                      📅 {path.sessions}
                    </span>
                  </div>
                </div>

                {/* Path Description */}
                <p className={`text-sm leading-relaxed mb-6 ${path.isPopular ? "text-slate-300" : "text-gray-600"}`}>
                  {path.description}
                </p>

                {/* Bullet Target Points */}
                <ul className="space-y-3 mb-8">
                  {path.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs font-medium">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        path.isPopular ? "bg-primary/20 text-primary-light" : "bg-blue-50 text-blue-600"
                      }`}>
                        ✓
                      </span>
                      <span className={path.isPopular ? "text-slate-200" : "text-gray-700"}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Tag Details */}
              <div className="pt-6 border-t border-gray-150/20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className={`text-[10px] uppercase font-bold block ${path.isPopular ? "text-slate-400" : "text-gray-450"}`}>
                      Harga Normal
                    </span>
                    <span className={`text-[13px] font-bold line-through ml-1 ${path.isPopular ? "text-slate-500" : "text-gray-400"}`}>
                      {path.normalPrice}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] uppercase font-extrabold tracking-wider block bg-rose-100 text-rose-700 px-2 py-0.5 rounded ${path.isPopular ? "animate-pulse" : ""}`}>
                      Early Bird Price
                    </span>
                    <span className="text-2.5xl font-black block mt-1 tracking-tight text-rose-600">
                      {path.earlyBirdPrice}
                    </span>
                  </div>
                </div>

                {/* CTA Action button */}
                <button
                  onClick={() => handleRegister(path.title)}
                  className={`w-full font-black text-sm py-4 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    path.isPopular
                      ? "bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/20 hover:scale-101"
                      : "bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:scale-101"
                  }`}
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-current" />
                  <span>Daftar Sekarang via WA</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Badge informational link */}
        <div className="mt-12 text-center max-w-2xl mx-auto bg-amber-50/50 rounded-2xl p-4.5 border border-amber-100 flex items-center justify-center gap-2.5 text-xs text-amber-900">
          <span className="font-extrabold bg-amber-500 text-slate-950 px-2 py-0.5 rounded uppercase text-[9px]">PENTING!</span>
          <p className="font-medium text-left leading-relaxed">
            Promo harga <span className="font-black">Early Bird</span> hanya berlaku untuk gelombang pengisian batch libur berjalan minggu ini. Segera klaim slot via WhatsApp admin kami!
          </p>
        </div>

      </div>
    </section>
  );
}
