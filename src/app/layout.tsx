import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import "./globals.css";
import "./glass.css";

const funnelDisplay = localFont({
  src: [
    { path: "../../public/fonts/FunnelDisplay-Variable.woff2" },
    { path: "../../public/fonts/FunnelDisplay-Regular.woff2", weight: "400" },
    { path: "../../public/fonts/FunnelDisplay-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/FunnelDisplay-SemiBold.woff2", weight: "600" },
    { path: "../../public/fonts/FunnelDisplay-Bold.woff2", weight: "700" },
  ],
  variable: "--font-funnel-display",
  display: "swap",
  preload: true,
});

const inter = localFont({
  src: [
    { path: "../../public/fonts/Inter-Variable.woff2" },
    { path: "../../public/fonts/Inter-Regular.woff2", weight: "400" },
    { path: "../../public/fonts/Inter-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/Inter-SemiBold.woff2", weight: "600" },
    { path: "../../public/fonts/Inter-Bold.woff2", weight: "700" },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = localFont({
  src: [
    { path: "../../public/fonts/JetBrainsMono-Variable.woff2" },
    { path: "../../public/fonts/JetBrainsMono-Regular.woff2", weight: "400" },
    { path: "../../public/fonts/JetBrainsMono-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/JetBrainsMono-Bold.woff2", weight: "700" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Green Africa Agri Solutions | Climate-Smart Agriculture in Kenya",
    template: "%s | Green Africa Agri Solutions",
  },
  description: "Nairobi-based supplier of climate-smart agricultural products and services: seedlings, irrigation, greenhouses, solar dryers, and farmer training across Kenya.",
  keywords: [
    "agriculture",
    "kenya",
    "seedlings",
    "irrigation",
    "greenhouse",
    "solar dryer",
    "climate-smart",
    "farming",
    "nairobi",
  ],
  authors: [{ name: "Green Africa Agri Solutions" }],
  creator: "Green Africa Agri Solutions",
  publisher: "Green Africa Agri Solutions",
  formatDetection: { telephone: false },
  metadataBase: new URL("https://greenafrica.co.ke"),
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://greenafrica.co.ke",
    siteName: "Green Africa Agri Solutions",
    title: "Green Africa Agri Solutions | Climate-Smart Agriculture in Kenya",
    description: "Nairobi-based supplier of climate-smart agricultural products and services to farmers, schools, NGOs, and county governments across Kenya.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Green Africa Agri Solutions - Climate-Smart Agriculture in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Africa Agri Solutions",
    description: "Climate-smart agricultural products and services in Kenya.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F0E6" },
    { media: "(prefers-color-scheme: dark)", color: "#1F3A2E" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${funnelDisplay.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}