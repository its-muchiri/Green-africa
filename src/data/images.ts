export const imageMap = {
  hero: {
    main: "/images/WhatsApp Image 2026-06-22 at 5.38.53 PM.jpeg",
    fallback: "/images/WhatsApp Image 2026-06-22 at 5.38.54 PM.jpeg",
  },
  seedlings: [
    "/images/WhatsApp Image 2026-06-22 at 3.57.27 PM.jpeg",
    "/images/WhatsApp Image 2026-06-22 at 3.57.28 PM.jpeg",
    "/images/WhatsApp Image 2026-06-22 at 3.57.29 PM.jpeg",
    "/images/WhatsApp Image 2026-06-22 at 3.57.30 PM.jpeg",
    "/images/WhatsApp Image 2026-06-22 at 3.57.43 PM.jpeg",
    "/images/WhatsApp Image 2026-06-22 at 3.57.44 PM.jpeg",
    "/images/WhatsApp Image 2026-06-22 at 3.57.45 PM.jpeg",
  ],
  irrigation: [
    "/images/WhatsApp Image 2026-06-22 at 5.38.53 PM.jpeg",
    "/images/WhatsApp Image 2026-06-22 at 5.38.54 PM.jpeg",
  ],
  structures: [
    "/images/WhatsApp Image 2026-06-22 at 5.42.44 PM.jpeg",
    "/images/WhatsApp Image 2026-06-22 at 5.42.45 PM.jpeg",
    "/images/WhatsApp Image 2026-06-22 at 5.42.46 PM.jpeg",
  ],
  projects: [
    "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM.jpeg",
    "/images/WhatsApp Image 2026-06-23 at 10.57.05 AM.jpeg",
    "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (1).jpeg",
    "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (2).jpeg",
  ],
  team: [
    "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (3).jpeg",
    "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (4).jpeg",
  ],
  journal: {
    drip: "/images/WhatsApp Image 2026-06-22 at 5.38.53 PM (1).jpeg",
    soil: "/images/WhatsApp Image 2026-06-22 at 3.57.46 PM.jpeg",
    greenhouse: "/images/WhatsApp Image 2026-06-22 at 5.42.45 PM (1).jpeg",
  },
  logo: "/images/Gaas.jpg",
  ogDefault: "/images/WhatsApp Image 2026-06-22 at 5.38.53 PM.jpeg",
};

export function getImage(category: keyof typeof imageMap, index = 0): string {
  const images = imageMap[category];
  if (Array.isArray(images)) {
    return images[index % images.length];
  }
  return images as string;
}