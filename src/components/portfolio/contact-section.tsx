import Link from "next/link";
import { Download, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-20 border-t bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contato</h2>
          
        </div>
        <div className="flex flex-wrap gap-3">
          <Button nativeButton={false} render={<Link href={`mailto:${siteConfig.email}`} />}>
            Enviar email
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a href={siteConfig.cvSrc} target="_blank" rel="noopener noreferrer" />
            }
          >
            <FileText className="size-4" data-icon="inline-start" />
            Ver CV (PDF)
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a href={siteConfig.cvSrc} download={siteConfig.cvDownloadFileName} />
            }
          >
            <Download className="size-4" data-icon="inline-start" />
            Download CV
          </Button>
          {socialLinks.map((link) => (
            <Button
              key={link.href}
              variant="outline"
              nativeButton={false}
              render={<Link href={link.href} rel="noopener noreferrer" target="_blank" />}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
