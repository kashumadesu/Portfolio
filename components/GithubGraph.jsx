import { useEffect, useState } from "react";

export default function GithubGraph() {
  const [svgContent, setSvgContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user contribution SVG with purple base palette
    fetch("https://ghchart.rshah.org/a855f7/kashumadesu")
      .then((res) => res.text())
      .then((data) => {
        setSvgContent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 md:p-8 space-y-4 scroll-mt-24 shadow-xl">
      <div className="flex items-center justify-between pb-1">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          GitHub Activity
        </h2>
        <a
          href="https://github.com/kashumadesu"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
        >
          @kashumadesu &rarr;
        </a>
      </div>

      {/* Wireframe Dark Graph Viewport */}
      <div className="p-5 bg-[#050308] border border-purple-900/40 rounded-2xl overflow-x-auto flex flex-col items-center justify-center min-h-[170px] custom-github-wireframe">
        {loading ? (
          <div className="text-xs font-mono text-purple-400 animate-pulse">Loading activity graph...</div>
        ) : svgContent ? (
          <div 
            className="w-full max-w-4xl flex justify-center"
            dangerouslySetInnerHTML={{ __html: svgContent }} 
          />
        ) : (
          <img
            src="https://ghchart.rshah.org/a855f7/kashumadesu"
            alt="GitHub Contributions Chart"
            className="w-full max-w-4xl"
          />
        )}
      </div>
    </section>
  );
}