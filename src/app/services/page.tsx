import { Metadata } from "next";
import Image from "next/image";
import { services, serviceCategories } from "@/data/services";
import {
  ReededPanel,
  Button,
  Eyebrow,
  ServiceIndex,
  SectionDivider,
  LinkButton,
} from "@/components";

export const metadata: Metadata = {
  title: "Services | Climate-Smart Agricultural Solutions",
  description: "Explore our 12 climate-smart agricultural services: seedlings, irrigation, greenhouses, solar dryers, water storage, soil testing, compost, training, and kitchen garden design.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/WhatsApp Image 2026-06-22 at 5.38.53 PM.jpeg"
            alt="Green Africa nursery with grafted fruit tree seedlings"
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
            Our Services
          </Eyebrow>
          <h1 className="font-display font-bold tracking-tight-display text-ink line-height-tight mt-2 mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl">
            Twelve solutions.
            <br />
            <span className="text-clay-400">One integrated approach.</span>
          </h1>
          <p className="text-ink-muted max-w-prose text-lg leading-relaxed">
            From seedling to harvest, from water source to market. Each service connects to the next — because resilient farming systems don't work in isolation.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-jungle-900/30 border-y border-jungle-500/20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter services by category">
            <button className="font-mono text-xs uppercase tracking-wider text-jungle-100 bg-clay-500 px-4 py-2 brutalist-border-jungle" aria-pressed="true">
              All Services
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.value}
                className="font-mono text-xs uppercase tracking-wider text-sage-400 bg-jungle-800/50 px-4 py-2 brutalist-border-jungle hover:bg-jungle-700 hover:text-jungle-100 transition-all"
                aria-pressed="false"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-jungle-900/30">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article key={service.slug} className="group brutalist-border-jungle overflow-hidden bg-jungle-800/50 flex flex-col glass-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
                  />
                  <div className="absolute top-4 left-4">
                    <Eyebrow variant="category">{serviceCategories.find(c => c.value === service.category)?.label}</Eyebrow>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <ServiceIndex number={String(index + 1).padStart(2, "0")} title={service.title} size="md" />
                  <p className="mt-4 text-ink-muted leading-relaxed flex-1">{service.shortDescription}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="font-mono text-xs text-sage-400 bg-jungle-900/50 px-3 py-1.5 brutalist-border-jungle">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <LinkButton href={`/services/${service.slug}`} variant="secondary" className="mt-8" size="sm" fullWidth>
                    View Details →
                  </LinkButton>
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
            src="/images/WhatsApp Image 2026-06-22 at 5.42.44 PM.jpeg"
            alt="Green Africa irrigation system installation"
            fill
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jungle-900/90 via-jungle-800/70 to-jungle-700/50" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <ReededPanel variant="dark" padding="xl" className="max-w-3xl mx-auto text-center brutalist-border-jungle">
            <Eyebrow variant="numbered" number="02" className="text-clay-400">
              Need Help Choosing?
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-6">
              Tell us your situation. We'll recommend the right mix.
            </h2>
            <p className="text-ink-muted max-w-prose mx-auto mb-8 text-lg leading-relaxed">
              Land size, crops, water source, budget, timeline — we factor it all in.
            </p>
            <Button size="xl" asChild>
              <a href="/contact">Get a Recommendation</a>
            </Button>
          </ReededPanel>
        </div>
      </section>
    </>
  );
}