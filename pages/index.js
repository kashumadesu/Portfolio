import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GithubGraph from "../components/GithubGraph";
import Certifications from "../components/Certifications";
import ChatBot from "../components/ChatBot";
import WaveBackground from "../components/WaveBackground";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Dynamic Ambient Mouse Tracker
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [selectedSkill, setSelectedSkill] = useState({
    name: "Interactive Skills",
    desc: "Click any badge below to see my experience & mastery level.",
    mastery: "--",
  });

  const skills = [
    {
      name: "JavaScript",
      key: "JS",
      mastery: "9/10",
      desc: "Core language used across front-end web apps and dynamic UI logic since SHS.",
    },
    {
      name: "Python",
      key: "PY",
      mastery: "7.5/10",
      desc: "Used for Tkinter desktop GUIs, data manipulation, and capstone detection models.",
    },
    {
      name: "Figma & UI/UX",
      key: "FIG",
      mastery: "9/10",
      desc: "Design systems, wireframes, and responsive component prototyping.",
    },
    {
      name: "Project Management",
      key: "PM",
      mastery: "9/10",
      desc: "Agile delivery, scoping technical requirements, and cross-functional leadership.",
    },
    {
      name: "HTML5 / CSS3",
      key: "HTML",
      mastery: "9/10",
      desc: "Semantic structural layouts with responsive styling and custom theming.",
    },
    {
      name: "C# / .NET",
      key: "C#",
      mastery: "7/10",
      desc: "Object-oriented system engineering and structured logic implementation.",
    },
    {
      name: "SQL Databases",
      key: "SQL",
      mastery: "7/10",
      desc: "Relational database schema modeling, queries, and inventory tracking.",
    },
    {
      name: "Git & GitHub",
      key: "GIT",
      mastery: "9/10",
      desc: "Version control workflows, commit pipelines, and team collaboration.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0B090E] text-[#E9D5FF]">
     <div
        className="fixed top-0 left-0 pointer-events-none z-0 hidden md:block rounded-full mix-blend-screen transition-transform duration-75 ease-out"
        style={{
          width: "280px",
          height: "280px",
          transform: `translate3d(${mousePos.x - 140}px, ${mousePos.y - 140}px, 0)`,
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(126, 34, 206, 0.12) 40%, rgba(59, 7, 100, 0.04) 70%, transparent 100%)",
          filter: "blur(30px)",
        }}
      />

      {/* 1. Global Full-Screen Background Wave */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <WaveBackground />
      </div>

      {/* 2. Sticky Navbar */}
      <div className="sticky top-0 z-40">
        <Navbar onOpenContact={() => setIsContactOpen(true)} />
      </div>

      {/* 3. Main Content on top of background */}
      <main className="relative z-10 px-4 py-8 md:px-12 md:py-16 font-sans">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* 1. HERO / LANDING SECTION */}
          <header
            id="home"
            className="bg-[#15111E]/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-6 md:p-10 scroll-mt-24 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Full-Height Flex Container with Bottom-Locked Stats */}
              <div className="lg:col-span-7 flex flex-col justify-between py-1 space-y-6">
                {/* Top Details & Content */}
                <div className="space-y-6">
                  {/* Availability Badge */}
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/90 text-purple-300 text-xs font-semibold rounded-full border border-purple-800/80 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Open for PM &amp; IT Roles
                    </span>
                  </div>

                  {/* Name & Titles */}
                  <div className="space-y-3">
                    <p className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
                      HELLO, I&apos;M
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                      Michael April B. Boquiron
                    </h1>

                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <span className="bg-purple-950/80 border border-purple-700/60 text-purple-200 text-xs font-mono font-bold px-3 py-1.5">
                        TECHNICAL PM
                      </span>
                      <span className="text-purple-400 font-mono font-bold">&amp;</span>
                      <span className="bg-purple-950/80 border border-purple-700/60 text-purple-200 text-xs font-mono font-bold px-3 py-1.5">
                        FRONTEND / UI/UX
                      </span>
                    </div>
                  </div>

                  {/* Bio, Subtext & Value Statement */}
                  <div className="space-y-3 pt-1">
                    <p className="text-xs font-mono text-purple-400/90">
                      23 y/o • Senior BS Information Technology Candidate
                    </p>
                    <p className="italic text-purple-200 font-serif text-base sm:text-lg border-l-2 border-purple-500 pl-3.5 leading-relaxed">
                      &ldquo;Bridging intuitive design with scalable engineering execution.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-purple-300/80 leading-relaxed pt-1">
                      Specializing in end-to-end technical project delivery, structured system architecture, and modern full-stack web applications.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href="#projects"
                      className="group relative px-6 py-3 border border-purple-400 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg shadow-purple-950/50"
                    >
                      <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-purple-200" />
                      <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-purple-200" />
                      <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-purple-200" />
                      <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-purple-200" />
                      <span>VIEW PROJECTS</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>

                    <a
                      href="/resume.pdf"
                      download="Michael_Boquiron_CV.pdf"
                      className="group relative px-6 py-3 border border-purple-500/50 hover:border-purple-400 bg-purple-950/40 hover:bg-purple-900/50 text-purple-200 hover:text-white font-bold text-xs tracking-wider transition-all duration-200 flex items-center gap-2"
                    >
                      <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-purple-400" />
                      <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-purple-400" />
                      <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-purple-400" />
                      <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-purple-400" />
                      <span>DOWNLOAD CV</span>
                      <svg className="w-3.5 h-3.5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Bottom Metric Stat Boxes */}
                <div className="pt-6">
                  <div className="grid grid-cols-3 border border-purple-900/40 bg-purple-950/20 backdrop-blur-sm text-center divide-x divide-purple-900/40">
                    <div className="py-3.5 px-2">
                      <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">5+</div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-purple-400 font-mono mt-0.5">Delivered Systems</div>
                    </div>
                    <div className="py-3.5 px-2">
                      <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">10+</div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-purple-400 font-mono mt-0.5">Completed Projects</div>
                    </div>
                    <div className="py-3.5 px-2">
                      <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">8+</div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-purple-400 font-mono mt-0.5">Tech Stacks</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Side-Slide Avatar Card */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative w-full max-w-sm bg-[#110D1A]/40 backdrop-blur-sm border-2 border-purple-500/40 p-4 shadow-2xl space-y-4">
                  {/* Outer Corner Frame Brackets */}
                  <span className="!m-0 absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-purple-400 pointer-events-none z-30" />
                  <span className="!m-0 absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-purple-400 pointer-events-none z-30" />
                  <span className="!m-0 absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-purple-400 pointer-events-none z-30" />
                  <span className="!m-0 absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-purple-400 pointer-events-none z-30" />

                  {/* Dual Image Slide Frame */}
                  <div
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    className="relative aspect-[4/5] w-full bg-[#0B090E] border border-purple-900/60 overflow-hidden cursor-pointer group select-none"
                    title="Click to view side photo"
                  >
                    {/* Background Cyber Grid */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#a855f720_1px,transparent_1px),linear-gradient(to_bottom,#a855f720_1px,transparent_1px)] bg-[size:16px_16px] z-0" />

                    {/* Subtle Purple Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#110D1A] via-transparent to-transparent opacity-80 z-20 pointer-events-none" />

                    {/* Mode / Slide Toggle Badge */}
                    <div className="absolute top-2 right-2 z-30 px-2 py-0.5 bg-black/80 border border-purple-800 text-[10px] font-mono text-purple-300 backdrop-blur-sm transition-colors">
                      {isDrawerOpen ? "◀ PRIMARY" : "▶ PREVIEW"}
                    </div>

                    {/* Sliding Two-Panel Track */}
                    <div
                      className={`w-[200%] h-full flex transition-transform duration-500 ease-in-out ${
                        isDrawerOpen ? "-translate-x-1/2" : "translate-x-0"
                      }`}
                    >
                      {/* PANEL 1: Main Avatar */}
                      <div className="w-1/2 h-full relative flex-shrink-0 flex items-center justify-center">
                        <img
                          src="/profile.jpg?v=11"
                          alt="Michael April B. Boquiron"
                          className="w-full h-full object-cover object-[20%_15%] scale-135 filter contrast-115 brightness-95 transition-transform duration-300 group-hover:scale-140"
                        />
                      </div>

                      {/* PANEL 2: Side Secondary Photo */}
                      <div className="w-1/2 h-full relative flex-shrink-0 flex items-center justify-center bg-[#15111E] border-l border-purple-900/80">
                        <img
                          src="/profile2.jpg"
                          alt="Michael April Secondary Profile"
                          className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            if (e.currentTarget.nextSibling) {
                              e.currentTarget.nextSibling.style.display = "flex";
                            }
                          }}
                        />
                        <div className="hidden flex-col items-center justify-center text-center p-6 space-y-2">
                          <div className="w-16 h-16 bg-purple-950/80 border border-purple-500/50 flex items-center justify-center text-xl font-mono text-purple-300">
                            IMG 2
                          </div>
                          <p className="text-xs font-mono text-purple-300">Place photo at</p>
                          <p className="text-[11px] font-mono text-purple-400">public/profile2.jpg</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Let's Connect Toolbar */}
                  <div className="space-y-2 pt-2 border-t border-purple-950/80">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-purple-300 font-bold uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>LET&apos;S CONNECT:</span>
                    </div>

                    <div className="grid grid-cols-4 gap-1.5 text-[11px] font-mono">
                      <a
                        href="mailto:michaelapril81416@gmail.com?subject=Project%20Inquiry%20/%20Collaboration"
                        className="flex items-center justify-center py-1.5 bg-[#1A1424] hover:bg-purple-900/60 border border-purple-900/80 text-purple-200 hover:text-white transition text-center"
                      >
                        Email
                      </a>

                      <a
                        href="https://github.com/kashumadesu"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center py-1.5 bg-[#1A1424] hover:bg-purple-900/60 border border-purple-900/80 text-purple-200 hover:text-white transition text-center"
                      >
                        GitHub
                      </a>

                      <a
                        href="https://www.instagram.com/emmmzs_/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center py-1.5 bg-[#1A1424] hover:bg-purple-900/60 border border-purple-900/80 text-purple-200 hover:text-white transition text-center"
                      >
                        IG
                      </a>

                      <a
                        href="https://www.facebook.com/michaelboquiron24"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center py-1.5 bg-[#1A1424] hover:bg-purple-900/60 border border-purple-900/80 text-purple-200 hover:text-white transition text-center"
                      >
                        FB
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* 2. BENTO ROW: TIMELINE & ACHIEVEMENTS */}
          <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch scroll-mt-24">
            {/* Left Column: Journey & Timeline */}
            <section className="bg-[#15111E]/70 backdrop-blur-md border border-purple-950/60 rounded-3xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-purple-900/40">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  Journey &amp; Timeline
                </h2>
                <span className="text-xs font-mono text-purple-400">Experience Log</span>
              </div>

              {/* Connected Timeline Nodes */}
              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-purple-500 before:via-purple-800 before:to-purple-950">
                {/* 1. Present */}
                <div className="relative group">
                  <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-400 ring-4 ring-[#15111E] group-hover:scale-125 transition-transform" />
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-purple-300 font-bold px-2 py-0.5 bg-purple-950/90 border border-purple-800/80 rounded">
                      2026 — Present
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm mt-1 group-hover:text-purple-300 transition-colors">
                    Technical Project Manager &amp; Lead Architect
                  </h4>
                  <p className="text-purple-300/80 text-xs mt-1 leading-relaxed">
                    Driving sprint workflows, architecture reviews, and UX prototyping for production deployments.
                  </p>
                </div>

                {/* 2. Capstone / ECOWATCH & POS */}
                <div className="relative group">
                  <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-600 ring-4 ring-[#15111E] group-hover:scale-125 transition-transform" />
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-purple-400 font-bold px-2 py-0.5 bg-[#1C1628] border border-purple-900/60 rounded">
                      2025 — 2026
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm mt-1 group-hover:text-purple-300 transition-colors">
                    Lead PM &amp; UI/UX — POS &amp; ECOWATCH Research
                  </h4>
                  <p className="text-purple-300/80 text-xs mt-1 leading-relaxed">
                    Delivered end-to-end POS Monitoring System and directed dataset pipelines for automated CV detection.
                  </p>
                </div>

                {/* 3. Academic Specialization */}
                <div className="relative group">
                  <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-800 ring-4 ring-[#15111E] group-hover:scale-125 transition-transform" />
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-purple-400 font-bold px-2 py-0.5 bg-[#1C1628] border border-purple-900/60 rounded">
                      2023 — 2025
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm mt-1 group-hover:text-purple-300 transition-colors">
                    BS Information Technology Specialization
                  </h4>
                  <p className="text-purple-300/80 text-xs mt-1 leading-relaxed">
                    Our Lady of Fatima University — Cisco routing/switching, database schema modeling, and OOP.
                  </p>
                </div>

                {/* 4. SHS Foundations */}
                <div className="relative group">
                  <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-950 border border-purple-600 ring-4 ring-[#15111E] group-hover:scale-125 transition-transform" />
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-purple-400 font-bold px-2 py-0.5 bg-[#1C1628] border border-purple-900/60 rounded">
                      Foundations
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm mt-1 group-hover:text-purple-300 transition-colors">
                    Front-End Foundations &amp; UI Engineering
                  </h4>
                  <p className="text-purple-300/80 text-xs mt-1 leading-relaxed">
                    Deep dive into modern JavaScript, semantic HTML5/CSS3 layouts, and component-driven UI architecture.
                  </p>
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="pt-3 border-t border-purple-950/60 flex items-center justify-between text-[11px] font-mono text-purple-400/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Active Career Path
                </span>
                <span>Open for Technical PM Roles</span>
              </div>
            </section>

            {/* Right Column: Scrollable Key Milestones & Verified Certs */}
            <section className="bg-[#15111E]/70 backdrop-blur-md border border-purple-950/60 rounded-3xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-purple-900/40">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  Certifications &amp; Milestones
                </h2>
                <a
                  href="#certifications"
                  className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View All (20+) &rarr;
                </a>
              </div>

              {/* Scrollable List Box */}
              <div className="h-[380px] overflow-y-auto space-y-2.5 pr-2 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-[#0B090E]">
                {/* 1. CPI OPEN Module 1 */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Center for Project Innovation</span>
                    <p className="font-semibold text-white text-xs">OPEN Module 1: Project Initiation (10-Hr CPD)</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 2. C# Microsoft */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">freeCodeCamp &amp; Microsoft</span>
                    <p className="font-semibold text-white text-xs">Foundational C# with Microsoft</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 3. freeCodeCamp Front-End */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">freeCodeCamp (300h)</span>
                    <p className="font-semibold text-white text-xs">Front-End Development Libraries</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 4. freeCodeCamp Web Design */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">freeCodeCamp (300h)</span>
                    <p className="font-semibold text-white text-xs">Responsive Web Design Certification</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 5. CodinGame JS (Honors) */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">CodinGame by CoderPad</span>
                    <p className="font-semibold text-white text-xs">JavaScript Problem Solving (With Honors)</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 6. CodinGame Python (Honors) */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">CodinGame by CoderPad</span>
                    <p className="font-semibold text-white text-xs">Python 3 Problem Solving (With Honors)</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 7. CodinGame Java */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">CodinGame by CoderPad</span>
                    <p className="font-semibold text-white text-xs">Java Problem Solving Certification</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 8. Oracle AI Studio */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Oracle Certified</span>
                    <p className="font-semibold text-white text-xs">Fusion AI Agent Studio Foundations Associate</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 9. Oracle Agentic AI */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Oracle Certified</span>
                    <p className="font-semibold text-white text-xs">Agentic AI Foundations Associate</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 10. IBM SkillsBuild */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">IBM SkillsBuild</span>
                    <p className="font-semibold text-white text-xs">Project Management Fundamentals</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 11. ITC-ILO */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">ITC-ILO</span>
                    <p className="font-semibold text-white text-xs">Introduction to Project Cycle Management</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 12. HP LIFE Series */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">HP LIFE Foundation</span>
                    <p className="font-semibold text-white text-xs">AI for Beginners • Data Science • Cybersecurity</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* 13. Cisco Network Defense */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Cisco Networking Academy / OLFU</span>
                    <p className="font-semibold text-white text-xs">Network Defense Certification</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Mar 2026</span>
                </div>

                {/* 14. HP LIFE Agile */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">HP LIFE Foundation</span>
                    <p className="font-semibold text-white text-xs">Agile Project Management</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Mar 2026</span>
                </div>

                {/* 15. Booth Fair Award */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Academic Award • CIRCU5</span>
                    <p className="font-semibold text-white text-xs">2nd Runner Up – CCS Week Booth Fair</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Mar 2026</span>
                </div>

                {/* 16. Cisco Network Support */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Cisco Networking Academy / OLFU</span>
                    <p className="font-semibold text-white text-xs">Network Support and Security</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Feb 2026</span>
                </div>

                {/* 17. Cisco Networking Basics */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Cisco Networking Academy / OLFU</span>
                    <p className="font-semibold text-white text-xs">Networking Basics</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Dec 2025</span>
                </div>

                {/* 18. Cisco Devices */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Cisco Networking Academy / OLFU</span>
                    <p className="font-semibold text-white text-xs">Networking Devices &amp; Initial Config</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Oct 2025</span>
                </div>

                {/* 19. Cisco Addressing */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Cisco Networking Academy / OLFU</span>
                    <p className="font-semibold text-white text-xs">Network Addressing &amp; Basic Troubleshooting</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Sep 2025</span>
                </div>

                {/* 20. CodinGame Legend */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">CodinGame by CoderPad</span>
                    <p className="font-semibold text-white text-xs">Algorithms Mastery (Legend Level)</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Nov 2024</span>
                </div>

                {/* 21. CCS Seminar */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">OLFU CCS Week 2024</span>
                    <p className="font-semibold text-white text-xs">CCS: Code, Create, Succeed – Seminar</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Oct 2024</span>
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="pt-3 border-t border-purple-950/60 flex items-center justify-between text-[11px] font-mono text-purple-400/70">
                <span>Total 20+ Records</span>
                <span>Scroll to browse &darr;</span>
              </div>
            </section>
          </div>

          {/* 3. INTERACTIVE SKILLS MATRIX */}
          <section id="skills" className="bg-[#15111E]/70 backdrop-blur-md border border-purple-950/60 rounded-3xl p-6 space-y-6 scroll-mt-24 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
              <div>
                <h2 className="text-xl font-bold text-white"> Skills &amp; Competencies</h2>
                <p className="text-xs text-purple-400">Select any tool to see my direct workflow and context.</p>
              </div>
              <div className="bg-[#1F1730] px-4 py-2 rounded-xl border border-purple-800 text-right">
                <span className="text-xs text-purple-300 block font-mono">{selectedSkill.name}</span>
                <span className="text-xs text-purple-400 font-bold">Mastery: {selectedSkill.mastery}</span>
              </div>
            </div>

            <div className="p-4 bg-[#0B090E]/60 rounded-2xl border border-purple-950 text-sm text-purple-200">
              {selectedSkill.desc}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.map((skill) => (
                <button
                  key={skill.key}
                  onClick={() => setSelectedSkill(skill)}
                  className="p-3 bg-[#1B1526] hover:bg-purple-900/50 border border-purple-900/60 hover:border-purple-500 rounded-xl font-bold text-sm text-purple-200 transition text-center"
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </section>

          {/* 4. FEATURED SYSTEMS & PROJECTS */}
          <section id="projects" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-white"> Systems &amp; Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#15111E]/70 backdrop-blur-md border border-purple-950/60 rounded-3xl p-6 space-y-3 shadow-xl">
                <span className="text-xs font-mono text-purple-400">Enterprise System</span>
                <h3 className="text-xl font-bold text-white">Point of Sale (POS) &amp; Monitoring System</h3>
                <p className="text-xs text-purple-300">
                  Served as Project Manager and UI/UX Designer. Structured the core user journeys, inventory pipelines, and end-to-end system release workflows.
                </p>
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="text-xs bg-purple-950 border border-purple-800 px-2 py-1 rounded-md text-purple-300">Agile PM</span>
                  <span className="text-xs bg-purple-950 border border-purple-800 px-2 py-1 rounded-md text-purple-300">Figma UI/UX</span>
                  <span className="text-xs bg-purple-950 border border-purple-800 px-2 py-1 rounded-md text-purple-300">Database Logic</span>
                </div>
              </div>

              <div className="bg-[#15111E]/70 backdrop-blur-md border border-purple-950/60 rounded-3xl p-6 space-y-3 shadow-xl">
                <span className="text-xs font-mono text-purple-400">Research &amp; Capstone</span>
                <h3 className="text-xl font-bold text-white">ECOWATCH Automated Waste Detection</h3>
                <p className="text-xs text-purple-300">
                  Led team coordination, dataset gathering protocols, and system architecture for an automated computer vision waste classification system.
                </p>
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="text-xs bg-purple-950 border border-purple-800 px-2 py-1 rounded-md text-purple-300">Technical PM</span>
                  <span className="text-xs bg-purple-950 border border-purple-800 px-2 py-1 rounded-md text-purple-300">Python</span>
                  <span className="text-xs bg-purple-950 border border-purple-800 px-2 py-1 rounded-md text-purple-300">Computer Vision</span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. VERIFIED CERTIFICATIONS & CREDENTIALS */}
          <Certifications />

          {/* 6. GITHUB ACTIVITY GRAPH */}
          <GithubGraph />
        </div>
      </main>

      {/* 4. Contact Pop-up Modal (Cyber Frame & Sharp Edges) */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#110D1A] border-2 border-purple-500/50 p-6 md:p-8 shadow-2xl shadow-purple-950/80 space-y-6">
            {/* Outer Cyber Corner Brackets */}
            <span className="!m-0 absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-purple-400 pointer-events-none z-30" />
            <span className="!m-0 absolute -top-[2px] -right-[2px] w-4 h-4 border-t-2 border-r-2 border-purple-400 pointer-events-none z-30" />
            <span className="!m-0 absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-2 border-l-2 border-purple-400 pointer-events-none z-30" />
            <span className="!m-0 absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-purple-400 pointer-events-none z-30" />

            {/* Modal Header & Close Button */}
            <div className="flex items-start justify-between border-b border-purple-950/80 pb-4">
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">Direct Channel</span>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">Let&apos;s Connect</h3>
                <p className="text-xs font-mono text-purple-300/80 mt-1">
                  Reach out directly across any of my active networks.
                </p>
              </div>
              <button
                onClick={() => setIsContactOpen(false)}
                className="relative px-2.5 py-1 bg-[#1A1424] hover:bg-purple-900/60 border border-purple-700/60 hover:border-purple-400 text-purple-300 hover:text-white font-mono text-xs transition"
                aria-label="Close Contact Modal"
              >
                ✕ ESC
              </button>
            </div>

            {/* Sharp Edge Links List */}
            <div className="space-y-2.5 font-mono text-xs">
              {/* 1. Gmail */}
              <a
                href="mailto:michaelapril81416@gmail.com?subject=Project%20Inquiry%20/%20Collaboration"
                className="group relative flex items-center justify-between p-3 bg-[#161122] hover:bg-purple-950/60 border border-purple-900/60 hover:border-purple-400 text-purple-200 hover:text-white transition"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 bg-emerald-400 animate-pulse"></span>
                  <span className="font-bold tracking-wider uppercase">Gmail</span>
                </div>
                <span className="text-purple-400 group-hover:text-purple-200">michaelapril81416@gmail.com &rarr;</span>
              </a>

              {/* 2. GitHub */}
              <a
                href="https://github.com/kashumadesu"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between p-3 bg-[#161122] hover:bg-purple-950/60 border border-purple-900/60 hover:border-purple-400 text-purple-200 hover:text-white transition"
              >
                <span className="font-bold tracking-wider uppercase">GitHub</span>
                <span className="text-purple-400 group-hover:text-purple-200">@kashumadesu &rarr;</span>
              </a>

              {/* 3. Instagram */}
              <a
                href="https://www.instagram.com/emmmzs_/"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between p-3 bg-[#161122] hover:bg-purple-950/60 border border-purple-900/60 hover:border-purple-400 text-purple-200 hover:text-white transition"
              >
                <span className="font-bold tracking-wider uppercase">Instagram</span>
                <span className="text-purple-400 group-hover:text-purple-200">@emmmzs_ &rarr;</span>
              </a>

              {/* 4. Facebook */}
              <a
                href="https://www.facebook.com/michaelboquiron24"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between p-3 bg-[#161122] hover:bg-purple-950/60 border border-purple-900/60 hover:border-purple-400 text-purple-200 hover:text-white transition"
              >
                <span className="font-bold tracking-wider uppercase">Facebook</span>
                <span className="text-purple-400 group-hover:text-purple-200">/michaelboquiron24 &rarr;</span>
              </a>

              {/* 5. LinkedIn (Placeholder) */}
              <div className="flex items-center justify-between p-3 bg-[#161122]/40 border border-purple-950/40 text-purple-400/50 select-none">
                <span className="font-bold tracking-wider uppercase">LinkedIn</span>
                <span className="text-[10px] tracking-widest uppercase">Coming Soon</span>
              </div>

              {/* 6. Download CV */}
              <a
                href="/resume.pdf"
                download="Michael_Boquiron_CV.pdf"
                className="group relative flex items-center justify-between p-3 bg-purple-950/80 hover:bg-purple-900 border border-purple-500/70 hover:border-purple-300 text-purple-100 hover:text-white transition shadow-lg shadow-purple-950/60"
              >
                <span className="font-bold tracking-wider uppercase">Download Resume / CV</span>
                <span className="text-purple-300 group-hover:text-white font-bold">PDF &darr;</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Interactive Chat Assistant */}
      <ChatBot />
    </div>
  );
}