import { Mail, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { siteConfig, aboutMe } from "@/data/portfolio";

const paragraphs = aboutMe
  .trim()
  .split(/\n\s*\n/)
  .map((p) => p.trim())
  .filter(Boolean);

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_18rem]">
        <div className="space-y-8">
          <SectionHeading eyebrow="01 · Sobre mim" title="Quem sou" />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="grid h-fit gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:pt-16">
          <div className="flex items-start gap-3 rounded-xl border bg-card p-4 shadow-sm">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-foreground/10 text-foreground">
              <MapPin className="size-5" />
            </span>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Local</dt>
              <dd className="mt-0.5 font-medium">{siteConfig.location}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border bg-card p-4 shadow-sm">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-foreground/10 text-foreground">
              <Mail className="size-5" />
            </span>
            <div className="min-w-0">
              <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Email</dt>
              <dd className="mt-0.5 truncate font-medium">
                <a className="underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
}
