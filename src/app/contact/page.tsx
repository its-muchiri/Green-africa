import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import {
  Eyebrow,
  SectionDivider,
  Button,
  ReededPanel,
  LinkButton,
} from "@/components";

export const metadata: Metadata = {
  title: "Contact | Get a Quote or Technical Advice",
  description: "Contact Green Africa Agri Solutions for a custom quote, technical advice, or to schedule a site visit. Mpaka House, Westlands Road, Nairobi. +254 791 365 105. info@greenafrica.co.ke",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-forest">
        <div className="absolute inset-0 bg-noise opacity-5" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Eyebrow variant="numbered" number="01" className="text-clay">
            Contact Us
          </Eyebrow>
          <h1 className="font-display font-bold tracking-tight-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream line-height-tight mt-2 mb-6 max-w-3xl">
            Let's talk about
            <br />
            <span className="text-clay">your project.</span>
          </h1>
          <p className="text-sage max-w-prose text-lg leading-relaxed">
            Land size, crops, water source, budget, timeline &mdash; we factor it all in. You'll get a preliminary assessment within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <Eyebrow variant="numbered" number="02">
                Request a Quote
              </Eyebrow>
              <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl text-forest line-height-tight mt-2 mb-8">
                Tell us what you need.
              </h2>
              <form className="space-y-6" action="/api/contact" method="POST">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-bone border-2 border-sage/30 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-cream px-4 py-3 font-body text-ink placeholder-sage/50"
                      placeholder="John Kamau"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full bg-bone border-2 border-sage/30 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-cream px-4 py-3 font-body text-ink placeholder-sage/50"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-bone border-2 border-sage/30 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-cream px-4 py-3 font-body text-ink placeholder-sage/50"
                    placeholder="john@farm.co.ke"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                    County / Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="w-full bg-bone border-2 border-sage/30 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-cream px-4 py-3 font-body text-ink placeholder-sage/50"
                    placeholder="Kajiado / Kitengela"
                  />
                </div>
                <div>
                  <label htmlFor="land-size" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                    Land Size (acres)
                  </label>
                  <input
                    type="number"
                    id="land-size"
                    name="landSize"
                    step="0.25"
                    min="0.25"
                    className="w-full bg-bone border-2 border-sage/30 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-cream px-4 py-3 font-body text-ink placeholder-sage/50"
                    placeholder="1"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-bone border-2 border-sage/30 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-cream px-4 py-3 font-body text-ink"
                  >
                    <option value="">Select a service (or multiple below)</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="crops" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                    Main Crops / Enterprise
                  </label>
                  <input
                    type="text"
                    id="crops"
                    name="crops"
                    className="w-full bg-bone border-2 border-sage/30 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-cream px-4 py-3 font-body text-ink placeholder-sage/50"
                    placeholder="Tomato, avocado, maize, dairy"
                  />
                </div>
                <div>
                  <label htmlFor="water-source" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                    Water Source
                  </label>
                  <select
                    id="water-source"
                    name="waterSource"
                    className="w-full bg-bone border-2 border-sage/30 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-cream px-4 py-3 font-body text-ink"
                  >
                    <option value="">Select water source</option>
                    <option value="borehole">Borehole</option>
                    <option value="river">River / Stream</option>
                    <option value="municipal">County / Municipal Line</option>
                    <option value="rainwater">Rainwater Harvesting</option>
                    <option value="dam">Farm Pond / Dam</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                    Project Details / Questions *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-bone border-2 border-sage/30 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-cream px-4 py-3 font-body text-ink placeholder-sage/50 resize-none"
                    placeholder="Describe your project: current challenges, goals, timeline, budget range, any existing infrastructure..."
                  />
                </div>
                <Button type="submit" size="xl" className="w-full sm:w-auto">
                  Submit Request
                </Button>
                <p className="font-mono text-xs text-sage text-center sm:text-left">
                  We'll respond within 24 hours. For urgent queries, WhatsApp us directly.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <ReededPanel variant="light" padding="xl" className="brutalist-border-forest h-fit sticky top-24">
                <Eyebrow variant="numbered" number="03">
                  Get in Touch
                </Eyebrow>
                <h3 className="font-display font-semibold text-2xl sm:text-3xl text-forest tracking-tight-display mt-2 mb-8 line-height-snug">
                  We're based in Nairobi, working across Kenya.
                </h3>

                <div className="space-y-8 mb-10">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-sage mb-2">Visit Us</div>
                    <address className="not-italic text-ink/80 leading-relaxed font-body">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.postalCode}<br />
                      {siteConfig.address.country}
                    </address>
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-sage mb-2">Call Us</div>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-ink/80 hover:text-clay transition-colors font-body text-lg">{siteConfig.phone}</a>
                    <div className="font-mono text-xs text-sage mt-1">Mon&ndash;Fri: {siteConfig.hours.weekdays}</div>
                    <div className="font-mono text-xs text-sage">Sat: {siteConfig.hours.saturday}</div>
                    <div className="font-mono text-xs text-sage">Sun: {siteConfig.hours.sunday}</div>
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-sage mb-2">Email Us</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-ink/80 hover:text-clay transition-colors font-body text-lg">{siteConfig.email}</a>
                    <div className="font-mono text-xs text-sage mt-1">Typical reply: under 4 hours business hours</div>
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-sage mb-2">WhatsApp</div>
                    <LinkButton href={`https://wa.me/${siteConfig.whatsapp}`} variant="primary" size="lg" className="w-full" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </LinkButton>
                    <div className="font-mono text-xs text-sage mt-2 text-center">Fastest response</div>
                  </div>
                </div>

                <SectionDivider variant="light" />

                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-sage mb-4">Follow Our Work</div>
                  <div className="flex gap-4">
                    <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-sage hover:text-clay transition-colors" aria-label="Facebook">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-sage hover:text-clay transition-colors" aria-label="Twitter">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                    </a>
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sage hover:text-clay transition-colors" aria-label="Instagram">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"/></svg>
                    </a>
                    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sage hover:text-clay transition-colors" aria-label="LinkedIn">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-sage hover:text-clay transition-colors" aria-label="YouTube">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 4.5a3 3 0 0 0-3-3h-14a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-15z"/><path d="M9 12l6 4.5-6 4.5V12z"/></svg>
                    </a>
                  </div>
                </div>
              </ReededPanel>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 sm:py-28 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5" aria-hidden="true" />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <Eyebrow variant="numbered" number="04" className="text-clay">
              Find Us
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl text-cream line-height-tight mt-2 mb-4">
              Mpaka House, Westlands Road.
            </h2>
          </div>
          <div className="aspect-video brutalist-border overflow-hidden">
<iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Green Africa Agri Solutions location at Mpaka House, Westlands Road, Nairobi"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Eyebrow variant="numbered" number="05">
              Common Questions
            </Eyebrow>
            <h2 className="font-display font-bold tracking-tight-display text-4xl sm:text-5xl text-forest line-height-tight mt-2 mb-4">
              Quick answers.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Do you deliver seedlings outside Nairobi?", a: "Yes. We deliver to Kiambu, Machakos, Kajiado, Murang'a, Nyeri, Meru, Nakuru, Laikipia, and Makueni. Minimum order 50 seedlings. Delivery cost quoted per location." },
              { q: "What's the lead time for a greenhouse installation?", a: "Wooden-frame tunnels: 2&ndash;3 weeks from order to completion. Steel multi-span: 4&ndash;6 weeks. Includes site prep, erection, drip installation, and crop establishment support." },
              { q: "Can you design a system for my specific farm?", a: "Yes. Every project starts with a site survey (virtual or physical). We measure land, test water, check soil, then deliver a complete specification with hydraulic calculations, Bill of Quantities, and timeline." },
              { q: "Do you offer financing or payment plans?", a: "We offer 50% deposit, 50% on completion for installations. For county/NGO projects, we work with LPOs. We don't offer direct credit but can connect you with agricultural finance partners (AFC, KCB MobiGrow, etc.)." },
              { q: "What warranty do you provide?", a: "Greenhouse structures: 1 year workmanship, 3 years polythene, 10 years galvanized steel. Solar pumps: 2 years manufacturer warranty. HDPE liners: 20 years buried. All with Nairobi-based spares support." },
              { q: "How do I get a soil test done?", a: "Contact us to schedule sampling. Our agronomist visits your farm, collects geo-referenced samples (1 per hectare minimum), sends to CropNuts/KALRO. Results with fertiliser prescription returned in 7 days. Cost: KSh 3,500/sample." },
            ].map((faq, index) => (
              <details key={index} className="group bg-bone p-6 brutalist-border-forest">
                <summary className="flex items-center justify-between cursor-pointer list-none font-display font-semibold text-xl text-forest tracking-tight-display">
                  {faq.q}
                  <svg className="w-5 h-5 text-clay transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-ink/80 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}






