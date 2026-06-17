import React from "react";
import { Download, Award, Puzzle, Gamepad, LineChart, FileText } from "lucide-react";
import { motion } from "motion/react";

interface DeliverableItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  badgeText: string;
}

const DELIVERABLES: DeliverableItem[] = [
  {
    id: "active-port",
    title: "Link Studio Game Aktif",
    tag: "PORTFOLIO",
    description: "Link khusus berisi galeri Scratch Studio yang menampung minimal 3-5 game buatan sendiri. Link ini aktif selamanya, bisa langsung dimainkan oleh keluarga di HP atau dishare ke grup WA sanak saudara!",
    icon: <Gamepad className="w-6 h-6" />,
    colorClass: "bg-blue-50 text-blue-600 border-blue-100",
    badgeText: "Bisa Dimainkan",
  },
  {
    id: "cert-official",
    title: "E-Sertifikat Kelulusan Resmi",
    tag: "ACADEMIC",
    description: "Sertifikat berstandar kompetensi dari Fansedu Academy dengan nomor seri keaslian terdaftar. Berguna untuk melengkapi nilai portofolio prestasi sekolah anak.",
    icon: <Award className="w-6 h-6" />,
    colorClass: "bg-amber-50 text-amber-600 border-amber-100",
    badgeText: "Sertifikat Resmi",
  },
  {
    id: "source-files",
    title: "Bahan & Source Code Game SB3",
    tag: "ASSETS",
    description: "Semua file orisinal Scratch (.sb3) yang menampung logika code lengkap, sprite, rintangan, dan background suara orisinal dapat di-download anak untuk diedit ulang di masa depan.",
    icon: <Puzzle className="w-6 h-6" />,
    colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
    badgeText: "Download Mandiri",
  },
  {
    id: "report-logic",
    title: "Rapor Evaluasi Bakat & Kreativitas",
    tag: "REPORT",
    description: "Laporan penilaian personal dari mentor mengulas kemampuan Computational Thinking anak (logika, debugging, kreativitas aset, dan kemampuan berkomunikasi) untuk acuan bimbingan lanjutan.",
    icon: <LineChart className="w-6 h-6" />,
    colorClass: "bg-purple-50 text-purple-600 border-purple-100",
    badgeText: "Review Mentor",
  }
];

export default function TakeHomeDeliverables() {
  return (
    <section id="deliverables" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-0">
            Hasil Akhir Nyata Yang Dibawa Pulang Anak
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Bukan sekadar program belajar lewat lalu hilang. Lulusan Holiday Coding Camp kami pulang dengan membawa bekal konkret & portofolio digital nyata yang terukur!
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DELIVERABLES.map((item, index) => (
            <motion.div
              key={item.id}
              id={`deliverable-card-${item.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col sm:flex-row gap-6 group"
            >
              {/* Icon Panel */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${item.colorClass} shadow-md group-hover:scale-105 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Text content */}
              <div className="flex-1">
                {/* Upper Tag Row */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black text-primary tracking-widest uppercase">
                    {item.tag}
                  </span>
                  <span className="text-[9px] font-bold bg-gray-50 border border-gray-150 px-2 py-0.5 rounded-full text-gray-500 uppercase">
                    {item.badgeText}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action warning */}
        <div className="mt-12 text-center bg-purple-50/40 rounded-2xl p-6 border border-purple-100/50 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <FileText className="w-5 h-5 text-secondary shrink-0" />
          <p className="text-sm font-semibold text-gray-700 text-left">
            💡 <span className="text-secondary font-bold">Informasi Orang Tua:</span> Semua sertifikat dan rapor dikomposisikan secara individu dan dikirim langsung ke alamat email Ayah & Bunda paling lambat 3 hari setelah sesi graduation selesai.
          </p>
        </div>

      </div>
    </section>
  );
}
