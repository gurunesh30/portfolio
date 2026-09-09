import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = [
  {
    value: "languages",
    label: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    value: "frameworks",
    label: "Frameworks",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Angular", level: 78 },
      { name: "NestJS", level: 75 },
      { name: "Node + Express", level: 85 },
      { name: "Flask / FastAPI", level: 72 },
    ],
  },
  {
    value: "databases",
    label: "Databases",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "Prisma ORM", level: 78 },
      { name: "Sequelize", level: 70 },
    ],
  },
  {
    value: "other",
    label: "Other",
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "JWT / RBAC", level: 80 },
      { name: "AI / Chatbot", level: 75 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#111]">
      <div className="container-narrow">
        {/* Label */}
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#767676] mb-6 block">
          Tech Stack
        </span>

        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-[#faf7f3] mb-12">
          What I work with
        </h2>

        <Tabs defaultValue="languages">
          <TabsList className="bg-[#1e1e1e] border border-[#2a2a2a] mb-10 flex-wrap h-auto gap-1 rounded-xl p-1">
            {skillCategories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="text-[13px] font-medium text-[#767676] data-[state=active]:bg-[#0000ee] data-[state=active]:text-white rounded-lg px-4 py-2 transition-all"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="flex flex-col gap-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[14px] font-semibold text-[#faf7f3]">
                        {skill.name}
                      </span>
                      <span className="text-[12px] text-[#767676]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#2a2a2a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0000ee] rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
