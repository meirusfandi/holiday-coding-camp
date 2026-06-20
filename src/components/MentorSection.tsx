import React from "react";
import { Sparkles, Shield, GraduationCap, Star, Heart } from "lucide-react";
import { motion } from "motion/react";

interface Mentor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  education: string;
  experience: string;
  specialty: string;
  tagline: string;
}

const MENTORS: Mentor[] = [
  {
    id: "mentor-fandi",
    name: "Kak Rusfandi",
    role: "Lead Mentor & Curriculum Director",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200", // Will use a cute representation or structured illust
    education: "S1 Teknik Informatika",
    experience: "4+ Tahun Mengajar Coding Anak",
    specialty: "Logic Construction & Game Optimization",
    tagline: "Ahli mengemas logika algoritma rumit menjadi analogi puzzle / Lego yang sangat mudah dipahami anak SD.",
  },
  {
    id: "mentor-aira",
    name: "Kak Aira",
    role: "Fun Learning Co-Mentor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    education: "S1 Sistem Informasi & Edu-Tech Specialist",
    experience: "3+ Tahun Mengajar Scratch & Roblox",
    specialty: "Interactive Coding & Creative Art",
    tagline: "Ahli memicu rasa percaya diri anak dalam berbicara di depan umum & siap mendampingi anak jika tertinggal sesi.",
  },
  {
    id: "mentor-tasya",
    name: "Kak Tasya",
    role: "Creative Asset & Co-Instructor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    education: "S1 Desain Komunikasi Visual (DKV)",
    experience: "2+ Tahun Edu-Designer Kelas Kreatif",
    specialty: "Character Design & Sound Integration",
    tagline: "Siap membantu anak melukis sprite kustom orisinal dan mengintegrasikan efek musik latar agar game terasa hidup.",
  }
];

export default function MentorSection() {
  return (
    <section id="mentors" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-[5%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-0">
            Kenalan dengan Mentor Sahabat Anak
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Bukan sekadar ahli teknis, tim pengajar Fansedu Academy adalah profesional muda sabar yang bersertifikat, ramah anak, dan ramah komunikasi dengan orang tua.
          </p>
        </div>

        {/* Mentor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENTORS.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              id={`mentor-card-${mentor.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar and Status */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-primary/20 shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-green-500 text-[9px] font-black uppercase text-white px-1.5 py-0.5 rounded-full border border-white tracking-widest flex items-center gap-0.5">
                      <span className="h-1 w-1 bg-white rounded-full animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-lg text-gray-900 leading-tight">
                      {mentor.name}
                    </h3>
                    <span className="text-xs font-bold text-primary block mt-1">
                      {mentor.role}
                    </span>
                  </div>
                </div>

                {/* Info Pills */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2.5 text-xs text-gray-700 bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                    <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="text-[10px] text-gray-400 block font-bold leading-none uppercase">Pendidikan</span>
                      <span className="font-semibold">{mentor.education}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2.5 text-xs text-gray-700 bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                    <Shield className="w-4 h-4 text-secondary shrink-0" />
                    <div>
                      <span className="text-[10px] text-gray-400 block font-bold leading-none uppercase">Pengalaman Kerja</span>
                      <span className="font-semibold">{mentor.experience}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-gray-700 bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <span className="text-[10px] text-gray-400 block font-bold leading-none uppercase">Spesialisasi</span>
                      <span className="font-semibold">{mentor.specialty}</span>
                    </div>
                  </div>
                </div>

                {/* Love Feedback Tag */}
                <div className="border-t border-gray-100 pt-5">
                  <span className="text-[10px] font-black text-secondary uppercase tracking-widest block mb-2">
                    Kekuatan Mengajar
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed italic">
                    "{mentor.tagline}"
                  </p>
                </div>
              </div>

              {/* Patient Trust Shield */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] text-gray-400 font-bold">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Mentor Sabar & Terakreditasi Siswa</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Call Center Disclaimer */}
        <div className="mt-12 text-center bg-blue-50/40 rounded-2xl p-5 border border-blue-100/50 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <Heart className="w-5 h-5 text-red-500 fill-red-400 shrink-0" />
          <p className="text-xs font-semibold text-gray-700 text-left">
            <span className="text-primary font-bold">Jaminan Wali Kelas:</span> Orang tua akan otomatis diundang ke grup koordinasi WA resmi bersama para mentor untuk menerima update progres coding harian anak!
          </p>
        </div>

      </div>
    </section>
  );
}
