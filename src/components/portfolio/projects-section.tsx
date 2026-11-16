import Link from "next/link";
import { ExternalLink, GitBranch, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-5 rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/10",
        project.featured &&
          "border-transparent [background:linear-gradient(var(--card),var(--card))_padding-box,linear-gradient(120deg,var(--primary),var(--brand-3),var(--brand-2))_border-box] sm:p-8",
      )}
    >
      {/* Barra de cor no topo */}
      <span
        className="absolute inset-x-6 top-0 h-0.5 rounded-full bg-gradient-to-r from-primary via-brand-3 to-brand-2 opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />

      <div className="space-y-3">
        {project.featured ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground shadow-sm">
            <Sparkles className="size-3.5" />
            Projeto recente
          </span>
        ) : null}
        <h3 className={cn("font-bold tracking-tight", project.featured ? "text-2xl sm:text-3xl" : "text-xl")}>
          {project.title}
        </h3>
        <p className={cn("text-muted-foreground text-pretty", project.featured && "max-w-3xl sm:text-lg")}>
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      {project.href || project.repo ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.href ? (
            <Button
              size="sm"
              nativeButton={false}
              render={<Link href={project.href} target="_blank" rel="noopener noreferrer" />}
            >
              Ver site
              <ExternalLink className="size-3.5" data-icon="inline-end" />
            </Button>
          ) : null}
          {project.repo ? (
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href={project.repo} target="_blank" rel="noopener noreferrer" />}
            >
              <GitBranch className="size-3.5" data-icon="inline-start" />
              Código
            </Button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative isolate scroll-mt-20 overflow-hidden border-y bg-muted/50 py-20 sm:py-24"
    >
      <div
        className="absolute -top-24 right-0 -z-10 size-96 rounded-full bg-foreground/5 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="02 · Projetos"
          title="O que tenho construído"
          description="Aplicações web e mobile, de sites para clientes reais a plataformas full-stack."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title} className={cn(project.featured && "md:col-span-2")}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
