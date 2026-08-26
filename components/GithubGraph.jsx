export default function GithubGraph() {
  return (
    <div className="w-full bg-[#15111E] border border-purple-950/60 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-purple-200">Daily Git Activity</h3>
        <a 
          href="https://github.com/kashumadesu" 
          target="_blank" 
          rel="noreferrer"
          className="text-xs text-purple-400 hover:underline"
        >
          @kashumadesu
        </a>
      </div>
      <div className="w-full overflow-x-auto">
        <img 
          src="https://ghchart.rshah.org/8b5cf6/kashumadesu" 
          alt="kashumadesu's GitHub Contribution Chart" 
          className="w-full min-w-[650px] filter brightness-110"
        />
      </div>
    </div>
  );
}