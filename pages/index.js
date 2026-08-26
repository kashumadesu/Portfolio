import { useState } from "react";
import Navbar from "../components/Navbar";
import GithubGraph from "../components/GithubGraph";
import Certifications from "../components/Certifications";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [selectedSkill, setSelectedSkill] = useState({
    name: "Interactive Skills",
    desc: "Click any badge below to see my experience & mastery level.",
    mastery: "--"
  });

  const skills = [
    { name: "JavaScript", key: "JS", mastery: "9/10", desc: "Core language used across front-end web apps and dynamic UI logic since SHS." },
    { name: "Python", key: "PY", mastery: "7.5/10", desc: "Used for Tkinter desktop GUIs, data manipulation, and capstone detection models." },
    { name: "Figma & UI/UX", key: "FIG", mastery: "9/10", desc: "Design systems, wireframes, and responsive component prototyping." },
    { name: "Project Management", key: "PM", mastery: "9/10", desc: "Agile delivery, scoping technical requirements, and cross-functional leadership." },
    { name: "HTML5 / CSS3", key: "HTML", mastery: "9/10", desc: "Semantic structural layouts with responsive styling and custom theming." },
    { name: "C# / .NET", key: "C#", mastery: "7/10", desc: "Object-oriented system engineering and structured logic implementation." },
    { name: "SQL Databases", key: "SQL", mastery: "7/10", desc: "Relational database schema modeling, queries, and inventory tracking." },
    { name: "Git & GitHub", key: "GIT", mastery: "9/10", desc: "Version control workflows, commit pipelines, and team collaboration." },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0B090E] text-[#E9D5FF] px-4 py-8 md:px-12 md:py-16 font-sans">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* 1. HERO / LANDING SECTION */}
          <header id="home" className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 md:p-10 scroll-mt-24">
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
                  <div className="grid grid-cols-3 border border-purple-900/60 bg-[#0B090E]/60 text-center divide-x divide-purple-900/60 shadow-inner">
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
                <div className="relative w-full max-w-sm bg-[#110D1A] border-2 border-purple-900/70 p-4 shadow-2xl space-y-4">
                  
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
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.nextSibling) {
                              e.currentTarget.nextSibling.style.display = 'flex';
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

                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      <a
                        href="mailto:michaelapril81416@gmail.com?subject=Project%20Inquiry%20/%20Collaboration"
                        className="flex items-center justify-center gap-1 py-1.5 bg-[#1A1424] hover:bg-purple-900/60 border border-purple-900/80 text-purple-200 hover:text-white transition text-center"
                      >
                        <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Email</span>
                      </a>

                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1 py-1.5 bg-[#1A1424] hover:bg-purple-900/60 border border-purple-900/80 text-purple-200 hover:text-white transition text-center"
                      >
                        <svg className="w-3.5 h-3.5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span>LinkedIn</span>
                      </a>

                      <a
                        href="https://github.com/kashumadesu"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1 py-1.5 bg-[#1A1424] hover:bg-purple-900/60 border border-purple-900/80 text-purple-200 hover:text-white transition text-center"
                      >
                        <svg className="w-3.5 h-3.5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </header>

        {/* 2. BENTO ROW: TIMELINE & ACHIEVEMENTS */}
          <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-mt-24">
            
            {/* Left Column: Journey & Timeline */}
            <section className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 space-y-4 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🚀</span> Journey &amp; Timeline
              </h2>
              <div className="border-l-2 border-purple-900/60 ml-3 space-y-6 pl-4 text-sm">
                <div>
                  <p className="text-xs text-purple-400 font-mono">Present</p>
                  <h4 className="font-semibold text-white">Technical Project Manager &amp; Lead</h4>
                  <p className="text-purple-300/80 text-xs">Driving system architecture, sprint workflows, and UI/UX design.</p>
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-mono">2025 – 2026</p>
                  <h4 className="font-semibold text-white">Lead PM &amp; UI/UX — POS &amp; Capstone Research</h4>
                  <p className="text-purple-300/80 text-xs">Delivered POS Monitoring System and ECOWATCH automated detection system.</p>
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-mono">Foundations</p>
                  <h4 className="font-semibold text-white">Front-End Developer (SHS Background)</h4>
                  <p className="text-purple-300/80 text-xs">Built strong foundation in HTML, CSS, JavaScript, and responsive UI layouts.</p>
                </div>
              </div>
            </section>

            {/* Right Column: Scrollable Key Milestones & Verified Certs */}
            <section className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 space-y-4 flex flex-col">
              <div className="flex items-center justify-between pb-1 border-b border-purple-900/40">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>🏆</span> Certifications &amp; Milestones
                </h2>
                <a 
                  href="#certifications" 
                  className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View All (20+) &rarr;
                </a>
              </div>

              {/* Scrollable Container with max height & custom scrollbar */}
              <div className="space-y-2.5 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-[#0B090E]">
                
                {/* Oracle AI Agent Studio */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Oracle Certified</span>
                    <p className="font-semibold text-white text-xs">Fusion AI Agent Studio Foundations Associate</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* Oracle Agentic AI */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Oracle Certified</span>
                    <p className="font-semibold text-white text-xs">Agentic AI Foundations Associate</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* CodinGame Legend */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">CodinGame by CoderPad</span>
                    <p className="font-semibold text-white text-xs">Algorithms Mastery (Legend Level)</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Nov 2024</span>
                </div>

                {/* Competition Award */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Academic Award • CIRCU5</span>
                    <p className="font-semibold text-white text-xs">2nd Runner Up – CCS Week Booth Fair</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Mar 2026</span>
                </div>

                {/* IBM SkillsBuild */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">IBM SkillsBuild</span>
                    <p className="font-semibold text-white text-xs">Project Management Fundamentals</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* Cisco Academy */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">Cisco Networking Academy</span>
                    <p className="font-semibold text-white text-xs">Network Defense &amp; Security Specialization</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Mar 2026</span>
                </div>

                {/* freeCodeCamp Front-End */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">freeCodeCamp (300h)</span>
                    <p className="font-semibold text-white text-xs">Front-End Development Libraries</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

                {/* freeCodeCamp C# Microsoft */}
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40 hover:border-purple-600 transition flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block">freeCodeCamp &amp; Microsoft</span>
                    <p className="font-semibold text-white text-xs">Foundational C# with Microsoft</p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/80 shrink-0">Aug 2026</span>
                </div>

              </div>
            </section>
          </div>

          {/* 3. INTERACTIVE SKILLS MATRIX */}
          <section id="skills" className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 space-y-6 scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
              <div>
                <h2 className="text-xl font-bold text-white">⚡ Skills & Competencies</h2>
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
            <h2 className="text-2xl font-bold text-white">🛠️ Systems & Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 space-y-3">
                <span className="text-xs font-mono text-purple-400">Enterprise System</span>
                <h3 className="text-xl font-bold text-white">Point of Sale (POS) & Monitoring System</h3>
                <p className="text-xs text-purple-300">
                  Served as Project Manager and UI/UX Designer. Structured the core user journeys, inventory pipelines, and end-to-end system release workflows.
                </p>
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="text-xs bg-purple-950 border border-purple-800 px-2 py-1 rounded-md text-purple-300">Agile PM</span>
                  <span className="text-xs bg-purple-950 border border-purple-800 px-2 py-1 rounded-md text-purple-300">Figma UI/UX</span>
                  <span className="text-xs bg-purple-950 border border-purple-800 px-2 py-1 rounded-md text-purple-300">Database Logic</span>
                </div>
              </div>

              <div className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 space-y-3">
                <span className="text-xs font-mono text-purple-400">Research & Capstone</span>
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

          {/* 5. GITHUB ACTIVITY GRAPH */}
          <GithubGraph />

          {/* 6. VERIFIED CERTIFICATIONS & CREDENTIALS */}
          <Certifications />

          {/* 7. PUBLIC CONTACT FOOTER */}
          <footer id="contact" className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-8 text-center space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-white">Let&apos;s Connect</h2>
            <p className="text-sm text-purple-300 max-w-md mx-auto">
              Available for Technical Project Management, Associate PM, and Front-End leadership roles.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a 
                href="https://github.com/kashumadesu" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-sm transition"
              >
                GitHub / kashumadesu
              </a>
            </div>
          </footer>

        </div>
      </main>
    </>
  );
}