import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Eye,
  GraduationCap,
  HeartPulse,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import "./styles.css";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const navItems = [
  ["projects", "Projects"],
  ["stack", "Stack"],
  ["experience", "Experience"],
  ["awards", "Awards"],
  ["contact", "Contact"]
];

const techHighlights = ["React 19", "Node.js", "Express", "PostgreSQL", "LINE LIFF", "Gemini API"];

const projects = [
  {
    id: "heylth",
    title: "HEYLTH",
    subtitle: "LINE OA health-tracking system",
    accent: "emerald",
    icon: HeartPulse,
    repo: "https://github.com/KHUNKUN2003/HEYLTH",
    type: "phone",
    intro:
      "ระบบติดตามสุขภาพสำหรับ trainers และ clients รวม LIFF registration, email OTP, Rich Menu state, trainer approval, AI-generated health questions, dashboard, tracking history และ monthly PDF reports",
    tags: ["LIFF Registration", "Email OTP", "Trainer Approval", "AI Questions", "PDF Reports"],
    metrics: [
      ["LINE OA", "LIFF, Rich Menu, Webhook"],
      ["AI Flow", "Gemini-generated questions"],
      ["Reports", "Monthly PDF summary"]
    ],
    workflow: [
      ["LIFF", "Register client"],
      ["OTP", "Email verify"],
      ["Approval", "Trainer flow"],
      ["AI", "Gemini questions"],
      ["Report", "PDFKit monthly"]
    ],
    screens: [
      ["LINE OA Profile", "assets/heylth-line-oa.jpg", "HEYLTH LINE Official Account profile screen"],
      ["Trainer Dashboard", "assets/heylth-trainer.jpg", "HEYLTH trainer customer dashboard"],
      ["Tracking Records", "assets/heylth-records.jpg", "HEYLTH client tracking records"]
    ],
    details: [
      ["บทบาทของผม", "ออกแบบและพัฒนา fullstack flow ตั้งแต่หน้า React LIFF, Express API, PostgreSQL schema, LINE webhook, ระบบ OTP, AI questions และ PDF reports."],
      ["ฟีเจอร์หลัก", "รองรับการลงทะเบียน client, trainer approval, Rich Menu state, ประวัติการติดตามสุขภาพ, คำถามจาก AI, dashboard summary และ monthly report export."],
      ["ความท้าทายทางเทคนิค", "จัดการ LINE user state, database records, สิทธิ์ trainer-client, OTP verification, AI responses และ report generation ให้ทำงานต่อเนื่องใน workflow เดียว."],
      ["ผลลัพธ์", "ได้ระบบ LINE OA health-tracking ที่ trainer ใช้ดูแล clients และ clients ดูประวัติการติดตามผ่าน LINE LIFF ได้โดยตรง."]
    ],
    stacks: [
      ["Frontend", ["React 19", "Vite", "JavaScript", "LINE LIFF", "lucide", "CSS"]],
      ["Backend", ["Node.js", "Express", "LINE API", "Nodemailer", "PDFKit", "Gemini API"]],
      ["Database & Deploy", ["PostgreSQL", "Neon", "schema.sql", "Vercel", "ngrok", "Docker"]]
    ]
  },
  {
    id: "ceo",
    title: "CEO Partner",
    subtitle: "AI business assistant for daily Meta and LINE reports",
    accent: "orange",
    icon: Bot,
    repo: "https://github.com/KHUNKUN2003/CEO-Partner",
    type: "phone",
    intro:
      "ระบบ backend automation สำหรับเจ้าของธุรกิจ ดึงข้อมูล Meta Page และโฆษณาของวันก่อนหน้า ให้ AI วิเคราะห์เป็นรายงานเชิงปฏิบัติ ส่งสรุปรายวันผ่าน LINE และตอบคำถามด้วยบริบทธุรกิจล่าสุด",
    tags: ["Meta Insights", "Daily LINE Report", "AI Chat Context", "Neon Storage", "Google Workspace Tools"],
    metrics: [
      ["08:00", "Daily report schedule"],
      ["Meta API", "Page, ads, inbox context"],
      ["Gemini", "Analysis and tool calling"]
    ],
    workflow: [
      ["Meta", "Fetch yesterday data"],
      ["Store", "Save snapshot in Neon"],
      ["AI", "Generate action report"],
      ["LINE", "Push daily brief"],
      ["Chat", "Answer with latest context"]
    ],
    screens: [
      ["LINE OA Profile", "assets/ceo-partner-line-oa.jpg", "CEO Partner LINE OA profile"],
      ["Daily Report", "assets/ceo-partner-report.jpg", "CEO Partner daily report"],
      ["AI Chat Reply", "assets/ceo-partner-chat.jpg", "CEO Partner AI chat reply"]
    ],
    details: [
      ["บทบาทของผม", "ออกแบบและพัฒนา backend automation, LINE webhook, Meta data pipeline, AI prompt/context layer, Neon storage และ scheduler สำหรับรายงานรายวัน."],
      ["ฟีเจอร์หลัก", "ดึง Meta Page/ad insights, สร้างรายงานด้วย AI, ส่ง LINE report อัตโนมัติ, ตอบแชทด้วยข้อมูลล่าสุด และเรียกใช้ Google Workspace tools ได้."],
      ["ความท้าทายทางเทคนิค", "จัดการข้อมูลจากหลาย API, เก็บ snapshot แบบ append-only, ทำ fallback เมื่อ Meta หรือ AI มีปัญหา และรักษา webhook signature ให้ปลอดภัย."],
      ["ผลลัพธ์", "ได้ผู้ช่วยธุรกิจบน LINE ที่สรุป performance, แนะนำ action ที่ควรทำ และช่วยเจ้าของร้านตัดสินใจจากข้อมูลโฆษณาและลูกค้าได้เร็วขึ้น."]
    ],
    stacks: [
      ["Backend", ["Node.js", "Express", "node-cron", "LINE API", "Meta API", "Gemini API"]],
      ["Data & AI", ["PostgreSQL", "Neon", "Google Search", "Workspace Tools", "PptxGenJS", "schema.sql"]],
      ["Reliability", ["node:test", "Webhook verify", "dotenv config", "Context cache", "REST endpoints", "ngrok deploy test"]]
    ]
  },
  {
    id: "blogs",
    title: "Blog System",
    subtitle: "Full-stack public blog and admin publishing system",
    accent: "forest",
    icon: BookOpen,
    repo: "https://github.com/KHUNKUN2003/Blogs",
    type: "laptop",
    intro:
      "ระบบบล็อก full-stack สำหรับ assignment มีหน้า Public Blog สำหรับอ่านและค้นหาบทความ พร้อม Admin Panel สำหรับสร้าง แก้ไข publish/unpublish บทความ และจัดการคอมเมนต์ก่อนแสดงผลจริง",
    tags: ["Public Blog", "Admin CRUD", "Title Search", "Pagination", "Comment Approval"],
    metrics: [
      ["10 / page", "Public pagination"],
      ["Admin", "CRUD and publish control"],
      ["Comments", "Approve or reject workflow"]
    ],
    workflow: [
      ["Create", "Admin writes post"],
      ["Publish", "Public blog listing"],
      ["Search", "Title search and paging"],
      ["Comment", "Reader submits feedback"],
      ["Review", "Admin approve/reject"]
    ],
    screens: [
      ["Public Blog", "assets/blogs-public.png", "Blog System public listing"],
      ["Admin Panel", "assets/blogs-admin.png", "Blog System admin panel"]
    ],
    details: [
      ["บทบาทของผม", "พัฒนา full-stack ตั้งแต่ React/Vite frontend, React Router, Express API, PostgreSQL schema, Docker Compose และ flow ทดสอบด้วย Vitest/Supertest."],
      ["ฟีเจอร์หลัก", "Public blog list, title search, pagination, blog detail, image handling, admin login, blog CRUD, publish/unpublish และระบบอนุมัติคอมเมนต์."],
      ["ความท้าทายทางเทคนิค", "จัดการข้อมูลบทความและรูปภาพหลายรูป, validate คอมเมนต์ภาษาไทย/ตัวเลข, ซ่อน pending comments และแยก public/admin workflow ให้ชัดเจน."],
      ["ผลลัพธ์", "ได้ระบบบล็อกที่ครบทั้งหน้าผู้อ่านและหลังบ้าน พร้อมฐานข้อมูล PostgreSQL และโครง deploy สำหรับ Vercel + Neon."]
    ],
    stacks: [
      ["Frontend", ["React", "Vite", "React Router", "JavaScript", "Responsive UI", "Vitest"]],
      ["Backend", ["Node.js", "Express", "node-postgres", "CORS", "dotenv", "Supertest"]],
      ["Database & Deploy", ["PostgreSQL 16", "Docker Compose", "Migrations", "Vercel", "Neon", "/api routes"]]
    ]
  },
  {
    id: "vidio",
    title: "Vidio+",
    subtitle: "Private YouTube video viewer with admin controls",
    accent: "blue",
    icon: Play,
    repo: "https://github.com/KHUNKUN2003/Vidio-",
    type: "laptop",
    intro:
      "ระบบดูวิดีโอส่วนตัวที่แยกบทบาท user และ admin มีหน้า viewer สำหรับผู้ใช้ และ dashboard หลังบ้านสำหรับเพิ่ม แก้ไข ลบ เปิด/ปิดการมองเห็น และเรียงลำดับวิดีโอ",
    tags: ["Private Viewer", "YouTube Embed", "Admin Dashboard", "Phone OTP", "LINE Login"],
    metrics: [
      ["Roles", "Separated admin and user flows"],
      ["Sessions", "Single active user protection"],
      ["Neon", "PostgreSQL ready database"]
    ],
    workflow: [
      ["Login", "Phone OTP or LINE"],
      ["Approve", "Admin membership review"],
      ["View", "Private YouTube embed"],
      ["Manage", "Add and reorder videos"],
      ["Protect", "Session and visibility rules"]
    ],
    screens: [
      ["User Viewer", "assets/vidio-user.png", "Vidio+ user video viewer"],
      ["Admin Dashboard", "assets/vidio-admin.png", "Vidio+ admin dashboard"]
    ],
    details: [
      ["บทบาทของผม", "พัฒนา React/Vite frontend, Express API, PostgreSQL schema, auth/session flow, admin dashboard และ viewer experience สำหรับวิดีโอแบบ private."],
      ["ฟีเจอร์หลัก", "Admin จัดการวิดีโอ, toggle visibility, reorder videos, user login ด้วย phone OTP demo หรือ LINE Login, membership approval และ YouTube embed viewer."],
      ["ความท้าทายทางเทคนิค", "แยกสิทธิ์ user/admin, ป้องกัน session ซ้อน, sync สถานะวิดีโอกับฐานข้อมูล และจำกัด navigation/share controls ของ YouTube iframe เท่าที่ platform อนุญาต."],
      ["ผลลัพธ์", "ได้ระบบวิดีโอส่วนตัวที่มีหน้าใช้งานสำหรับ user และหลังบ้านสำหรับ admin พร้อมโครง Neon PostgreSQL และ deployment-ready config."]
    ],
    stacks: [
      ["Frontend", ["React 19", "Vite", "JavaScript", "YouTube Embed", "Apple-inspired UI", "Domain tests"]],
      ["Backend & Auth", ["Node.js", "Express 5", "node-postgres", "HMAC tokens", "Phone OTP", "LINE Login"]],
      ["Database & Ops", ["PostgreSQL", "Neon", "server/schema.sql", ".env config", "REST endpoints", "Deploy ready"]]
    ]
  }
];

const skills = {
  Frontend: ["React", "Vite", "JavaScript", "TypeScript", "Next.js", "Angular", "Flutter", "HTML", "CSS"],
  "Backend & API": ["Node.js", "Express", "REST APIs", "Postman API Platform", "Java", "Python"],
  Database: ["PostgreSQL", "MySQL", "SQL Query Language", "Database Systems"],
  "Platform & Tools": ["LINE LIFF", "LINE Messaging API", "Git/GitHub", "Docker", "Microsoft Office"],
  "Additional Strengths": ["Cloud Computing", "Network Security", "Internet of Things", "Robotics", "Computing"]
};

const timeline = [
  ["2568", "Fullstack Developer, Fulltank Garage", "Support application offices and improve application workflows technology startup."],
  ["2562", "Frontend & Documents, Thailand National Sports University Sisaket Campus", "Document work and frontend/UI-focused collaboration on support systems."],
  ["2561", "Production, P.Rom Multimedia Studio", "Poster animation, graphic design, photography/video production assistant intern."]
];

const education = [
  ["GPA 3.63", "Rajamangala University of Technology Srivijaya, Songkhla Campus", "Bachelor's degree, Computer Engineering"],
  ["GPA 3.62", "Yala Technical College", "Higher Vocational Certificate"],
  ["GPA 3.54", "Yala Technical College", "Vocational Certificate"]
];

const awards = [
  ["2566", "Programming Device Control", "รองชนะเลิศอันดับ 2 ระดับชาติ"],
  ["2566", "Programming Device Control", "รองชนะเลิศอันดับ 2 ระดับ อศจ."],
  ["2565-2567", "Cloud Computing Gold Standard", "รางวัลระดับมาตรฐานทอง จาก Computing ระดับจังหวัด"],
  ["2567", "Cloud Computing National Placement", "รองชนะเลิศอันดับ 4 ระดับชาติ"],
  ["2567", "Innovation & Invention", "รางวัลระดับชาติด้านนวัตกรรม"]
];

const accentClass = {
  emerald: "from-emerald-500 to-teal-600 text-emerald-700 border-emerald-200 bg-emerald-50",
  orange: "from-orange-500 to-amber-500 text-orange-800 border-orange-200 bg-orange-50",
  forest: "from-green-600 to-lime-600 text-green-800 border-green-200 bg-green-50",
  blue: "from-sky-500 to-blue-600 text-blue-800 border-blue-200 bg-blue-50"
};

function App() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [lightbox, setLightbox] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const project = useMemo(() => projects.find((item) => item.id === activeProject) ?? projects[0], [activeProject]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setLoading(false), reduceMotion ? 450 : 1650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7fbf9] text-slate-950">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <motion.div className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500" style={{ scaleX }} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Profile />
        <Projects activeProject={activeProject} setActiveProject={setActiveProject} project={project} setLightbox={setLightbox} />
        <Stack />
        <Experience />
        <Awards />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>{lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}</AnimatePresence>
    </div>
  );
}

function LoadingScreen() {
  const line = "React  Node.js  PostgreSQL  LINE LIFF  AI";

  return (
    <motion.div
      className="portfolio-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -28, filter: "blur(10px)" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loader-grid" aria-hidden="true" />
      <motion.div className="loader-panel" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
        <div className="loader-orbit" aria-hidden="true">
          <span className="loader-orbit-ring" />
          <span className="loader-dot loader-dot-a" />
          <span className="loader-dot loader-dot-b" />
          <span className="loader-dot loader-dot-c" />
          <motion.div className="loader-mark" initial={{ rotate: -10, scale: 0.92 }} animate={{ rotate: 0, scale: 1 }} transition={{ duration: 0.5, delay: 0.15 }}>
            KM
          </motion.div>
        </div>
        <div className="loader-copy">
          <p>Kritsanapong Maneesri</p>
          <h2>Building portfolio system</h2>
          <span>{line}</span>
        </div>
        <div className="loader-progress" aria-hidden="true">
          <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }} />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/78 backdrop-blur-2xl">
      <nav className="mx-auto flex min-h-20 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-slate-950 to-emerald-600 text-sm font-black text-white shadow-xl shadow-emerald-900/15">KM</span>
          <span className="leading-tight">
            <strong className="block font-black">Kritsanapong</strong>
            <small className="text-sm font-bold text-slate-500">Fullstack Developer</small>
          </span>
        </a>
        <button className="grid size-11 place-items-center rounded-2xl border border-emerald-100 bg-white md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-4 top-24 flex-col gap-2 rounded-3xl border border-emerald-100 bg-white p-3 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="rounded-full px-4 py-2 text-sm font-extrabold text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-700">
              {label}
            </a>
          ))}
        </div>
        <a href="mailto:khunkun2003official@gmail.com" className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-xl shadow-slate-950/15 md:inline-flex">
          Hire Me
        </a>
      </nav>
    </header>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto w-[min(1180px,calc(100%-32px))] py-16 ${className}`}>
      <Reveal>
        <p className="mb-3 text-sm font-black text-emerald-700">{eyebrow}</p>
        <h2 className="max-w-4xl text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-[calc(100vh-80px)] w-[min(1180px,calc(100%-32px))] items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.div className="hero-ambient pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <Reveal>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/72 px-4 py-2 text-sm font-black text-emerald-700 shadow-lg shadow-emerald-900/5">
          <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,.12)]" />
          Available for Fullstack Developer roles
        </div>
        <p className="mb-4 text-sm font-black text-emerald-700">กฤษณพงศ์ มณีศรี | Kritsanapong Maneesri</p>
        <h1 className="max-w-3xl text-balance text-5xl font-black leading-[.98] tracking-tight md:text-7xl">
          Fullstack Developer for <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">real product systems.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-600">
          ผมสร้างเว็บแอปพลิเคชันที่เชื่อม frontend, backend, database และ platform workflow ให้ทำงานร่วมกันได้จริง ตั้งแต่ React UI, Node.js API, PostgreSQL ไปจนถึง LINE LIFF และ AI integration
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MotionLink className="bg-emerald-500 text-white shadow-2xl shadow-emerald-500/25" href="#projects">
            <Sparkles size={18} /> View Projects
          </MotionLink>
          <MotionLink className="border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5" href={asset("assets/RESUME_TH.pdf")} download>
            <Download size={18} /> Download Resume
          </MotionLink>
          <MotionLink className="border border-emerald-100 bg-white/70 text-emerald-700" href={asset("assets/RESUME_TH.pdf")} target="_blank" rel="noreferrer">
            <Eye size={18} /> Preview Resume
          </MotionLink>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {techHighlights.map((item) => <Pill key={item}>{item}</Pill>)}
        </div>
      </Reveal>
      <Reveal delay={0.1} className="relative">
        <SystemVisual />
      </Reveal>
    </section>
  );
}

function MotionLink({ children, className = "", ...props }) {
  return (
    <motion.a
      className={`motion-link inline-flex items-center gap-2 rounded-full px-5 py-3 font-black ${className}`}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 360, damping: 22 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

function SystemVisual() {
  const nodes = ["AI", "API", "DB", "PDF", "OTP", "LIFF"];
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useTransform(pointerY, [-0.5, 0.5], reduceMotion ? [0, 0] : [5, -5]);
  const rotateY = useTransform(pointerX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-6, 6]);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className="system-visual-card relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/78 p-5 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl md:p-8"
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,78,59,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="relative grid gap-5 md:grid-cols-[1fr_230px]">
        <article className="rounded-3xl border border-emerald-100 bg-white/88 p-6 shadow-xl shadow-emerald-950/5">
          <img className="mb-4 size-20 rounded-3xl object-cover shadow-xl" src={asset("assets/profile.png")} alt="Kritsanapong Maneesri" />
          <h2 className="text-2xl font-black">Kritsanapong Maneesri</h2>
          <p className="mt-1 font-black text-emerald-700">Full Stack Developer</p>
          <div className="mt-5 grid gap-3 text-sm font-bold text-slate-500">
            <Info icon={MapPin}>Yala, Thailand</Info>
            <Info icon={Mail}>khunkun2003official@gmail.com</Info>
            <Info icon={Phone}>098 687 5752</Info>
            <Info icon={MessageCircle}>@Khunkun2003</Info>
          </div>
        </article>
        <div className="relative mx-auto grid size-56 place-items-center rounded-full border border-emerald-200 bg-emerald-50/40">
          <div className="absolute inset-10 rounded-full border border-emerald-200" />
          <div className="absolute inset-20 rounded-full border border-emerald-200" />
          <motion.div className="z-10 grid size-20 place-items-center rounded-3xl bg-slate-950 text-white shadow-2xl" animate={reduceMotion ? {} : { scale: [1, 1.04, 1] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
            <Layers3 size={34} />
          </motion.div>
          {nodes.map((node, index) => {
            const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
            return (
              <motion.span
                key={node}
                className="absolute rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black text-emerald-700 shadow-lg"
                style={{ left: `calc(50% + ${Math.cos(angle) * 104}px)`, top: `calc(50% + ${Math.sin(angle) * 104}px)`, transform: "translate(-50%, -50%)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.18 }}
              >
                {node}
              </motion.span>
            );
          })}
        </div>
        <article className="rounded-3xl bg-[#08261c] p-5 font-mono text-sm leading-7 text-emerald-100 shadow-2xl md:col-span-2">
          <div className="mb-4 flex gap-2">{[1, 2, 3].map((i) => <span key={i} className="size-3 rounded-full bg-emerald-400" />)}</div>
          <pre className="overflow-auto"><code>{`const portfolio = buildSystem({
  frontend: "React + Tailwind",
  backend: "Node.js + Express",
  database: "PostgreSQL",
  platform: "LINE OA",
  ai: "Gemini API",
  motion: "Framer Motion"
})`}</code></pre>
        </article>
      </div>
    </motion.div>
  );
}

function Info({ icon: Icon, children }) {
  return <span className="flex items-center gap-2"><Icon className="text-emerald-500" size={17} />{children}</span>;
}

function Pill({ children, tone = "emerald" }) {
  const colors = tone === "blue" ? "border-sky-200 bg-sky-50 text-sky-700" : "border-emerald-100 bg-emerald-50 text-emerald-700";
  return <span className={`inline-flex min-h-9 items-center rounded-full border px-3 text-sm font-black ${colors}`}>{children}</span>;
}

function Profile() {
  return (
    <Section id="profile" eyebrow="Profile" title="Developer ที่เข้าใจทั้ง product, system และการแก้ปัญหาจริง">
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Reveal className="rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-xl shadow-emerald-950/5">
          <h3 className="text-xl font-black">About Me</h3>
          <p className="mt-3 leading-8 text-slate-600">
            จบการศึกษาด้านวิศวกรรมคอมพิวเตอร์ และมุ่งพัฒนาทักษะด้านการเขียนโปรแกรม ระบบเครือข่าย การควบคุมอุปกรณ์ และ Cloud Computing พร้อมเรียนรู้เทคโนโลยีใหม่เพื่อพัฒนางานจริงให้มีประสิทธิภาพ
          </p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-6 shadow-xl shadow-emerald-950/5">
          <h3 className="text-xl font-black">What I Bring</h3>
          <p className="mt-3 leading-8 text-slate-600">
            ประสบการณ์ทำเว็บและแอปพลิเคชันให้ลูกค้า การจัดการ backend workflow, database schema, API integration และการออกแบบระบบที่นำไปใช้กับผู้ใช้จริงได้
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function Projects({ activeProject, setActiveProject, project, setLightbox }) {
  const Icon = project.icon;
  const accent = accentClass[project.accent];
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Selected systems built for real business workflows">
      <Reveal className="mt-8">
        <div className="flex gap-2 overflow-x-auto pb-3">
          {projects.map((item) => {
            const ItemIcon = item.icon;
            const selected = item.id === activeProject;
            return (
              <motion.button key={item.id} data-project-tab onClick={() => setActiveProject(item.id)} className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-3 text-sm font-black transition ${selected ? "border-slate-950 bg-slate-950 text-white shadow-xl shadow-slate-950/15" : "border-emerald-100 bg-white text-slate-500 hover:bg-emerald-50"}`} whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                <ItemIcon size={17} /> {item.title}
              </motion.button>
            );
          })}
        </div>
      </Reveal>
      <AnimatePresence mode="wait">
        <motion.div key={project.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_.75fr]">
            <motion.article className="lift-card relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/84 p-6 shadow-2xl shadow-emerald-950/7" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}>
              <div className={`absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r ${accent.split(" ").slice(0, 2).join(" ")}`} />
              <div className="flex items-center gap-4">
                <div className={`grid size-16 place-items-center rounded-3xl bg-gradient-to-br ${accent.split(" ").slice(0, 2).join(" ")} text-white shadow-xl`}>
                  <Icon size={30} />
                </div>
                <div>
                  <h3 className="text-3xl font-black">{project.title}</h3>
                  <p className="font-bold text-slate-500">{project.subtitle}</p>
                </div>
              </div>
              <p className="mt-5 leading-8 text-slate-600">{project.intro}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => <Pill key={tag} tone={project.accent === "blue" ? "blue" : "emerald"}>{tag}</Pill>)}
              </div>
              <MotionLink href={project.repo} target="_blank" rel="noreferrer" className="mt-5 border border-emerald-100 bg-white shadow-lg">
                <Code2 size={18} /> View GitHub Repo <ArrowUpRight size={16} />
              </MotionLink>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {project.metrics.map(([k, v]) => <Metric key={k} title={k} text={v} />)}
              </div>
            </motion.article>
            <Workflow project={project} />
          </div>
          <Showcase project={project} setLightbox={setLightbox} />
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {project.details.map(([title, text], index) => <Detail key={title} title={title} text={text} delay={index * 0.04} />)}
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {project.stacks.map(([title, items]) => (
              <motion.article key={title} className="lift-card rounded-3xl border border-emerald-100 bg-white/84 p-5 shadow-xl shadow-emerald-950/5" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}>
                <h4 className="mb-4 font-black text-emerald-700">{title}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {items.map((item) => <span key={item} className="rounded-2xl border border-emerald-100 bg-white px-3 py-2 text-xs font-black text-slate-600">{item}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

function Metric({ title, text }) {
  return <div className="rounded-2xl border border-emerald-100 bg-emerald-50/35 p-4"><strong className="block font-black text-emerald-700">{title}</strong><span className="mt-1 block text-sm font-bold text-slate-500">{text}</span></div>;
}

function Workflow({ project }) {
  return (
    <article className="rounded-[2rem] border border-emerald-100 bg-white/84 p-6 shadow-2xl shadow-emerald-950/7">
      <h3 className="mb-4 text-xl font-black">System Workflow</h3>
      <div className="relative grid gap-3">
        <span className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-transparent via-emerald-200 to-transparent" />
        {project.workflow.map(([title, text], index) => (
          <motion.div key={title} className="relative grid min-h-20 grid-cols-[54px_1fr] items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/35 p-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }}>
            <span className="z-10 grid size-12 place-items-center rounded-2xl bg-white font-black text-emerald-700 shadow-sm">{String(index + 1).padStart(2, "0")}</span>
            <span><strong className="block font-black">{title}</strong><small className="font-bold text-slate-500">{text}</small></span>
          </motion.div>
        ))}
      </div>
    </article>
  );
}

function Showcase({ project, setLightbox }) {
  return (
    <div className="mt-5 grid gap-6 overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/70 p-6 shadow-2xl shadow-emerald-950/7 lg:grid-cols-[.38fr_1fr]">
      <div className="self-center">
        <p className="mb-3 text-sm font-black text-emerald-700">Product Screens</p>
        <h3 className="text-balance text-3xl font-black leading-tight md:text-4xl">
          {project.type === "phone" ? "ประสบการณ์ใช้งานจริงบน LINE และ mobile flow" : project.id === "vidio" ? "Private video viewer พร้อมหลังบ้านจัดการวิดีโอ" : "หน้าอ่านบล็อกและหลังบ้านที่ใช้งานจริง"}
        </h3>
        <p className="mt-4 leading-8 text-slate-600">
          {project.type === "phone" ? "ตัวอย่างหน้าจอจริงจากระบบที่ผู้ใช้และผู้ดูแลใช้งานผ่าน LINE workflow" : "แสดงหน้าจอ desktop web ในกรอบ notebook เพื่อให้เห็นบริบทของ product ชัดขึ้น"}
        </p>
      </div>
      <div className={project.type === "phone" ? "grid items-end gap-4 md:grid-cols-3" : "grid items-center gap-5 md:grid-cols-[1.08fr_.92fr]"}>
        {project.screens.map(([label, src, alt], index) => (
          <motion.button
            key={src}
            type="button"
            onClick={() => setLightbox({ label, src, alt })}
            className={project.type === "phone" ? `phone-frame ${index === 0 ? "md:-translate-y-4" : ""}` : "laptop-frame"}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -7, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="screen-label">{label}</span>
            <img src={asset(src)} alt={alt} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Detail({ title, text, delay }) {
  return <Reveal delay={delay} className="rounded-3xl border border-emerald-100 bg-white/82 p-5 shadow-xl shadow-emerald-950/5"><h4 className="font-black text-emerald-700">{title}</h4><p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{text}</p></Reveal>;
}

function Stack() {
  return (
    <Section id="stack" eyebrow="Stack" title="Skills grouped for fullstack work">
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <Reveal key={group} className={`rounded-3xl border border-emerald-100 bg-white/82 p-6 shadow-xl shadow-emerald-950/5 ${group === "Additional Strengths" ? "md:col-span-2" : ""}`}>
            <h3 className="mb-4 text-xl font-black">{group}</h3>
            <div className="flex flex-wrap gap-2">{items.map((item) => <Pill key={item}>{item}</Pill>)}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience & Education" title="Hands-on work, production support, and computer engineering background">
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Timeline title="Experience" icon={BriefcaseBusiness} items={timeline} />
        <Timeline title="Education" icon={GraduationCap} items={education} />
      </div>
    </Section>
  );
}

function Timeline({ title, icon: Icon, items }) {
  return (
    <Reveal className="rounded-[2rem] border border-emerald-100 bg-white/82 p-6 shadow-xl shadow-emerald-950/5">
      <h3 className="mb-4 flex items-center gap-2 text-xl font-black"><Icon className="text-emerald-600" />{title}</h3>
      <ol className="grid gap-0">
        {items.map(([time, heading, body], index) => (
          <li key={`${time}-${heading}-${index}`} className="grid gap-3 border-t border-emerald-50 py-5 first:border-t-0 md:grid-cols-[100px_1fr]">
            <time className="font-black text-emerald-700">{time}</time>
            <div><strong className="block font-black">{heading}</strong><p className="mt-1 text-sm leading-7 text-slate-500">{body}</p></div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

function Awards() {
  return (
    <Section id="awards" eyebrow="Awards" title="Programming, cloud computing, and innovation achievements">
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {awards.map(([year, title, text], index) => (
          <Reveal key={`${year}-${title}-${index}`} className="rounded-3xl border border-emerald-100 bg-white/82 p-5 shadow-xl shadow-emerald-950/5">
            <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">{year}</span>
            <h3 className="mt-5 font-black">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto w-[min(1180px,calc(100%-32px))] py-16">
      <Reveal className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 to-emerald-800 p-7 text-white shadow-2xl shadow-emerald-950/18 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_.75fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black">
              <span className="size-2 rounded-full bg-emerald-300" /> Available for Fullstack Developer roles
            </div>
            <p className="font-black text-emerald-100">Contact</p>
            <h2 className="mt-3 text-balance text-4xl font-black leading-tight md:text-6xl">พร้อมคุยงาน Fullstack Developer</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/70">หากต้องการคนทำเว็บแอปพลิเคชัน fullstack ที่เข้าใจทั้ง frontend, backend, database และ workflow จริง ติดต่อได้เลยครับ</p>
          </div>
          <div className="grid gap-3">
            <ContactLink href="mailto:khunkun2003official@gmail.com" icon={Mail} label="khunkun2003official@gmail.com" />
            <ContactLink href="tel:0986875752" icon={Phone} label="098 687 5752" />
            <ContactLink href="https://github.com/KHUNKUN2003" icon={Code2} label="GitHub KHUNKUN2003" />
            <ContactLink href="#" icon={MessageCircle} label="LINE @Khunkun2003" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ContactLink({ href, icon: Icon, label }) {
  return <a href={href} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-4 font-bold text-white transition hover:bg-white/15"><span className="flex items-center gap-3"><Icon size={18} />{label}</span><ArrowUpRight size={16} /></a>;
}

function Footer() {
  return <footer className="mx-auto w-[min(1180px,calc(100%-32px))] pb-10 text-sm font-semibold text-slate-500">© {new Date().getFullYear()} Kritsanapong Maneesri. Built as a modern React portfolio.</footer>;
}

function Lightbox({ item, onClose }) {
  return (
    <motion.div className="fixed inset-0 z-[120] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <button className="fixed right-5 top-5 grid size-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white" onClick={onClose} aria-label="Close screenshot preview"><X /></button>
      <motion.figure className="m-0 grid max-h-[88vh] w-[min(980px,100%)] gap-3" initial={{ scale: 0.96, y: 18 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 18 }} onClick={(event) => event.stopPropagation()}>
        <img className="max-h-[80vh] w-full rounded-3xl border-8 border-white bg-white object-contain shadow-2xl" src={asset(item.src)} alt={item.alt} />
        <figcaption className="text-center font-black text-white/80">{item.label}</figcaption>
      </motion.figure>
    </motion.div>
  );
}

const rootElement = document.getElementById("root");
const appRoot = rootElement.__reactRoot ?? createRoot(rootElement);
rootElement.__reactRoot = appRoot;
appRoot.render(<App />);
