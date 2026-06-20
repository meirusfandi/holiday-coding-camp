import React from "react";
import { GAME_SHOWCASES, GameShowcase } from "../data";
import { Play, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-0">
            Game Keren Yang Akan Dibuat Siswa!
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed">
            Bukan sekadar mencoret-coret kode abstrak. Anak Anda akan mempraktikkan langsung teori logika dengan merakit game interaktif 2D & 3D di Roblox Studio atau Scratch yang seru dimainkan bersama keluarga dan teman!
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAME_SHOWCASES.map((game: GameShowcase, index: number) => (
            <motion.div
              key={game.id}
              id={`game-showcase-${game.id}`}
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image Container with Hover zoom and Play icon overlay */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 shrink-0">
                <img
                  src={game.image}
                  alt={`Screenshot ${game.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Day Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-gray-900 font-extrabold text-xs px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                    {game.badge}
                  </span>
                </div>

                {/* Simulated Game Category */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-primary text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                    Interactive
                  </span>
                </div>
              </div>

              {/* Game Contents */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {game.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed font-normal">
                    {game.description}
                  </p>
                </div>

                {/* Programmed Features Checklist */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <span className="text-[10px] font-extrabold text-secondary uppercase tracking-widest block mb-3">
                    LOGIKA YANG AKAN DIPROGRAM ANAK
                  </span>
                  
                  <ul className="space-y-2">
                    {game.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 stroke-[2.5] shrink-0" />
                        <span className="text-xs font-semibold text-gray-700 leading-none">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Call-to-action warning */}
        <div className="mt-12 text-center bg-blue-50/40 rounded-2xl p-6 border border-blue-100/50 max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-gray-700">
            💡 <span className="text-secondary font-bold">Catatan Orang Tua:</span> Semua game di atas akan dirancang dari nol oleh anak sendiri. Bahkan anak berusia 8-10 tahun pun akan dibimbing hingga berhasil merakit game ini langkah demi langkah dengan instruksi menyenangkan dari kami!
          </p>
        </div>

      </div>
    </section>
  );
}
