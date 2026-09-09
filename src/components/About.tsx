import PulsatingBorder from "@/components/originkit/ui/pulsating-border";

const stats = [
  { value: "21", label: "Repositories" },
  { value: "3+", label: "Months Exp." },
  { value: "7+", label: "Projects Built" },
  { value: "2026", label: "Intern @ EANS" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#faf7f3]">
      <div className="container-narrow">
        {/* Section label */}
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#767676] mb-6 block">
          About Me
        </span>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold leading-tight tracking-tight text-[#000]">
              Builder by nature,<br />
              <span className="text-[#0000ee]">engineer by choice.</span>
            </h2>

            <p className="text-[16px] text-[#767676] leading-relaxed">
              I'm pursuing a <strong className="text-[#000]">B.Tech in Artificial Intelligence &amp; Data Science</strong> at
              Dr. Mahalingam College of Engineering and Technology (2024 – present).
            </p>

            <p className="text-[16px] text-[#767676] leading-relaxed">
              I completed a <strong className="text-[#000]">Software Development Internship at EANS Technologies</strong> (March – May 2026),
              where I shipped real production features and sharpened my full-stack instincts.
            </p>

            <p className="text-[16px] text-[#767676] leading-relaxed">
              I build end-to-end applications — from fleet management platforms to AI-driven recruitment tools — always focused on
              clean architecture and real-world usefulness.
            </p>

            <a
              href="mailto:guruneshm1@gmail.com"
              className="self-start text-[14px] font-semibold text-[#0000ee] underline underline-offset-4 hover:text-[#000] transition-colors"
            >
              guruneshm1@gmail.com ↗
            </a>
          </div>

          {/* Right — stats grid with pulsating border accent */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 p-6 border border-[#dbd9d6] rounded-[16px] bg-white"
                  style={{ boxShadow: "rgba(0,0,0,0.17) 0px 0.6px 1.57px -1.5px, rgba(0,0,0,0.14) 0px 2.29px 5.95px -3px" }}
                >
                  <span className="text-[2rem] font-extrabold text-[#000] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[12px] text-[#767676] font-medium uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Pulsating border decoration card */}
            <div className="relative rounded-[20px] overflow-visible">
              <PulsatingBorder
                colors={["#0000ee", "#faf7f3", "#000000"]}
                speed={0.7}
                radius={20}
                thickness={4}
                intensity={25}
              >
                <div className="p-6 bg-[#111] rounded-[20px] text-[#faf7f3]">
                  <p className="text-[13px] font-medium leading-relaxed text-[#ebe9e7]">
                    "I build full-stack applications, AI-driven tools, and small utility apps —
                    ranging from resume-ranking systems to fleet management platforms."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0000ee] flex items-center justify-center text-white text-[11px] font-bold">
                      GM
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#faf7f3]">Gurunesh M</p>
                      <p className="text-[11px] text-[#767676]">AI &amp; Data Science, MCET</p>
                    </div>
                  </div>
                </div>
              </PulsatingBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
