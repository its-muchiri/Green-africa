import { Metadata } from "next";
import Link from "next/link";
import { journalPosts, getPostsByCategory } from "@/data/posts";
import {
  Eyebrow,
  SectionDivider,
  LinkButton,
  Button,
} from "@/components";

export const metadata: Metadata = {
  title: "Field Notes | Practical Agronomy Guides & Seasonal Advice",
  description: "Real agronomy guides, seasonal advice, and project learnings from our team and partner farms. Not SEO filler â€” practical knowledge for Kenyan growers.",
};

export default function JournalPage() {
  const categories = [...new Set(journalPosts.map(p => p.category))];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-forest">
        <div className="absolute inset-0 bg-noise opacity-5" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Eyebrow variant="numbered" number="01" className="text-clay">
            Field Notes
          </Eyebrow>
          <h1 className="font-display font-bold tracking-tight-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream line-height-tight mt-2 mb-6 max-w-3xl">
            Practical knowledge
            <br />
            <span className="text-clay">from the field.</span>
          </h1>
          <p className="text-sage max-w-prose text-lg leading-relaxed">
            Not SEO filler. Real agronomy guides, seasonal advice, and project learnings from our team and partner farms across Kenya.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-cream border-y border-sage/20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter posts by category">
            <button className="font-mono text-xs uppercase tracking-wider text-forest bg-clay px-4 py-2 brutalist-border" aria-pressed="true">
              All Posts
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

      {/* Posts Grid */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalPosts.map((post) => (
              <article key={post.slug} className="group brutalist-border-forest overflow-hidden bg-bone flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-forest/10 to-moss/10 flex items-center justify-center text-sage font-mono text-xs">
                    <span>Image: {post.image}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-sage bg-bone/90 px-3 py-1.5 brutalist-border-forest backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-sage mb-3">
                    <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-KE", { month: "short", day: "numeric", year: "numeric" })}</time>
                    <span>â€¢</span>
                    <span>{post.readTime}</span>
                    <span>â€¢</span>
                    <span>{post.author}</span>
                  </div>
                  <Link href={`/journal/${post.slug}`} className="block mb-4">
                    <h2 className="font-display font-semibold text-xl sm:text-2xl text-forest tracking-tight-display line-height-snug group-hover:text-clay transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-ink/70 leading-relaxed flex-1 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="font-mono text-xs text-sage bg-cream px-3 py-1.5 brutalist-border-forest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/journal/${post.slug}`} className="font-mono text-xs uppercase tracking-wider text-moss hover:text-clay transition-colors inline-flex items-center gap-1 mt-auto">
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
      <section className="py-20 sm:py-28 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5" aria-hidden="true" />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow variant="numbered" number="02" className="text-clay">
              Stay Informed
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-cream line-height-tight mt-2 mb-6">
              Seasonal alerts, new guides, and project updates.
            </h2>
            <p className="text-sage max-w-prose mx-auto mb-8 text-lg leading-relaxed">
              No spam. One email per month. Unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="/api/newsletter" method="POST">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 bg-cream/10 border-2 border-white/20 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-forest px-6 py-4 font-mono text-sm text-cream placeholder-sage/50"
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
