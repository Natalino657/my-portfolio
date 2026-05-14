import { siteConfig } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <p>
        © {year} {siteConfig.name}. Feito com Next.js, Tailwind e shadcn/ui.
      </p>
    </footer>
  );
}
