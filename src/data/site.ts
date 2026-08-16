import type { TeamMember } from "@/types";

const teamImages = [
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM.jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (1).jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (2).jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (3).jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (4).jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.05 AM.jpeg",
];

export const team: TeamMember[] = [
  { name: "James Mwangi", role: "Founder & Managing Director", bio: "James founded Green Africa Agri Solutions in 2018 after 12 years in agricultural supply chains at Twiga Foods and Amiran Kenya. He holds a BSc Agriculture (University of Nairobi) and an MBA (Strathmore Business School). He leads strategy, partnerships, and the company's county/NGO programme work.", image: teamImages[0] },
  { name: "Dr. Wanjiku Mwangi", role: "Lead Agronomist", bio: "PhD Soil Science (University of Nairobi), 15 years' experience in soil fertility, fertiliser formulation, and climate-smart agriculture with KALRO and CIMMYT. She heads the soil testing lab partnership, designs fertiliser prescriptions, and leads the farmer training curriculum.", image: teamImages[1] },
  { name: "Peter Kamau", role: "Greenhouse & Structures Specialist", bio: "Diploma in Horticulture (JKUAT), certified greenhouse technician (Israel MASHAV programme). 10 years designing and building tunnels, multi-span greenhouses, and shade structures across East Africa. Oversees all structural installations and crop establishment support.", image: teamImages[2] },
  { name: "Grace Otieno", role: "Irrigation & Water Systems Engineer", bio: "BSc Water & Environmental Engineering (Egerton University), certified solar pump technician (Lorentz Academy). Designs drip, sprinkler, and solar pumping systems for 0.25–50 acre farms. Manages hydraulic design, pump sizing, and GSM monitoring integration.", image: teamImages[3] },
  { name: "David Ochieng", role: "Operations & Logistics Manager", bio: "Former supply chain lead at Kenya Seed Company. Coordinates nursery production, seedling dispatch, input delivery, and installation scheduling across Nairobi, Central, Rift Valley, and Eastern regions. Ensures 90%+ on-time delivery for perishable seedlings.", image: teamImages[4] },
  { name: "Mary Wambui", role: "Training & Extension Coordinator", bio: "MSc Agricultural Extension (University of Nairobi). Designs and delivers field-based training modules for farmer groups, schools, and county programmes. Has trained 2,300+ farmers since 2021. Manages WhatsApp follow-up groups and impact monitoring.", image: teamImages[5] },
];

export const companyTimeline = [
  { year: "2018", title: "Founded", description: "Green Africa Agri Solutions registered in Nairobi. Started with seedling nursery in Ruiru and 3 staff." },
  { year: "2019", title: "First Greenhouse Install", description: "Completed first 8×24 m wooden-frame greenhouse for tomato farmer in Kiambu. Added drip irrigation to service offering." },
  { year: "2020", title: "Solar Pump Partnership", description: "Became authorized Lorentz and Dayliff dealer. Installed first 10 solar pumping systems in Kajiado and Machakos." },
  { year: "2021", title: "Training Programme Launch", description: "Developed 5-module farmer training curriculum. First county contract: Kiambu County youth agribusiness programme (200 farmers)." },
  { year: "2022", title: "Dam Liner & Water Storage Division", description: "Added HDPE geomembrane supply and fusion welding. Completed Makueni County water pan programme (15 pans)." },
  { year: "2023", title: "Soil Testing & Compost Facility", description: "Partnered with CropNuts for lab analysis. Commissioned 15-tonne/month composting facility in Ruiru (bokashi, vermicompost, organic pellets)." },
  { year: "2024", title: "Institutional Kitchen Gardens", description: "Kajiado school cluster (8 schools, World Vision) and Kijabe Mission Hospital garden (0.5 ha). Vertical garden product line launched." },
];

export const siteConfig = {
  name: "Green Africa Agri Solutions",
  tagline: "Climate-Smart Agriculture for Kenya",
  description: "Nairobi-based supplier of climate-smart agricultural products and services: seedlings, irrigation, greenhouses, solar dryers, water storage, soil testing, compost, farmer training, and kitchen garden design.",
  address: { street: "Mpaka House, 2nd Floor, Westlands Road", city: "Nairobi", country: "Kenya", postalCode: "00100" },
  phone: "+254 791 365 105",
  email: "info@greenafrica.co.ke",
  whatsapp: "254791365105",
  hours: { weekdays: "8:00 AM – 5:00 PM", saturday: "9:00 AM – 1:00 PM", sunday: "Closed" },
  social: { facebook: "https://facebook.com/greenafricaagri", twitter: "https://twitter.com/greenafrica_ke", instagram: "https://instagram.com/greenafricaagri", linkedin: "https://linkedin.com/company/green-africa-agri-solutions", youtube: "https://youtube.com/@greenafricaagri" },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.81!3d-1.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f163d8e8e8e8e%3A0x123456789abcdef!2sMpaka%20House%2C%20Westlands%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890",
  ogImage: "/images/WhatsApp Image 2026-06-22 at 5.38.53 PM.jpeg",
};