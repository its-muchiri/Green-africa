import { Metadata } from "next";
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
      <section className="relative min-h-[60vh] flex items-center bg-forest">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Eyebrow variant="numbered" number="01" className="text-clay">
            Our Services
          </Eyebrow>
          <h1 className="font-display font-bold tracking-tight-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream line-height-tight mt-2 mb-6 max-w-3xl">
            Twelve solutions.
            <br />
            <span className="text-clay">One integrated approach.</span>
          </h1>
          <p className="text-sage max-w-prose text-lg leading-relaxed">
            From seedling to harvest, from water source to market. Each service connects to the next — because resilient farming systems don't work in isolation.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-cream border-y border-sage/20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter services by category">
            <button className="font-mono text-xs uppercase tracking-wider text-forest bg-clay px-4 py-2 brutalist-border" aria-pressed="true">
              All Services
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.value}
                className="font-mono text-xs uppercase tracking-wider text-sage bg-bone px-4 py-2 brutalist-border-forest hover:bg-forest hover:text-cream transition-all"
                aria-pressed="false"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article key={service.slug} className="group brutalist-border-forest overflow-hidden bg-bone flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-forest/10 to-moss/10 flex items-center justify-center text-sage font-mono text-xs">
                    <span>Image: {service.image}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Eyebrow variant="category">{serviceCategories.find(c => c.value === service.category)?.label}</Eyebrow>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <ServiceIndex number={String(index + 1).padStart(2, "0")} title={service.title} size="md" />
                  <p className="mt-4 text-ink/80 leading-relaxed flex-1">{service.shortDescription}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="font-mono text-xs text-sage bg-cream px-3 py-1.5 brutalist-border-forest">
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
      <section className="py-20 sm:py-28 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" aria-hidden="true" />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative">
          <ReededPanel variant="dark" padding="xl" className="max-w-3xl mx-auto text-center brutalist-border">
            <Eyebrow variant="numbered" number="02" className="text-clay">
              Need Help Choosing?
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-cream line-height-tight mt-2 mb-6">
              Tell us your situation. We'll recommend the right mix.
            </h2>
            <p className="text-sage max-w-prose mx-auto mb-8 text-lg leading-relaxed">
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