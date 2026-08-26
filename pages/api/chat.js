// pages/api/chat.js

const INTENT_KNOWLEDGE_BASE = [
  // 1. Greetings & Bot Intro
  {
    patterns: [/^(hi|hello|hey|greetings|what's up|yo|sup)\b/i, /who made you/i, /who are you/i],
    reply: "Hello! I am Michael's interactive portfolio assistant. You can ask me about his technical project management experience, full-stack development skills, featured systems, or certifications."
  },

  // 2. Identity, Background & Status
  {
    patterns: [/about\s*(michael)?/i, /background/i, /bio/i, /who is (he|michael)/i, /experience/i, /education/i, /olfu/i, /school/i],
    reply: "Michael April B. Boquiron is a Technical Project Manager and UI/UX & Frontend Developer (Senior BS Information Technology candidate at Our Lady of Fatima University). He specializes in end-to-end agile delivery, scalable web applications, and system architecture."
  },

  // 3. Technical Skills & Tools
  {
    patterns: [/skills?/i, /tech stack/i, /languages?/i, /frameworks?/i, /frontend/i, /backend/i, /tools?/i, /what can (you|he) do/i],
    reply: "Michael's core technical competencies include JavaScript (9/10), Python (7.5/10), Figma & UI/UX (9/10), Agile Project Management (9/10), HTML5/CSS3 (9/10), C#/.NET (7/10), SQL Databases (7/10), and Git/GitHub (9/10)."
  },

  // 4. Featured Systems & Projects
  {
    patterns: [/projects?/i, /pos/i, /point of sale/i, /ecowatch/i, /capstone/i, /systems?/i, /portfolio/i, /work/i],
    reply: "Michael has led key production systems including: 1) POS & Monitoring System (Lead PM & UI/UX Designer — inventory workflows and system architecture), and 2) ECOWATCH (Technical PM — automated computer vision solid waste detection)."
  },

  // 5. Certifications, Honors & Credentials
  {
    patterns: [/cert(s|ification|ifications)?/i, /oracle/i, /credentials?/i, /codingame/i, /achievements?/i, /awards?/i, /ibm/i, /cisco/i, /freecodecamp/i],
    reply: "Michael holds 20+ verified credentials, notably: Oracle Fusion AI Agent Studio & Agentic AI Foundations Associate, CodinGame Legend Level in Algorithms, IBM Project Management Fundamentals, freeCodeCamp Front-End Libraries (300h), Cisco Network Defense, and 2nd Runner Up in the OLFU Booth Fair Competition."
  },

  // 6. Resume & CV Download
  {
    patterns: [/resume/i, /cv/i, /download/i, /curriculum vitae/i],
    reply: "You can download Michael's official CV directly using the 'DOWNLOAD CV' button in the hero header section, or view his experience directly in the Journey & Milestones timeline."
  },

  // 7. Contact & Hiring Inquiries
  {
    patterns: [/contact/i, /email/i, /hire/i, /reach/i, /linkedin/i, /github/i, /available/i, /job/i, /interview/i],
    reply: "Michael is actively open for Technical Project Management, Associate PM, and Frontend roles. You can email him directly at michaelapril81416@gmail.com, check his GitHub at github.com/kashumadesu, or connect via LinkedIn."
  }
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message } = req.body;
  const cleanInput = (message || "").trim();

  if (!cleanInput) {
    return res.status(400).json({ reply: "Please provide a question or topic!" });
  }

  // Find matching intent by regex
  const matched = INTENT_KNOWLEDGE_BASE.find((entry) =>
    entry.patterns.some((pattern) => pattern.test(cleanInput))
  );

  if (matched) {
    return res.status(200).json({ reply: matched.reply });
  }

  // Default fallback
  return res.status(200).json({
    reply: "I'm not completely certain about that specific detail, but you can explore Michael's projects, skills matrix, and verified credentials above—or email him directly at michaelapril81416@gmail.com!"
  });
}