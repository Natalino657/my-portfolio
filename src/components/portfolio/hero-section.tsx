import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, GitBranch, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/data/portfolio";

const githubHref = socialLinks.find((l) => l.label === "GitHub")?.href ?? "https://github.com";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="scroll-mt-20 border-b bg-gradient-to-b from-muted/40 to-background py-20 sm:py-28"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <div className="flex w-full max-w-2xl flex-col items-center gap-8 text-center sm:items-start sm:text-left lg:max-w-none lg:flex-1">
          <Badge variant="secondary" className="w-fit">
            Disponível para projetos
          </Badge>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Olá, sou {siteConfig.name}{" "}
              <span className="text-muted-foreground">— {siteConfig.role}</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty sm:text-xl">
              {siteConfig.tagline}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            <Button nativeButton={false} render={<Link href="#projetos" />}>
              Ver projetos
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Button>
            <Button variant="outline" nativeButton={false} render={<Link href="#contato" />}>
              <Mail className="size-4" data-icon="inline-start" />
              Contato
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href={siteConfig.cvSrc} target="_blank" rel="noopener noreferrer" />}
            >
              <FileText className="size-4" data-icon="inline-start" />
              CV
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href={githubHref} target="_blank" rel="noopener noreferrer" />}
            >
              <GitBranch className="size-4" data-icon="inline-start" />
              GitHub
            </Button>
          </div>
        </div>

        <div className="relative aspect-square w-48 shrink-0 overflow-hidden rounded-full ring-1 ring-border shadow-md sm:w-56 lg:w-64">
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
    </section>
  );
}
