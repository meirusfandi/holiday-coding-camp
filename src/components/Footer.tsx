import React from "react";
import { Gamepad2, Heart, ShieldCheck, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const handleSocialRedirect = (platform: string) => {
    // Standard mock redirection
    window.open("https://fansedu.com", "_blank");
  };

  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-900 pb-12 mb-12">
          
          {/* Column 1: Info */}
          <div className="md:col-span-5">
            <div id="footer-logo" className="flex items-center gap-2.5 text-white">
              <img
                src="/src/assets/images/fansedu_logo_1781709962930.jpg"
                alt="Fansedu Olympiad Academy"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-xl object-cover shadow-lg border border-slate-800"
              />
              <div>
                <span className="font-sans font-extrabold text-lg tracking-tight leading-none block">
                  FANSEDU
                </span>
                <span className="font-sans text-[10px] font-extrabold tracking-widest text-[#00a3ff] uppercase block mt-0.5">
                  ACADEMY
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-400 leading-relaxed font-normal">
              Fansedu Academy adalah platform pendidikan di bawah Fans Digital Group yang membantu anak-anak dan remaja mengembangkan kemampuan akademik, teknologi, kreativitas, dan problem solving untuk menghadapi era digital.
            </p>
          </div>

            {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5">
              Hubungi Kami
            </h4>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-350 font-normal leading-tight">info@fansedu.web.id</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-350 font-normal leading-tight">
                  Jl Nitikan Baru, Sorosutan, Umbulharjo, Yogyakarta, DI Yogyakarta
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-350 font-normal leading-tight">holidaycodingcamp.fansedu.web.id</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Disclaimer/Trust statement */}
          <div className="md:col-span-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5">
              Kebijakan Orang Tua (Parental Guarantee)
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Kami menjamin lingkungan belajar online yang 100% aman bagi anak dengan verifikasi privasi, moderator penuh di ruang Zoom, serta tidak mengenalkan fitur iklan atau konten eksternal apa pun di platform instruksi kami. Orang tua diperbolehkan mendampingi proses belajar secara penuh.
            </p>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-slate-500">
            © 2026 Fansedu Academy. Semua hak cipta dilindungi undang-undang.
          </p>
          
          <div className="flex items-center gap-1.5 text-xs text-slate-500 leading-none">
            <span>Dibuat dengan</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>untuk anak-anak Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
