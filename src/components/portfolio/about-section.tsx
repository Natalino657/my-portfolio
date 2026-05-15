import { Separator } from "@/components/ui/separator";
import { siteConfig, aboutMe } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Sobre
          </h2>
          <p className="max-w-2xl text-muted-foreground">{aboutMe}</p>
        </div>
        <Separator />
        <dl className="grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Local</dt>
            <dd className="mt-1 text-base">{siteConfig.location}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Email</dt>
            <dd className="mt-1 text-base">
              <a
                className="underline-offset-4 hover:underline"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
