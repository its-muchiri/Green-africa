import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import {
  ReededPanel,
  Button,
  Eyebrow,
  ServiceIndex,
  SectionDivider,
  LinkButton,
} from "@/components";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      images: [{ url: service.image, width: 1200, height: 630 }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const category = serviceCategories.find((c) => c.value === service.category);
  const relatedServices = getRelatedServices(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
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
          <div className="max-w-3xl">
            <Eyebrow variant="category" className="text-clay-400">{category?.label}</Eyebrow>
            <ServiceIndex number={String(services.findIndex(s => s.slug === slug) + 1).padStart(2, "0")} title={service.title} size="xl" align="left" />
            <p className="mt-6 text-ink-muted max-w-prose text-lg leading-relaxed">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-jungle-900/30">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display font-semibold text-3xl sm:text-4xl text-jungle-100 tracking-tight-display mb-6">
                  Overview
                </h2>
                <div className="prose prose-cream max-w-none">
                  <p className="text-ink-muted leading-relaxed mb-6 text-lg">{service.fullDescription}</p>
                </div>
              </div>

              <SectionDivider variant="dark" />

              <div>
                <h2 className="font-display font-semibold text-3xl sm:text-4xl text-jungle-100 tracking-tight-display mb-6">
                  Specifications
                </h2>
                <dl className="grid sm:grid-cols-2 gap-6">
                  {service.specs.map((spec) => (
                    <div key={spec.label} className="bg-jungle-800/50 p-6 premium-border-jungle glass-card">
                      <dt className="font-mono text-xs uppercase tracking-widest text-sage-400 mb-2">{spec.label}</dt>
                      <dd className="font-display font-bold text-2xl sm:text-3xl text-jungle-100 tracking-tight-display">
                        {spec.value}
                        {spec.unit && <span className="font-mono text-base font-normal text-ink-muted ml-1">{spec.unit}</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <SectionDivider variant="dark" />

              <div>
                <h2 className="font-display font-semibold text-3xl sm:text-4xl text-jungle-100 tracking-tight-display mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 bg-jungle-800/50 premium-border-jungle glass-card">
                      <span className="font-display font-bold text-2xl text-clay-400 tracking-tight-display flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-ink-muted leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-1 space-y-8">
              <ReededPanel variant="dark" padding="lg" className="premium-border-jungle sticky top-24">
                <h3 className="font-display font-semibold text-2xl text-jungle-100 tracking-tight-display mb-6">
                  Enquire About This Service
                </h3>
                <p className="text-ink-muted mb-6 leading-relaxed">
                  Get a custom quote with specifications, timeline, and cost breakdown.
                </p>
                <Button size="lg" className="w-full mb-4" asChild>
                  <a href={`/contact?service=${service.slug}`}>Request a Quote</a>
                </Button>
                <LinkButton href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'm interested in ${encodeURIComponent(service.title)}. Can you share more details?`} variant="secondary" size="lg" className="w-full" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </LinkButton>
                <SectionDivider variant="dark" className="my-6" />
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3 text-sage-400">
                    <svg className="w-5 h-5 text-clay-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Mpaka House, Westlands Road, Nairobi
                  </div>
                  <div className="flex items-center gap-3 text-sage-400">
                    <svg className="w-5 h-5 text-clay-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${siteConfig.email}?subject=Enquiry: ${encodeURIComponent(service.title)}`} className="hover:text-clay-400 transition-colors">{siteConfig.email}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sage-400">
                    <svg className="w-5 h-5 text-clay-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-clay-400 transition-colors">{siteConfig.phone}</a>
                  </div>
                </div>
              </ReededPanel>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 sm:py-28 bg-jungle-900/30">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Eyebrow variant="numbered" number="03" className="text-clay-400">
                Often Combined With
              </Eyebrow>
              <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-4">
                Services that work together.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => (
                <article key={relatedService.slug} className="group premium-border-jungle overflow-hidden bg-jungle-800/50 glass-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedService.image}
                      alt={relatedService.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
                    />
                  </div>
                  <div className="p-6">
                    <ServiceIndex number={String(services.findIndex(s => s.slug === relatedService.slug) + 1).padStart(2, "0")} title={relatedService.title} size="sm" />
                    <p className="mt-3 text-ink-muted leading-relaxed text-sm">{relatedService.shortDescription}</p>
                    <LinkButton href={`/services/${relatedService.slug}`} variant="secondary" className="mt-4" size="sm" fullWidth>
                      View Details →
                    </LinkButton>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/WhatsApp Image 2026-06-22 at 5.42.45 PM.jpeg"
            alt="Green Africa consultation"
            fill
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jungle-900/90 via-jungle-800/70 to-jungle-700/50" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <ReededPanel variant="dark" padding="xl" className="max-w-3xl mx-auto text-center premium-border-jungle">
            <Eyebrow variant="numbered" number="04" className="text-clay-400">
              Ready to Proceed?
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-6">
              Let&apos;s design your {service.title.toLowerCase()} system.
            </h2>
            <p className="text-ink-muted max-w-prose mx-auto mb-8 text-lg leading-relaxed">
              We&apos;ll survey your site, model the hydraulics, and deliver a complete specification with costs and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <a href={`/contact?service=${service.slug}`}>Get a Custom Quote</a>
              </Button>
              <LinkButton href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'm interested in ${encodeURIComponent(service.title)}. Can you share more details?`} variant="secondary" size="xl" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </LinkButton>
            </div>
          </ReededPanel>
        </div>
      </section>
    </>
  );
}