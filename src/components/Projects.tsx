import { useState } from "react";
import { FolderPreview, type FolderVariant } from "@/components/ui/folder-preview";
import { TestimonialsCard } from "@/components/ui/testimonials-card";

const projects = [
  {
    id: 1,
    title: "TransitOPS",
    emoji: "🚛",
    description:
      "End-to-end transport operations platform that digitizes vehicle, driver, dispatch, maintenance, and expense management — with real-time operational insights.",
    stack: ["TypeScript", "NestJS", "PostgreSQL", "Prisma"],
    href: "https://github.com/gurunesh30/transitOPS",
    variant: "hari" as FolderVariant,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Candidate Ranking System",
    emoji: "🧑‍💼",
    description:
      "AI-driven resume ranking that thinks like an experienced recruiter. Accepts a Job Description and a batch of resumes, then ranks them intelligently — not by keywords.",
    stack: ["JavaScript", "Node.js", "AI/NLP"],
    href: "https://github.com/gurunesh30/Candidate-Ranking-System",
    stars: 2,
    variant: "kubera" as FolderVariant,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Finance Tracker",
    emoji: "💰",
    description:
      "Smart finance tracker with loan and investment suggestions, plus an AI chatbot integration built on the Angular framework.",
    stack: ["TypeScript", "Angular", "AI Chatbot"],
    href: "https://github.com/gurunesh30/Finance-Tracker",
    stars: 1,
    variant: "ardra" as FolderVariant,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Gym Flow",
    emoji: "🏋️",
    description:
      "Gym attendance tracker with a management dashboard — HTML/CSS/JS frontend with a Python Flask backend.",
    stack: ["HTML", "CSS", "JavaScript", "Flask"],
    href: "https://github.com/gurunesh30/gym-flow",
    variant: "nandi" as FolderVariant,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Billing System",
    emoji: "🧾",
    description:
      "Digital retail store management system with a fully-featured billing workflow, built with React.js.",
    stack: ["React.js", "CSS"],
    href: "https://github.com/gurunesh30/Billing-System",
    variant: "rudras" as FolderVariant,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Flames Game",
    emoji: "🔥",
    description:
      "The classic FLAMES relationship-compatibility game rebuilt in Angular — surprisingly addictive.",
    stack: ["Angular", "CSS"],
    href: "https://github.com/gurunesh30/Flames-Game",
    variant: "durga" as FolderVariant,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Ping-Pong",
    emoji: "🏓",
    description:
      "A customised Ping-Pong game built in Java — forked and extended with new mechanics.",
    stack: ["Java"],
    href: "https://github.com/gurunesh30/Ping-Pong",
    stars: 1,
    variant: "shakti" as FolderVariant,
    image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=400&h=400&fit=crop",
  },
];

// Featured projects for the card carousel
const featuredItems = projects.slice(0, 4).map((p) => ({
  id: p.id,
  title: `${p.emoji} ${p.title}`,
  description: p.description,
  image: p.image,
}));

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-[#faf7f3]">
      <div className="container-narrow">
        {/* Label */}
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#767676] mb-6 block">
          Projects
        </span>

        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-[#000] mb-4">
          Things I've built
        </h2>
        <p className="text-[16px] text-[#767676] mb-14 max-w-[480px]">
          A selection of projects — from enterprise-scale platforms to fun weekend experiments.
        </p>

        {/* Featured carousel */}
        <div className="mb-16 border border-[#dbd9d6] rounded-[20px] bg-white overflow-hidden">
          <div className="p-6 border-b border-[#dbd9d6]">
            <span className="text-[12px] font-semibold tracking-wide uppercase text-[#767676]">
              Featured
            </span>
          </div>
          <TestimonialsCard
            items={featuredItems}
            width={700}
            showNavigation
            showCounter
            autoPlay
            autoPlayInterval={4000}
          />
        </div>

        {/* All projects folder grid */}
        <h3 className="text-[18px] font-semibold text-[#000] mb-8">All Projects</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="w-20">
                <FolderPreview
                  variant={project.variant}
                  images={[project.image]}
                  label={project.title}
                  size="md"
                />
              </div>
              {/* Stack pills */}
              <div className="flex flex-wrap justify-center gap-1 mt-1">
                {project.stack.slice(0, 2).map((s) => (
                  <span
                    key={s}
                    className="text-[10px] bg-[#ebe9e7] text-[#767676] px-2 py-0.5 rounded-full font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {project.stars && (
                <span className="text-[11px] text-[#767676]">⭐ {project.stars}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
