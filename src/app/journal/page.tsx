import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { journalPosts, getPostsByCategory } from "@/data/posts";
import {
  Eyebrow,
  SectionDivider,
  LinkButton,
  Button,
} from "@/components";

export const metadata: Metadata = {
  title: "Field Notes | Practical Agronomy Guides & Seasonal Advice",
  description: "Real agronomy guides, seasonal advice, and project learnings from our team and partner farms. Not SEO filler — practical knowledge for Kenyan growers.",
};

export default function JournalPage() {
  const categories = [...new Set(journalPosts.map(p => p.category))];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/WhatsApp Image 2026-06-22 at 5.42.44 PM.jpeg"
            alt="Green Africa team working in field"
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
            Field Notes
          </Eyebrow>
          <h1 className="font-display font-bold tracking-tight-display text-ink line-height-tight mt-2 mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl">
            Practical knowledge
            <br />
            <span className="text-clay-400">from the field.</span>
          </h1>
          <p className="text-ink-muted max-w-prose text-lg leading-relaxed">
            Not SEO filler. Real agronomy guides, seasonal advice, and project learnings from our team and partner farms across Kenya.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-jungle-900/30 border-y border-jungle-500/20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter posts by category">
            <button className="font-mono text-xs uppercase tracking-wider text-jungle-100 bg-clay-500 px-4 py-2 premium-border-jungle" aria-pressed="true">
              All Posts
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="font-mono text-xs uppercase tracking-wider text-sage-400 bg-jungle-800/50 px-4 py-2 premium-border-jungle hover:bg-jungle-700 hover:text-jungle-100 transition-all"
                aria-pressed="false"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 sm:py-28 bg-jungle-900/30">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalPosts.map((post) => (
              <article key={post.slug} className="group premium-border-jungle overflow-hidden bg-jungle-800/50 flex flex-col glass-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-sage-400 bg-jungle-900/80 px-3 py-1.5 premium-border-jungle backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-sage-400 mb-3">
                    <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-KE", { month: "short", day: "numeric", year: "numeric" })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <Link href={`/journal/${post.slug}`} className="block mb-4">
                    <h2 className="font-display font-semibold text-xl sm:text-2xl text-jungle-100 tracking-tight-display line-height-snug group-hover:text-clay-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-ink-muted leading-relaxed flex-1 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="font-mono text-xs text-sage-400 bg-jungle-900/50 px-3 py-1.5 premium-border-jungle">
                        {tag}
                      </span>
                    ))}
                  </div>
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

      {/* Newsletter CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/WhatsApp Image 2026-06-23 at 10.57.05 AM.jpeg"
            alt="Green Africa training session"
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
              Stay Informed
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-6">
              Seasonal alerts, new guides, and project updates.
            </h2>
            <p className="text-ink-muted max-w-prose mx-auto mb-8 text-lg leading-relaxed">
              No spam. One email per month. Unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="/api/newsletter" method="POST">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 bg-jungle-800/50 border-2 border-jungle-500/30 focus:border-clay-400 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:ring-offset-2 focus:ring-offset-jungle-900 px-6 py-4 font-mono text-sm text-jungle-100 placeholder-sage-400/50"
                aria-label="Email address"
              />
              <Button type="submit" size="lg" variant="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}