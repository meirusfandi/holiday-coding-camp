export interface BenefitCard {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface DayTimeline {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface GameShowcase {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
}

export interface ParentBenefit {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProgramDetail {
  id: string;
  label: string;
  value: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarSeed: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProgramPath {
  id: string;
  title: string;
  age: string;
  sessions: string;
  description: string;
  benefits: string[];
  earlyBirdPrice: string;
  normalPrice: string;
  badge?: string;
  isPopular?: boolean;
}

export interface CurriculumBlock {
  title: string;
  topics: string[];
}

export const CAMP_BENEFITS: BenefitCard[] = [
  {
    id: "logic",
    iconName: "BrainCircuit",
    title: "🧠 Melatih Logika & Problem Solving",
    description: "Anak belajar berpikir runtut mendesain aturan game, memecahkan masalah (debugging), dan melatih computational thinking sejak usia dini.",
  },
  {
    id: "active",
    iconName: "Gamepad2",
    title: "🎮 Bukan Cuma Main, Sambil Bikin Game",
    description: "Mengalihkan kegemaran screen-time anak yang pasif menjadi produktif-aktif merakit mekanisme game mekanikal miliknya sendiri.",
  },
  {
    id: "tech-ai",
    iconName: "Sparkles",
    title: "💡 Belajar Teknologi & AI Sejak Dini",
    description: "Memperkenalkan anak pada ekosistem teknologi modern, pemanfaatan asisten AI cerdas secara bijak dalam menunjang kreativitas.",
  },
  {
    id: "portfolio",
    iconName: "FolderHeart",
    title: "🚀 Membangun Portfolio Digital Anak",
    description: "Karya game yang berhasil dideploy dapat dimainkan kembali oleh keluarga serta dipamerkan dalam galeri portofolio global.",
  },
  {
    id: "cert-graduation",
    iconName: "Award",
    title: "🏆 Sertifikat & Project Akhir",
    description: "Apresiasi e-certificate dengan ID lisensi unik resmi dari Fansedu Academy serta presentasi karya orisinal hasil kreasi anak.",
  },
  {
    id: "mentors",
    iconName: "Users",
    title: "👨‍🏫 Dibimbing Mentor Berpengalaman",
    description: "Dipandu asisten pengajar sabar dan mentor ahli interaktif dua arah, membantu dari dasar hingga rilis tuntas tanpa rasa bosan.",
  },
];

export const PROGRAM_PATHS: ProgramPath[] = [
  {
    id: "scratch-creator",
    title: "Scratch Game Creator",
    age: "Usia 7-12 Tahun",
    sessions: "4 Sesi Camp",
    description: "Belajar logika dasar rekayasa algoritma dan rilis game visual interaktif ditarik lewat blocks modern tanpa ribet sintaksis teks.",
    benefits: [
      "Menguasai alur logika sekuensial",
      "Membuat rintangan fisika & skor",
      "Mendesain animasi custom sendiri",
      "Sempurna untuk pemula absolut"
    ],
    earlyBirdPrice: "Rp299.000",
    normalPrice: "Rp499.000",
    badge: "PEMULA"
  },
  {
    id: "roblox-creator",
    title: "Roblox Game Creator",
    age: "Usia 9-15 Tahun",
    sessions: "8 Sesi Camp",
    description: "Gunakan Roblox Studio untuk membangun 3D level design, rintangan maut (obby), mengoleksi koin, dan mempublikasikan game ke Roblox global.",
    benefits: [
      "Menguasai Editor Roblox Studio 3D",
      "Mendesain level Obby & Platformer",
      "Mekanisme Checkpoint & Koin",
      "Publish hasil karya langsung ke Roblox"
    ],
    earlyBirdPrice: "Rp599.000",
    normalPrice: "Rp899.000",
    badge: "MOST POPULAR",
    isPopular: true
  },
  {
    id: "roblox-scripting",
    title: "Roblox Scripting Camp",
    age: "Usia 12-18 Tahun",
    sessions: "8 Sesi Camp",
    description: "Melompat lebih tinggi ke level profesional dengan belajar bahasa pemrograman nyata Lua di Roblox Studio untuk rilis game interaktif lanjutan.",
    benefits: [
      "Belajar sintaks program Lua nyata",
      "Sistem Leaderboard global",
      "Penyimpanan database DataStore",
      "Monetisasi & rancang sistem Shopping"
    ],
    earlyBirdPrice: "Rp999.000",
    normalPrice: "Rp1.499.000",
    badge: "ADVANCED CODER"
  }
];

export const CURRICULUM_TABS: Record<string, CurriculumBlock[]> = {
  "scratch-creator": [
    {
      title: "Hari 1-2: Dunia Blok & Alur Gerak",
      topics: [
        "Intro Coding: Kenalan dengan Scratch Interface & Sumbu Koordinat X-Y",
        "Motion & Event: Memprogram sprite bergerak dinamis lewat input keyboard",
        "Costumes & Logic: Merias animasi karakter berubah wujud saat melompat",
      ]
    },
    {
      title: "Hari 3-4: Game Mekanik & Publikasi",
      topics: [
        "Variables & Score: Memprogram variabel penambah poin dan pengurangan nyawa",
        "Win-Lose States: Mengatur trigger perpindahan backdrop level otomatis",
        "Publish Project: Mengunggah hasil game ke website Scratch global",
      ]
    }
  ],
  "roblox-creator": [
    {
      title: "Hari 1-4: 3D Level Design & Obby Game",
      topics: [
        "Roblox Studio Dasar: Navigasi, manipulasi objek 3D (scale, rotate, material)",
        "Building Complex Maps: Merakit pulau melayang dan rintangan lava maut",
        "Obby Mechanics: Membuat rintangan bergerak dinamis & laser sensor berbahaya",
      ]
    },
    {
      title: "Hari 5-8: Sistem Koin, Scoreboard & Publikasi",
      topics: [
        "Checkpoints: Menyimpan posisi respawn koordinat checkpoint aman bagi pemain",
        "Coin Collection & Leaderboard: Menyusun sistem koin melayang serta papan nilai",
        "Game Publishing: Melengkapi thumbnail game, deskripsi, dan publish online ke Roblox",
      ]
    }
  ],
  "roblox-scripting": [
    {
      title: "Hari 1-4: Fondasi Logika Lua Programming",
      topics: [
        "Lua Programming Basics: Pemakaian variable, tipe data, bersyarat IF-THEN",
        "Functions & Custom Events: Menulis baris kode modular pencetus aksi berulang",
        "Kill Bricks & Obstacles: Memprogram blok mematikan lewat skrip Lua dinamis",
      ]
    },
    {
      title: "Hari 5-8: Database, Shop, & Monetisasi",
      topics: [
        "DataStore System: Menyimpan jumlah koin & progress pemain secara permanen di server",
        "Shop System Mechanics: Mematangkan antarmuka pembelian item pelengkap karakter",
        "Monetization Basics: Mengatur monetisasi dasar, gamepass, rilis ke publik Indonesia",
      ]
    }
  ]
};

export const TIMELINE_5_DAYS: DayTimeline[] = [
  {
    day: 1,
    title: "Pengenalan Scratch & Animasi",
    description: "Anak mengenal interface Scratch, memahami sprite & backdrop, serta belajar membuat animasi bergerak pertama mereka dengan logika sekuensial.",
    activities: [
      "Instalasi & setup akun Scratch",
      "Mengenal koordinat X & Y",
      "Event Handlers & Blok Gerakan",
      "Proyek Pertama: Karakter Menari & Berbicara",
    ],
  },
  {
    day: 2,
    title: "Kontrol Karakter & Interaksi",
    description: "Belajar mengendalikan sprite menggunakan tombol keyboard maupun pergerakan pointer mouse untuk memicu interaksi game.",
    activities: [
      "Logika Input Keyboard (Arrow Keys)",
      "Sensing & Collision (Deteksi Tabrakan)",
      "Menggunakan conditional block (If-Then)",
      "Proyek Kedua: Chasing Game (Kejar-kejaran)",
    ],
  },
  {
    day: 3,
    title: "Skor, Nyawa & Logika Game",
    description: "Memasuki pilar utama game design dengan menambahkan variabel penentu kemenangan dan kekalahan, seperti poin skor dan indikator nyawa.",
    activities: [
      "Membuat & Mengelola Variabel",
      "Logika Poin Tambahan & Pengurangan Nyawa",
      "Mengatur kondisi Game Over & Win State",
      "Proyek Ketiga: Collect The Stars with Score",
    ],
  },
  {
    day: 4,
    title: "Level Design & Tantangan",
    description: "Mendesain rintangan yang dinamis, menambahkan musuh otomatis dengan kecerdasan sederhana (AI), serta mematangkan level visual game.",
    activities: [
      "Mengganti backdrop secara otomatis (Change Level)",
      "Logika Enemy Movement (Rintangan Bergerak)",
      "Efek Suara & Musik Latar (Sound Effects)",
      "Proyek Keempat: Maze Runner Extreme Challenge",
    ],
  },
  {
    day: 5,
    title: "Final Project & Presentasi",
    description: "Menghaluskan game favorit buatan masing-masing anak, menambahkan sentuhan personal kreatif, lalu melakukan demo presentasi interaktif.",
    activities: [
      "Tips presentasi karya digital",
      "Personalization & Custom Assets",
      "Pameran Karya (Showcase) via Zoom Screenshare",
      "Sesi Graduation & Foto Bersama",
    ],
  },
];

export const PARENTS_BENEFITS: ParentBenefit[] = [
  {
    id: "ct",
    title: "Melatih Computational Thinking",
    subtitle: "Dunia Digital Masa Depan",
    description: "Mengajarkan anak berpikir runtut, logis, dan sistematis dalam memecahkan suatu masalah besar menjadi bagian-bagian kecil yang dapat diselesaikan komputer.",
  },
  {
    id: "kreatif",
    title: "Meningkatkan Kreativitas",
    subtitle: "Ekspresi Tanpa Batas",
    description: "Membangun game melatih otak kanan anak untuk berimajinasi merancang jalan cerita, memadukan visual warna, dan menciptakan interaksi game yang menyenangkan.",
  },
  {
    id: "presentasi",
    title: "Melatih Keterampilan Presentasi",
    subtitle: "Public Speaking & Komunikasi",
    description: "Anak tidak hanya dilatih menulis instruksi pemrograman, tapi juga dibiasakan menjelaskan karyanya secara percaya diri di depan umum (Zoom).",
  },
  {
    id: "screentime",
    title: "Mengurangi Screen Time Pasif",
    subtitle: "Ganti Konten dengan Kreasi",
    description: "Mengalihkan kecenderungan anak yang biasanya hanya menonton YouTube atau bermain game (pasif), beralih menjadi produktif membuat karyanya sendiri (aktif).",
  },
  {
    id: "digital",
    title: "Menciptakan Karya Digital Sendiri",
    subtitle: "Bangga Menunjukkan Portofolio",
    description: "Keluar dari kelas coding camp dengan membawa portofolio minimal 3-5 game utuh siap dimainkan dan dipamerkan kepada keluarga serta teman sebayanya.",
  },
];

export const PROGRAM_DETAILS: ProgramDetail[] = [
  { id: "duration", label: "Durasi Belajar", value: "Sesi Intensif Terpandu", iconName: "CalendarRange" },
  { id: "schedule", label: "Pilihan Waktu", value: "Batch Pagi / Sore Tersedia", iconName: "Clock" },
  { id: "platform", label: "Sistem Belajar", value: "Live Interactive (Zoom)", iconName: "Video" },
  { id: "tool", label: "Software Pendukung", value: "Roblox Studio & Scratch (Free)", iconName: "Command" },
  { id: "size", label: "Kapasitas Kelas", value: "Sangat Terbatas (10-15 Murid)", iconName: "Users" },
  { id: "age", label: "Rekomendasi Usia", value: "7 - 18 Tahun (SD, SMP & SMA)", iconName: "GraduationCap" },
  { id: "cert", label: "Sertifikat Kelulusan", value: "E-Certificate Resmi Tersedia", iconName: "Award" },
  { id: "recording", label: "Rekaman Sesi", value: "Video Live Recording Diberikan", iconName: "Tv" },
];

export const GET_CHECKLIST: string[] = [
  "Live Online Class (Interaktif Dua Arah Bersama Mentor)",
  "Modul Belajar Digital & Panduan Langkah-demi-langkah",
  "Akses Rekaman Kelas Lengkap (Bisa Diputar Kembali)",
  "E-Certificate Kelulusan Resmi dari Fansedu Academy",
  "Portfolio Kumpulan Project Game Orisinal Milik Anak",
  "Grup Komunitas Eksklusif untuk Bimbingan & Tanya Jawab",
  "Konsultasi dan Review Khusus dari Mentor Ahli"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Ibu Shinta Natalia",
    role: "Orang Tua dari Rafi (10 Tahun)",
    location: "Jakarta Barat",
    avatarSeed: "sarah",
    quote: "Wah, anak saya senang sekali! Biasanya cuma main Roblox seharian, sekarang tiap hari sibuk utak-atik Roblox Studio bikin game sendiri dan pamer ke sepupunya. Nilai plus juga buat mentornya yang sabar banget ngarahin anak-anak SD.",
    rating: 5,
  },
  {
    id: "testi-2",
    name: "Bapak Denny Wijaya",
    role: "Orang Tua dari Kenzo (8 Tahun)",
    location: "Surabaya",
    avatarSeed: "george",
    quote: "Awalnya ragu apakah anak umur 8 tahun bisa paham coding online. Ternyata metode di Fansedu Academy seru banget, pakai analogi krayon dan Lego yang gampang dimengerti anak. Di hari terakhir dia bangga sekali pas screenshare game Maze buatannya!",
    rating: 5,
  },
  {
    id: "testi-3",
    name: "Ibu Amalia Safitri",
    role: "Orang Tua dari Kiara (12 Tahun)",
    location: "Bandung",
    avatarSeed: "maria",
    quote: "Sangat recommended untuk mengisi libur sekolah anak secara produktif. Belajar logika dan matematika dasar jadi berasa seperti main game. Program ini membantu mengurangi screen time pasif anak saya dan mengarahkannya jadi kreator digital.",
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah anak harus bisa menulis coding sebelumnya?",
    answer: "Tidak perlu sama sekali! Program Holiday Coding Camp ini dirancang bersahabat untuk pemula absolut (beginners). Mentor kami akan memandu langkah-langkah secara bertahap mulai dari tingkat Scratch (pemrograman visual blok seret-lepas) hingga dasar Roblox Studio."
  },
  {
    id: "faq-2",
    question: "Apakah program ini cocok untuk anak pemula?",
    answer: "Sangat cocok! Kami membagi alur belajar sesuai jenjang kognitif usia anak. Kurikulum Scratch Game Creator dirancang ramah anak SD, sedangkan Roblox Creator dan Scripting sangat pas untuk anak SMP dan SMA guna mengasah computational thinking."
  },
  {
    id: "faq-3",
    question: "Perangkat laptop minimal seperti apa yang dibutuhkan?",
    answer: "Untuk Scratch, laptop standar apa saja dengan browser modern (Google Chrome) bisa. Untuk Roblox Studio, diperlukan Laptop atau PC (Windows/macOS) dengan minimal RAM 4-8 GB, prosesor Core i3/Ryzen 3 atau lebih baru, koneksi internet, serta mouse fisik agar anak mudah menyusun koordinat 3D."
  },
  {
    id: "faq-4",
    question: "Apakah kelas direkam kalau anak berhalangan hadir?",
    answer: "Betul sekali, setiap sesi interaksi Live Zoom direkam secara utuh. Video resolusi tinggi akan kami bagikan maksimal 2 jam setelah kelas usai, sehingga anak yang melawatkan kelas atau ingin mengulang materi mandiri bisa menyimaknya berulang kali."
  },
  {
    id: "faq-5",
    question: "Apakah siswa mendapatkan sertifikat kelulusan?",
    answer: "Ya. Setiap peserta yang menyelesaikan proyek game akhir akan memperoleh E-Certificate Kelulusan Resmi berlisensi unik dari Fansedu Academy sebagai kredensial prestasi akademik portofolio digital miliknya."
  },
  {
    id: "faq-6",
    question: "Berapa usia minimal anak untuk bergabung?",
    answer: "Usia minimal adalah 7 tahun untuk program Scratch Game Creator (selama anak lancar membaca & menggunakan mouse). Untuk Roblox Studio, idealnya anak berusia 9 tahun ke atas agar memahami koordinat ruang 3D dengan optimal."
  },
  {
    id: "faq-7",
    question: "Apakah kelas belajar ini bisa diikuti lewat Handphone (HP)?",
    answer: "Tidak bisa. Sesi Zoom pendamping kelas bisa dibuka via HP/Tablet, tetapi proyek pengerjaan coding mutlak harus dilakukan langsung dari Laptop atau PC Desktop karena memerlukan aplikasi Roblox Studio atau editor web Scratch yang lengkap."
  },
  {
    id: "faq-8",
    question: "Apakah aplikasi Roblox Studio berbayar?",
    answer: "Roblox Studio 100% gratis untuk diunduh dan digunakan oleh siapa saja di seluruh dunia. Pihak Roblox tidak mengenakan biaya langganan apa pun untuk mempublikasikan game hasil kreasi anak agar bisa dimainkan publik."
  },
  {
    id: "faq-9",
    question: "Bagaimana cara melakukan pendaftaran kelas?",
    answer: "Sangat mudah! Hubungi admin kami melalui tombol WhatsApp 'Daftar Sekarang'. Admin kami akan membantu Anda mencocokkan jadwal batch libur berjalan, melengkapi data pendaftaran anak, serta membagikan petunjuk login kelas."
  },
  {
    id: "faq-10",
    question: "Apakah ada kelanjutan kelas setelah Holiday Camp ini selesai?",
    answer: "Ya, tentu saja! Holiday Camp ini merupakan batu pijakan awal yang kokoh. Anak-anak yang antusias merakit game dapat melanjutkan bimbingan belajar reguler mingguan (Exclusive Academy Course) untuk memperdalam Lua Scripting, kecerdasan buatan (AI), atau rilis monetisasi game nyata."
  }
];

export const GAME_SHOWCASES: GameShowcase[] = [
  {
    id: "obby-roblox",
    title: "Obby Roblox Adventure",
    description: "Anak merancang level rintangan 3D melayang dengan ubin berguguran, laser sensor mematikan, detektor checkpoint aman, dan hiasan bendera kemenangan.",
    image: "/src/assets/images/game_platform_adventure_1781683034594.jpg",
    badge: "Roblox Studio Course",
    features: [
      "Checkpoint & Save State Coordinator",
      "Deteksi Sentuhan Laser Kill Block",
      "Hiasan Partikel Neon Bersinar",
      "Mekanisme Level Platform Melayang"
    ],
  },
  {
    id: "scratch-platformer",
    title: "Scratch 2D Adventure",
    description: "Petualangan bergulir 2D klasik dengan model fisika melompat, musuh patroli, efek suara kustom, dan pengumpul poin kustom.",
    image: "/src/assets/images/game_maze_challenge_1781683015435.jpg",
    badge: "Scratch Basic Course",
    features: [
      "Sensing Dinding Labirin yang Sensitif",
      "Hitbox Berkelompok Presisi",
      "Skor & Game Over Trigger",
      "Animasi Sprite Bergerak Alami"
    ],
  },
  {
    id: "coin-collector",
    title: "Roblox Coin Collector",
    description: "Game mengoleksi koin emas sebanyak-banyaknya di area kompetitif multiplayer yang dilengkapi papan nilai global.",
    image: "/src/assets/images/game_collect_star_1781682999527.jpg",
    badge: "Lua Interactive Course",
    features: [
      "Papan Nilai Leaderboard Server-Wide",
      "Proses Generate Koin Otomatis",
      "Skrip Lua Collector Berputar 3D",
      "Sistem Penyimpanan Koin Berharga"
    ],
  },
  {
    id: "roblox-racing",
    title: "Roblox Speed Racing",
    description: "Memacu performa mobil balap balita kustom melintasi lintasan balap fiktif berlingkar sirkuit neon dengan timer dinamis.",
    image: "/src/assets/images/hero_scratch_camp_1781682976168.jpg",
    badge: "Roblox Advanced Course",
    features: [
      "Sistem Timer Balapan Real-time",
      "Fisika Kendaraan Balap Roblox",
      "Rancangan Sirkuit Neon Geometris",
      "Visual Juara 1, 2, & 3 di Papan"
    ],
  },
  {
    id: "lua-adventure",
    title: "Lua Isle Adventure",
    description: "Game petualangan misterius menjelajahi pulau harta karun terisolasi berbekal pemrograman skrip Lua interaksi NPC.",
    image: "/src/assets/images/game_platform_adventure_1781683034594.jpg",
    badge: "Advanced Scripting",
    features: [
      "NPC Dialogue Interact Event",
      "Sistem Persediaan Tas (Inventory)",
      "Pintu Gerbang Kunci Program",
      "Spawning Tantangan Khusus"
    ],
  },
  {
    id: "scratch-quiz",
    title: "Scratch Smart Quiz Game",
    description: "Kuis cerdas cermat interaktif buatan sendiri dengan logika percabangan IF-ELSE rumit untuk menilai jawaban benar/salah.",
    image: "/src/assets/images/game_maze_challenge_1781683015435.jpg",
    badge: "Scratch Logic",
    features: [
      "Logika IF-ELSE Penentu Benar-Salah",
      "Input Text Analyzer Otomatis",
      "Penghitung Timer Mundur Kuis",
      "Suara Benar & Salah yang Lucu"
    ],
  }
];
