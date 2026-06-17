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

export const CAMP_BENEFITS: BenefitCard[] = [
  {
    id: "game",
    iconName: "Gamepad2",
    title: "Buat Game Sendiri",
    description: "Anak tidak lagi hanya menjadi konsumen game (player), melainkan belajar logika di balik game dan menciptakan karyanya sendiri (creator) dari nol.",
  },
  {
    id: "creativity",
    iconName: "Palette",
    title: "Asah Kreativitas",
    description: "Menggambar karakter, mendesain latar permainan, dan menyusun alur cerita game dengan pilihan visual Scratch yang kaya warna dan interaktif.",
  },
  {
    id: "logic",
    iconName: "BrainCircuit",
    title: "Latih Logika & Problem Solving",
    description: "Belajar algoritma sederhana, percabangan (if-else), logika pengulangan (loops), serta memecahkan masalah (debugging) ketika baris kode mengalami kesalahan.",
  },
  {
    id: "confidence",
    iconName: "Sparkles",
    title: "Bangun Kepercayaan Diri",
    description: "Mempresentasikan hasil karya game buatan sendiri di hadapan mentor dan teman sekelas pada hari terakhir untuk menumbuhkan jiwa komunikatif.",
  },
];

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
  { id: "duration", label: "Durasi Belajar", value: "5 Sesi Intensif (Hari)", iconName: "CalendarRange" },
  { id: "schedule", label: "Waktu Kelas", value: "09.00 - 12.00 WIB", iconName: "Clock" },
  { id: "platform", label: "Sistem Belajar", value: "Live Interactive (Zoom)", iconName: "Video" },
  { id: "tool", label: "Software Pendukung", value: "Scratch (100% Free / Online)", iconName: "Command" },
  { id: "size", label: "Kapasitas Kelas", value: "Sangat Terbatas (10-15 Murid)", iconName: "Users" },
  { id: "age", label: "Rekomendasi Usia", value: "8 - 13 Tahun (SD & SMP)", iconName: "GraduationCap" },
  { id: "cert", label: "Sertifikat Kelulusan", value: "E-Certificate Resmi Tersedia", iconName: "Award" },
  { id: "recording", label: "Rekaman Kelas", value: "Video Live Recording Diberikan", iconName: "Tv" },
];

export const GET_CHECKLIST: string[] = [
  "Live Interactive Zoom Class bareng Mentor Ahli",
  "E-Certificate Kelulusan Resmi Fansedu Academy",
  "Modul Belajar Digital & Panduan Langkah-demi-langkah",
  "Source Code Project Files Scratch Semua Game Kelas",
  "Akses Rekaman Video Sesi Kelas (Bisa Diputar Ulang)",
  "Grup Komunitas Eksklusif untuk Diskusi & Konsultasi",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Ibu Shinta Natalia",
    role: "Orang Tua dari Rafi (10 Tahun)",
    location: "Jakarta Barat",
    avatarSeed: "sarah",
    quote: "Wah, anak saya senang sekali! Biasanya cuma main Roblox seharian, sekarang tiap hari sibuk utak-atik Scratch bikin game sendiri dan pamer ke sepupunya. Nilai plus juga buat mentornya yang sabar banget ngarahin anak-anak SD.",
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
    question: "Apakah anak saya harus punya pengalaman coding sebelumnya?",
    answer: "Tidak perlu sama sekali! Camp ini dirancang khusus bagi pemula lengkap (beginners). Mentor kami akan mengajarkan konsep dari dasar menggunakan pemrograman visual Scratch (blok seret dan lepas) sehingga terasa sangat natural dan menyenangkan bagi anak-anak.",
  },
  {
    id: "faq-2",
    question: "Apa itu Scratch dan apakah gratis?",
    answer: "Scratch adalah software pemrograman visual berstandar internasional yang dikembangkan oleh MIT Media Lab (Boston, USA). Scratch 100% gratis, bebas iklan, dan sangat aman untuk anak-anak. Aksesnya langsung melalui browser (Google Chrome/Safari) tanpa biaya tambahan apa pun.",
  },
  {
    id: "faq-3",
    question: "Perangkat apa saja yang wajib disiapkan untuk ikut kelas?",
    answer: "Anak memerlukan Laptop atau Komputer Desktop (Windows/macOS) dengan camera web aktif, koneksi internet stabil (minimal 10 Mbps), serta aplikasi Zoom terinstal karena pembelajaran berjalan Live Dua Arah. Kami juga sangat menyarankan penggunaan mouse eksternal untuk mempermudah anak menyeret blok program.",
  },
  {
    id: "faq-4",
    question: "Apakah akan diberikan video rekaman sesi belajar?",
    answer: "Ya, betul sekali! Setiap kali kelas berakhir, sistem kami akan langsung menyimpan rekaman video Zoom beresolusi tinggi. Link menonton rekaman akan dibagikan maksimal 2 jam setelah kelas usai, sehingga anak yang berhalangan hadir atau ingin mengulang materi bisa menyimaknya lagi secara santai.",
  },
  {
    id: "faq-5",
    question: "Bagaimana jika anak tiba-tiba mengalami error atau tertinggal penjelasan mentor?",
    answer: "Kami sadar kendala praktis anak-anak bervariasi. Oleh karena itu, rasio mentor kami sangat ideal (10-15 murid didampingi 1 Lead Mentor & 1 Asisten Mentor). Anak tinggal melakukan interupsi suara atau ketik di kolom chat Zoom, asisten mentor akan siap membantu melalui screenshare dua arah mandiri.",
  },
  {
    id: "faq-6",
    question: "Apakah ada batas usia minimal atau maksimal anak?",
    answer: "Fokus program Holiday Camp ini adalah anak dengan rentang usia kognitif 8 hingga 13 tahun (kurang lebih kelas 3 SD hingga 1 SMP). Jika anak Anda di luar rentang usia tersebut (misal usia 7 tahun namun sudah lancar membaca/mengetik), silakan berkonsultasi via WhatsApp terlebih dahulu agar mentor dapat menyesuaikan.",
  },
  {
    id: "faq-7",
    question: "Apakah setelah lulus anak mendapatkan sertifikat?",
    answer: "Tentu! Setiap anak yang menghadiri minimal 4 sesi dan mendemonstrasikan hasil game karyanya (baik berupa proyek sederhana) saat sesi presentasi kelulusan di hari terakhir akan mendapatkan Sertifikat Kelulusan Digital Resmi dengan nomor seri sertifikat unik dari Fansedu Academy.",
  },
  {
    id: "faq-8",
    question: "Di mana saya bisa melihat hasil karya buatan anak saya?",
    answer: "Semua projek Scratch anak disimpan di bawah cloud akun Scratch anak masing-masing. Mentor akan membagikan tautan/link studio Scratch kelas yang dapat diakses oleh semua orang tua, sehingga Anda bisa memainkan game buatan anak langsung dari smartphone atau membagikannya ke media sosial.",
  },
  {
    id: "faq-9",
    question: "Bagaimana cara pembayaran dan apakah ada jaminan kuota?",
    answer: "Pembayaran dapat dicairkan melalui Transfer Bank (Virtual Account) atau Dompet Digital. Karena kuota per gelombang dibatasi hanya 10-15 siswa demi memastikan kualitas interaksi pengajaran yang prima, status tempat duduk baru terjamin setelah pembayaran lunas atau menyetor deposit pendaftaran.",
  },
  {
    id: "faq-10",
    question: "Mengapa program ini menyembunyikan harga biaya investasinya?",
    answer: "Kami selalu menyesuaikan penawaran kami berdasarkan promo gelombang berjalan (seperti Promo Early Bird, Promo Double Agent, atau promo cicilan). Silakan hubungi kami via WhatsApp sekarang juga untuk mendapatkan brosur lengkap beserta kupon diskon promo potongan harga termurah khusus minggu ini!",
  },
];

export const GAME_SHOWCASES: GameShowcase[] = [
  {
    id: "star",
    title: "Collect The Star",
    description: "Anak memprogram karakter bintang laut atau kepiting lucu melompat mengumpulkan bintang emas jatuh dari langit dengan pengukur skor dinamis.",
    image: "/src/assets/images/game_collect_star_1781682999527.jpg",
    badge: "Kelas Day 3",
    features: [
      "Variabel Skor Diberlakukan",
      "Gravitasi & Kontrol Fisika Sederhana",
      "Efek Partikel Berkilu",
      "Deteksi Posisi X & Y Acak",
    ],
  },
  {
    id: "maze",
    title: "Maze Challenge",
    description: "Anak mendesain labirin penuh jebakan maut. Karakter utama harus digerakkan hati-hati dari start menuju piala emas tanpa menyentuh dinding labirin.",
    image: "/src/assets/images/game_maze_challenge_1781683015435.jpg",
    badge: "Kelas Day 4",
    features: [
      "Pemeriksa Warna Sensor Dinding",
      "Hitbox Karakter Presisi",
      "Level Berganda Secara Otomatis",
      "Rintangan Musuh Bergerak",
    ],
  },
  {
    id: "adventure",
    title: "Platform Adventure",
    description: "Karya puncak game petualangan 2D side-scroller dengan tebing curam, musuh patroli, efek suara lompatan, dan game-win portal.",
    image: "/src/assets/images/game_platform_adventure_1781683034594.jpg",
    badge: "Proyek Final Day 5",
    features: [
      "Animasi Sprite Kanan & Kiri",
      "Kecerdasan Buatan Musuh Sederhana",
      "Sound FX & Musik Latar Menarik",
      "Tingkat Kesulitan Kustom",
    ],
  },
];

