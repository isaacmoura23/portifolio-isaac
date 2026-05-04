"use client"

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "APIs RESTful & Backend",
    excerpt: "Desenvolvimento de APIs robustas com Java (Spring Boot) ou Node.js. Autenticação JWT, documentação Swagger, testes automatizados e deploy com Docker.",
    price: "R$ 1.500 – R$ 6.000",
    category: "backend",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Sites & Landing Pages",
    excerpt: "Sites institucionais e landing pages modernas com Angular ou Next.js. Design responsivo, SEO otimizado e alta performance.",
    price: "R$ 800 – R$ 3.500",
    category: "frontend",
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "Dashboard & Painéis Admin",
    excerpt: "Painéis administrativos completos com Angular, integração com APIs, gráficos, tabelas dinâmicas e controle de acesso por perfil.",
    price: "R$ 2.000 – R$ 8.000",
    category: "fullstack",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Microsserviços & Integrações",
    excerpt: "Arquitetura de microsserviços com Apache Kafka, integração de sistemas legados, automações e pipelines de dados assíncronos.",
    price: "R$ 2.500 – R$ 10.000",
    category: "arquitetura",
    color: "from-orange-500/20 to-amber-500/20",
  },
]

export function LabNotes() {
  return (
    <section id="services" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">O que ofereço</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Serviços</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Soluções sob medida para o seu negócio. Cada projeto é desenvolvido com código limpo, boas práticas e entrega no prazo.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 hover-lift animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  service.color,
                )}
              />

              <div className="relative z-10">
                <div className="mb-4 sm:mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
                    {service.category}
                  </span>
                  <span className="font-mono text-xs text-primary font-medium">{service.price}</span>
                </div>

                <h3 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">{service.excerpt}</p>

                <div className="mt-5 flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 sm:opacity-0 sm:translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0">
                  <a href="#connect" className="flex items-center gap-2 hover:underline">
                    solicitar orçamento
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
