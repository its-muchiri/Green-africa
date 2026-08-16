import type { Project } from "@/types";

const projectImages = [
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM.jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.05 AM.jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (1).jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (2).jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (3).jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (4).jpeg",
];

export const projects: Project[] = [
  {
    slug: "kajiado-school-kitchen-gardens",
    title: "Kajiado County School Kitchen Garden Cluster",
    location: "Kajiado County (8 schools)",
    category: "Kitchen Garden Design",
    description: "Designed and installed 8 school kitchen gardens (0.1–0.3 ha each) aligned with feeding programme calendars. Integrated raised beds, vertical towers, drip irrigation, rainwater harvesting (10,000 L tanks), and compost zones. Crops: amaranth, nightshade, spinach, kale, carrots, beetroot — harvested term-time. World Vision funded; 12-month maintenance contract with quarterly replanting.",
    images: [projectImages[0], projectImages[1], projectImages[2]],
    completedAt: "2024-11-15",
    clientType: "school",
    services: ["kitchen-garden-design", "drip-irrigation", "vertical-gardens", "water-storage", "compost-supply", "seedlings"],
  },
  {
    slug: "kijabe-hospital-garden",
    title: "Kijabe Mission Hospital Kitchen Garden",
    location: "Kijabe, Kiambu County",
    category: "Kitchen Garden Design",
    description: "0.5 ha productive garden supplying the hospital kitchen with nutrient-dense vegetables year-round. Designed with raised beds, herb spiral, vertical towers for strawberries, drip irrigation zoned by crop water need, 20,000 L rainwater storage, and bokashi composting for kitchen waste. Grey-water from laundry integrated via subsurface irrigation. Feeds 300+ patients daily.",
    images: [projectImages[1], projectImages[2]],
    completedAt: "2024-09-30",
    clientType: "hospital",
    services: ["kitchen-garden-design", "drip-irrigation", "vertical-gardens", "water-storage", "compost-supply", "seedlings"],
  },
  {
    slug: "laikipia-farm-pond",
    title: "Laikipia Farm Pond & Drip System",
    location: "Laikipia County",
    category: "Water Storage & Irrigation",
    description: "1,500 m³ HDPE-lined farm pond (1 mm geomembrane, fusion-welded seams) with 5 kW Lorentz solar pump, 10,000 L header tank, and 12-acre drip irrigation for avocado and macadamia. Includes fertigation unit, sand media filter, and GSM monitoring. Farm previously relied on unreliable river abstraction — now water-secure through dry seasons.",
    images: [projectImages[2], projectImages[3]],
    completedAt: "2024-08-20",
    clientType: "farmer",
    services: ["dam-liners", "solar-pumps", "drip-irrigation", "water-storage"],
  },
  {
    slug: "muranga-ram-pumps",
    title: "Murang'a Hydraulic Ram Pump Installations",
    location: "Murang'a County (5 sites)",
    category: "Water Pumps",
    description: "Installed 5 hydraulic ram pumps for smallholder groups using perennial streams with 1.5–2.5 m drive head. Each unit lifts 1.5–3 m³/hr to 50–80 m delivery head — zero electricity, zero fuel. Supplies domestic water and drip irrigation for 2–3 acre vegetable plots per group. Community-managed with training on valve adjustment and drive pipe maintenance.",
    images: [projectImages[3], projectImages[4]],
    completedAt: "2024-07-15",
    clientType: "farmer",
    services: ["solar-pumps", "drip-irrigation", "farmer-training"],
  },
  {
    slug: "kiambu-greenhouse-cluster",
    title: "Kiambu Greenhouse Tomato Cluster",
    location: "Kiambu County (12 tunnels)",
    category: "Greenhouse Construction",
    description: "12 wooden-frame greenhouses (8×24 m) for tomato (Anna F1) production by a youth cooperative. Complete kits: treated eucalyptus frames, 200-micron UV polythene, 40-mesh insect netting, drip irrigation, venturi fertigation. 3-cycle/year calendar with 2-week turnaround. Cooperative aggregates produce for Nairobi wholesale. 2,300+ kg/tunnel/cycle average.",
    images: [projectImages[4], projectImages[5]],
    completedAt: "2024-06-10",
    clientType: "farmer",
    services: ["greenhouse-construction", "drip-irrigation", "seedlings", "farmer-training"],
  },
  {
    slug: "machakos-shade-net-nursery",
    title: "Machakos Commercial Seedling Nursery",
    location: "Machakos County",
    category: "Structures",
    description: "2,000 m² shade net structure (50% green, 75% black zones) for grafted fruit tree nursery — avocado (Hass, Fuerte), mango (Apple, Kent), macadamia. Galvanized steel frame, cable-tensioned, automated misting propagation beds, hardening zone. Capacity: 50,000 seedlings/year. KEPHIS certified. Supplies county agroforestry programme and private farms.",
    images: [projectImages[5], projectImages[0]],
    completedAt: "2024-05-25",
    clientType: "farmer",
    services: ["shade-nets", "seedlings", "drip-irrigation", "soil-testing"],
  },
  {
    slug: "nairobi-vertical-farm",
    title: "Karen Household Vertical Farm",
    location: "Karen, Nairobi",
    category: "Vertical Gardens",
    description: "6-tower vertical garden system (288 plants total) on 6 m² patio — leafy greens, herbs, strawberries, cherry tomatoes. Automated drip with nutrient dosing, coconut coir media. Household of 4 achieves 80% vegetable self-sufficiency. Water use: 40 L/week vs. ~200 L for equivalent soil beds. Includes 12-month agronomy WhatsApp support.",
    images: [projectImages[0], projectImages[1]],
    completedAt: "2024-04-18",
    clientType: "household",
    services: ["vertical-gardens", "drip-irrigation", "seedlings", "kitchen-garden-design"],
  },
  {
    slug: "makueni-water-pans",
    title: "Makueni County Water Pan Programme",
    location: "Makueni County (15 pans)",
    category: "Water Storage",
    description: "15 HDPE-lined water pans (500–2,000 m³ each) for county climate adaptation programme. 1 mm virgin HDPE, geotextile underlay, fusion-welded seams tested to 300 kPa. Each pan includes solar pump, cattle trough, and community draw-off point. Serves 3,000+ households and 15,000 livestock. County-funded; we handled design, supply, installation, and handover training.",
    images: [projectImages[1], projectImages[2]],
    completedAt: "2024-03-10",
    clientType: "county",
    services: ["dam-liners", "solar-pumps", "water-storage", "farmer-training"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectsByClientType(clientType: Project["clientType"]): Project[] {
  return projects.filter((p) => p.clientType === clientType);
}