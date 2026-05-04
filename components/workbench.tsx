import { cn } from "@/lib/utils"

const skillGroups = [
  {
    id: 1,
    group: "backend",
    label: "$ backend",
    skills: [
      { name: "Java / Spring Boot", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "APIs RESTful", level: 90 },
      { name: "Spring Security / JWT", level: 80 },
    ],
  },
  {
    id: 2,
    group: "frontend",
    label: "$ frontend",
    skills: [
      { name: "Angular", level: 80 },
      { name: "TypeScript", level: 78 },
      { name: "JavaScript", level: 82 },
      { name: "HTML5 / CSS3", level: 85 },
    ],
  },
  {
    id: 3,
    group: "database",
    label: "$ banco de dados",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "SQL Server", level: 70 },
      { name: "Spring Data JPA", level: 82 },
    ],
  },
  {
    id: 4,
    group: "devops",
    label: "$ devops & outros",
    skills: [
      { name: "Docker", level: 78 },
      { name: "Apache Kafka", level: 70 },
      { name: "Git / GitHub", level: 88 },
      { name: "Scrum / Agile", level: 85 },
    ],
  },
]

export function Workbench() {
  return (
    <section id="workbench" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Stack técnica
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Skills</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Tecnologias que uso no dia a dia para construir soluções escaláveis e de qualidade.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift animate-scale-in stagger-2">
          <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive cursor-pointer" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500 cursor-pointer" />
              <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary cursor-pointer" />
            </div>
            <span className="ml-4 font-mono text-xs text-muted-foreground truncate">~/isaacmoura/skills</span>
            <div className="ml-auto hidden sm:flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs">em constante evolução</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/30">
            {skillGroups.map((group, groupIndex) => (
              <div
                key={group.id}
                className={cn(
                  "p-5 sm:p-6 space-y-4 animate-fade-in",
                  groupIndex >= 2 && "border-t border-border/30",
                )}
                style={{ animationDelay: `${groupIndex * 100 + 300}ms` }}
              >
                <span className="font-mono text-xs text-primary">{group.label}</span>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="group flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-mono text-sm font-medium tracking-tight transition-colors group-hover:text-gradient">
                          {skill.name}
                        </h4>
                        <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary/80 relative">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-700 ease-out",
                            skill.level >= 80 ? "bg-primary" : skill.level >= 70 ? "bg-yellow-500" : "bg-orange-500",
                          )}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border/50 bg-secondary/30 px-4 sm:px-5 py-4">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="text-primary">❯</span>
              <span className="typing-cursor truncate">Inglês Intermediário · Português Nativo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
