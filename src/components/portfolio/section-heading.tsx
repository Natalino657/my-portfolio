type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="flex items-center gap-2 font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
        <span className="h-px w-8 bg-gradient-to-r from-foreground to-transparent" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </div>
  );
}
