import React, { useState } from "react";
import { CURRICULUM_TABS, CurriculumBlock } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, CheckCircle, ChevronRight, Award } from "lucide-react";

export default function ProgramCurriculum() {
  const [activeTab, setActiveTab] = useState<string>("roblox-creator"); // Default is the Featured one

  const tabOptions = [
    { id: "scratch-creator", label: "Scratch Game Creator", labelBadge: "Usia 7-12" },
    { id: "roblox-creator", label: "Roblox Game Creator", labelBadge: "Usia 9-15" },
    { id: "roblox-scripting", label: "Roblox Scripting Camp", labelBadge: "Usia 12-18" }
  ];

  return (
    <section id="curriculum" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-primary uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-3">
            KURIKULUM BERSTANDAR INTERNASIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-0">
            Kurikulum Terstruktur & Teruji
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Bukan materi acak! Silabus kami dirancang bertahap untuk memastikan materi logika terserap sempurna lewat pembangunan project game nyata.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-16">
          {tabOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveTab(opt.id)}
              className={`px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer flex items-center gap-2.5 border ${
                activeTab === opt.id
                  ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10 scale-102"
                  : "bg-slate-50 hover:bg-slate-100/80 border-gray-150 text-gray-600 hover:text-gray-900"
              }`}
            >
              <span>{opt.label}</span>
              <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                activeTab === opt.id ? "bg-white/10 text-primary-light" : "bg-gray-200 text-gray-700"
              }`}>
                {opt.labelBadge}
              </span>
            </button>
          ))}
        </div>

        {/* Active Content Body */}
        <div className="bg-slate-50 rounded-3.5xl p-6 sm:p-10 border border-gray-200/50 shadow-sm max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-2.5 pb-4 border-b border-gray-200">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-xs font-black text-slate-500 uppercase tracking-wider">Silabus Pembelajaran Lengkap</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CURRICULUM_TABS[activeTab]?.map((block: CurriculumBlock, idx: number) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-black text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span>{block.title}</span>
                      </h4>

                      <ul className="space-y-3">
                        {block.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-650 leading-relaxed font-normal">
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[2.5]" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Learning Outcome banner */}
              <div className="bg-blue-600 rounded-2xl p-5 text-white flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-blue-100 block tracking-widest">OUTCOME BELAJAR AKHIR</span>
                    <span className="text-sm font-black block mt-0.5">Sertifikat Kelulusan & Rilis Portofolio Game Resmi!</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById("learning-path");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white hover:bg-slate-50 active:scale-95 text-blue-700 font-extrabold text-xs px-4.5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5"
                >
                  <span>Daftar Sekarang</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
