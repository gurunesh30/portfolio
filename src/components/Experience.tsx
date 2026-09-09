const experiences = [
  {
    role: "Software Development Intern",
    company: "EANS Technologies",
    duration: "March 2026 – May 2026",
    type: "Internship",
    description:
      "Gained hands-on industry experience building software solutions. Worked on full-stack features, collaborated with the engineering team, and shipped production-ready code.",
    highlights: [
      "Built and maintained full-stack application features",
      "Worked with REST APIs and backend integrations",
      "Participated in code reviews and agile workflows",
    ],
  },
];

const education = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    institution: "Dr. Mahalingam College of Engineering and Technology",
    duration: "2024 – Present",
    description:
      "Studying core AI/DS concepts alongside software engineering — covering machine learning, data structures, algorithms, and full-stack development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#faf7f3]">
      <div className="container-narrow">
        {/* Label */}
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#767676] mb-6 block">
          Experience & Education
        </span>

        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-[#000] mb-14">
          Where I've been
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#767676] mb-6">
              Work
            </h3>
            <div className="flex flex-col gap-8">
              {experiences.map((exp) => (
                <div key={exp.role} className="relative pl-5 border-l-2 border-[#0000ee]">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#0000ee]" />
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#000]">{exp.role}</h4>
                      <p className="text-[14px] text-[#767676]">{exp.company}</p>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-[#faf7f3] bg-[#000] px-2.5 py-1 rounded-full whitespace-nowrap">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#a29f9c] mb-3 font-medium">{exp.duration}</p>
                  <p className="text-[14px] text-[#767676] leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[13px] text-[#767676]">
                        <span className="text-[#0000ee] mt-0.5 shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#767676] mb-6">
              Education
            </h3>
            <div className="flex flex-col gap-8">
              {education.map((edu) => (
                <div key={edu.degree} className="relative pl-5 border-l-2 border-[#dbd9d6]">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#000]" />
                  <h4 className="text-[16px] font-semibold text-[#000] mb-1 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-[14px] text-[#767676] mb-1">{edu.institution}</p>
                  <p className="text-[12px] text-[#a29f9c] font-medium mb-3">{edu.duration}</p>
                  <p className="text-[14px] text-[#767676] leading-relaxed">{edu.description}</p>
                </div>
              ))}

              {/* GitHub Achievement */}
              <div className="p-5 bg-[#111] rounded-[16px] flex items-center gap-4">
                <span className="text-3xl">🏆</span>
                <div>
                  <p className="text-[14px] font-semibold text-[#faf7f3]">Quickdraw Achievement</p>
                  <p className="text-[12px] text-[#767676]">GitHub · 21 public repos · 4 followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
