import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#faf7f3]/90 backdrop-blur-md border-b border-[#dbd9d6]"
          : "bg-transparent"
      )}
    >
      <div className="container-narrow flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="text-[15px] font-bold tracking-tight text-[#000] hover:text-[#0000ee] transition-colors"
        >
          GM<span className="text-[#0000ee]">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#767676] hover:text-[#000] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://github.com/gurunesh30"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold bg-[#000] text-[#faf7f3] px-4 py-2 rounded-full hover:bg-[#0000ee] transition-colors"
        >
          GitHub
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-5 h-0.5 bg-black transition-transform duration-200", menuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block w-5 h-0.5 bg-black transition-opacity duration-200", menuOpen && "opacity-0")} />
          <span className={cn("block w-5 h-0.5 bg-black transition-transform duration-200", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-[#faf7f3] border-b border-[#dbd9d6]",
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-5 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[14px] font-medium text-[#767676] hover:text-[#000] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/gurunesh30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-semibold text-[#0000ee]"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
