import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Stack e foco</h2>
         
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
