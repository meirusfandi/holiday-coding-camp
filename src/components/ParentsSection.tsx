import React from "react";
import { PARENTS_BENEFITS, GET_CHECKLIST, ParentBenefit } from "../data";
import { Check, ShieldCheck, Heart, Sparkles, Gift } from "lucide-react";
import { motion } from "motion/react";

export default function ParentsSection() {
  return (
    <section id="parents" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-[30%] left-[-10%] w-[30%] h-[30%] rounded-full bg-blue-100/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Why Parents Love This */}
          <div className="lg:col-span-7">
            <span className="text-xs font-black text-primary tracking-widest uppercase bg-blue-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
              <span>TESTED & APPROVED BY PARENTS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-4">
              Mengapa Para Orang Tua Menyukai Program Ini?
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Kami menyelaraskan materi pembelajaran agar anak tidak hanya sekadar bermain dengan komputer, namun melatih pilar keterampilan hidup penting (Life Skills) yang relevan untuk tumbuh kembang mereka.
            </p>

            <div className="mt-10 space-y-8">
              {PARENTS_BENEFITS.map((benefit: ParentBenefit, index: number) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  {/* Number indicator */}
                  <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary font-black text-xs flex items-center justify-center shrink-0 mt-1">
                    0{index + 1}
                  </div>
                  <div>
                    <span className="text-[10px] text-secondary font-extrabold tracking-widest uppercase block">
                      {benefit.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-650 text-sm mt-2 leading-relaxed font-normal text-gray-650">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: What Students Get (Checklist Box) */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl relative"
            >
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-amber-400 text-gray-900 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                <Gift className="w-3 h-3" />
                <span>BONUS KIT</span>
              </div>

              <div className="border-b border-gray-100 pb-6 mb-6">
                <span className="text-xs font-extrabold text-blue-600 block uppercase tracking-wider">
                  FASILITAS BELAJAR ANAK
                </span>
                <h3 className="text-2xl font-black text-gray-900 mt-1">
                  Apa Saja Yang Didapatkan Siswa?
                </h3>
                <p className="text-xs text-gray-400 mt-1.5">
                  Semua inventaris di bawah ini disertakan langsung tanpa ada biaya tambahan mengikat.
                </p>
              </div>

              {/* Checklist list */}
              <ul className="space-y-4">
                {GET_CHECKLIST.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 group">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                      <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                    </span>
                    <span className="text-sm font-semibold text-gray-800 leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Secure Trust Anchor */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3 text-gray-550">
                <ShieldCheck className="w-5 h-5 text-blue-600 stroke-[2.5]" />
                <span className="text-xs font-semibold text-gray-600">
                  Dukungan Orang Tua Penuh & Rekaman Bisa Diakses 1 Tahun
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
