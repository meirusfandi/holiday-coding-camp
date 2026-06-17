import React from "react";
import * as Icons from "lucide-react";
import { PROGRAM_DETAILS, ProgramDetail } from "../data";
import { motion } from "motion/react";

export default function ProgramDetails() {
  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
    return <IconComponent className="w-5 h-5 text-primary" />;
  };

  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-0">
            Detail Pelaksanaan Program
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Segala informasi praktis yang perlu Ayah/Bunda ketahui tentang penyelenggaraan Game Creator Camp. Transparan dan terorganisir dengan rapi.
          </p>
        </div>

        {/* Bento/Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAM_DETAILS.map((detail: ProgramDetail, index: number) => (
            <motion.div
              key={detail.id}
              id={`program-detail-${detail.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 hover:border-slate-300 rounded-2xl p-6 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                {getIcon(detail.iconName)}
              </div>
              <div>
                <span className="text-xs text-gray-400 font-bold block uppercase tracking-wider">
                  {detail.label}
                </span>
                <span className="text-sm font-extrabold text-gray-800 block mt-1 leading-snug">
                  {detail.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Device Requirements banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-[20%] h-[100%] bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[40%] h-[100%] rounded-full bg-white/5 blur-xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="bg-white/20 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                PERSYARATAN PERANGKAT (DEVICE)
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-3">
                Apakah Perangkat Anak Sudah Siap?
              </h3>
              <p className="text-blue-100 text-sm mt-2 leading-relaxed">
                Hanya butuh Laptop atau PC (Windows/Mac) dengan koneksi internet lancar, aplikasi Zoom terinstal, dan mouse eksternal biasa demi keluasan gerak tangan anak saat merakit blok coding. Tidak diperlukan spek komputer berat!
              </p>
            </div>
            
            <div className="bg-white/15 px-5 py-4 rounded-2xl border border-white/10 text-center md:text-right shrink-0">
              <span className="text-[10px] text-blue-200 uppercase tracking-widest block font-bold leading-none">
                PRE-REQUISITE SOFTWARE
              </span>
              <span className="text-lg font-black block mt-1.5 whitespace-nowrap">
                Scratch Online (100% Free)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
