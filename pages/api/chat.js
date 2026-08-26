// pages/api/chat.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message } = req.body;
  const query = (message || "").toLowerCase();

  // Knowledge base responses
  let reply = "I'm not sure about that, but feel free to explore the portfolio sections above or reach out directly via the contact form!";

  if (query.includes("who are you") || query.includes("about") || query.includes("background")) {
    reply = "I'm the portfolio assistant for Michael April Boquiron—a Technical Project Manager and UI/UX & Frontend Developer specializing in end-to-end system delivery and scalable web architecture.";
  } else if (query.includes("skill") || query.includes("stack") || query.includes("tech")) {
    reply = "Michael's core stack includes JavaScript, Python, C#/.NET, HTML5/CSS3, SQL, Git/GitHub, and Figma for UI/UX design and agile project management.";
  } else if (query.includes("project") || query.includes("pos") || query.includes("ecowatch")) {
    reply = "Key featured systems include: 1) Point of Sale (POS) & Monitoring System (Project Manager & UI/UX Designer), and 2) ECOWATCH Automated Solid Waste Detection (Technical PM & Computer Vision research).";
  } else if (query.includes("cert") || query.includes("oracle") || query.includes("achievement")) {
    reply = "Michael holds Oracle Certified Foundations Associate credentials in Fusion AI Agent Studio & Agentic AI, CodinGame Legend Rank in Algorithms, IBM Project Management Fundamentals, and Cisco networking specializations.";
  } else if (query.includes("contact") || query.includes("email") || query.includes("hire") || query.includes("reach")) {
    reply = "You can get in touch via email at michaelapril81416@gmail.com, connect on LinkedIn, or check out GitHub at github.com/kashumadesu.";
  }

  return res.status(200).json({ reply });
}