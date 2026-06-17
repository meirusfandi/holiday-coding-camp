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
            <div id="footer-logo" className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-lg tracking-tight leading-none block">
                  FANSEDU
                </span>
                <span className="font-sans text-[10px] font-bold tracking-widest text-secondary uppercase block mt-0.5">
                  Academy
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-400 leading-relaxed font-normal">
              Fansedu Academy adalah lembaga pendidikan teknologi cilik terdepan yang berkomitmen melahirkan generasi kreator digital baru di Indonesia. Kami merancang kelas coding Scratch, Python, dan Roblox yang interaktif, menantang, dan 100% ramah anak.
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary stroke-[2.5]" />
                <span className="font-semibold">Lembaga Berlisensi Resmi</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5">
              Hubungi Kami
            </h4>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-350 font-normal leading-tight">info@fansedu.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-350 font-normal leading-tight">
                  Jl. Jenderal Sudirman Kav. 21, Kuningan, Jakarta Selatan, DKI Jakarta
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-350 font-normal leading-tight">www.fansedu.com</span>
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
            © 2026 Fansedu Academy. Semua hak cipta dilindungi undang-undang. Scratch dikembangkan oleh Lifelong Kindergarten Group di MIT Media Lab dan didistribusikan secara gratis.
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
