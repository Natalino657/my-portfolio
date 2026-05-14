import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projetos" className="scroll-mt-20 border-y bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projetos</h2>
      
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.href ? (
                    <Button size="sm" nativeButton={false} render={<Link href={project.href} />}>
                      Ver site
                      <ExternalLink className="size-3.5" data-icon="inline-end" />
                    </Button>
                  ) : null}
                  {project.repo ? (
                    <Button variant="outline" size="sm" nativeButton={false} render={<Link href={project.repo} />}>
                      Código
                    </Button>
                  ) : null}
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
