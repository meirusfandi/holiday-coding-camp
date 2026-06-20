import React, { useState, useEffect } from "react";
import { Star, MessageCircle, ArrowRight, ShieldCheck, Gamepad2, Play, RefreshCw, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onScrollToRegister: () => void;
}

interface FallingObject {
  id: number;
  x: number;
  y: number;
  isStar: boolean;
}

export default function Hero({ onScrollToRegister }: HeroProps) {
  const [playDemo, setPlayDemo] = useState(false);
  const [playerX, setPlayerX] = useState(50); // percentage (0 - 100)
  const [gameScore, setGameScore] = useState(0);
  const [fallingObjects, setFallingObjects] = useState<FallingObject[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWhatsAppChat = () => {
    const phoneNumber = "6285121277161";
    const message = encodeURIComponent(
      "Halo Fansedu Academy! Saya mau bertanya tentang kelas Holiday Game Creator Camp untuk anak saya."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Simple Mini Scratch Game Loop
  useEffect(() => {
    if (!playDemo || !isPlaying) return;

    // Spawn falling objects (Stars + Trash)
    const spawnInterval = setInterval(() => {
      setFallingObjects((prev) => {
        if (prev.length > 5) return prev; // Limit concurrent items
        return [
          ...prev,
          {
            id: Math.random(),
            x: Math.random() * 90 + 5, // 5% to 95%
            y: 0,
            isStar: Math.random() > 0.35, // 65% stars, 35% obstacle
          },
        ];
      });
    }, 1200);

    // Update positions & check collisions
    const physicsInterval = setInterval(() => {
      setFallingObjects((prev) => {
        return prev
          .map((obj) => ({ ...obj, y: obj.y + 4 })) // fall down by 4%
          .filter((obj) => {
            // Check collision at bottom (90% - 100% height)
            if (obj.y >= 88 && obj.y <= 96) {
              const distance = Math.abs(obj.x - playerX);
              if (distance < 12) {
                // Collision!
                if (obj.isStar) {
                  setGameScore((s) => s + 10);
                } else {
                  setGameScore((s) => Math.max(0, s - 5));
                }
                return false; // delete item
              }
            }
            return obj.y < 100; // delete if drops off bottom
          });
      });
    }, 100);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(physicsInterval);
    };
  }, [playDemo, isPlaying, playerX]);

  // Handle keyboard arrow keys inside game
  useEffect(() => {
    if (!playDemo || !isPlaying) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setPlayerX((x) => Math.max(5, x - 8));
      } else if (e.key === "ArrowRight") {
        setPlayerX((x) => Math.min(95, x + 8));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playDemo, isPlaying]);

  const startNewGame = () => {
    setGameScore(0);
    setFallingObjects([]);
    setIsPlaying(true);
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pb-16 pt-6 md:pb-24">
      {/* Decorative colored glow spheres */}
      <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />

      {/* Top Header / Navigation simulation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex items-center justify-between relative z-30">
        <div id="brand-logo" className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-2xl border border-gray-100/30">
          <img
            src="/src/assets/images/fansedu_logo_1781709962930.jpg"
            alt="Fansedu Olympiad Academy"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-xl object-cover shadow-md border border-slate-200"
          />
          <div>
            <span className="font-sans font-extrabold text-lg tracking-tight text-gray-900 leading-none block">
              FANSEDU
            </span>
            <span className="font-sans text-[10px] font-extrabold tracking-widest text-blue-600 uppercase block mt-0.5">
              ACADEMY
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#why-camp" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">
            Kenapa Kami?
          </a>
          <a href="#learning-path" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">
            Jalur & Kurikulum
          </a>
          <a href="#showcase" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">
            Karya Murid
          </a>
          <a href="#details" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">
            Detail Program
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="nav-quick-chat-btn"
            onClick={handleWhatsAppChat}
            className="hidden sm:flex border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tanya Aira</span>
          </button>

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-xl transition-colors cursor-pointer border border-gray-200/50"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Side Drawer for Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 md:hidden"
            />

            {/* Sidebar drawer panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 w-[280px] sm:w-[320px] bg-white z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div>
                {/* Brand & Close button */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/src/assets/images/fansedu_logo_1781709962930.jpg"
                      alt="Fansedu Academy"
                      referrerPolicy="no-referrer"
                      className="w-9 h-9 rounded-xl object-cover shadow-sm border border-slate-100"
                    />
                    <div>
                      <span className="font-sans font-extrabold text-base tracking-tight text-gray-900 leading-none block">
                        FANSEDU
                      </span>
                      <span className="font-sans text-[9px] font-extrabold tracking-widest text-blue-600 uppercase block mt-0.5">
                        ACADEMY
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-1">
                  <a
                    href="#why-camp"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary font-bold text-sm py-3.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between group transition-all"
                  >
                    <span>Kenapa Kami?</span>
                    <span className="text-gray-300 group-hover:text-primary transition-colors text-xs">➔</span>
                  </a>
                  <a
                    href="#learning-path"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary font-bold text-sm py-3.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between group transition-all"
                  >
                    <span>Jalur & Kurikulum</span>
                    <span className="text-gray-300 group-hover:text-primary transition-colors text-xs">➔</span>
                  </a>
                  <a
                    href="#showcase"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary font-bold text-sm py-3.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between group transition-all"
                  >
                    <span>Karya Murid</span>
                    <span className="text-gray-300 group-hover:text-primary transition-colors text-xs">➔</span>
                  </a>
                  <a
                    href="#details"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary font-bold text-sm py-3.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between group transition-all"
                  >
                    <span>Detail Program</span>
                    <span className="text-gray-300 group-hover:text-primary transition-colors text-xs">➔</span>
                  </a>
                </nav>
              </div>

              {/* Sidebar Footer Menu Area */}
              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleWhatsAppChat();
                  }}
                  className="w-full bg-primary hover:bg-blue-600 active:scale-95 text-white font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-primary/20 cursor-pointer"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-white" />
                  <span>Hubungi Kak Aira</span>
                </button>
                <p className="text-[10px] text-gray-400 font-bold text-center mt-3">
                  fansedu.id • Sesi Konsultasi Gratis
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title / Subtitle & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 bg-secondary/10 px-4 py-1.5 rounded-full mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-xs font-bold text-secondary tracking-wide uppercase">
                🚀 Holiday Coding Camp SD, SMP, SMA (Ages 7-18)
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.12] tracking-tight"
            >
              Anak Suka Main Roblox? <br />
              <span className="bg-gradient-to-r from-primary via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Saatnya Belajar Membuat Game Roblox Sendiri!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              Holiday Coding Camp untuk SD, SMP, dan SMA. Belajar Scratch, Roblox Studio, dan AI melalui project nyata yang menyenangkan dan interaktif.
            </motion.p>

            {/* Micro-bullet benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-700 font-medium"
            >
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-gray-150">
                <ShieldCheck className="w-4 h-4 text-green-500 stroke-[2.5]" />
                <span>Online Live Class</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-gray-150">
                <ShieldCheck className="w-4 h-4 text-green-500 stroke-[2.5]" />
                <span>Sertifikat Kelulusan</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-gray-150">
                <ShieldCheck className="w-4 h-4 text-green-500 stroke-[2.5]" />
                <span>Project Portfolio</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-gray-150">
                <ShieldCheck className="w-4 h-4 text-green-500 stroke-[2.5]" />
                <span>Mentor Berpengalaman</span>
              </div>
            </motion.div>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                id="hero-cta-register"
                onClick={onScrollToRegister}
                className="bg-primary hover:bg-blue-700 active:scale-95 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-primary/35 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Daftar Sekarang</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-cta-whatsapp"
                onClick={handleWhatsAppChat}
                className="bg-white hover:bg-gray-50 border-2 border-gray-200 active:scale-95 text-gray-800 px-8 py-4 rounded-full font-bold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-white fill-white" />
                </span>
                <span>Konsultasi via WhatsApp</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 border-t border-gray-150 pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-900 block leading-tight">4.9 / 5.0</span>
                  <span className="text-xs text-gray-500">Rating Kepuasan Wali Murid</span>
                </div>
              </div>

              <div className="h-6 w-[1px] bg-gray-200 hidden sm:block" />

              <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">A++</span>
                </div>
                <span>Tingkat Kelulusan Kreatif Dunia Roblox & Scratch</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Image with Scratch Emulator */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-secondary/15 rounded-3xl -rotate-2 scale-102 blur-sm" />
              
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
                
                {/* Mock Browser Header */}
                <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-705/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                    {playDemo ? "🕹️ Scratch Live Demo Console" : "📷 PLATFORME GAME PREVIEW"}
                  </span>
                  <div className="w-7 h-3" />
                </div>

                <div className="relative aspect-[4/3] w-full bg-slate-950 flex flex-col justify-between overflow-hidden">
                  <AnimatePresence mode="wait">
                    {!playDemo ? (
                      <motion.div
                        key="screenshot"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 w-full h-full flex items-center justify-center"
                      >
                        <img
                          src="/src/assets/images/game_platform_adventure_1781683034594.jpg"
                          alt="Platformer Scratch Game Buatan Siswa"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Play Game Demo Toggler Overlay */}
                        <div className="absolute inset-0 bg-slate-950/45 flex flex-col items-center justify-center p-6 gap-3 group">
                          <button
                            onClick={() => {
                              setPlayDemo(true);
                              startNewGame();
                            }}
                            className="bg-primary hover:bg-blue-600 active:scale-95 text-white font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg flex items-center gap-2 group-hover:shadow-primary/30 transition-all cursor-pointer border border-primary/20"
                          >
                            <Play className="w-4 h-4 fill-white" />
                            <span>COBA MAIN GAME DEMO</span>
                          </button>
                          
                          <span className="text-[10.5px] text-white/95 font-bold tracking-wider uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                            Platformer Adventure (Siswa Day 5 Project)
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="gameplay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 w-full h-full flex flex-col text-white"
                      >
                        {/* Game Screen Canvas */}
                        <div className="flex-1 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 relative overflow-hidden">
                          {/* Sky visual stars */}
                          <div className="absolute top-8 left-10 text-white/10 text-xs">✨</div>
                          <div className="absolute top-24 right-16 text-white/10 text-xs">✨</div>
                          <div className="absolute top-12 right-28 text-white/5 text-xs">✨</div>

                          {/* Score Board Top HUD */}
                          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 bg-slate-900/80 backdrop-blur-sm rounded-lg px-2.5 py-1.5 border border-slate-800">
                            <span className="text-xs font-black text-amber-400 flex items-center gap-1 select-none">
                              ⭐ SCORE: {gameScore}
                            </span>
                            <div className="flex items-center gap-1.5">
                              {!isPlaying ? (
                                <button
                                  onClick={startNewGame}
                                  className="text-[10px] bg-primary hover:bg-blue-600 font-bold px-2 py-1 rounded flex items-center gap-1 cursor-pointer"
                                >
                                  <RefreshCw className="w-2.5 h-2.5" />
                                  <span>Restart</span>
                                </button>
                              ) : (
                                <span className="text-[9px] text-green-400 font-bold animate-pulse uppercase tracking-wider flex items-center gap-1">
                                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
                                  Ready!
                                </span>
                              )}
                              <button
                                onClick={() => setPlayDemo(false)}
                                className="text-slate-400 hover:text-white p-0.5"
                                title="Exit"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Falling Objects rendering */}
                          {fallingObjects.map((obj) => (
                            <div
                              key={obj.id}
                              className="absolute transition-all duration-100 ease-linear transform -translate-x-1/2 -translate-y-1/2 select-none"
                              style={{ left: `${obj.x}%`, top: `${obj.y}%` }}
                            >
                              {obj.isStar ? (
                                <span className="text-2xl animate-bounce filter drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
                                  ⭐️
                                </span>
                              ) : (
                                <span className="text-xl filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                                  ☄️
                                </span>
                              )}
                            </div>
                          ))}

                          {/* Character Sprite at Bottom */}
                          <div
                            className="absolute bottom-4 h-10 w-10 bg-amber-400 rounded-xl flex items-center justify-center text-xl shadow-lg border border-white/20 select-none transition-all duration-150 ease-out transform -translate-x-1/2"
                            style={{ left: `${playerX}%` }}
                          >
                            🐱
                          </div>
                        </div>

                        {/* Interactive Mobile-Friendly Game Controller */}
                        <div className="bg-slate-900 border-t border-slate-800 p-3 flex items-center justify-between gap-4 select-none">
                          <div className="flex items-center gap-1 shrink-0">
                            <span className="text-[10px] text-slate-400 font-semibold block leading-none">
                              Klik tombol / pakai keyboard <span className="text-blue-400 font-bold font-mono">← →</span>
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <button
                              onTouchStart={() => setPlayerX((x) => Math.max(5, x - 12))}
                              onClick={() => setPlayerX((x) => Math.max(5, x - 12))}
                              className="bg-slate-800 hover:bg-slate-700 active:scale-90 text-white font-black text-sm px-4 py-2.5 rounded-lg border border-slate-700 select-none cursor-pointer"
                            >
                              ◀️ KIRI
                            </button>
                            <button
                              onTouchStart={() => setPlayerX((x) => Math.min(95, x + 12))}
                              onClick={() => setPlayerX((x) => Math.min(95, x + 12))}
                              className="bg-slate-800 hover:bg-slate-700 active:scale-90 text-white font-black text-sm px-4 py-2.5 rounded-lg border border-slate-700 select-none cursor-pointer"
                            >
                              KANAN ▶️
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Simulated Game Console Status Tag */}
                <div className="bg-slate-800 p-4 border-t border-slate-705/30 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-wider block">Game Client Emulator</span>
                    <span className="text-xs font-semibold text-slate-300 block mt-0.5">
                      {playDemo ? `Skor Anda: ${gameScore} - Hebat!` : "Membantu anak menyalurkan hobi game"}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      if (playDemo) {
                        setPlayDemo(false);
                      } else {
                        setPlayDemo(true);
                        startNewGame();
                      }
                    }}
                    className="text-[10px] font-extrabold bg-slate-700 text-slate-200 hover:bg-slate-600 px-3.5 py-1.5 rounded-lg tracking-wider uppercase border border-slate-600 cursor-pointer"
                  >
                    {playDemo ? "Lihat Layout" : "Main Demo"}
                  </button>
                </div>

              </div>

              {/* Floater Element 1: Scratch Blocks mockup */}
              <motion.div
                className="absolute top-4 -left-6 bg-white rounded-2xl p-3 shadow-xl border border-gray-100 flex items-center gap-2.5 max-w-[150px] hidden sm:flex pointer-events-none"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-7 h-7 rounded-lg bg-yellow-400 flex items-center justify-center font-bold text-white text-xs select-none">
                  ⚡
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-bold">SCRATCH</span>
                  <span className="text-xs font-bold text-gray-800 block">when clicked</span>
                </div>
              </motion.div>

              {/* Floater Element 2: Small star badge */}
              <motion.div
                className="absolute -bottom-6 -right-4 bg-secondary text-white rounded-2xl px-4 py-3.5 shadow-xl flex items-center gap-2.5 pointer-events-none"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="text-2xl">🎮</div>
                <div>
                  <span className="text-xs font-bold block leading-none">Min. 3 Game</span>
                  <span className="text-[10px] text-purple-200 block mt-1">Selesai Dibuat</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </header>
  );
}
