import { useState } from "react";
import Navbar from "../components/Navbar";
import GithubGraph from "../components/GithubGraph";

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState({
    name: "Interactive Skills",
    desc: "Click any badge below to see my experience & mastery level.",
    mastery: "--"
  });

  const skills = [
    { name: "JavaScript", key: "JS", mastery: "9/10", desc: "Core language used across front-end web apps and dynamic UI logic since SHS." },
    { name: "Python", key: "PY", mastery: "8.5/10", desc: "Used for Tkinter desktop GUIs, data manipulation, and capstone detection models." },
    { name: "Figma & UI/UX", key: "FIG", mastery: "9/10", desc: "Design systems, wireframes, and responsive component prototyping." },
    { name: "Project Management", key: "PM", mastery: "9/10", desc: "Agile delivery, scoping technical requirements, and cross-functional leadership." },
    { name: "HTML5 / CSS3", key: "HTML", mastery: "9.5/10", desc: "Semantic structural layouts with responsive styling and custom theming." },
    { name: "C# / .NET", key: "C#", mastery: "8/10", desc: "Object-oriented system engineering and structured logic implementation." },
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Bio, Titles, Action Buttons & Metrics */}
            <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-purple-400 font-bold uppercase tracking-wider">HELLO, I&apos;M</span>
                <span className="inline-block px-2.5 py-0.5 bg-purple-950 text-purple-300 text-[11px] font-semibold rounded-full border border-purple-800">
                    🟢 Open for PM & IT Roles
                </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Michael April B. Boquiron
                </h1>

                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-sm sm:text-base font-bold text-purple-300">
                <span className="bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-800/80 text-purple-200">
                    TECHNICAL PM
                </span>
                <span className="text-purple-400">&amp;</span>
                <span className="bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-800/80 text-purple-200">
                    FULL-STACK / UI/UX
                </span>
                </div>
            </div>

            {/* Quote / Subtext */}
            <div className="space-y-1">
                <p className="text-xs text-purple-400 font-medium">23 y/o • Senior BS Information Technology Candidate</p>
                <p className="italic text-purple-200/90 font-serif text-base border-l-2 border-purple-600 pl-3">
                &ldquo;Bridging intuitive design with scalable engineering execution.&rdquo;
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                href="#projects"
                className="group relative px-5 py-2.5 border border-purple-400 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg shadow-purple-950/50"
                >
                {/* Tech Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white" />
                <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white" />
                <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white" />
                <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white" />
                <span>VIEW PROJECTS</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>

                <a
                href="#"
                className="group relative px-5 py-2.5 border border-purple-500/40 hover:border-purple-400 bg-purple-950/30 hover:bg-purple-900/40 text-purple-200 hover:text-white font-bold text-xs tracking-wider transition-all duration-200 flex items-center gap-2"
                >
                <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-purple-400" />
                <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-purple-400" />
                <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-purple-400" />
                <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-purple-400" />
                <span>DOWNLOAD CV</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                </a>
            </div>

            {/* Wireframe Stat Boxes */}
            <div className="pt-2">
                <div className="grid grid-cols-3 border border-purple-900/60 bg-[#0B090E]/40 text-center divide-x divide-purple-900/60">
                <div className="p-3">
                    <div className="text-lg font-bold text-white">5+</div>
                    <div className="text-[10px] uppercase tracking-wider text-purple-400 font-mono">Delivered Systems</div>
                </div>
                <div className="p-3">
                    <div className="text-lg font-bold text-white">10+</div>
                    <div className="text-[10px] uppercase tracking-wider text-purple-400 font-mono">Completed Projects</div>
                </div>
                <div className="p-3">
                    <div className="text-lg font-bold text-white">8+</div>
                    <div className="text-[10px] uppercase tracking-wider text-purple-400 font-mono">Tech Stacks</div>
                </div>
                </div>
            </div>
            </div>

            {/* Right Column: Frame Picture Card & Let's Connect */}
            <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm bg-[#110D1A] border-2 border-purple-900/70 p-4 shadow-2xl space-y-4">
                
                {/* Outer Corner Frame Brackets */}
                <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-400 pointer-events-none" />
                <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-400 pointer-events-none" />
                <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-purple-400 pointer-events-none" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-400 pointer-events-none" />

                {/* Image / Avatar Display Box */}
                <div className="relative aspect-square w-full bg-[#0B090E] border border-purple-900/60 flex items-center justify-center overflow-hidden group">
                {/* Cyber Grid Background Accent */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                <div className="text-center z-10 space-y-2 p-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-purple-950/80 border border-purple-500/50 flex items-center justify-center text-2xl font-mono text-purple-300 shadow-inner">
                    MB
                    </div>
                    <p className="text-xs font-mono text-purple-400 uppercase tracking-wider">Michael April B. Boquiron</p>
                    <p className="text-[11px] text-purple-300/70">Photo Avatar Placeholder</p>
                </div>
                </div>

                {/* Let's Connect Footer Bar */}
                <div className="space-y-2 pt-1 border-t border-purple-950">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-purple-300 font-bold uppercase tracking-wider">
                    <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>LET&apos;S CONNECT:</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <a
                    href="mailto:contact@example.com"
                    className="flex items-center justify-center gap-1.5 py-1.5 bg-[#1A1424] hover:bg-purple-900/60 border border-purple-900 text-purple-200 rounded transition text-center"
                    >
                    <span>✉ Email</span>
                    </a>
                    <a
                    href="https://github.com/kashumadesu"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-1.5 bg-[#1A1424] hover:bg-purple-900/60 border border-purple-900 text-purple-200 rounded transition text-center"
                    >
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
            <section className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">📅 Journey & Timeline</h2>
              <div className="border-l-2 border-purple-900/60 ml-3 space-y-6 pl-4 text-sm">
                <div>
                  <p className="text-xs text-purple-400 font-mono">Present</p>
                  <h4 className="font-semibold text-white">Technical Project Manager & Lead</h4>
                  <p className="text-purple-300/80 text-xs">Driving system architecture, sprint workflows, and UI/UX design.</p>
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-mono">2025 – 2026</p>
                  <h4 className="font-semibold text-white">Lead PM & UI/UX — POS & Capstone Research</h4>
                  <p className="text-purple-300/80 text-xs">Delivered POS Monitoring System and ECOWATCH automated detection system.</p>
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-mono">Foundations</p>
                  <h4 className="font-semibold text-white">Front-End Developer (SHS Background)</h4>
                  <p className="text-purple-300/80 text-xs">Built strong foundation in HTML, CSS, JavaScript, and responsive UI layouts.</p>
                </div>
              </div>
            </section>

            <section className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">🏆 Certifications & Milestones</h2>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40">
                  <span className="text-xs font-mono text-purple-400">Oracle Credential</span>
                  <p className="font-semibold text-white">Oracle Fusion AI Agent Studio Foundations Associate</p>
                </div>
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40">
                  <span className="text-xs font-mono text-purple-400">Oracle Credential</span>
                  <p className="font-semibold text-white">Agentic AI Foundations Associate</p>
                </div>
                <div className="p-3 bg-[#1C1628] rounded-xl border border-purple-900/40">
                  <span className="text-xs font-mono text-purple-400">Academic Leadership</span>
                  <p className="font-semibold text-white">Lead Project Manager & UI/UX Architect</p>
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
            <h2 className="text-2xl font-bold text-white">🛠 Systems & Projects</h2>
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

          {/* 6. PUBLIC CONTACT */}
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