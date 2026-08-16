import type { JournalPost } from "@/types";

export const journalPosts: JournalPost[] = [
  {
    slug: "drip-irrigation-design-guide-kenya",
    title: "Designing Drip Irrigation for Kenyan Smallholders: A Practical Guide",
    excerpt: "From water source to emitter — how to size mains, zone by crop, and choose the right solar pump for your acreage.",
    content: `
## Why Drip Irrigation Matters in Kenya

Rain-fed agriculture is increasingly unreliable. The long rains (March–May) and short rains (October–December) no longer follow historical patterns. Farmers who invest in controlled water delivery gain two critical advantages: **crop certainty** and **input efficiency** — fertiliser goes where roots are, not where water runs.

This guide walks through the design decisions we make on every farm we equip, from a 0.25-acre kitchen garden in Karen to a 20-acre tomato block in Kajiado.

---

## 1. Know Your Water Source

Before buying a single metre of pipe, answer these three questions:

| Source | Typical Flow | Typical Head | Treatment Needed |
|--------|--------------|--------------|------------------|
| Borehole (submersible) | 3–20 m³/hr | 60–150 m | Sand separator, screen filter |
| River/stream (surface pump) | 5–50 m³/hr | 5–20 m | Sand separator, media filter, chlorination |
| Municipal/County line | 1–5 m³/hr | 10–30 m | Screen filter only |
| Roof catchment (gravity) | 0.5–2 m³/hr | 2–5 m | First-flush diverter, screen filter |

**Rule of thumb:** Your peak irrigation demand (litres/day) must not exceed 80% of your source's reliable daily yield. Measure in the dry season.

---

## 2. Calculate Crop Water Requirement

Evapotranspiration (ETo) in Kenya ranges from 3.5 mm/day (cool highlands) to 7.5 mm/day (hot lowlands). Multiply by crop coefficient (Kc):

| Crop | Kc (Mid-season) | Peak Daily Need (mm) at 5.5 ETo |
|------|-----------------|----------------------------------|
| Tomato | 1.15 | 6.3 mm |
| Cabbage | 1.05 | 5.8 mm |
| Maize | 1.20 | 6.6 mm |
| Avocado (mature) | 0.85 | 4.7 mm |
| French beans | 1.00 | 5.5 mm |

**Example:** 1 acre tomatoes at 6.3 mm = 25.4 m³/day. With drip efficiency of 90%, you need 28.2 m³/day from source.

---

## 3. Zone by Hydrozone, Not by Field Boundary

Group crops with similar:
- **Rooting depth** (shallow: onions, lettuce; deep: tomato, tree crops)
- **Water sensitivity** (stress-tolerant vs. stress-sensitive)
- **Growth stage** (establishment vs. peak production vs. maturity)

A typical 5-acre mixed vegetable farm might have 4–6 zones:
1. Nursery/seedlings (high frequency, low volume)
2. Leafy greens (shallow, frequent)
3. Fruiting vegetables — tomato, capsicum (deep, less frequent, higher volume)
4. Root crops — carrot, beetroot (moderate)
5. Perennials — avocado, macadamia (deep, infrequent)
6. Fallow/cover crop (minimal)

---

## 4. Size Mains and Sub-mains for Velocity, Not Just Flow

Target **0.6–1.5 m/s** in PVC/HDPE mains. Undersized pipe = friction loss = uneven pressure = uneven crop.

| Flow (m³/hr) | Min. Pipe OD (mm) | Class |
|--------------|-------------------|-------|
| 0–5 | 50 | PN10 |
| 5–12 | 63 | PN10 |
| 12–25 | 75 | PN10 |
| 25–45 | 90 | PN10 |
| 45–75 | 110 | PN10 |

Sub-mains (laterals feeding blocks): 32–50 mm OD. Laterals (drip tape/pipe): 16–22 mm OD.

---

## 5. Choose Emitters for Your Soil and Slope

| Soil Type | Emitter Spacing | Flow Rate |
|-----------|-----------------|-----------|
| Sandy | 20–30 cm | 2.0–2.5 L/hr |
| Loam | 30–40 cm | 1.5–2.0 L/hr |
| Clay | 40–50 cm | 1.0–1.5 L/hr |

**On slopes >5%:** Use pressure-compensating (PC) emitters. Non-PC emitters will over-water the bottom of the row and under-water the top.

---

## 6. Solar Pump Sizing: The Real Math

Don't guess. Use this sequence:

1. **Total Dynamic Head (TDH)** = Static lift + Friction loss (pipe + fittings + filter + valves) + Operating pressure at emitter (typically 1.0–1.5 bar for drip)
2. **Daily Water Volume** = Sum of all zone requirements (m³/day)
3. **Peak Sun Hours (PSH)** for your location (Nairobi: 5.2; Mombasa: 5.8; Eldoret: 4.9; Garissa: 6.2)
4. **Pump Power (kW)** = (TDH × Flow m³/hr) / (367 × Pump Efficiency × Motor Efficiency)

**Example:** 10 m³/hr at 80 m TDH, 70% pump × 90% motor = 3.5 kW hydraulic → 4 kW motor → 5.5 kWp solar array (allowing 30% derating for temp, dust, wiring losses).

---

## 7. Filtration: Don't Skimp

| Water Quality | Filter Type | Mesh/Micron |
|---------------|-------------|-------------|
| Clean borehole | Screen | 120 mesh (130 µm) |
| River, low sediment | Disc | 120 mesh |
| River, high sediment | Media (sand) | 200 µm effective |
| Recycled/pond | Media + Disc | 130 µm |

**Backwash frequency:** Automate. Manual backwash gets forgotten.

---

## 8. Fertigation Integration

Install a **venturi bypass** on the mainline after the filter, before zone valves. Size for 5–10% of main flow. Use only fully soluble fertilisers (no urea unless acidified). Flush lines with clean water for 15 minutes after every fertigation event.

---

## 9. Common Mistakes We See

1. **Oversizing laterals, undersizing mains** — pressure drops at the far end
2. **No air vents** — air pockets block flow, cause hammer
3. **Single zone for whole farm** — over-watering shallow crops, under-watering deep ones
4. **No pressure gauges** — you can't diagnose what you can't measure
5. **Skipping flush valves** — sediment builds up, emitters clog

---

## 10. Maintenance Schedule

| Frequency | Task |
|-----------|------|
| Daily | Check pressure at head and tail of each zone; watch for wet/dry patterns |
| Weekly | Flush lateral ends (open flush valves 2–3 min); clean screen filter |
| Monthly | Backwash media filter; check venturi suction; inspect emitters for clogging |
| Seasonally | Acid flush (phosphoric/nitric) if bicarbonate > 150 ppm; replace worn emitters; recalibrate pressure regulators |

---

## Need a Design for Your Farm?

We survey, design, supply, and install — with 12-month operator support. [Contact us](/contact) with your location, acreage, crops, and water source.
`,
    category: "Irrigation",
    author: "Green Africa Agronomy Team",
    publishedAt: "2025-01-15",
    readTime: "12 min",
    image: "/images/WhatsApp Image 2026-06-22 at 5.38.53 PM (1).jpeg",
    tags: ["drip irrigation", "solar pump", "design guide", "water management", "Kenya farming"],
  },
  {
    slug: "soil-testing-why-when-how-kenya",
    title: "Soil Testing in Kenya: Why, When, and How to Read the Results",
    excerpt: "Most Kenyan farms have never had a proper soil test. Here's what the numbers actually mean for your fertiliser bill and your yields.",
    content: `
## The Blind Spot in Kenyan Agriculture

Ask 100 farmers in Kiambu or Nakuru when they last tested their soil. Maybe 5 will have a report — and 3 of those won't understand it. Yet soil pH, nutrient balance, and organic matter determine whether your DAP and CAN actually feed the crop or just leach away.

This field note explains what we test, what the numbers mean, and how to turn a lab report into a fertiliser plan that saves money and builds soil.

---

## What We Test (And Why)

| Parameter | What It Tells You | Optimal Range (Most Crops) |
|-----------|-------------------|----------------------------|
| **pH (H₂O)** | Nutrient availability, microbial activity | 5.5–6.8 |
| **EC (dS/m)** | Salinity — risk of root burn | < 1.0 (sensitive), < 2.0 (tolerant) |
| **Organic Carbon (%)** | Soil life, water holding, nutrient reserve | > 2.0% |
| **Total N (%)** | Nitrogen supply capacity | > 0.2% |
| **Available P (mg/kg, Olsen)** | Phosphorus accessible to roots | 15–30 mg/kg |
| **Exchangeable K (cmol/kg)** | Potassium for fruit quality, water regulation | 0.3–0.5 cmol/kg |
| **Exchangeable Ca (cmol/kg)** | Cell wall strength, pH buffer | 5–10 cmol/kg |
| **Exchangeable Mg (cmol/kg)** | Chlorophyll, enzyme activation | 1–3 cmol/kg |
| **S, Zn, B, Cu, Fe, Mn** | Micronutrients — yield limiters at low levels | Crop-specific |

---

## pH: The Master Variable

In Central and Rift Valley, we routinely see pH 4.5–5.2. At pH 5.0:
- **Aluminium toxicity** stunts roots
- **Phosphorus** locks up as aluminium phosphate (unavailable)
- **Microbes** that mineralise organic N go dormant
- **Herbicide carryover** persists longer

**Lime requirement** (tonnes/ha of agricultural lime, 80% CaCO₃ equivalent):

| Current pH | Target 6.0 | Target 6.5 |
|------------|------------|------------|
| 4.5 | 4.5 t/ha | 6.5 t/ha |
| 5.0 | 3.0 t/ha | 4.5 t/ha |
| 5.5 | 1.5 t/ha | 2.5 t/ha |

*Apply lime 2–3 months before planting. Incorporate. Split large rates over two seasons.*

---

## The N-P-K Trap

Most smallholders apply **DAP (18-46-0) at planting** and **CAN (27-0-0) at top-dress**. Two problems:

1. **P builds up** — Olsen P > 50 mg/kg is common. Excess P induces Zn and Fe deficiency.
2. **K is ignored** — maize removes 20–25 kg K/tonne grain. No K = poor grain fill, lodging, low starch.

**Better approach:** Use soil test to blend. Example for 5 t/ha maize target on loam (pH 5.8, P=28, K=0.25):

| Nutrient | Crop Removal (kg/ha) | Soil Supply (kg/ha) | Fertiliser Needed (kg/ha) | Source |
|----------|----------------------|---------------------|---------------------------|--------|
| N | 120 | 30 (from OM) | 90 | Urea (195 kg) + CAN (100 kg) split |
| P₂O₅ | 50 | 40 (high Olsen P) | 10 | DAP (22 kg) — starter only |
| K₂O | 100 | 45 (low exch. K) | 55 | MOP (92 kg) at planting |

**Saves ~3,000 KSh/ha vs. blanket DAP+CAN.**

---

## Micronutrients: The Hidden Yield Limiters

| Element | Deficiency Symptoms | Critical Soil Level | Correction |
|---------|---------------------|---------------------|------------|
| **Zinc (Zn)** | Stunted, small leaves, short internodes (maize, beans) | < 1.5 mg/kg (DTPA) | ZnSO₄ 25 kg/ha soil; 0.5% foliar |
| **Boron (B)** | Hollow stems, cracked fruit, dead growing points (brassicas, avocado) | < 0.5 mg/kg (hot water) | Borax 10 kg/ha soil; 0.1% foliar |
| **Copper (Cu)** | Reclamation (newly limed acid soils), dieback | < 1.0 mg/kg (DTPA) | CuSO₄ 15 kg/ha soil |

*Foliar applications bypass soil fixation — use for rescue. Soil applications build long-term supply.*

---

## Organic Carbon: The Engine

Every 0.1% increase in organic carbon = ~1,000 kg/ha more water held in top 30 cm. In semi-arid zones, that's the difference between a crop and a failure.

**Build it with:**
- Compost/vermicompost: 5–10 t/ha/year
- Cover crops (mucuna, lablab, rye): 3–5 t/ha biomass
- Crop residue retention (don't burn maize stover)
- Rotations with legumes

---

## Sampling Protocol (Do It Right)

1. **Divide farm** into uniform zones (soil type, slope, crop history, management)
2. **1 composite sample per 1–2 ha** (minimum 15–20 subsamples per composite)
3. **Depth:** 0–20 cm for annuals; 0–20 cm + 20–40 cm for perennials
4. **Tools:** Clean auger or panga + bucket (no galvanised — contaminates Zn)
5. **Timing:** Same season each year; avoid sampling within 2 months of fertiliser/lime application
6. **Label:** Farm, block, GPS, date, previous crop, intended crop

---

## Reading Your Report: A Checklist

When the lab PDF lands in your WhatsApp, check:

- [ ] pH: Is lime needed? How much?
- [ ] Olsen P: > 30? Stop applying DAP/TSP. < 10? Band P at planting.
- [ ] Exch. K: < 0.3? Apply MOP/SOP at planting.
- [ ] Ca:Mg ratio: Should be 3:1 to 5:1. If Mg > Ca, use calcitic lime (not dolomitic).
- [ ] EC: > 1.5? Check irrigation water; leach if needed.
- [ ] Micros: Zn, B, Cu — flag any "Low" for foliar or soil correction.

---

## We Can Do This For You

Our agronomists sample, interpret, and write a plain-language fertiliser plan with product rates, timing, and cost estimates. 500+ farms tested in 2023–24. [Book a soil test](/contact?service=soil-testing).
`,
    category: "Soil Health",
    author: "Dr. Wanjiku Mwangi, Lead Agronomist",
    publishedAt: "2025-02-20",
    readTime: "10 min",
    image: "/images/WhatsApp Image 2026-06-22 at 3.57.46 PM.jpeg",
    tags: ["soil testing", "fertiliser", "pH", "lime", "nutrient management", "Kenya agriculture"],
  },
  {
    slug: "greenhouse-tomato-production-kenya",
    title: "Greenhouse Tomato Production in Kenya: Varieties, Trellising, and Disease Management",
    excerpt: "From Anna F1 to Tylka F1 — how to structure a 8×24 m tunnel for 15 kg/plant, manage Tuta absoluta, and time your market.",
    content: `
## Why Greenhouse Tomatoes?

Open-field tomato in Kenya loses 30–50% to bacterial wilt, early blight, and Tuta absoluta. A well-run 8×24 m tunnel (192 m²) yields **2,500–3,000 kg** per cycle — 15–18 kg/plant — with 3 cycles/year. At 80–120 KSh/kg farm gate, that's **600,000–1,000,000 KSh/year per tunnel**.

But greenhouses fail when growers treat them like covered fields. They're not. They're **controlled environments** that demand different habits.

---

## Variety Selection: What We Recommend (2024–25)

| Variety | Type | Maturity | Yield Potential | Disease Resistance | Best For |
|---------|------|----------|-----------------|-------------------|----------|
| **Anna F1** | Indeterminate | 70–75 DAT | 18–22 kg/plant | TYLCV, ToMV, Fol 1,2, Vd | High-end market, long season |
| **Tylka F1** | Indeterminate | 68–72 DAT | 16–20 kg/plant | TYLCV, ToMV, Fol 1,2, Vd, Ma/Mi/Mj | Heat tolerance, Tuta pressure |
| **Prostar F1** | Indeterminate | 72–78 DAT | 15–18 kg/plant | TYLCV, ToMV, Fol 1,2, Vd, TSWV | Cool highlands, virus pressure |
| **Roma VF** | Determinate | 75–80 DAT | 8–10 kg/plant | Verticillium, Fusarium | Processing, low-labour systems |
| **Cal-J** | Determinate | 80–85 DAT | 6–8 kg/plant | Basic | Open field only — not for tunnels |

**Our default:** Anna F1 for Jan–Apr and Sep–Dec cycles; Tylka F1 for May–Aug (hotter) cycle.

---

## Tunnel Structure: Wooden vs. Steel

| Feature | Wooden (Eucalyptus) | Steel (Galvanized) |
|---------|---------------------|-------------------|
| Cost (8×24 m) | ~180,000 KSh | ~350,000 KSh |
| Lifespan | 8–12 years (treated) | 20+ years |
| Wind Rating | 80 km/hr | 120 km/hr |
| Column Spacing | 3 m | 4 m |
| Trellis Load Capacity | 8 kg/m linear | 15 kg/m linear |
| Best For | < 0.5 ha, low wind | Commercial, high wind, multi-span |

**Critical:** Both need **insect netting (40 mesh)** on all vents and doors. No netting = Tuta absoluta in 2 weeks.

---

## Layout: 8×24 m Tunnel (192 m²)

**Layout (3 beds × 0.9 m wide, 0.6 m paths):**
- Total width: 3.9 m (fits in 4 m bay)
- 8 m width allows 2× this = 6 beds total
- Door at each end of 24 m length

- **Plant spacing:** 40 cm in-row × 50 cm between rows (staggered) = 25,000 plants/ha equivalent → **~400 plants per tunnel**
- **Drip:** 2 laterals per bed, 2.5 L/hr emitters at 30 cm
- **Trellis:** Overhead wire at 2.2 m, twine per plant, lower-and-lean

---

## Crop Calendar (Anna F1, Nairobi/Kiambu)

| Week | Activity | Key Notes |
|------|----------|-----------|
| -2 | Soil prep, solarise (close tunnel 7 days) | Kill nematodes, pathogens |
| -1 | Bed formation, basal fertiliser, lay drip | 5 t/ha compost + 200 kg/ha MOP |
| 0 | Transplant 3-week seedlings | 4 true leaves, hardened |
| 1–2 | Establishment irrigation, starter feed | High P (10-52-10) 1 kg/1000 L |
| 3–4 | First twining, remove side shoots below 1st cluster | Single stem |
| 5–8 | Vegetative growth, weekly top-dress | High N (Calcium Nitrate) 3 kg/1000 L |
| 9–14 | Flowering/fruit set, peak feed | Balanced NPK (20-20-20) + Ca (Calcium Nitrate) |
| 15–22 | Harvest, lower-and-lean weekly | K-rich (15-5-30) 4 kg/1000 L |
| 23–26 | Final harvests, crop removal | Sanitise, solarise for next cycle |

**Cycle length:** 26 weeks (6.5 months). **3 cycles/year** with 2-week turnaround.

---

## Fertigation Recipe (per 1,000 L stock tank)

| Stage | Calcium Nitrate | Potassium Nitrate | MAP (12-61-0) | Magnesium Sulphate | Micronutrient Mix |
|-------|-----------------|-------------------|---------------|-------------------|-------------------|
| Establishment (Wk 1–3) | 2 kg | — | 1 kg | 0.5 kg | 50 g |
| Vegetative (Wk 4–8) | 3 kg | 1 kg | 0.5 kg | 0.5 kg | 50 g |
| Fruit Set (Wk 9–14) | 3 kg | 2 kg | — | 1 kg | 75 g |
| Peak Harvest (Wk 15–22) | 2 kg | 4 kg | — | 1 kg | 75 g |

**EC targets:** 1.8–2.2 mS/cm (establishment) → 2.5–3.0 (peak) → 2.0 (finish). **pH:** 5.8–6.2 always.

---

## Disease & Pest Management: The Big Three

### 1. Tuta Absoluta (Tomato Leaf Miner)
- **Scout:** Pheromone traps (1/100 m²), check daily
- **Threshold:** 5 moths/trap/week → spray
- **Rotation:** Emamectin benzoate → Chlorantraniliprole → Indoxacarb → Spinosad (max 2 apps each per cycle)
- **Cultural:** Remove infested leaves, destroy crop residue immediately after harvest, 2-week host-free period

### 2. Early Blight (Alternaria solani)
- **Conditions:** 24–29°C, high humidity, wet leaves
- **Prevent:** Ventilate to < 85% RH, drip only (no overhead), 3-year rotation
- **Spray:** Mancozeb (protectant) alternated with Difenoconazole (systemic) — 10–14 day interval

### 3. Bacterial Wilt (Ralstonia solanacearum)
- **No cure.** Prevention only:
  - Certified disease-free seedlings
  - Soil solarisation between cycles
  - Grafted seedlings (Maxifort, Beaufort rootstocks) — adds 15 KSh/plant, worth it
  - Footbaths at every entrance (1% Virkon)

---

## Common Mistakes

1. **Overwatering** — "Greenhouse = more water." Wrong. Drip gives precision. Soggy media = root rot, fruit cracking.
2. **Under-ventilating** — Humidity > 90% = disease factory. Vent at 28°C, keep RH < 80%.
3. **Skipping lower-and-lean** — Plants touch ground = disease. Keep fruit at working height.
4. **Wrong variety for season** — Anna in July = heat stress, poor set. Use Tylka.
5. **No soil test between cycles** — Salt builds up. Flush or replace top 15 cm media every 2 cycles.

---

## Economics Snapshot (8×24 m, Anna F1, 2024 prices)

| Item | Cost (KSh) |
|------|------------|
| Tunnel (wooden, complete) | 180,000 |
| Seedlings (400 @ 25) | 10,000 |
| Fertiliser (3 cycles) | 45,000 |
| Crop protection | 30,000 |
| Labour (casual, 3 cycles) | 60,000 |
| Misc (twine, clips, sanitiser) | 15,000 |
| **Total Annual Cost** | **340,000** |
| **Revenue (3 cycles × 2,800 kg × 90 KSh)** | **756,000** |
| **Net (Year 1)** | **416,000** |
| **Net (Year 2+, no tunnel cost)** | **596,000** |

*Excludes land rent, management salary, capital recovery. Assumes 90 KSh/kg average — Nairobi wholesale ranges 70–130.*

---

## Want to Start or Improve Your Tunnel?

We design, build, and provide 12-month agronomy support for greenhouse tomato, capsicum, and cucumber. [Get in touch](/contact?service=greenhouse-construction).
`,
    category: "Protected Cultivation",
    author: "Peter Kamau, Greenhouse Specialist",
    publishedAt: "2025-03-10",
    readTime: "15 min",
    image: "/images/WhatsApp Image 2026-06-22 at 5.42.45 PM (1).jpeg",
    tags: ["greenhouse", "tomato", "Anna F1", "Tuta absoluta", "fertigation", "Kenya farming"],
  },
];

export function getPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export function getLatestPosts(limit = 3): JournalPost[] {
  return [...journalPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getPostsByCategory(category: string): JournalPost[] {
  return journalPosts.filter((p) => p.category === category);
}