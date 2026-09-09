import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AnimatedRays from "@/components/ui/animated-rays";
import SocialFlipButton, { type SocialItem } from "@/components/ui/social-flip-button";
import { CreepyButton } from "@/components/ui/creepy-button";

const socialItems: SocialItem[] = [
  {
    letter: "G",
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/gurunesh30",
  },
  {
    letter: "L",
    icon: <SiLeetcode />,
    label: "LeetCode",
    href: "https://leetcode.com/gurunesh30",
  },
  {
    letter: "M",
    icon: <FaEnvelope />,
    label: "Email",
    href: "mailto:guruneshm1@gmail.com",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#faf7f3]"
    >
      {/* Aurora background — top-right corner */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedRays className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow flex flex-col items-center text-center gap-8 pt-24 pb-16">
        {/* Eyebrow */}
        <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#767676]">
          Software Engineer
        </span>

        {/* Headline */}
        <h1
          className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[1.0] tracking-tight text-[#000] text-balance"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          A Sudden Gust <span className="text-[#0000ee]">🌪️</span>
        </h1>

        {/* Sub */}
        <p className="text-[18px] font-normal text-[#767676] max-w-[520px] text-balance leading-relaxed">
          Hi, I'm <strong className="text-[#000]">Gurunesh M</strong> — I build
          full-stack apps, AI-driven tools, and small utility software that
          actually solves problems.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <CreepyButton
            coverClassName="bg-[#0000ee] text-white"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See My Work
          </CreepyButton>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[14px] font-semibold border border-[#000] text-[#000] px-5 py-2.5 rounded-full hover:bg-[#000] hover:text-[#faf7f3] transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Social flip buttons */}
        <div className="mt-4">
          <SocialFlipButton items={socialItems} className="p-0" />
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#767676]">
          <span className="text-[11px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#767676] to-transparent" />
        </div>
      </div>
    </section>
  );
}
