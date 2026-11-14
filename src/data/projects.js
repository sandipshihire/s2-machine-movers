// Enhanced Real On-Site Photographs
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

// Historical Project Site Photos
import p1_crane from '../assets/images/project_p1_img2.jpeg';
import p2_veejay2 from '../assets/images/project_p2_img2.jpeg';
import p2_kgflex2 from '../assets/images/project_p2_img6.jpeg';
import p3_ipg1 from '../assets/images/project_p3_img1.jpeg';
import p3_morbi1 from '../assets/images/project_p3_img5.jpeg';

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "installation", label: "Machine Installation" },
  { id: "shifting", label: "Machine Shifting" },
  { id: "piping", label: "Piping Work" },
  { id: "fabrication", label: "Fabrication & Rigging" }
];

export const GALLERY_IMAGES = [
  {
    id: "img-bruckner-line",
    title: "Bruckner Film Stretching Line Installation",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: site_bruckner_line
  },
  {
    id: "img-plant-bay",
    title: "Turnkey Plant Bay Setup & Crane Relocation",
    category: "shifting",
    categoryLabel: "Machine Shifting",
    image: site_plant_bay_overview
  },
  {
    id: "img-hopper-tower",
    title: "Multi-Tier Mezzanine Hopper Rigging",
    category: "shifting",
    categoryLabel: "Machine Shifting",
    image: site_tower_hopper_rigging
  },
  {
    id: "img-piping-spools",
    title: "Stainless Steel Piping Spools & Manifolds",
    category: "piping",
    categoryLabel: "Piping Work",
    image: site_piping_spool_staging
  },
  {
    id: "img-mill-stand",
    title: "Heavy Mill Stand & Machine Line Erection",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: site_heavy_stand_erection
  },
  {
    id: "img-heavy-line",
    title: "Continuous Multi-Station Production Line",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: site_heavy_line
  },
  {
    id: "img-piping-manifold",
    title: "Industrial Process Piping Header Manifold",
    category: "piping",
    categoryLabel: "Piping Work",
    image: site_piping_manifold
  },
  {
    id: "img-silo-crane",
    title: "Heavy Silo & Storage Tank Crane Lift",
    category: "shifting",
    categoryLabel: "Machine Shifting",
    image: site_silo_heavy_lift
  },
  {
    id: "img-roller-machine",
    title: "Web Film Calender Roller Assembly",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: site_roller_machine
  },
  {
    id: "img-crane-overhead",
    title: "Overhead EOT Crane Hook & Rigging",
    category: "shifting",
    categoryLabel: "Machine Shifting",
    image: site_crane_overhead
  },
  {
    id: "img-precision-rigging",
    title: "Precision Sub-Assembly Hoisting & Rigging",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: site_precision_rigging
  },
  {
    id: "img-crate-unloading",
    title: "Heavy Crate Unloading & Skidding",
    category: "shifting",
    categoryLabel: "Machine Shifting",
    image: site_crate_unloading
  },
  {
    id: "img-roller-unboxing",
    title: "Industrial Roller Unboxing & Inspection",
    category: "shifting",
    categoryLabel: "Machine Shifting",
    image: site_roller_unboxing
  },
  {
    id: "img-tank-base",
    title: "Industrial Tank & Machine Foundation Base",
    category: "fabrication",
    categoryLabel: "Fabrication & Rigging",
    image: site_tank_base
  },
  {
    id: "img-production-assembly",
    title: "Plant Production Line Mechanical Assembly",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: site_production_assembly
  },
  {
    id: "img-ipg-bopp",
    title: "BOPP Line Turnkey Machinery Erection",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: p3_ipg1
  },
  {
    id: "img-veejay-turnkey",
    title: "Turnkey Plant Machinery Installation",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: p2_veejay2
  },
  {
    id: "img-tdo-fabrication",
    title: "TDO Line Structural Steel Fabrication",
    category: "fabrication",
    categoryLabel: "Fabrication & Rigging",
    image: p3_morbi1
  }
];

// For backwards compatibility
export const PROJECTS = GALLERY_IMAGES;
