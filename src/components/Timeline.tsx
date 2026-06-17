import React, { useState } from "react";
import { TIMELINE_5_DAYS, DayTimeline } from "../data";
import { Check, Calendar, ArrowRight, Play, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Timeline() {
  const [activeDay, setActiveDay] = useState<number>(1);

  const activeData: DayTimeline = TIMELINE_5_DAYS.find((d) => d.day === activeDay) || TIMELINE_5_DAYS[0];

  // Output badges to show parents tangible evidence of progress
  const getDayOutcomeBadge = (day: number) => {
    switch (day) {
      case 1:
        return "Hasil Akhir: Karakter Animasi yang Bisa Menari & Bicara";
      case 2:
        return "Hasil Akhir: Game Kejar-Kejaran Menggunakan Gerakan Mouse";
      case 3:
        return "Hasil Akhir: Game Pengumpul Bintang dengan Score & Live Counter";
      case 4:
        return "Hasil Akhir: Game Labirin Rintangan dengan Musuh Bergerak";
      case 5:
        return "Hasil Akhir: Pameran Karya Mandiri & Sertifikat Kelulusan";
      default:
        return "";
    }
  };

  return (
    <section id="timeline" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute -top-1/4 -right-1/4 w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-purple-100/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-secondary tracking-widest uppercase bg-purple-150 px-3.5 py-1.5 rounded-full bg-purple-50">
            SILABUS BELAJAR 5 HARI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-4">
            Kurikulum Menyenangkan & Terstruktur
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed">
            Dari nol hingga siap merilis game buatan mandiri. Setiap harinya diisi dengan materi berbobot yang dikemas asyik melalui project-based learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Day Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory">
            {TIMELINE_5_DAYS.map((item) => {
              const isActive = item.day === activeDay;
              return (
                <button
                  key={item.day}
                  id={`day-tab-btn-${item.day}`}
                  onClick={() => setActiveDay(item.day)}
                  className={`snap-center flex-1 lg:flex-initial text-center lg:text-left px-5 py-4 lg:py-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center lg:justify-start gap-4 min-w-[140px] border-2 cursor-pointer ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-xl shadow-primary/25"
                      : "bg-white border-gray-150 hover:border-gray-300 text-gray-700"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                      isActive ? "bg-white text-primary" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    H-{item.day}
                  </span>
                  <div className="hidden sm:block text-left">
                    <span className="text-[10px] block uppercase tracking-wider opacity-60 leading-none font-bold">
                      HARI KE-{item.day}
                    </span>
                    <span className="text-sm font-extrabold block mt-1 line-clamp-1">
                      {item.title.split(" & ")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Day Detail Card with Animation */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-150 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                      Detail Kelas Hari Ke-{activeData.day}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                      {activeData.title}
                    </h3>
                  </div>
                  
                  <div className="bg-primary/5 text-primary text-xs font-black px-4 py-2.5 rounded-full border border-primary/10 flex items-center gap-1.5 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>3 Jam Interaktif</span>
                  </div>
                </div>

                <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                  {activeData.description}
                </p>

                {/* What we do this day */}
                <div>
                  <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-widest mb-4">
                    Apa Saja Kegiatan Anak Di Hari Ini?
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeData.activities.map((act, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-slate-50/50 p-3.5 rounded-xl border border-slate-100/80 hover:bg-slate-50 transition-colors"
                      >
                        <span className="w-5 h-5 rounded-full bg-green-150 text-green-600 flex items-center justify-center shrink-0 mt-0.5 bg-green-50">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span className="text-sm font-medium text-gray-700 leading-tight">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Goal Badge for the Day */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="bg-amber-50/40 border border-amber-100 rounded-2xl p-4 flex items-start sm:items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-amber-700 font-extrabold tracking-wider uppercase block">
                        MILESTONE & GOAL UTAMA
                      </span>
                      <p className="text-sm font-bold text-amber-900 mt-0.5">
                        {getDayOutcomeBadge(activeData.day)}
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
