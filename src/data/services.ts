import type { Service, ServiceCategory, ServiceSpec } from "@/types";

export const serviceCategories: { value: ServiceCategory; label: string; description: string }[] = [
  { value: "seedlings", label: "Tree & Fruit Seedlings", description: "Indigenous hardwoods, grafted fruit trees, and agroforestry species" },
  { value: "irrigation", label: "Irrigation Systems", description: "Drip irrigation, solar-powered pumping, and water-efficient delivery" },
  { value: "structures", label: "Growing Structures", description: "Greenhouses, shade nets, vertical gardens, and protected cultivation" },
  { value: "water-storage", label: "Water Storage & Liners", description: "Dam liners, farm ponds, rainwater harvesting tanks" },
  { value: "soil-health", label: "Soil Health & Inputs", description: "Soil testing, compost, vermicompost, organic fertilizer supply" },
  { value: "training", label: "Farmer Training", description: "On-site workshops, school programs, county extension partnerships" },
  { value: "design", label: "Landscape & Garden Design", description: "Kitchen gardens, institutional landscaping, edible landscapes" },
];

const seedlingImages = [
  "/images/WhatsApp Image 2026-06-22 at 3.57.27 PM.jpeg",
  "/images/WhatsApp Image 2026-06-22 at 3.57.28 PM.jpeg",
  "/images/WhatsApp Image 2026-06-22 at 3.57.29 PM.jpeg",
  "/images/WhatsApp Image 2026-06-22 at 3.57.30 PM.jpeg",
  "/images/WhatsApp Image 2026-06-22 at 3.57.43 PM.jpeg",
  "/images/WhatsApp Image 2026-06-22 at 3.57.44 PM.jpeg",
  "/images/WhatsApp Image 2026-06-22 at 3.57.45 PM.jpeg",
];

const irrigationImages = [
  "/images/WhatsApp Image 2026-06-22 at 5.38.53 PM.jpeg",
  "/images/WhatsApp Image 2026-06-22 at 5.38.54 PM.jpeg",
];

const structureImages = [
  "/images/WhatsApp Image 2026-06-22 at 5.42.44 PM.jpeg",
  "/images/WhatsApp Image 2026-06-22 at 5.42.45 PM.jpeg",
  "/images/WhatsApp Image 2026-06-22 at 5.42.46 PM.jpeg",
];

const projectImages = [
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM.jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.05 AM.jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (1).jpeg",
  "/images/WhatsApp Image 2026-06-23 at 10.57.04 AM (2).jpeg",
];

export const services: Service[] = [
  {
    slug: "tree-fruit-seedlings",
    title: "Tree & Fruit Seedlings",
    shortDescription: "Indigenous hardwoods and grafted fruit trees for agroforestry, orchards, and reforestation across Kenya.",
    fullDescription: "We supply over 40 species of tree and fruit seedlings raised in our Nairobi nursery under controlled conditions. Our grafted fruit trees — mango (Apple, Kent, Tommy Atkins), avocado (Hass, Fuerte), macadamia, citrus, and passion fruit — are sourced from certified mother blocks and hardened for transplant survival rates above 90%. Indigenous hardwoods including Mukau, Muveshi, and Acacia species support the Kenya Forest Service's 15-billion-tree campaign. Seedlings are delivered in biodegradable pots to farms, schools, and county projects in Nairobi, Kiambu, Machakos, Kajiado, and the wider Rift Valley.",
    category: "seedlings",
    image: seedlingImages[0],
    specs: [
      { label: "Species Available", value: "40+", unit: "varieties" },
      { label: "Graft Success Rate", value: "90%+", unit: "" },
      { label: "Delivery Radius", value: "200", unit: "km from Nairobi" },
      { label: "Minimum Order", value: "50", unit: "seedlings" },
      { label: "Certification", value: "KEPHIS", unit: "inspected" },
    ],
    features: [
      "KEPHIS-inspected and certified disease-free",
      "Biodegradable pots reduce transplant shock",
      "Hardened for Kenyan agro-ecological zones",
      "Volume discounts for schools and county projects",
      "Technical advisory on spacing and establishment",
    ],
    relatedServices: ["soil-testing", "farmer-training", "drip-irrigation"],
  },
  {
    slug: "solar-dryers",
    title: "Solar Dryers",
    shortDescription: "Hybrid solar dryers for maize, herbs, vegetables, and fruit — reducing post-harvest losses by up to 40%.",
    fullDescription: "Our tunnel and cabinet solar dryers use forced-air convection with optional biomass backup for continuous drying through cloudy periods. Designed for Kenyan smallholders and cooperatives, units process 200–2,000 kg per batch depending on model. Maize moisture drops from 18% to 13% in 6–8 hours; herbs and leafy vegetables retain color and nutrients at 45–55°C. Frames are galvanized steel with UV-stabilized polycarbonate glazing (10-year warranty). We install, train operators, and link dryer groups to off-takers for dried mango, moringa, and indigenous vegetables.",
    category: "irrigation",
    image: irrigationImages[0],
    specs: [
      { label: "Capacity", value: "200–2,000", unit: "kg/batch" },
      { label: "Drying Time (Maize)", value: "6–8", unit: "hours" },
      { label: "Temperature Range", value: "45–65", unit: "°C" },
      { label: "Glazing Warranty", value: "10", unit: "years" },
      { label: "Power", value: "Solar + optional biomass", unit: "" },
    ],
    features: [
      "Forced-air convection for even drying",
      "Biomass backup for rainy-season operation",
      "Modular design — expandable by 200 kg increments",
      "Local fabrication — spare parts available in Nairobi",
      "Post-harvest loss reduction: 30–40% documented",
    ],
    relatedServices: ["farmer-training", "vertical-gardens"],
  },
  {
    slug: "vertical-gardens",
    title: "Vertical Gardens",
    shortDescription: "Space-efficient vertical growing systems for urban farmers, schools, and households — up to 6× yield per square metre.",
    fullDescription: "Our tower and wall-mounted vertical gardens use coconut-coir media with automated drip irrigation, enabling year-round production of leafy greens, herbs, strawberries, and tomatoes in 1 m² footprints. Systems range from 48-plant household towers to 500-plant commercial walls. Ideal for Nairobi estates, school feeding programmes, and hospital kitchen gardens. We supply the structure, media, seedlings, nutrient solution, and a 12-month agronomy support package. Water use is 80% lower than open-field irrigation.",
    category: "structures",
    image: structureImages[0],
    specs: [
      { label: "Plant Density", value: "48–500", unit: "plants/m²" },
      { label: "Water Savings", value: "80%", unit: "vs open field" },
      { label: "Footprint", value: "1", unit: "m² per tower" },
      { label: "Media", value: "Coconut coir", unit: "" },
      { label: "Irrigation", value: "Automated drip", unit: "" },
    ],
    features: [
      "Up to 6× yield per square metre vs. soil beds",
      "Automated nutrient dosing — no daily labour",
      "Modular — stacks vertically for commercial scale",
      "Includes 12-month agronomy WhatsApp support",
      "Suitable for rooftops, balconies, and compounds",
    ],
    relatedServices: ["drip-irrigation", "kitchen-garden-design", "farmer-training"],
  },
  {
    slug: "drip-irrigation",
    title: "Drip & Solar Irrigation",
    shortDescription: "Precision drip kits and solar-powered pumping for 0.25–50 acre plots — cut water use by 60% and double yields.",
    fullDescription: "We design and install pressure-compensating drip systems with inline filters, fertigation venturis, and solar pump packages (Lorentz, Grundfos, and Dayliff). Systems are zoned by crop water requirement and topography. Typical 1-acre vegetable kit: 16 mm laterals at 30 cm spacing, 2.5 L/hr emitters, 1.5 kW solar array, 5,000 L header tank. We handle survey, hydraulic design, installation, and operator training. Maintenance contracts include monthly flushing, emitter replacement, and pump servicing.",
    category: "irrigation",
    image: irrigationImages[1],
    specs: [
      { label: "Plot Size", value: "0.25–50", unit: "acres" },
      { label: "Water Savings", value: "60%", unit: "vs flood irrigation" },
      { label: "Yield Increase", value: "1.5–2×", unit: "typical" },
      { label: "Emitter Flow", value: "2.5", unit: "L/hr" },
      { label: "Pump Power", value: "0.75–15", unit: "kW solar" },
    ],
    features: [
      "Pressure-compensating emitters on slopes",
      "Solar pump — zero fuel cost, 25-year panel life",
      "Fertigation-ready with bypass venturi",
      "Zoned by crop and topography",
      "Monthly maintenance contracts available",
    ],
    relatedServices: ["solar-pumps", "water-storage", "soil-testing", "farmer-training"],
  },
  {
    slug: "solar-pumps",
    title: "Water Pumps (Solar & Hydraulic Ram)",
    shortDescription: "Solar submersible and surface pumps plus zero-energy hydraulic ram pumps for off-grid water lifting up to 200 m head.",
    fullDescription: "We supply and install Lorentz PS2/PSk2 solar submersibles (up to 200 m head, 50 m³/hr), Dayliff solar surface pumps, and hydraulic ram pumps that use falling water energy to lift 10–20% of flow to 5× the supply head — zero electricity, zero fuel. Ram pumps suit springs and streams with 1–3 m drive head; we've installed 40+ units in Murang'a, Nyeri, and Meru. Solar packages include panels, controller, lightning protection, and remote monitoring via GSM. All pumps carry 2-year warranty with Nairobi-based spares.",
    category: "irrigation",
    image: projectImages[0],
    specs: [
      { label: "Solar Submersible Head", value: "Up to 200", unit: "m" },
      { label: "Solar Submersible Flow", value: "Up to 50", unit: "m³/hr" },
      { label: "Ram Pump Lift Ratio", value: "1:5", unit: "drive head:delivery head" },
      { label: "Ram Pump Flow", value: "0.5–5", unit: "m³/hr" },
      { label: "Warranty", value: "2", unit: "years" },
    ],
    features: [
      "Lorentz and Dayliff — German/UK engineering",
      "Hydraulic ram: zero energy cost, 20+ year life",
      "GSM remote monitoring on solar packages",
      "Lightning protection included",
      "Nairobi spares stock — 48-hr replacement",
    ],
    relatedServices: ["drip-irrigation", "water-storage", "dam-liners"],
  },
  {
    slug: "shade-nets",
    title: "Shade Nets (50–95% Coverage)",
    shortDescription: "Knitted HDPE shade nets for nurseries, vegetable production, and livestock — UV-stabilized, 5-year lifespan.",
    fullDescription: "We stock 50%, 70%, 75%, 80%, and 90% shade factor nets in green, black, and white. Standard widths 4 m and 6 m; custom lengths to 100 m rolls. Nets are 180–320 GSM knitted HDPE with UV stabilizer (5-year degradation warranty). Used for seedling hardening, tomato/pepper production under 30–50% shade, dairy cow shade structures (75%), and poultry houses. We supply net only or full structure: galvanized steel frame, cable tensioning, and entry tunnels. Installation teams cover Nairobi, Central, Rift Valley, and Eastern regions.",
    category: "structures",
    image: structureImages[1],
    specs: [
      { label: "Shade Factor", value: "50–95%", unit: "options" },
      { label: "Material", value: "180–320 GSM", unit: "knitted HDPE" },
      { label: "UV Warranty", value: "5", unit: "years" },
      { label: "Widths", value: "4, 6", unit: "m standard" },
      { label: "Colors", value: "Green, Black, White", unit: "" },
    ],
    features: [
      "Knitted — won't unravel if cut",
      "UV-stabilized for equatorial exposure",
      "Custom lengths — no waste",
      "Full structure kits with galvanized frames",
      "Installation across Central, Rift Valley, Eastern",
    ],
    relatedServices: ["greenhouse-construction", "vertical-gardens", "seedlings"],
  },
  {
    slug: "dam-liners",
    title: "Dam Liners & Water Storage",
    shortDescription: "HDPE geomembrane liners (0.5–2 mm) for farm ponds, water pans, and tanks — 20-year buried lifespan.",
    fullDescription: "We supply and install virgin HDPE geomembranes (0.5 mm, 0.75 mm, 1 mm, 1.5 mm, 2 mm) for farm ponds, water pans, and lined earth tanks. Seams are dual-track fusion welded (tested to 300 kPa) — no glues, no leaks. Typical 1,000 m³ pan: 1 mm liner, geotextile underlay, anchor trench, HDPE inlet/outlet fittings. We also supply modular bolted steel tanks (10–500 m³) and collapsible PVC pillow tanks for rapid deployment. Projects include school water pans in Kajiado, county water pans in Makueni, and farm ponds in Laikipia.",
    category: "water-storage",
    image: projectImages[1],
    specs: [
      { label: "Thickness Range", value: "0.5–2", unit: "mm HDPE" },
      { label: "Seam Method", value: "Dual-track fusion weld", unit: "" },
      { label: "Seam Test Pressure", value: "300", unit: "kPa" },
      { label: "Buried Lifespan", value: "20+", unit: "years" },
      { label: "Tank Sizes", value: "10–500", unit: "m³ modular steel" },
    ],
    features: [
      "Virgin HDPE — no recycled content",
      "Fusion-welded seams, pressure-tested",
      "Geotextile underlay included",
      "Modular steel tanks — bolted, no welding on site",
      "County and NGO project references available",
    ],
    relatedServices: ["solar-pumps", "drip-irrigation", "greenhouse-construction"],
  },
  {
    slug: "greenhouse-construction",
    title: "Greenhouse Construction",
    shortDescription: "Wooden and steel-frame greenhouse kits (8×15 m to 16×30 m) with drip irrigation, ventilation, and installation service.",
    fullDescription: "We build tunnel and multi-span greenhouses for tomato, capsicum, cucumber, and herb production. Wooden frames: treated eucalyptus poles (15-year ground contact) for 8×15 m, 8×24 m, 8×30 m — lowest CAPEX for smallholders. Steel frames: galvanized 32–48 mm tube, multi-span up to 16×30 m, wind-rated to 120 km/hr. All kits include UV-stabilized 200-micron polythene (3-year), insect netting on vents, drip irrigation, and fertiliser dosing. We handle site prep, erection, and crop establishment support. 200+ greenhouses installed across Kiambu, Murang'a, Kajiado, Nakuru, and Meru.",
    category: "structures",
    image: structureImages[2],
    specs: [
      { label: "Wooden Frame Sizes", value: "8×15, 8×24, 8×30", unit: "m" },
      { label: "Steel Frame Sizes", value: "Up to 16×30", unit: "m multi-span" },
      { label: "Wind Rating (Steel)", value: "120", unit: "km/hr" },
      { label: "Polythene", value: "200 micron", unit: "UV-stabilized, 3-year" },
      { label: "Wood Treatment", value: "CCA", unit: "15-year ground contact" },
    ],
    features: [
      "Wooden: lowest CAPEX for <1 acre",
      "Steel: multi-span, 120 km/hr wind rating",
      "Complete kits — polythene, netting, drip, dosing",
      "Crop establishment support included",
      "200+ installed in Central, Rift Valley, Eastern",
    ],
    relatedServices: ["drip-irrigation", "shade-nets", "soil-testing", "farmer-training"],
  },
  {
    slug: "soil-testing",
    title: "Soil Testing & Consultancy",
    shortDescription: "On-farm soil analysis (pH, NPK, EC, micronutrients) with crop-specific lime and fertiliser recommendations.",
    fullDescription: "Our agronomists collect geo-referenced samples (1 per hectare minimum) and process through partner labs (CropNuts, Kenya Agricultural Research). Results returned in 7 days with a plain-language report: pH, EC, organic carbon, N, P, K, Ca, Mg, S, Zn, B, Cu, Fe, Mn — plus lime requirement (tonnes/ha) and blended fertiliser prescription for your target crop and yield. We interpret for maize, beans, potato, tomato, avocado, macadamia, and pasture. Follow-up includes top-dressing schedules and soil health monitoring plans. 500+ farms tested in 2023–24.",
    category: "soil-health",
    image: seedlingImages[1],
    specs: [
      { label: "Parameters Tested", value: "14+", unit: "macros + micros" },
      { label: "Turnaround", value: "7", unit: "days" },
      { label: "Sampling Density", value: "1", unit: "sample/ha minimum" },
      { label: "Lab Partners", value: "CropNuts, KALRO", unit: "" },
      { label: "Farms Served (2023–24)", value: "500+", unit: "" },
    ],
    features: [
      "Geo-referenced sampling — track changes over time",
      "Plain-language reports, not lab jargon",
      "Crop-specific lime & fertiliser prescriptions",
      "Top-dressing schedules included",
      "Monitoring plans for long-term soil health",
    ],
    relatedServices: ["compost-supply", "drip-irrigation", "greenhouse-construction", "seedlings"],
  },
  {
    slug: "compost-supply",
    title: "Composting & Organic Fertilizer Supply",
    shortDescription: "Bokashi, vermicompost, and blended organic fertilizers — produced in Nairobi, delivered nationwide.",
    fullDescription: "We operate a 15-tonne/month composting facility in Ruiru producing: (1) Bokashi bran (EM-1 inoculated) for rapid kitchen-waste fermentation — 2 weeks to soil-ready; (2) Vermicompost (Eisenia fetida) — 2.5% N, 1.8% P, 2.2% K, humic acids 12%, teeming with beneficial microbes; (3) Blended organic pellet (chicken manure + crop residue + rock phosphate) — 4-3-3 NPK, slow-release. All certified by Kenya Bureau of Standards. Sold in 25 kg and 50 kg bags; bulk loose by the tonne for commercial farms. Delivery within 48 hrs in Nairobi metro; 5 days upcountry.",
    category: "soil-health",
    image: seedlingImages[2],
    specs: [
      { label: "Production Capacity", value: "15", unit: "tonnes/month" },
      { label: "Vermicompost NPK", value: "2.5-1.8-2.2", unit: "%" },
      { label: "Bokashi Fermentation", value: "14", unit: "days" },
      { label: "Organic Pellet NPK", value: "4-3-3", unit: "%" },
      { label: "Certification", value: "KEBS", unit: "certified" },
    ],
    features: [
      "Three product lines for different needs",
      "KEBS certified — consistent quality",
      "Bokashi: fastest kitchen-waste cycle",
      "Vermicompost: microbial diversity + humics",
      "Bulk pricing for cooperatives and counties",
    ],
    relatedServices: ["soil-testing", "farmer-training", "seedlings", "kitchen-garden-design"],
  },
  {
    slug: "farmer-training",
    title: "Farmer Training & Workshops",
    shortDescription: "Paid and sponsored on-site training for farmer groups, schools, cooperatives, and county extension programmes.",
    fullDescription: "We deliver practical, field-based modules: (1) Climate-smart vegetable production (3 days) — nursery, transplant, IPM, harvest handling; (2) Drip irrigation design & maintenance (2 days) — layout, hydraulics, fertigation, troubleshooting; (3) Greenhouse tomato/capsicum (4 days) — trellising, pruning, pollination, disease scouting; (4) Soil health & composting (2 days) — sampling, interpretation, bokashi/vermiculture; (5) Post-harvest & solar drying (2 days) — grading, drying, packaging, market access. Trainers are practicing agronomists. We've trained 2,300+ farmers for Kiambu County, FAO, World Vision, and 40+ schools since 2021. Certificates issued; WhatsApp follow-up groups for 6 months.",
    category: "training",
    image: projectImages[2],
    specs: [
      { label: "Modules Offered", value: "5", unit: "core courses" },
      { label: "Duration", value: "2–4", unit: "days per module" },
      { label: "Farmers Trained (2021–24)", value: "2,300+", unit: "" },
      { label: "Partners", value: "Kiambu County, FAO, World Vision", unit: "" },
      { label: "Follow-up", value: "6", unit: "months WhatsApp support" },
    ],
    features: [
      "Field-based — not classroom theory",
      "Practicing agronomists as trainers",
      "County/NGO/school group rates",
      "Certificates + 6-month WhatsApp support",
      "Custom modules on request",
    ],
    relatedServices: ["greenhouse-construction", "drip-irrigation", "soil-testing", "compost-supply", "seedlings"],
  },
  {
    slug: "kitchen-garden-design",
    title: "Landscaping & Kitchen Garden Design",
    shortDescription: "Edible landscapes for households, schools, hospitals, and institutions — design, install, and 12-month maintenance.",
    fullDescription: "We design productive, aesthetic kitchen gardens integrating raised beds, vertical towers, herb spirals, compost zones, and rainwater capture. For schools and hospitals, we align with feeding programme calendars — nutrient-dense crops (amaranth, nightshade, spinach, kale, carrots, beetroot) harvested term-time. Household designs include grey-water integration and pollinator borders. Service includes site survey, 3D concept, installation (beds, irrigation, seedlings), and optional 12-month maintenance with quarterly replanting. Recent projects: 8-school kitchen garden cluster in Kajiado County (World Vision), 0.5 ha hospital garden at Kijabe Mission Hospital, 30+ household gardens in Karen, Lavington, Runda.",
    category: "design",
    image: projectImages[3],
    specs: [
      { label: "Project Types", value: "Household, School, Hospital", unit: "" },
      { label: "Maintenance Option", value: "12-month", unit: "quarterly replanting" },
      { label: "School Cluster (Kajiado)", value: "8", unit: "schools" },
      { label: "Hospital Garden (Kijabe)", value: "0.5", unit: "ha" },
      { label: "Household Gardens", value: "30+", unit: "Nairobi estates" },
    ],
    features: [
      "Edible + aesthetic — not utility-only",
      "Aligned to school/hospital feeding calendars",
      "Grey-water and rainwater integration",
      "Quarterly replanting on maintenance plans",
      "Pollinator borders built in",
    ],
    relatedServices: ["vertical-gardens", "drip-irrigation", "compost-supply", "seedlings", "water-storage"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getRelatedServices(slug: string, limit = 3): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedServices
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is Service => s !== undefined)
    .slice(0, limit);
}