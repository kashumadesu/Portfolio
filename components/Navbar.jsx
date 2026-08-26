import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0B090E] border-b border-purple-950/40 w-full">
      <div className="w-full px-6 md:px-12 flex items-center justify-between h-16">
        
        {/* Left: Text Logo */}
        <div className="flex items-center">
          <a href="#home" className="text-white font-bold text-xl tracking-tight hover:text-purple-300 transition-colors duration-200">
            Michael<span className="text-purple-400">.dev</span>
          </a>
        </div>

        {/* Center: Desktop Navigation Links with Outline Bubble Hover */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-purple-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full border border-transparent hover:border-purple-500/80 hover:text-white transition-all duration-300 ease-out hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-xl transition-all duration-200 shadow-sm shadow-purple-900/30"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-purple-200 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#15111E] border-b border-purple-950 px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-purple-200 hover:border hover:border-purple-500/70 hover:text-white transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-xl transition-all duration-200 mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}