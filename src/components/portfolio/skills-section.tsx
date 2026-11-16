import { Award } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { certificates, skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl space-y-14 px-4 sm:px-6">
        <div className="space-y-8">
          <SectionHeading eyebrow="03 · Skills" title="Stack e foco" />
          <ul className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium shadow-sm transition-colors hover:border-foreground/40 hover:bg-foreground hover:text-background"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight">Certificações</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {certificates.map((cert) => (
              <li key={cert.title} className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Award className="size-5" />
                </span>
                <div>
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
