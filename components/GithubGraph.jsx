import GitHubCalendar from 'react-github-calendar';

export default function GithubGraph() {
  // Exact high-contrast dark theme matching GitHub's wireframe style
  const customTheme = {
    dark: [
      '#050308', // Hollow / Inactive day base
      '#006d32', // Level 1 (dark green)
      '#26a641', // Level 2 (medium vibrant green)
      '#39d353', // Level 3 (bright green)
      '#57f287', // Level 4 (neon bright green)
    ],
  };

  return (
    <section className="bg-[#15111E] border border-purple-950/60 rounded-3xl p-6 md:p-8 space-y-4 scroll-mt-24">
      <div className="flex items-center justify-between pb-1">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>📊</span> GitHub Activity
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

      {/* Wireframe Graph Container */}
      <div className="p-5 bg-[#050308] border border-purple-900/40 rounded-2xl overflow-x-auto flex flex-col items-center justify-center custom-github-graph">
        <GitHubCalendar
          username="kashumadesu"
          colorScheme="dark"
          theme={customTheme}
          blockSize={11}
          blockMargin={3.5}
          blockRadius={2}
          fontSize={12}
        />
      </div>
    </section>
  );
}