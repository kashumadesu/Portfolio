import { useState } from "react";

export const CERTIFICATIONS_DATA = [
  // --- TIER 1: FEATURED SPOTLIGHT ---
  {
    title: "Oracle Fusion AI Agent Studio Certified Foundations Associate",
    issuer: "Oracle University",
    date: "Aug 21, 2026",
    credentialId: "330851752OFAASOFA",
    type: "Enterprise AI",
    category: "AI & Cloud",
    badge: "🌟 Featured",
    isFeatured: true,
    description: "Foundational architecture, enterprise autonomous agent workflows, and AI orchestration."
  },
  {
    title: "Algorithms Mastery (Legend Level)",
    issuer: "CodinGame by CoderPad",
    date: "Nov 01, 2024",
    credentialId: "10635872",
    type: "Problem Solving",
    category: "Software Dev",
    badge: "🏆 Top Rank",
    isFeatured: true,
    description: "Mastery in graph theory, dynamic programming, encryption, and algorithm optimization."
  },
  {
    title: "2nd Runner Up – Booth Fair Competition",
    issuer: "OLFU CCS Week 2026",
    date: "Mar 11, 2026",
    recipient: "CIRCU5",
    type: "Award",
    category: "Awards",
    badge: "🥈 Academic Award",
    isFeatured: true,
    description: "Awarded 2nd Runner Up for project showcase under theme 'Cultivating Competent Specialists'."
  },
  {
    title: "Project Management Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Aug 21, 2026",
    verifyUrl: "https://www.credly.com/go/fyEwd9Vj",
    type: "Digital Badge",
    category: "Project Management",
    badge: "📜 Industry Badge",
    isFeatured: true,
    description: "Agile methodologies, sprint scoping, risk matrices, and full lifecycle execution."
  },

  // --- TIER 2 & 3: SPECIALIZATIONS & TRACKS ---
  {
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle University",
    date: "Aug 21, 2026",
    credentialId: "330851752AA126OFA",
    type: "Certification",
    category: "AI & Cloud",
    description: "Multi-agent systems, decision loops, and autonomous AI agents."
  },
  {
    title: "JavaScript Problem Solving (With Honors)",
    issuer: "CodinGame by CoderPad",
    date: "Aug 22, 2026",
    credentialId: "10635873",
    type: "Assessment",
    category: "Software Dev",
    description: "Honors distinction in asynchronous workflows, closures, and algorithmic execution."
  },
  {
    title: "Python 3 Problem Solving (With Honors)",
    issuer: "CodinGame by CoderPad",
    date: "Aug 22, 2026",
    credentialId: "10635874",
    type: "Assessment",
    category: "Software Dev",
    description: "Honors distinction in Python functional data structures and algorithm speed."
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp & Microsoft",
    date: "Aug 22, 2026",
    verifyUrl: "https://freecodecamp.org/certification/fcc-92d2c182-fe65-4271-ba2c-f6b89faadee2/foundational-c-sharp-with-microsoft",
    type: "Certification",
    category: "Software Dev",
    description: "Core .NET ecosystem, object-oriented concepts, and console systems."
  },
  {
    title: "Front-End Development Libraries (~300h)",
    issuer: "freeCodeCamp",
    date: "Aug 22, 2026",
    verifyUrl: "https://freecodecamp.org/certification/fcc-92d2c182-fe65-4271-ba2c-f6b89faadee2/front-end-development-libraries-v9",
    type: "Certification",
    category: "Software Dev",
    description: "Hands-on UI architecture with React, Redux, Sass, Bootstrap, and modern DOM."
  },
  {
    title: "Responsive Web Design (~300h)",
    issuer: "freeCodeCamp",
    date: "Aug 22, 2026",
    verifyUrl: "https://freecodecamp.org/certification/fcc-92d2c182-fe65-4271-ba2c-f6b89faadee2/responsive-web-design-v9",
    type: "Certification",
    category: "Software Dev",
    description: "Semantic HTML5 structure, CSS Grid/Flexbox layouts, and UX accessibility."
  },
  {
    title: "Java Problem Solving",
    issuer: "CodinGame by CoderPad",
    date: "Aug 22, 2026",
    credentialId: "10635871",
    type: "Assessment",
    category: "Software Dev",
    description: "OOP architecture, memory management, and data structures."
  },
  {
    title: "Network Defense",
    issuer: "Cisco Networking Academy / OLFU",
    date: "Mar 13, 2026",
    type: "Cisco Academy",
    category: "Networking & Security",
    description: "Perimeter security auditing, threat detection, and defense policies."
  },
  {
    title: "Network Support and Security",
    issuer: "Cisco Networking Academy / OLFU",
    date: "Feb 03, 2026",
    type: "Cisco Academy",
    category: "Networking & Security",
    description: "Hardware diagnostics, network maintenance, and authentication controls."
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy / OLFU",
    date: "Dec 12, 2025",
    type: "Cisco Academy",
    category: "Networking & Security",
    description: "OSI/TCP-IP reference layers, IP routing, and subnet topologies."
  },
  {
    title: "Networking Devices & Initial Config",
    issuer: "Cisco Networking Academy / OLFU",
    date: "Oct 29, 2025",
    type: "Cisco Academy",
    category: "Networking & Security",
    description: "Cisco IOS CLI management and secure baseline configuration."
  },
  {
    title: "Network Addressing & Troubleshooting",
    issuer: "Cisco Networking Academy / OLFU",
    date: "Sep 23, 2025",
    type: "Cisco Academy",
    category: "Networking & Security",
    description: "IPv4/IPv6 subnetting, VLSM schemes, and protocol troubleshooting."
  },
  {
    title: "Agile Project Management",
    issuer: "HP LIFE Foundation",
    date: "Mar 13, 2026",
    credentialId: "7c507744-a26c-4859-94b2-295537363050",
    type: "Course",
    category: "Project Management",
    description: "Scrum & Kanban implementation, iterative releases, and sprint velocity."
  },
  {
    title: "OPEN Module 1: Project Initiation",
    issuer: "Center for Project Innovation",
    date: "Aug 22, 2026",
    credentialId: "Paul Muller CPD",
    type: "CPD 10-Hr",
    category: "Project Management",
    description: "Stakeholder analysis, feasibility scoping, and project governance frameworks."
  },
  {
    title: "Introduction to Project Cycle Management",
    issuer: "ITC-ILO",
    date: "Aug 21, 2026",
    credentialId: "192102544",
    type: "Training",
    category: "Project Management",
    description: "Logical framework matrices, impact analysis, and monitoring."
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE Foundation",
    date: "Aug 21, 2026",
    credentialId: "71c3bc87-40c7-462b-b331-abd180509181",
    type: "Course",
    category: "AI & Cloud",
    description: "Fundamental AI data pipelines, practical business use cases, and ethics."
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP LIFE Foundation",
    date: "Aug 21, 2026",
    credentialId: "75ac7725-eaa8-4788-bcdd-884c7c47b198",
    type: "Course",
    category: "IT & Infrastructure",
    description: "Exploratory analytics, statistical evaluation, and data-driven methods."
  },
  {
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE Foundation",
    date: "Aug 21, 2026",
    credentialId: "5b990800-e5a8-4acd-bfba-5fdb2753c11d",
    type: "Course",
    category: "IT & Infrastructure",
    description: "Threat identification, attack vectors, and information security hygiene."
  },
  {
    title: "IT for Business Success",
    issuer: "HP LIFE Foundation",
    date: "Aug 21, 2026",
    credentialId: "2ed0909e-d8bf-4313-8344-4c1a258d768e",
    type: "Course",
    category: "IT & Infrastructure",
    description: "Technology alignment with strategic operations and software integration."
  }
];

const CATEGORIES = [
  "All",
  "AI & Cloud",
  "Software Dev",
  "Networking & Security",
  "Project Management",
  "IT & Infrastructure",
  "Awards"
];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeModal, setActiveModal] = useState(null);

  const featuredCerts = CERTIFICATIONS_DATA.filter((c) => c.isFeatured);
  const filteredScrollCerts =
    activeCategory === "All"
      ? CERTIFICATIONS_DATA
      : CERTIFICATIONS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="certifications" className="py-8 space-y-8 scroll-mt-24">
      {/* 1. SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-purple-900/60 pb-3 gap-2">
        <div>
          <h2 className="text-2xl font-bold font-mono text-white flex items-center gap-2">
            <span>🎖️</span> VERIFIED CERTIFICATIONS &amp; ACHIEVEMENTS
          </h2>
          <p className="text-xs text-purple-400 font-mono mt-0.5">
            Industry Credentials • Algorithmic Honors • Academic Competitions
          </p>
        </div>
        <span className="text-xs font-mono px-3 py-1 bg-purple-950/80 border border-purple-800 text-purple-300 rounded-full self-start sm:self-auto">
          {CERTIFICATIONS_DATA.length} Total Verified
        </span>
      </div>

      {/* 2. FEATURED SPOTLIGHT CARDS (Tier 1) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredCerts.map((cert, idx) => (
          <div
            key={idx}
            onClick={() => setActiveModal(cert)}
            className="group relative bg-[#130E1D] border border-purple-500/40 hover:border-purple-400 p-4 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-lg shadow-purple-950/20"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-purple-300" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-purple-300" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-purple-300" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-300" />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded">
                  {cert.badge}
                </span>
                <span className="text-[10px] font-mono text-purple-400">{cert.date}</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-purple-400">{cert.issuer}</p>
              <p className="text-xs text-purple-200/70 line-clamp-2">{cert.description}</p>
            </div>

            <div className="pt-3 mt-3 border-t border-purple-900/50 flex items-center justify-between text-[10px] font-mono text-purple-400 group-hover:text-purple-200">
              <span>Click to view &rarr;</span>
              <span>{cert.type}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. CATEGORY TABS & HORIZONTAL SCROLL CAROUSEL */}
      <div className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 space-y-5">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <span>📂</span> Credential Library by Track
            </h3>
            <p className="text-xs text-purple-400">Scroll horizontally or select a category below.</p>
          </div>

          {/* Filter Badges */}
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs font-mono rounded-lg border transition-all ${
                  activeCategory === cat
                    ? "bg-purple-600 border-purple-400 text-white shadow-md shadow-purple-950"
                    : "bg-[#0B090E] border-purple-900/60 text-purple-300/70 hover:border-purple-600 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Horizontal Scroll Track */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-[#0B090E]">
          {filteredScrollCerts.map((cert, index) => (
            <div
              key={index}
              onClick={() => setActiveModal(cert)}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start bg-[#0E0A16] border border-purple-900/60 hover:border-purple-500/80 p-4 rounded-xl flex flex-col justify-between cursor-pointer transition group"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono text-purple-400">
                  <span className="px-2 py-0.5 bg-purple-950 border border-purple-800 rounded">
                    {cert.category}
                  </span>
                  <span>{cert.date}</span>
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-tight">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-purple-400/90 truncate">{cert.issuer}</p>
                <p className="text-xs text-purple-200/70 line-clamp-2">{cert.description}</p>
              </div>

              <div className="pt-2 mt-3 border-t border-purple-950 flex items-center justify-between text-[10px] font-mono text-purple-400/80">
                <span className="truncate max-w-[150px]">
                  {cert.credentialId ? `ID: ${cert.credentialId}` : cert.type}
                </span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. MODAL POPUP FOR FOCUSED DETAILS */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative bg-[#15111E] border border-purple-500 max-w-lg w-full p-6 rounded-3xl space-y-4 shadow-2xl shadow-purple-950"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-purple-400 hover:text-white font-mono text-sm px-2 py-1 bg-[#0B090E] border border-purple-900 rounded-lg"
            >
              ESC ✕
            </button>

            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-purple-950 border border-purple-800 text-purple-300 rounded">
              {activeModal.type} • {activeModal.category}
            </span>

            <div>
              <h3 className="text-xl font-bold text-white mt-2 leading-snug">{activeModal.title}</h3>
              <p className="text-xs font-mono text-purple-400 mt-1">{activeModal.issuer}</p>
              <p className="text-xs font-mono text-purple-400/70">Issued: {activeModal.date}</p>
            </div>

            <p className="text-sm text-purple-200/80 leading-relaxed bg-[#0B090E] p-4 rounded-xl border border-purple-950">
              {activeModal.description}
            </p>

            {activeModal.credentialId && (
              <div className="text-xs font-mono text-purple-300">
                <span className="text-purple-500">Credential ID / Authority: </span>
                <span className="select-all font-bold">{activeModal.credentialId}</span>
              </div>
            )}

            {activeModal.verifyUrl && (
              <a
                href={activeModal.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-center py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs font-bold rounded-xl transition"
              >
                Verify on Credential Registry &rarr;
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}