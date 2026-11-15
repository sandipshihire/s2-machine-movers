// Enhanced Real Project Site Images - Batch 1 & 2
import site_bruckner_line from '../assets/images/project_site_bruckner_line.webp';
import site_plant_bay_overview from '../assets/images/project_site_plant_bay_overview.webp';
import site_tower_hopper_rigging from '../assets/images/project_site_tower_hopper_rigging.webp';
import site_piping_spool_staging from '../assets/images/project_site_piping_spool_staging.webp';
import site_heavy_stand_erection from '../assets/images/project_site_heavy_stand_erection.webp';

import site_heavy_line from '../assets/images/project_site_heavy_line_erection.webp';
import site_production_assembly from '../assets/images/project_site_production_assembly.webp';
import site_piping_manifold from '../assets/images/project_site_piping_manifold.webp';
import site_silo_heavy_lift from '../assets/images/project_site_silo_heavy_lift.webp';
import site_roller_machine from '../assets/images/project_site_roller_machine.webp';
import site_crane_overhead from '../assets/images/project_site_crane_overhead.webp';
import site_crate_unloading from '../assets/images/project_site_crate_unloading.webp';
import site_precision_rigging from '../assets/images/project_site_precision_rigging.webp';
import site_roller_unboxing from '../assets/images/project_site_roller_unboxing.webp';
import site_tank_base from '../assets/images/project_site_tank_base.webp';

// Historical Project Documentation Images
import p1_crane from '../assets/images/project_p1_img2.jpeg';
import p1_alignment from '../assets/images/project_p1_img3.jpeg';
import p1_panels from '../assets/images/project_p1_img4.jpeg';

import p2_veejay1 from '../assets/images/project_p2_img1.jpeg';
import p2_veejay2 from '../assets/images/project_p2_img2.jpeg';
import p2_veejay3 from '../assets/images/project_p2_img3.jpeg';
import p2_veejay4 from '../assets/images/project_p2_img4.jpeg';

import p2_kgflex1 from '../assets/images/project_p2_img5.jpeg';
import p2_kgflex2 from '../assets/images/project_p2_img6.jpeg';
import p2_kgflex3 from '../assets/images/project_p2_img7.jpeg';

import p3_ipg1 from '../assets/images/project_p3_img1.jpeg';
import p3_ipg2 from '../assets/images/project_p3_img2.jpeg';
import p3_ipg3 from '../assets/images/project_p3_img3.jpeg';
import p3_ipg4 from '../assets/images/project_p3_img4.jpeg';

import p3_morbi1 from '../assets/images/project_p3_img5.jpeg';
import p3_morbi2 from '../assets/images/project_p3_img6.jpeg';
import p3_morbi3 from '../assets/images/project_p3_img7.jpeg';
import p3_morbi4 from '../assets/images/project_p3_img8.jpeg';

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "installation", label: "Machine Installation" },
  { id: "shifting", label: "Machine Shifting" },
  { id: "piping", label: "Piping Work" },
  { id: "fabrication", label: "Fabrication & Rigging" }
];

export const PROJECTS = [
  {
    id: "veejay-polyplast-turnkey",
    title: "Veejay Polyplast Limited Turnkey Installation",
    client: "Veejay Polyplast Limited",
    location: "Hyderabad",
    year: "2022-2023",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: p2_veejay2,
    additionalImages: [p2_veejay1, p2_veejay3, p2_veejay4, site_silo_heavy_lift],
    description: "Complete turnkey installation work comprising mechanical equipment assembly, structural steel floor framing, heavy silo positioning, and electrical power connections.",
    badge: "Turnkey Mechanical"
  },
  {
    id: "stainless-process-piping-manifold",
    title: "KG FLEX Industrial Piping & Fabrication",
    client: "KG FLEX/Process Engineering Plant ",
    location: "Industrial Plant Site",
    year: "2024-2025",
    category: "piping",
    categoryLabel: "Process Piping",
    image: site_piping_manifold,
    additionalImages: [site_tank_base, p2_kgflex2, p2_kgflex1, p2_kgflex3],
    description: "High-precision fabrication and on-site positioning of industrial stainless steel process piping circuits, automated valve manifolds, and floor-level distribution loops adhering to certified plant safety standards.",
    badge: "Process Piping"
  },
  {
    id: "ipg-asia-bopp-original",
    title: "IPG ASIA PVT. LTD. BOPP 6.5 Mtr Line (Thailand to India)",
    client: "IPG ASIA PVT. LTD.",
    location: "Dismantled from Thailand & Installed in India",
    year: "2025-2026",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: p3_ipg1,
    additionalImages: [p3_ipg2, p3_ipg3, p3_ipg4, site_heavy_line],
    description: "International plant project: Dismantled 6.5-meter BOPP line machinery from Thailand and successfully reinstalled at IPG plant. Included complete mechanical assembly, heavy roller positioning, optical leveling, and electrical line connections.",
    badge: "International Turnkey"
  },
  {
    id: "asia-polyfilm-morbi",
    title: "Asia Polyfilm TDO Maintenance & Fabrication",
    client: "Asia Polyfilm",
    location: "Morbi, Gujarat",
    year: "Industrial Project",
    category: "fabrication",
    categoryLabel: "Fabrication & Maintenance",
    image: p3_morbi1,
    additionalImages: [p3_morbi2, p3_morbi3, p3_morbi4],
    description: "TDO line maintenance, structural steel ducting, heavy machine base fabrication, and high-temperature oven section overhaul executed with exacting industrial tolerances.",
    badge: "Heavy Fabrication"
  },
  {
    id: "bruckner-line-installation",
    title: "Bruckner Film Stretching Line Installation & Optical Alignment",
    client: "Advanced Film & Flexible Packaging Plant",
    location: "Industrial Manufacturing Facility",
    year: "Precision Erection",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: site_bruckner_line,
    additionalImages: [site_heavy_stand_erection, site_plant_bay_overview, site_heavy_line],
    description: "Turnkey mechanical installation of world-class German Bruckner film stretching lines. Scope encompassed optical theodolite leveling, high-precision calender roll alignment, bearing housing installation, and synchronized motor drive couplings.",
    badge: "Bruckner Line Installation"
  },
  {
    id: "process-piping-spool-staging",
    title: "Prefabricated Process Piping Spool & Header Manifold Staging",
    client: "Industrial Chemical & Process Plant",
    location: "Shop Floor Staging Bay",
    year: "Process Piping",
    category: "piping",
    categoryLabel: "Process Piping",
    image: site_piping_spool_staging,
    additionalImages: [site_piping_manifold, site_tank_base, p2_kgflex2],
    description: "Shop floor staging, pre-fabrication, and fit-up of stainless steel pipe spools, heavy-duty 90-degree elbows, header distribution manifolds, and insulation jackets for automated chemical processing loops.",
    badge: "Piping Fabrication"
  },
  {
    id: "outdoor-silo-crane-rigging",
    title: "Heavy Silo & High-Capacity Storage Tank Crane Lifting",
    client: "Bulk Storage & Material Facility",
    location: "Outdoor Plant Site",
    year: "Heavy Lift",
    category: "shifting",
    categoryLabel: "Machine Shifting",
    image: site_silo_heavy_lift,
    additionalImages: [p1_crane, site_tower_hopper_rigging, site_crane_overhead],
    description: "Heavy mobile crane rigging and vertical positioning of dual industrial storage silos, high-altitude pipe interconnects, and external safety catwalk staircases with synchronized rigging calculations.",
    badge: "Heavy Crane Lift"
  },
  {
    id: "electrical-switchboards",
    title: "Control Panel & Electrical Switchgear Installation",
    client: "Industrial Power & Control Facility",
    location: "Electrical Control Room",
    year: "Electrical Turnkey",
    category: "installation",
    categoryLabel: "Electrical Installation",
    image: p1_panels,
    additionalImages: [p1_alignment],
    description: "Professional dismantling, safe handling, and re-erection of multi-panel motor control centers (MCC), power distribution panels, and high-voltage cable terminations.",
    badge: "Electrical Switchgear"
  }
];
