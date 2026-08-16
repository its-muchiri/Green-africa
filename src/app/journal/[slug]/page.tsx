import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { journalPosts, getPostBySlug } from "@/data/posts";
import {
  Eyebrow,
  SectionDivider,
  LinkButton,
  Button,
} from "@/components";

interface JournalPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: JournalPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function JournalPostPage({ params }: JournalPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="bg-jungle-900">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jungle-900/80 via-jungle-800/60 to-jungle-700/40" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-sage-400 mb-4">
              <span>{post.category}</span>
              <span>•</span>
              <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-KE", { month: "long", day: "numeric", year: "numeric" })}</time>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            <h1 className="font-display font-bold tracking-tight-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-jungle-100 line-height-tight mb-6">
              {post.title}
            </h1>
            <p className="text-ink-muted max-w-prose text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28 bg-jungle-900/30">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
            <aside className="lg:col-span-1 space-y-8">
              <div className="sticky top-24 space-y-6">
                <div className="bg-jungle-800/50 p-6 premium-border-jungle glass-card">
                  <h3 className="font-display font-semibold text-lg text-jungle-100 tracking-tight-display mb-4">Share This</h3>
                  <div className="flex gap-3">
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://greenafrica.co.ke/journal/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-sage-400 hover:text-clay-400 transition-colors" aria-label="Share on Twitter">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://greenafrica.co.ke/journal/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-sage-400 hover:text-clay-400 transition-colors" aria-label="Share on Facebook">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://greenafrica.co.ke/journal/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-sage-400 hover:text-clay-400 transition-colors" aria-label="Share on LinkedIn">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${`https://greenafrica.co.ke/journal/${post.slug}`}`)}`} target="_blank" rel="noopener noreferrer" className="text-sage-400 hover:text-clay-400 transition-colors" aria-label="Share on WhatsApp">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </a>
                  </div>
                </div>

                <div className="bg-jungle-800/50 p-6 premium-border-jungle glass-card">
                  <h3 className="font-display font-semibold text-lg text-jungle-100 tracking-tight-display mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="font-mono text-xs text-sage-400 bg-jungle-900/50 px-3 py-1.5 premium-border-subtle">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-jungle-800/50 p-6 premium-border-jungle glass-card">
                  <h3 className="font-display font-semibold text-lg text-jungle-100 tracking-tight-display mb-4">Related Posts</h3>
                  <ul className="space-y-3">
                    {journalPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3).map((related) => (
                      <li key={related.slug}>
                        <Link href={`/journal/${related.slug}`} className="font-mono text-xs text-sage-400 hover:text-clay-400 transition-colors block">{related.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="prose prose-cream max-w-none">
                <div className="relative aspect-[16/9] mb-12 overflow-hidden premium-border-jungle">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABMx/9k="
                  />
                </div>

                <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-ink-muted leading-relaxed" />

                <SectionDivider variant="dark" className="my-12" />

                <div className="bg-jungle-800/50 p-8 premium-border-jungle glass-card">
                  <h3 className="font-display font-semibold text-xl text-jungle-100 tracking-tight-display mb-4">About the Author</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-jungle-700/50 flex items-center justify-center flex-shrink-0 premium-border-jungle">
                      <span className="font-display font-bold text-2xl text-clay-400">{post.author.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="font-display font-medium text-jungle-100">{post.author}</p>
                      <p className="text-sage-400 text-sm mt-1">Green Africa Agronomy Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <Eyebrow variant="numbered" number="03" className="text-clay-400">
              Want More Like This?
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl md:text-6xl text-jungle-100 line-height-tight mt-2 mb-6">
              Monthly field notes in your inbox.
            </h2>
            <p className="text-ink-muted max-w-prose mx-auto mb-8 text-lg leading-relaxed">
              Seasonal alerts, new guides, and project updates. No spam. Unsubscribe anytime.
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
    </article>
  );
}