import { useState } from "react";
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
    { name: "SQL Databases", key: "SQL", mastery: "8.5/10", desc: "Relational database schema modeling, queries, and inventory tracking." },
    { name: "Git & GitHub", key: "GIT", mastery: "9/10", desc: "Version control workflows, commit pipelines, and team collaboration." },
  ];

  return (
    <main className="min-h-screen bg-[#0B090E] text-[#E9D5FF] px-4 py-8 md:px-12 md:py-16 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* 1. HERO / LANDING SECTION */}
        <header className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-purple-950 text-purple-300 text-xs font-semibold rounded-full border border-purple-800">
              🟢 Open for PM & IT Roles
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Michael B.</h1>
            <p className="text-sm text-purple-300 font-medium">23 y/o • Senior BS Information Technology Candidate</p>
            <p className="italic text-purple-200/90 font-serif text-base">
              &ldquo;Bridging intuitive design with scalable engineering execution.&rdquo;
            </p>
            <div className="flex gap-4 pt-2 justify-center md:justify-start">
              <a href="https://github.com/kashumadesu" target="_blank" rel="noreferrer" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-xl transition">GitHub Profile</a>
              <a href="#contact" className="px-4 py-2 bg-purple-950/60 hover:bg-purple-900 border border-purple-800 text-purple-200 text-sm font-semibold rounded-xl transition">Contact Me</a>
            </div>
          </div>
        </header>

        {/* 2. BENTO ROW: TIMELINE & ACHIEVEMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Timeline & Story */}
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

          {/* Achievements & Certifications */}
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
        <section className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 space-y-6">
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
        <section className="space-y-4">
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
        <footer id="contact" className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-8 text-center space-y-4">
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
  );
}