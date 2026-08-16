import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { team, companyTimeline, siteConfig } from "@/data/site";
import {
  ReededPanel,
  Button,
  Eyebrow,
  ServiceIndex,
  SectionDivider,
  LinkButton,
} from "@/components";

export const metadata: Metadata = {
  title: "About Us | Green Africa Agri Solutions",
  description: "Learn about Green Africa Agri Solutions � our story, mission, team, and timeline. Nairobi-based supplier of climate-smart agricultural products and services since 2018.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/WhatsApp Image 2026-06-23 at 10.57.04 AM.jpeg"
            alt="Green Africa team at nursery"
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
            About Us
          </Eyebrow>
          <h1 className="font-display font-bold tracking-tight-display text-ink line-height-tight mt-2 mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl">
            Climate-smart agriculture,
            <br />
            <span className="text-clay-400">rooted in Kenya.</span>
          </h1>
          <p className="text-ink-muted max-w-prose text-lg leading-relaxed">
            Founded in 2018. 2,300+ farmers trained. 200+ greenhouses built. 12 counties served. One mission: equip every Kenyan grower with tools that work.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 sm:py-28 bg-jungle-900/30">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <Eyebrow variant="numbered" number="02" className="text-clay-400">
                Our Mission
              </Eyebrow>
              <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-8">
                Equip every Kenyan grower with climate-smart tools that work.
              </h2>
              <div className="space-y-6 text-ink-muted leading-relaxed">
                <p>
                  Kenya's smallholders face a triple threat: erratic rainfall, degrading soils, and rising input costs. Yet most "solutions" sold to them are imported, overpriced, and poorly supported � designed for European greenhouses, not Kenyan shambas.
                </p>
                <p>
                  Green Africa Agri Solutions was founded to change that. We design, supply, and install systems built for Kenyan conditions: solar-powered irrigation that runs on equatorial sun, greenhouses that withstand Rift Valley winds, seedling varieties selected for local disease pressure, and training delivered in the field � not a hotel conference room.
                </p>
                <p>
                  We're not an NGO. We're a commercial enterprise that measures success by our clients' yields and income. When a farmer in Kajiado doubles her tomato yield with drip irrigation, or a school in Machakos feeds 400 children from a kitchen garden we designed, that's the metric that matters.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src="/images/WhatsApp Image 2026-06-23 at 10.57.05 AM.jpeg"
                alt="Green Africa team working in greenhouse"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-2xl"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-jungle-800 relative overflow-hidden noise-bg">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Eyebrow variant="numbered" number="03" className="text-clay-400">
              Our Journey
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-4">
              Six years of growth.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <ol className="space-y-8">
              {companyTimeline.map((item, index) => (
                <li key={item.year} className="relative pl-12 sm:pl-16 border-l-2 border-jungle-500/30">
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-clay-500 flex items-center justify-center premium-border z-10">
                    <span className="font-display font-bold text-jungle-900 text-lg sm:text-xl">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="glass-card">
                    <div className="font-mono text-xs uppercase tracking-widest text-clay-400 mb-2">{item.year}</div>
                    <h3 className="font-display font-semibold text-2xl text-jungle-100 tracking-tight-display mb-2">{item.title}</h3>
                    <p className="text-ink-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28 bg-jungle-900/30">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Eyebrow variant="numbered" number="04" className="text-clay-400">
              Our Team
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-4">
              Practitioners, not theorists.
            </h2>
            <p className="text-ink-muted max-w-prose mx-auto">
              Every team member has hands-on field experience. We don't hire desk agronomists.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <article key={member.name} className="group glass-card overflow-hidden flex flex-col h-full">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl -m-6 mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
                  />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-sage-400 mb-2">{member.role}</div>
                  <h3 className="font-display font-semibold text-xl text-jungle-100 tracking-tight-display mb-3">{member.name}</h3>
                  <p className="text-ink-muted leading-relaxed text-sm">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-jungle-800 relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-[url('/images/WhatsApp Image 2026-06-22 at 5.42.46 PM.jpeg')] opacity-5" aria-hidden="true" />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Eyebrow variant="numbered" number="05" className="text-clay-400">
              How We Work
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-4">
              Four principles.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              number="01"
              title="Field-First Design"
              description="Every system is designed on-site with the farmer. No copy-paste templates. We measure your land, test your water, check your soil, then specify."
            />
            <ValueCard
              number="02"
              title="Local Supply Chain"
              description="Frames fabricated in Nairobi. Seedlings raised in Ruiru. Compost produced in-house. Spares stocked locally. No 6-week import delays."
            />
            <ValueCard
              number="03"
              title="Training Included"
              description="Every installation comes with operator training and 6-month WhatsApp support. We don't just hand over keys � we transfer capability."
            />
            <ValueCard
              number="04"
              title="Measurable Outcomes"
              description="We track yield, water use, input cost, and income per acre. If the numbers don't improve, we adjust the system until they do."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-jungle-900/30">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card max-w-3xl mx-auto premium-border-jungle p-8 sm:p-12 lg:p-16">
            <Eyebrow variant="numbered" number="06" className="text-clay-400">
              Let's Talk
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-6">
              Have a project in mind?
            </h2>
            <p className="text-ink-muted max-w-prose mx-auto mb-8 text-lg leading-relaxed">
              Tell us your land size, crops, water source, and goals. We'll respond within 24 hours with a preliminary assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <a href="/contact">Start a Conversation</a>
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

function ValueCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="glass-card premium-border-jungle">
      <div className="font-display font-bold text-4xl text-clay-400 tracking-tight-display mb-4">{number}</div>
      <h3 className="font-display font-semibold text-xl text-jungle-100 tracking-tight-display mb-3">{title}</h3>
      <p className="text-ink-muted leading-relaxed">{description}</p>
    </div>
  );
}
