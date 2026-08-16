import { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import {
  Eyebrow,
  SectionDivider,
  LinkButton,
  Button,
} from "@/components";

export const metadata: Metadata = {
  title: "Projects | Completed Installations Across Kenya",
  description: "Browse our completed projects: school kitchen gardens, hospital farms, greenhouse clusters, water pans, and irrigation systems across 12 Kenyan counties.",
};

export default function ProjectsPage() {
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/WhatsApp Image 2026-06-23 at 10.57.04 AM.jpeg"
            alt="Green Africa completed greenhouse project"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jungle-900/80 via-jungle-800/60 to-jungle-700/40" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Eyebrow variant="numbered" number="01" className="text-clay-400">
            Our Work
          </Eyebrow>
          <h1 className="font-display font-bold tracking-tight-display text-ink line-height-tight mt-2 mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl">
            Projects that grow.
            <br />
            <span className="text-clay-400">Real installations. Real results.</span>
          </h1>
          <p className="text-ink-muted max-w-prose text-lg leading-relaxed">
            {projects.length} completed projects across {new Set(projects.map(p => p.location.split(",")[0].trim())).size} counties. From household vertical gardens to county-scale water pan programmes.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-jungle-900/30 border-y border-jungle-500/20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            <button className="font-mono text-xs uppercase tracking-wider text-jungle-100 bg-clay-500 px-4 py-2 brutalist-border-jungle" aria-pressed="true">
              All Projects
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="font-mono text-xs uppercase tracking-wider text-sage-400 bg-jungle-800/50 px-4 py-2 brutalist-border-jungle hover:bg-jungle-700 hover:text-jungle-100 transition-all"
                aria-pressed="false"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 sm:py-28 bg-jungle-900/30">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article key={project.slug} className="group brutalist-border-jungle overflow-hidden bg-jungle-800/50 flex flex-col glass-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-sage-400 bg-jungle-900/80 px-3 py-1.5 brutalist-border-jungle backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-jungle-900/80 to-transparent p-4 text-jungle-100">
                    <div className="font-mono text-xs uppercase tracking-wider text-clay-400 mb-1">{project.location}</div>
                    <div className="font-display font-medium text-lg sm:text-xl tracking-tight-display">{project.title}</div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-ink-muted leading-relaxed flex-1 line-clamp-3">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((service, i) => (
                      <span key={i} className="font-mono text-xs text-sage-400 bg-jungle-900/50 px-3 py-1.5 brutalist-border-jungle">
                        {service}
                      </span>
                    ))}
                    {project.services.length > 3 && (
                      <span className="font-mono text-xs text-sage-400 bg-jungle-900/50 px-3 py-1.5 brutalist-border-jungle">
                        +{project.services.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="mt-6 pt-6 border-t border-jungle-500/20 flex items-center justify-between">
                    <time className="font-mono text-xs text-sage-400" dateTime={project.completedAt}>
                      Completed {new Date(project.completedAt).toLocaleDateString("en-KE", { month: "short", year: "numeric" })}
                    </time>
                    <span className="font-mono text-xs uppercase tracking-wider text-sage-400 bg-jungle-900/50 px-3 py-1 brutalist-border-jungle capitalize">
                      {project.clientType}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/WhatsApp Image 2026-06-22 at 5.42.46 PM.jpeg"
            alt="Green Africa project installation"
            fill
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jungle-900/90 via-jungle-800/70 to-jungle-700/50" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow variant="numbered" number="02" className="text-clay-400">
              Your Project Next?
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-6">
              Let&apos;s add your farm to the map.
            </h2>
            <p className="text-ink-muted max-w-prose mx-auto mb-8 text-lg leading-relaxed">
              We&apos;ll survey your site, design the system, and give you a complete specification with costs and timeline.
            </p>
            <Button size="xl" asChild>
              <a href="/contact">Get a Quote →</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}