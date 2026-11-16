import Link from "next/link";
import { Download, FileText, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-20 pb-20 sm:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-700 p-8 text-white shadow-2xl ring-1 ring-white/10 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-grid opacity-30" aria-hidden />
          <div className="absolute -top-20 -right-20 -z-10 size-72 rounded-full bg-white/10 blur-3xl" aria-hidden />

          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-xs font-medium tracking-widest text-white/80 uppercase">04 · Contato</p>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Vamos construir algo juntos?
            </h2>
            <p className="text-white/85 text-pretty sm:text-lg">
              Estou disponível para novas oportunidades e projetos. Envie-me um email ou veja o meu CV.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="h-10 bg-white px-4 text-neutral-900 shadow-lg hover:bg-white/90 [a]:hover:bg-white/90"
              nativeButton={false}
              render={<Link href={`mailto:${siteConfig.email}`} />}
            >
              <Mail className="size-4" data-icon="inline-start" />
              Enviar email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-10 border-white/40 bg-white/10 px-4 text-white hover:bg-white/20 hover:text-white dark:border-white/40 dark:bg-white/10 dark:hover:bg-white/20"
              nativeButton={false}
              render={<a href={siteConfig.cvSrc} target="_blank" rel="noopener noreferrer" />}
            >
              <FileText className="size-4" data-icon="inline-start" />
              Ver CV (PDF)
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-10 border-white/40 bg-white/10 px-4 text-white hover:bg-white/20 hover:text-white dark:border-white/40 dark:bg-white/10 dark:hover:bg-white/20"
              nativeButton={false}
              render={<a href={siteConfig.cvSrc} download={siteConfig.cvDownloadFileName} />}
            >
              <Download className="size-4" data-icon="inline-start" />
              Download CV
            </Button>
            {socialLinks.map((link) => (
              <Button
                key={link.href}
                size="lg"
                variant="outline"
                className="h-10 border-white/40 bg-white/10 px-4 text-white hover:bg-white/20 hover:text-white dark:border-white/40 dark:bg-white/10 dark:hover:bg-white/20"
                nativeButton={false}
                render={<Link href={link.href} rel="noopener noreferrer" target="_blank" />}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
