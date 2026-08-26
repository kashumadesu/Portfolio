// components/Certifications.jsx
import { useState } from "react";

export const CERTIFICATIONS_DATA = [
  // --- Competition & Academic Recognition ---
  {
    title: "2nd Runner Up – Booth Fair Competition",
    issuer: "Our Lady of Fatima University (CCS Week 2026)",
    date: "March 11, 2026",
    recipient: "CIRCU5",
    type: "Award",
    category: "Awards",
    description: "Awarded 2nd Runner Up for the interactive booth showcase under the theme 'Cultivating Competent Specialists: Excellence in Every Byte'."
  },

  // --- AI & Cloud Foundations ---
  {
    title: "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
    issuer: "Oracle University",
    date: "August 21, 2026",
    credentialId: "330851752OFAASOFA",
    type: "Certification",
    category: "AI & Cloud",
    description: "Foundational mastery in building and deploying autonomous AI agents and enterprise automation workflows within Oracle Fusion AI Agent Studio."
  },
  {
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle University",
    date: "August 21, 2026",
    credentialId: "330851752AA126OFA",
    type: "Certification",
    category: "AI & Cloud",
    description: "Architectural foundations of Agentic AI, multi-agent systems, decision loops, and enterprise AI orchestration."
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE Foundation",
    date: "August 21, 2026",
    credentialId: "71c3bc87-40c7-462b-b331-abd180509181",
    type: "Course",
    category: "AI & Cloud",
    description: "Core concepts of artificial intelligence, data pipelines, business applications, and ethical implications."
  },

  // --- Software Engineering & Problem Solving ---
  {
    title: "Algorithms Certification (Legend Level)",
    issuer: "CodinGame by CoderPad",
    date: "November 1, 2024",
    credentialId: "10635872",
    type: "Assessment",
    category: "Software Dev",
    description: "Achieved Legend Level mastery in complex algorithms, graph manipulation, dynamic programming, image processing, and cryptography."
  },
  {
    title: "JavaScript Problem Solving (With Honors)",
    issuer: "CodinGame by CoderPad",
    date: "August 22, 2026",
    credentialId: "10635873",
    type: "Assessment",
    category: "Software Dev",
    description: "Recognized with Honors for advanced algorithmic logic, asynchronous operations, and JavaScript problem-solving."
  },
  {
    title: "Python 3 Problem Solving (With Honors)",
    issuer: "CodinGame by CoderPad",
    date: "August 22, 2026",
    credentialId: "10635874",
    type: "Assessment",
    category: "Software Dev",
    description: "Recognized with Honors in Python 3 data structures, functional paradigms, and algorithm optimization."
  },
  {
    title: "Java Problem Solving",
    issuer: "CodinGame by CoderPad",
    date: "August 22, 2026",
    credentialId: "10635871",
    type: "Assessment",
    category: "Software Dev",
    description: "Demonstrated full capability in object-oriented programming, data structures, and core Java problem solving."
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp & Microsoft",
    date: "August 22, 2026",
    verifyUrl: "https://freecodecamp.org/certification/fcc-92d2c182-fe65-4271-ba2c-f6b89faadee2/foundational-c-sharp-with-microsoft",
    type: "Certification",
    category: "Software Dev",
    description: "Core .NET ecosystem and C# concepts including OOP, collection types, error handling, and console architecture."
  },
  {
    title: "Front-End Development Libraries (~300 Hours)",
    issuer: "freeCodeCamp",
    date: "August 22, 2026",
    verifyUrl: "https://freecodecamp.org/certification/fcc-92d2c182-fe65-4271-ba2c-f6b89faadee2/front-end-development-libraries-v9",
    type: "Certification",
    category: "Software Dev",
    description: "Hands-on mastery of front-end UI libraries and tools including React, Redux, Sass, Bootstrap, and jQuery."
  },
  {
    title: "Responsive Web Design (~300 Hours)",
    issuer: "freeCodeCamp",
    date: "August 22, 2026",
    verifyUrl: "https://freecodecamp.org/certification/fcc-92d2c182-fe65-4271-ba2c-f6b89faadee2/responsive-web-design-v9",
    type: "Certification",
    category: "Software Dev",
    description: "Modern HTML5 semantic architecture, advanced CSS3 Flexbox/Grid layouts, accessible UI design, and responsive viewports."
  },

  // --- Cisco Networking Academy Specializations ---
  {
    title: "Network Defense",
    issuer: "Cisco Networking Academy / OLFU",
    date: "March 13, 2026",
    type: "Academy Cert",
    category: "Networking & Security",
    description: "Network defense methodologies, security auditing, threat detection, perimeter protection, and defensive policy implementation."
  },
  {
    title: "Network Support and Security",
    issuer: "Cisco Networking Academy / OLFU",
    date: "February 03, 2026",
    type: "Academy Cert",
    category: "Networking & Security",
    description: "Enterprise network maintenance, diagnostic troubleshooting, hardware configuration, and secure access protocols."
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy / OLFU",
    date: "December 12, 2025",
    type: "Academy Cert",
    category: "Networking & Security",
    description: "Fundamental networking protocols, OSI and TCP/IP reference architectures, IP addressing, and network topologies."
  },
  {
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy / OLFU",
    date: "October 29, 2025",
    type: "Academy Cert",
    category: "Networking & Security",
    description: "Initial setup, basic IOS commands, CLI device management, and secure baseline configuration for switches and routers."
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    issuer: "Cisco Networking Academy / OLFU",
    date: "September 23, 2025",
    type: "Academy Cert",
    category: "Networking & Security",
    description: "IPv4 and IPv6 subnetting schemes, variable length subnet masking (VLSM), and systematic network connectivity troubleshooting."
  },

  // --- Project Management & Governance ---
  {
    title: "Agile Project Management",
    issuer: "HP LIFE Foundation",
    date: "March 13, 2026",
    credentialId: "7c507744-a26c-4859-94b2-295537363050",
    type: "Course",
    category: "Project Management",
    description: "Practical application of Agile frameworks (Scrum, Kanban), MVP definition, iterative product lifecycles, and team velocity."
  },
  {
    title: "Project Management Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "August 21, 2026",
    verifyUrl: "https://www.credly.com/go/fyEwd9Vj",
    type: "Digital Badge",
    category: "Project Management",
    description: "Core project governance, Agile and waterfall methodologies, lifecycle management, risk assessment, and resource allocation."
  },
  {
    title: "OPEN Module 1: Project Initiation",
    issuer: "Center for Project Innovation",
    date: "August 22, 2026",
    credentialId: "Paul Muller CPD",
    type: "Training",
    category: "Project Management",
    description: "10-hour mastery in Project Frameworks, Stakeholder Management, Project Selection Criteria, and Strategic Communications."
  },
  {
    title: "Introduction to Project Cycle Management",
    issuer: "International Training Centre (ITC-ILO)",
    date: "August 21, 2026",
    credentialId: "192102544",
    type: "Training",
    category: "Project Management",
    description: "Strategic project cycle planning, Logical Framework Matrix design, milestone tracking, and stakeholder evaluation."
  },
  {
    title: "Project Management Fundamentals",
    issuer: "Center of Applied Project Management",
    date: "August 2026",
    type: "Course",
    category: "Project Management",
    description: "Core project execution principles, scoping, delivery milestones, and operational best practices."
  },

  // --- Data, Security & Business IT ---
  {
    title: "Data Science & Analytics",
    issuer: "HP LIFE Foundation",
    date: "August 21, 2026",
    credentialId: "75ac7725-eaa8-4788-bcdd-884c7c47b198",
    type: "Course",
    category: "IT & Infrastructure",
    description: "Data-driven decision making, exploratory analytics, statistical methods, and visualization tools."
  },
  {
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE Foundation",
    date: "August 21, 2026",
    credentialId: "5b990800-e5a8-4acd-bfba-5fdb2753c11d",
    type: "Course",
    category: "IT & Infrastructure",
    description: "Cyber threat identification, defense strategies, digital hygiene, and organizational security protocols."
  },
  {
    title: "IT for Business Success",
    issuer: "HP LIFE Foundation",
    date: "August 21, 2026",
    credentialId: "2ed0909e-d8bf-4313-8344-4c1a258d768e",
    type: "Course",
    category: "IT & Infrastructure",
    description: "IT alignment with business goals, technology integration frameworks, and operational optimization."
  },
  {
    title: "CCS: Code, Create, Succeed – Empowering Digital Innovators",
    issuer: "College of Computer Studies",
    date: "October 30, 2024",
    type: "Seminar",
    category: "Seminars",
    description: "Participated in digital innovation and developer empowerment seminars during CCS Week."
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

  const filteredData =
    activeCategory === "All"
      ? CERTIFICATIONS_DATA
      : CERTIFICATIONS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="certifications" className="py-12 space-y-6 scroll-mt-20">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-purple-900/60 pb-3 gap-2">
        <h2 className="text-2xl font-bold font-mono text-purple-300 flex items-center gap-2">
          <span className="text-purple-400">📜</span> CERTIFICATIONS & CREDENTIALS
        </h2>
        <span className="text-xs font-mono text-purple-400/80">
          [{filteredData.length} of {CERTIFICATIONS_DATA.length} Verified Records]
        </span>
      </div>

      {/* Category Filter Badges */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 text-xs font-mono rounded-md border transition-all ${
              activeCategory === cat
                ? "bg-purple-600 border-purple-400 text-white shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                : "bg-[#110D1A] border-purple-950/80 text-purple-300/70 hover:border-purple-800 hover:text-purple-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((cert, index) => (
          <div
            key={index}
            className="relative bg-[#110D1A] border border-purple-900/50 p-5 rounded-xl hover:border-purple-500/80 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/40"
          >
            {/* Cyber Corner Brackets */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-purple-400/80" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-purple-400/80" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-purple-400/80" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-purple-400/80" />

            <div className="space-y-2.5">
              {/* Type and Date Bar */}
              <div className="flex items-start justify-between gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-purple-950/80 border border-purple-800/80 text-purple-300 rounded">
                  {cert.type}
                </span>
                <span className="text-[11px] font-mono text-purple-400/80">{cert.date}</span>
              </div>

              {/* Title & Issuer */}
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-purple-400 mt-1">{cert.issuer}</p>
              </div>

              {/* Description */}
              <p className="text-xs text-purple-200/75 leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Footer IDs / Verifications */}
            <div className="pt-3 mt-3 border-t border-purple-950/60 flex items-center justify-between text-[10px] font-mono">
              {cert.credentialId ? (
                <span className="text-purple-400/60 truncate max-w-[170px]" title={cert.credentialId}>
                  ID: {cert.credentialId}
                </span>
              ) : cert.recipient ? (
                <span className="text-purple-400/60">Team: {cert.recipient}</span>
              ) : (
                <span className="text-purple-400/40">Verified Record</span>
              )}

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:text-purple-200 underline ml-auto flex items-center gap-1"
                >
                  Verify &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}