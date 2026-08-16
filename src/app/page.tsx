import Link from "next/link";
import Image from "next/image";
import { services, serviceCategories } from "@/data/services";
import { getLatestPosts } from "@/data/posts";
import { siteConfig } from "@/data/site";
import {
  Button,
  Eyebrow,
  ServiceIndex,
  SectionDivider,
  LinkButton,
} from "@/components";

export default function Home() {
  const latestPosts = getLatestPosts(3);
  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1">
              <Eyebrow variant="numbered" number="01" className="text-clay-400">
                Climate-Smart Agriculture for Kenya
              </Eyebrow>
              <h1 className="font-display font-bold tracking-tight-display text-ink line-height-tight mt-4 mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] max-w-[90%]">
                Growing Resilience
                <br />
                <span className="text-clay-400">From the Ground Up</span>
              </h1>
              <p className="text-ink-muted max-w-prose text-lg sm:text-xl mb-10 font-light leading-relaxed">
                Nairobi-based supplier of seedlings, irrigation, greenhouses, solar dryers, water storage, soil testing, compost, and farmer training — serving farms, schools, NGOs, and county governments across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <LinkButton href="/services" variant="secondary" size="xl">
                  View All Services
                </LinkButton>
              </div>
            </div>

            <div className="hidden lg:block lg:col-start-2 lg:col-end-3 lg:row-start-1">
              <div className="glass-card max-w-md ml-auto">
                <Eyebrow className="text-sage-400">Our Mission</Eyebrow>
                <h3 className="font-display font-semibold text-2xl sm:text-3xl text-jungle-100 tracking-tight-display mt-2 mb-4 line-height-snug">
                  Equip every Kenyan grower with climate-smart tools that work.
                </h3>
                <ul className="space-y-4 text-ink-muted font-mono text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-clay-400 font-bold">01</span>
                    <span>40+ seedling varieties — KEPHIS certified, 90%+ survival</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay-400 font-bold">02</span>
                    <span>Solar-powered irrigation — zero fuel cost, 25-year panel life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay-400 font-bold">03</span>
                    <span>200+ greenhouses installed across Central, Rift Valley, Eastern</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay-400 font-bold">04</span>
                    <span>2,300+ farmers trained since 2021 with 6-month follow-up</span>
                  </li>
                </ul>
                <SectionDivider variant="dark" className="my-6" />
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-3xl text-jungle-100">+254</span>
                  <span className="font-mono text-sm text-ink-muted">791 365 105</span>
                </div>
                <div className="font-mono text-xs text-ink-muted mt-1">Mpaka House, Westlands Road, Nairobi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Spread */}
      <section className="py-20 sm:py-28 lg:py-36 bg-jungle-900/50">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <Eyebrow variant="numbered" number="02" className="text-clay-400">
                Our Services Catalogue
              </Eyebrow>
              <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-jungle-100 line-height-tight mt-2 mb-4 max-w-2xl">
                Twelve solutions. One integrated approach.
              </h2>
              <p className="text-ink-muted max-w-prose text-lg leading-relaxed">
                From seedling to harvest, from water source to market. Each service connects to the next — because resilient farming systems don't work in isolation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Service categories">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.value}
                  className="font-mono text-xs uppercase tracking-wider text-ink-muted glass px-4 py-2 border-jungle-400/20 hover:bg-jungle-700/50 hover:text-jungle-100 transition-all"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {featuredServices.map((service, index) => (
              <article
                key={service.slug}
                className={index % 2 === 0 ? "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" : "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:direction-rtl"}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-2xl glass-card">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
                    />
                  </div>
                </div>
                <div className={index % 2 === 0 ? "lg:col-start-2" : ""}>
                  <ServiceIndex number={String(index + 1).padStart(2, "0")} title={service.title} size="lg" />
                  <p className="mt-6 text-ink-muted leading-relaxed max-w-prose">{service.shortDescription}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="font-mono text-xs text-ink-muted glass px-3 py-1.5 border-jungle-400/20">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <LinkButton href={`/services/${service.slug}`} variant="secondary" className="mt-8" size="md">
                    View Details →
                  </LinkButton>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <LinkButton href="/services" variant="primary" size="xl">
              View All 12 Services →
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 sm:py-28 bg-jungle-800 relative overflow-hidden noise-bg">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Eyebrow variant="numbered" number="03" className="text-clay-400">
              Impact in Numbers
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-4">
              Measured by what grows.
            </h2>
            <p className="text-ink-muted max-w-prose mx-auto">
              Estimates based on 2021–2024 project data. Final figures pending client verification.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <ImpactStat label="Farmers Served" value="2,300+" suffix="" note="Since 2021" />
            <ImpactStat label="Trees Planted" value="180,000+" suffix="" note="Seedlings distributed" />
            <ImpactStat label="Counties Reached" value="12" suffix="" note="Across Kenya" />
            <ImpactStat label="Greenhouses Built" value="200+" suffix="" note="Wooden & steel frame" />
          </div>
        </div>
      </section>

      {/* Field Notes Preview */}
      <section className="py-20 sm:py-28 bg-jungle-900/50">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <Eyebrow variant="numbered" number="04" className="text-clay-400">
                Field Notes
              </Eyebrow>
              <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-4">
                Practical knowledge from the field.
              </h2>
              <p className="text-ink-muted max-w-prose text-lg leading-relaxed">
                Not SEO filler. Real agronomy guides, seasonal advice, and project learnings from our team and partner farms.
              </p>
            </div>
            <LinkButton href="/journal" variant="secondary" size="md">
              All Field Notes →
            </LinkButton>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article key={post.slug} className="group glass-card overflow-hidden flex flex-col h-full">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 font-mono text-xs text-sage-400 mb-3">
                    <span>{post.category}</span>
                    <span>•</span>
                    <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-KE", { month: "short", day: "numeric", year: "numeric" })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/journal/${post.slug}`} className="block">
                    <h3 className="font-display font-semibold text-xl sm:text-2xl text-jungle-100 tracking-tight-display line-height-snug mb-3 group-hover:text-clay-400 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-ink-muted leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  <Link href={`/journal/${post.slug}`} className="font-mono text-xs uppercase tracking-wider text-sage-400 hover:text-clay-400 transition-colors inline-flex items-center gap-1 mt-auto">
                    Read more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4-4 4m-6-8h10" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-jungle-800 relative overflow-hidden noise-bg">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative">
          <div className="glass-card max-w-3xl mx-auto text-center brutalist-border-jungle p-8 sm:p-12 lg:p-16">
            <Eyebrow variant="numbered" number="05" className="text-clay-400">
              Ready to Start?
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-6">
              Let's build your climate-smart system.
            </h2>
            <p className="text-ink-muted max-w-prose mx-auto mb-8 text-lg leading-relaxed">
              Tell us your land size, crops, water source, and goals. We'll design a system that fits — with real numbers, real timelines, and real support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <LinkButton href={`https://wa.me/${siteConfig.whatsapp}`} variant="secondary" size="xl" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ImpactStat({ label, value, suffix, note }: { label: string; value: string; suffix?: string; note: string }) {
  return (
    <div className="text-center">
      <div className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-jungle-100 tracking-tight-display line-height-tight">
        {value}
        {suffix && <span className="text-clay-400">{suffix}</span>}
      </div>
      <div className="font-mono text-xs uppercase tracking-widest text-clay-400 mt-2">{label}</div>
      <div className="font-mono text-xs text-ink-muted mt-1">{note}</div>
    </div>
  );
}