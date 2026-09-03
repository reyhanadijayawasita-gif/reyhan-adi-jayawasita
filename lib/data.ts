// Single source of truth for all factual content on the site.
// Every fact here is sourced directly from Reyhan Adi Jayawasita's CV
// (CV_Reyhan_Adi_Jayawasita_Updated_2026.pdf). Nothing below is invented.

export const person = {
  fullName: "Reyhan Adi Jayawasita",
  shortName: "Reyhan",
  email: "reyhanadijayawasita@gmail.com",
  linkedin: "https://www.linkedin.com/in/reyhan-adi-jayawasita-7172383b7",
  headline: "Business, Economics & Accounting — Competitive Achievement, Analytical Thinking",
  tagline:
    "Business Administration student and 70+ time academic competitor across Accounting, Economics, Finance and Business.",
  summary:
    "I am an achievement-driven and analytically oriented individual with a strong competitive background in Accounting, Economics, Business, and Mathematics. Through participation in 70+ academic competitions across national and international levels, I developed exceptional problem-solving, analytical thinking, and communication skills. I am eager to contribute structured thinking and data-driven insights to a dynamic organization through an internship.",
  photo: "/images/reyhan-adi-jayawasita.jpg",
};

export const education = [
  {
    institution: "S.P. Jain School of Global Management",
    program: "Bachelor of Business Administration",
    period: "2026 – Present",
    status: "current" as const,
    points: [
      "Admitted with a merit-based scholarship covering up to 95% of tuition annually, recognizing outstanding academic and competitive achievements.",
      "S.P. Jain is ranked #29 globally in International Trade (QS Rankings), providing a rigorous international business education across campuses in Dubai, Mumbai, Singapore, and Sydney.",
    ],
  },
  {
    institution: "SMA Little Sun Surabaya",
    program: "Mixed National & IGCSE Curriculum",
    period: "2023 – 2026",
    status: "completed" as const,
    points: [
      "Graduated with strong academic performance across core subjects including Economics, Accounting, Mathematics, and English under a dual national and international curriculum.",
    ],
  },
];

export const experience = [
  {
    role: "Strategic Advisor",
    org: "Cuanvestor Community",
    period: "2026 – Present",
    current: true,
    points: [
      "Advised on strategic initiatives related to financial education, investment literacy, and business development.",
      "Leveraged expertise in economics, accounting, and finance to provide strategic perspectives supporting organizational growth and program development.",
    ],
  },
  {
    role: "External Competition Tutor",
    org: "St. Louis Catholic Highschool",
    period: "2026 – Present",
    current: true,
    points: [
      "Coach students in Microeconomics, Macroeconomics, Finance, and Accounting for national olympiads and academic competitions.",
      "Plan and deliver a structured competition-prep schedule combining in-person and online sessions, drawing on personal experience from 70+ competitions.",
    ],
  },
  {
    role: "Academic Mentor & Subject Tutor",
    org: "Independent",
    period: "2024 – Present",
    current: true,
    points: [
      "Delivered structured tutoring sessions in Economics, Accounting, Business, and Mathematics to junior and senior high school students, translating complex concepts into accessible frameworks.",
      "Developed personalized learning strategies for individual students, resulting in measurable improvements in academic performance and competition readiness.",
    ],
  },
  {
    role: "Tax & Accounting Intern",
    org: "Brighton Internship Program",
    period: "2023",
    current: false,
    points: [
      "Supported tax compliance and accounting processes, gaining hands-on exposure to financial documentation, bookkeeping procedures, and professional workplace practices.",
      "Recognized with a Certificate of Appreciation – Outstanding Dedication for exceptional performance and commitment throughout the internship period.",
    ],
  },
];

export type Achievement = {
  year: number;
  level: "National" | "Province" | "Regional";
  result: string;
  rank: 1 | 2 | 3 | 0; // 0 = not a numbered podium place (finalist, honorable mention, best team, etc.)
  competition: string;
  code?: string;
  organizer: string;
};

// Full, verbatim achievements list from the CV. Order preserved as listed (year, then as given).
export const achievements: Achievement[] = [
  // 2026
  { year: 2026, level: "National", result: "1st Place", rank: 1, competition: "Brain x Biz", code: "BxB", organizer: "Universitas Pelita Harapan Tangerang" },
  { year: 2026, level: "National", result: "1st Place", rank: 1, competition: "Accounting Competition of Asia", code: "ACA", organizer: "Institut Teknologi & Bisnis ASIA Malang" },
  { year: 2026, level: "National", result: "1st Place", rank: 1, competition: "DJOTA GAMES", organizer: "Universitas Dinamika STIKOM Surabaya" },
  { year: 2026, level: "National", result: "1st Place", rank: 1, competition: "Olimpiade Akuntansi Unusida", code: "OAU", organizer: "Universitas Nahdlatul Ulama Sidoarjo" },
  { year: 2026, level: "Province", result: "1st Place", rank: 1, competition: "Accounting Power Competition", organizer: "Universitas Muhammadiyah Gresik" },
  { year: 2026, level: "National", result: "2nd Place", rank: 2, competition: "All In Investment Competition", code: "AIIC", organizer: "All In Initiative" },
  { year: 2026, level: "National", result: "2nd Place", rank: 2, competition: "Olimpiade Ekonomi", code: "OE", organizer: "Universitas Atma Jaya Yogyakarta" },
  { year: 2026, level: "National", result: "2nd Place", rank: 2, competition: "Stiesia Economic Competition", code: "SEC", organizer: "Sekolah Tinggi Ilmu Ekonomi Surabaya" },
  { year: 2026, level: "National", result: "2nd Place", rank: 2, competition: "Olimpiade Akuntansi dan Ilmu Ekonomi", code: "OASE", organizer: "Universitas Al Qolam Malang" },
  // 2025
  { year: 2025, level: "National", result: "1st Place", rank: 1, competition: "Business Logistic Competition", code: "BLC", organizer: "Universitas Kristen Petra" },
  { year: 2025, level: "National", result: "1st Place", rank: 1, competition: "Olimpiade Ekonomi", code: "OE", organizer: "Universitas Airlangga" },
  { year: 2025, level: "National", result: "1st Place", rank: 1, competition: "Accounting Challenge", code: "AC", organizer: "Universitas 17 Agustus 1945" },
  { year: 2025, level: "National", result: "1st Place", rank: 1, competition: "Accounting Competition of Asia", code: "ACA", organizer: "Institut Teknologi & Bisnis ASIA Malang" },
  { year: 2025, level: "National", result: "1st Place", rank: 1, competition: "Olimpiade Akuntansi", code: "OLSI", organizer: "Politeknik Negeri Medan" },
  { year: 2025, level: "National", result: "1st Place", rank: 1, competition: "Olimpiade Ekonomi dan Akuntansi", code: "Eksya", organizer: "Universitas Abdul Chalim" },
  { year: 2025, level: "National", result: "1st Place", rank: 1, competition: "Olimpiade Matematika dan Akuntansi", code: "OMA", organizer: "Universitas Al-Qolam Malang" },
  { year: 2025, level: "National", result: "1st Place", rank: 1, competition: "Actuarial Science Olympiad", code: "ASIQ", organizer: "Universitas Gadjah Mada Yogyakarta" },
  { year: 2025, level: "National", result: "1st Place", rank: 1, competition: "High School Accounting Competition", code: "HISAC", organizer: "Universitas Wijaya Kusuma Surabaya" },
  { year: 2025, level: "National", result: "Gold Medal (Absolute Winner)", rank: 0, competition: "Olimpiade Sains Generasi Emas", code: "OSGE", organizer: "Risetnesia" },
  { year: 2025, level: "National", result: "Best Team", rank: 0, competition: "Lomba Cerdas Cermat Ecobattle", organizer: "Universitas Wisnuwardhana Malang" },
  { year: 2025, level: "National", result: "Finalist", rank: 0, competition: "Olimpiade Sains Nasional Ekonomi", code: "OSN", organizer: "Balai Pengembangan Talenta Indonesia" },
  { year: 2025, level: "Regional", result: "3rd Place", rank: 3, competition: "Olimpiade Sains Nasional Tingkat Provinsi", code: "OSNP", organizer: "BPTI" },
  { year: 2025, level: "Regional", result: "3rd Place", rank: 3, competition: "Olimpiade Sains Nasional Tingkat Kota", code: "OSNK", organizer: "BPTI" },
  { year: 2025, level: "National", result: "2nd Place", rank: 2, competition: "Olimpiade Akuntansi HMPSA", code: "OLAKSI", organizer: "Universitas Muhammadiyah Surabaya" },
  { year: 2025, level: "National", result: "2nd Place", rank: 2, competition: "Digital Accounting Tournament", code: "DAT", organizer: "Universitas Kristen Petra" },
  { year: 2025, level: "National", result: "2nd Place", rank: 2, competition: "Teenage Accounting Competition", code: "TAC", organizer: "Universitas Airlangga" },
  { year: 2025, level: "National", result: "2nd Place", rank: 2, competition: "Sharia Economic Competition", code: "SEC", organizer: "UIN Sunan Ampel Surabaya" },
  { year: 2025, level: "National", result: "2nd Place", rank: 2, competition: "Run Accounting and Investment", code: "RAISE", organizer: "Universitas Ciputra" },
  { year: 2025, level: "National", result: "2nd Place", rank: 2, competition: "VENTURISTIC", organizer: "Universitas Ciputra" },
  { year: 2025, level: "National", result: "2nd Place", rank: 2, competition: "Gadjah Mada Accounting Days", code: "GMAD", organizer: "Universitas Gadjah Mada" },
  { year: 2025, level: "National", result: "2nd Place", rank: 2, competition: "UNJAYA CHAMPIONSHIP", code: "FTTI", organizer: "Universitas Jendral Achmad Yani Yogyakarta" },
  { year: 2025, level: "National", result: "3rd Place", rank: 3, competition: "Accounting Skill and English Competition", code: "ASEC", organizer: "Politeknik Negeri Malang" },
  { year: 2025, level: "National", result: "2nd Place", rank: 2, competition: "Junior Accounting Olympiad", code: "JAO", organizer: "Universitas Muhammadiyah Jember" },
  { year: 2025, level: "National", result: "1st Runner-Up", rank: 0, competition: "Accounting Competition 7", code: "ACTION", organizer: "STIE Surabaya" },
  { year: 2025, level: "National", result: "Honorable Mention", rank: 0, competition: "IECONOMIC", organizer: "Universitas Surabaya" },
  // 2024
  { year: 2024, level: "National", result: "1st Place & MVP", rank: 1, competition: "Widya Mandala Accounting Game", code: "WMAG", organizer: "Universitas Katolik Widya Mandala" },
  { year: 2024, level: "National", result: "1st Place", rank: 1, competition: "High School Accounting Competition", code: "HISAC", organizer: "Universitas Wijaya Kusuma Surabaya" },
  { year: 2024, level: "National", result: "2nd Place", rank: 2, competition: "Pelita Harapan Law Fair", code: "PHLF", organizer: "Universitas Pelita Harapan" },
  { year: 2024, level: "National", result: "2nd Place", rank: 2, competition: "Wijaya Putra Law Fair Debate Competition", organizer: "Universitas Wijaya Putra" },
  { year: 2024, level: "National", result: "2nd Place", rank: 2, competition: "Accounting Festival of Dewantara", code: "ACFED", organizer: "Universitas PGRI Jombang" },
  { year: 2024, level: "National", result: "3rd Place", rank: 3, competition: "Tax Goes To School", code: "TGTS", organizer: "Universitas Airlangga" },
  { year: 2024, level: "National", result: "2nd Runner-Up", rank: 0, competition: "Run Accounting and Investment", code: "RAISE", organizer: "Universitas Ciputra" },
  { year: 2024, level: "National", result: "3rd Runner-Up", rank: 0, competition: "Petra Accounting Competition", code: "PAC", organizer: "Universitas Kristen Petra" },
  // 2023
  { year: 2023, level: "National", result: "2nd Runner-Up", rank: 0, competition: "Airlangga Accounting Competition", code: "AAC", organizer: "Universitas Airlangga" },
];

export type AchievementPhoto = {
  src: string;
  alt: string;
  caption: string;
};

// Photo documentation from award ceremonies, matched against the
// certificates/signage visible in each photo against the record above.
export const achievementPhotos: AchievementPhoto[] = [
  {
    src: "/images/achievements/hisac.jpg",
    alt: "Reyhan Adi Jayawasita (right) receiving the 1st place certificate and trophy at the High School Accounting Competition (HISAC), Universitas Wijaya Kusuma Surabaya",
    caption: "1st Place — High School Accounting Competition (HISAC), Universitas Wijaya Kusuma Surabaya",
  },
  {
    src: "/images/achievements/aca.jpg",
    alt: "Reyhan Adi Jayawasita (left) receiving the 1st place trophy and scholarship certificate at the Accounting Competition of Asia (ACA), Institut Teknologi & Bisnis ASIA Malang",
    caption: "1st Place — Accounting Competition of Asia (ACA), Institut Teknologi & Bisnis ASIA Malang",
  },
  {
    src: "/images/achievements/venturistic.jpg",
    alt: "Reyhan Adi Jayawasita and teammates on stage with the 2nd place trophy at VENTURISTIC Business Plan Competition 2025, Universitas Ciputra",
    caption: "2nd Place — VENTURISTIC Business Plan Competition, Universitas Ciputra",
  },
  {
    src: "/images/achievements/oe-airlangga.jpg",
    alt: "Winner trophy and signage for Olimpiade Ekonomi 22nd at Universitas Airlangga",
    caption: "1st Place — Olimpiade Ekonomi (OE), Universitas Airlangga",
  },
  {
    src: "/images/achievements/wmag.jpg",
    alt: "1st place perpetual trophy and gold medals for the Widya Mandala Accounting Game (Clash of Future Accountants), Universitas Katolik Widya Mandala",
    caption: "1st Place & MVP — Widya Mandala Accounting Game (WMAG), Universitas Katolik Widya Mandala",
  },
  {
    src: "/images/achievements/osge.jpg",
    alt: "Certificate and gold medal awarded to Reyhan Adi Jayawasita for Gold Medal (Absolute Winner) in Economics at Olimpiade Sains Generasi Emas (OSGE), Risetnesia, 2025",
    caption: "Gold Medal (Absolute Winner) — Olimpiade Sains Generasi Emas (OSGE), Risetnesia",
  },
  {
    src: "/images/achievements/raise.jpg",
    alt: "2nd place trophy and prize signage for Run Accounting and Investment (RAISE), Universitas Ciputra, November 2025",
    caption: "2nd Place — Run Accounting and Investment (RAISE), Universitas Ciputra",
  },
  {
    src: "/images/achievements/tac.jpg",
    alt: "2nd place prize signage for the Teenage Accounting Competition (TAC) 2025, Universitas Airlangga",
    caption: "2nd Place — Teenage Accounting Competition (TAC), Universitas Airlangga",
  },
  {
    src: "/images/achievements/asiq.jpg",
    alt: "Reyhan Adi Jayawasita (right) holding the 1st place trophy and medal at the Actuarial Science Olympiad, Fakultas MIPA, Universitas Gadjah Mada Yogyakarta",
    caption: "1st Place — Actuarial Science Olympiad (ASIQ), Universitas Gadjah Mada Yogyakarta",
  },
];

export const domains = [
  "Accounting",
  "Economics",
  "Finance & Investment",
  "Business",
  "Mathematics & Actuarial",
  "Science Olympiad",
  "Law & Debate",
] as const;
export type Domain = (typeof domains)[number];

// Classifies each competition into one or more subject domains, purely from
// keyword matches on its own title — no external claims are added.
export function classify(a: Achievement): Domain[] {
  const t = `${a.competition} ${a.code ?? ""}`.toLowerCase();
  const tags: Domain[] = [];
  if (/akuntansi|accounting/.test(t)) tags.push("Accounting");
  if (/ekonomi|economic/.test(t)) tags.push("Economics");
  if (/invest|sharia|raise/.test(t)) tags.push("Finance & Investment");
  if (/matemati|actuarial|asiq/.test(t)) tags.push("Mathematics & Actuarial");
  if (/sains|science|osn|osge/.test(t)) tags.push("Science Olympiad");
  if (/law fair|debate/.test(t)) tags.push("Law & Debate");
  if (
    /biz|business|logistic|venturistic|djota|championship|games/.test(t) ||
    tags.length === 0
  )
    tags.push("Business");
  return Array.from(new Set(tags));
}

export const skills = {
  soft: [
    "Leadership",
    "Teamwork",
    "Communication",
    "Adaptability",
    "Critical Thinking",
    "Problem Solving",
    "Time Management",
    "Public Speaking",
    "Presentation",
    "Teaching & Mentoring",
  ],
  technical: [
    "Accounting & Financial Analysis",
    "Microeconomics & Macroeconomics",
    "Business Analysis",
    "Concepts Simplification",
  ],
  languages: [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Mandarin", level: "Communicative" },
  ],
};

export const siteConfig = {
  name: "Reyhan Adi Jayawasita",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://reyhanadijayawasita.com",
  title: "Reyhan Adi Jayawasita | Business, Economics & Accounting",
  description:
    "Reyhan Adi Jayawasita is a Business Administration student at S.P. Jain School of Global Management and a 70+ time national and international academic competitor in Accounting, Economics, Finance and Business.",
};

// Derived, computed stats — every number here is directly counted from the
// achievements array above, never hand-typed, so it can never drift from fact.
export const stats = {
  totalCompetitions: 70, // as stated in the CV summary ("70+ academic competitions")
  firstPlaces: achievements.filter((a) => a.rank === 1).length,
  podiumFinishes: achievements.filter((a) => a.rank > 0).length,
  yearsActive: Array.from(new Set(achievements.map((a) => a.year))).length,
};
