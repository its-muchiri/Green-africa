import { Metadata } from "next";
import { projects } from "@/data/projects";
import {
  Eyebrow,
  SectionDivider,
  LinkButton,
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
      <section className="relative min-h-[60vh] flex items-center bg-forest">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Eyebrow variant="numbered" number="01" className="text-clay">
            Our Work
          </Eyebrow>
          <h1 className="font-display font-bold tracking-tight-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream line-height-tight mt-2 mb-6 max-w-3xl">
            Projects that grow.
            <br />
            <span className="text-clay">Real installations. Real results.</span>
          </h1>
          <p className="text-sage max-w-prose text-lg leading-relaxed">
            {projects.length} completed projects across {new Set(projects.map(p => p.location.split(",")[0].trim())).size} counties. From household vertical gardens to county-scale water pan programmes.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-cream border-y border-sage/20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            <button className="font-mono text-xs uppercase tracking-wider text-forest bg-clay px-4 py-2 brutalist-border" aria-pressed="true">
              All Projects
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="font-mono text-xs uppercase tracking-wider text-sage bg-bone px-4 py-2 brutalist-border-forest hover:bg-forest hover:text-cream transition-all"
                aria-pressed="false"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article key={project.slug} className="group brutalist-border-forest overflow-hidden bg-bone flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-forest/10 to-moss/10 flex items-center justify-center text-sage font-mono text-xs">
                    <span>Image: {project.images[0]}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-sage bg-bone/90 px-3 py-1.5 brutalist-border-forest backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-ink/80 to-transparent p-4 text-cream">
                    <div className="font-mono text-xs uppercase tracking-wider text-clay mb-1">{project.location}</div>
                    <div className="font-display font-medium text-lg sm:text-xl tracking-tight-display">{project.title}</div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-ink/70 leading-relaxed flex-1 line-clamp-3">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((service, i) => (
                      <span key={i} className="font-mono text-xs text-sage bg-cream px-3 py-1.5 brutalist-border-forest">
                        {service}
                      </span>
                    ))}
                    {project.services.length > 3 && (
                      <span className="font-mono text-xs text-sage bg-cream px-3 py-1.5 brutalist-border-forest">
                        +{project.services.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="mt-6 pt-6 border-t border-sage/20 flex items-center justify-between">
                    <time className="font-mono text-xs text-sage" dateTime={project.completedAt}>
                      Completed {new Date(project.completedAt).toLocaleDateString("en-KE", { month: "short", year: "numeric" })}
                    </time>
                    <span className="font-mono text-xs uppercase tracking-wider text-sage bg-bone/50 px-3 py-1 brutalist-border-forest capitalize">
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
      <section className="py-20 sm:py-28 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" aria-hidden="true" />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow variant="numbered" number="02" className="text-clay">
              Your Project Next?
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-cream line-height-tight mt-2 mb-6">
              Let's add your farm to the map.
            </h2>
            <p className="text-sage max-w-prose mx-auto mb-8 text-lg leading-relaxed">
              We'll survey your site, design the system, and give you a complete specification with costs and timeline.
            </p>
            <LinkButton href="/contact" variant="primary" size="xl">
              Get a Quote →
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}