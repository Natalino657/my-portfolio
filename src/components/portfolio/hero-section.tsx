import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, GitBranch, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/data/portfolio";

const githubHref = socialLinks.find((l) => l.label === "GitHub")?.href ?? "https://github.com";

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate scroll-mt-20 overflow-hidden border-b py-20 sm:py-28">
      {/* Fundo decorativo: grelha + manchas de cor desfocadas */}
      <div
        className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden
      />
      <div
        className="absolute -top-32 -left-24 -z-10 size-96 rounded-full bg-neutral-400/25 blur-3xl dark:bg-neutral-500/15"
        aria-hidden
      />
      <div
        className="absolute top-1/3 -right-24 -z-10 size-96 rounded-full bg-neutral-300/40 blur-3xl dark:bg-neutral-400/10"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 left-1/3 -z-10 size-80 rounded-full bg-neutral-300/30 blur-3xl dark:bg-neutral-600/15"
        aria-hidden
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between lg:gap-14">
        <div className="flex w-full max-w-2xl flex-col items-center gap-8 text-center sm:items-start sm:text-left lg:flex-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Disponível para projetos
          </span>

          <div className="space-y-5">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              Olá, sou <span className="text-gradient">{siteConfig.name}</span>
            </h1>
            <p className="font-mono text-sm font-medium tracking-wide text-muted-foreground sm:text-base">
              {"<"} {siteConfig.role} {"/>"}
            </p>
            <p className="text-lg text-muted-foreground text-pretty sm:text-xl">{siteConfig.tagline}</p>
            <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 text-foreground" />
              {siteConfig.location}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            <Button
              size="lg"
              className="h-10 px-4 shadow-lg"
              nativeButton={false}
              render={<Link href="#projetos" />}
            >
              Ver projetos
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Button>
            <Button size="lg" variant="outline" className="h-10 px-4" nativeButton={false} render={<Link href="#contato" />}>
              <Mail className="size-4" data-icon="inline-start" />
              Contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-10 px-4"
              nativeButton={false}
              render={<a href={siteConfig.cvSrc} target="_blank" rel="noopener noreferrer" />}
            >
              <FileText className="size-4" data-icon="inline-start" />
              CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-10 px-4"
              nativeButton={false}
              render={<Link href={githubHref} target="_blank" rel="noopener noreferrer" />}
            >
              <GitBranch className="size-4" data-icon="inline-start" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Avatar com anel em gradiente */}
        <div className="relative shrink-0">
          <div
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary via-brand-3 to-brand-2 opacity-25 blur-2xl"
            aria-hidden
          />
          <div className="relative rounded-full bg-gradient-to-tr from-primary via-brand-3 to-brand-2 p-1 shadow-xl">
            <div className="relative aspect-square w-48 overflow-hidden rounded-full border-4 border-background bg-muted sm:w-56 lg:w-64">
              <Image
                src={siteConfig.avatarSrc}
                alt={`Fotografia de ${siteConfig.name}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 224px, 256px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
