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
  { id: "fabrication", label: "Fabrication" }
];

export const PROJECTS = [
  {
    id: "ipg-asia-bopp",
    title: "IPG ASIA PVT. LTD. BOPP 6.5 Mtr Line",
    client: "IPG ASIA PVT. LTD.",
    location: "Dismantled from Thailand & Installed in India",
    year: "2025-2026",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: p3_ipg1,
    additionalImages: [p3_ipg2, p3_ipg3, p3_ipg4],
    description: "International plant project: Dismantled 6.5-meter BOPP line machinery from Thailand and successfully reinstalled at IPG plant. Included complete mechanical assembly, heavy roller positioning, optical leveling, and electrical line connections.",
    badge: "International Turnkey Project"
  },
  {
    id: "kg-flex-piping",
    title: "KG FLEX Industrial Piping & Fabrication",
    client: "KG FLEX",
    location: "Industrial Plant Site",
    year: "2024-2025",
    category: "piping",
    categoryLabel: "Piping & Fabrication",
    image: p2_kgflex2,
    additionalImages: [p2_kgflex1, p2_kgflex3],
    description: "Executed complete process piping and high-pressure manifold fabrication with specialized valve trains, overhead pipe rack installations, and certified weld joints for automated line operations.",
    badge: "Process Piping"
  },
  {
    id: "veejay-polyplast",
    title: "Veejay Polyplast Limited Turnkey Installation",
    client: "Veejay Polyplast Limited",
    location: "Hyderabad",
    year: "2022-2023",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: p2_veejay2,
    additionalImages: [p2_veejay1, p2_veejay3, p2_veejay4],
    description: "Complete turnkey installation work comprising mechanical equipment assembly, structural steel floor framing, heavy silo positioning, and electrical power connections.",
    badge: "Turnkey Mechanical & Electrical"
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
    badge: "Heavy Structural Fabrication"
  },
  {
    id: "heavy-crane-shifting",
    title: "Outdoor Heavy Machinery Shifting & Crane Rigging",
    client: "Industrial Relocation Client",
    location: "Industrial MIDC Site",
    year: "Turnkey Relocation",
    category: "shifting",
    categoryLabel: "Machine Shifting",
    image: p1_crane,
    additionalImages: [],
    description: "Multi-tonnage machinery unloading, external structural crane hoisting, and precision rigging inside plant premises ensuring zero equipment damage and complete personnel safety.",
    badge: "Heavy Crane Rigging"
  },
  {
    id: "precision-alignment",
    title: "Optical Precision Leveling & Machine Alignment",
    client: "Industrial Manufacturing Facility",
    location: "Plant Shop Floor",
    year: "Precision Engineering",
    category: "installation",
    categoryLabel: "Machine Installation",
    image: p1_alignment,
    additionalImages: [],
    description: "Sub-millimeter equipment alignment, base leveling, and dynamic load testing using precision theodolite optical stations for high-speed manufacturing lines.",
    badge: "Optical Alignment"
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
    additionalImages: [],
    description: "Professional dismantling, safe handling, and re-erection of multi-panel motor control centers (MCC), power distribution panels, and high-voltage cable terminations.",
    badge: "Electrical Switchgear"
  }
];

