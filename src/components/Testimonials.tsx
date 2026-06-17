import React from "react";
import { TESTIMONIALS, Testimonial } from "../data";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  // Helper to draw random pleasant soft gradient profiles for parents
  const getGradientAvatarStyle = (seed: string) => {
    switch (seed) {
      case "sarah":
        return "bg-gradient-to-tr from-pink-400 to-rose-300 text-pink-900";
      case "george":
        return "bg-gradient-to-tr from-blue-400 to-cyan-300 text-blue-900";
      case "maria":
        return "bg-gradient-to-tr from-purple-400 to-fuchsia-300 text-purple-900";
      default:
        return "bg-gradient-to-tr from-indigo-400 to-blue-300 text-indigo-900";
    }
  };

  const getInitials = (name: string) => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      // Return e.g. "SN" or "DW"
      const first = parts[0][0];
      const second = parts[1] === "Natalia" || parts[1] === "Wijaya" || parts[1] === "Safitri" ? parts[1][0] : parts[0][1];
      return (first + second).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative floating grids */}
      <div className="absolute top-10 right-10 opacity-5 text-gray-900 pointer-events-none select-none text-[80px] font-bold">
        ""
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-0">
            Apa Kata Ayah & Bunda?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Lebih dari 400+ orang tua mempercayakan waktu libur anak mereka kepada Fansedu Academy. Berikut adalah testimoni jujur dari wali kelas terdahulu.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi: Testimonial, index: number) => (
            <motion.div
              key={testi.id}
              id={`testimonial-card-${testi.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-150 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Five-Star Rating Row */}
                <div className="flex text-amber-400 gap-1 mb-5">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-[2.5]" />
                  ))}
                </div>

                {/* Parent Quote Text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic font-medium relative pt-2">
                  <span className="text-3xl text-secondary/15 font-black absolute -top-3 -left-1 select-none">
                    “
                  </span>
                  {testi.quote}
                </p>
              </div>

              {/* Author Footer Profile */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                {/* Custom Gradient Avatar Badge */}
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs select-none shadow-sm ${getGradientAvatarStyle(testi.avatarSeed)}`}>
                  {getInitials(testi.name)}
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-gray-950">
                    {testi.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider block leading-snug">
                    {testi.role}
                  </p>
                  <p className="text-[10px] text-gray-400 block mt-0.5">
                    {testi.location}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Highlight Trust Metric Panel */}
        <div className="mt-16 bg-white rounded-3xl border border-gray-150 p-8 flex flex-col sm:flex-row items-center justify-around gap-6 text-center shadow-sm">
          <div>
            <span className="text-4xl font-extrabold text-primary">1:5</span>
            <span className="text-xs text-gray-500 font-bold block mt-1 uppercase tracking-wider">
              Rasio Istimewa Mentor & Anak
            </span>
          </div>
          <div className="h-12 w-[1px] bg-gray-150 hidden sm:block" />
          <div>
            <span className="text-4xl font-extrabold text-secondary">3 Game</span>
            <span className="text-xs text-gray-500 font-bold block mt-1 uppercase tracking-wider">
              Portofolio Karya Siap Pakai
            </span>
          </div>
          <div className="h-12 w-[1px] bg-gray-150 hidden sm:block" />
          <div>
            <span className="text-4xl font-extrabold text-amber-500">⭐️⭐️⭐️⭐️⭐️</span>
            <span className="text-xs text-gray-500 font-bold block mt-1 uppercase tracking-wider">
              Kepuasan Hasil Kelas Uji Coba
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
