export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: '3dsmax' | 'autocad';
  categoryLabel: string;
  year: string;
  location: string;
  area: string;
  software: string[];
  image: string;
  downloadFile: string;
  downloadFileName: string;
  fileFormat: string;
  fileSize: string;
  description: string;
  tags: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "penthouse-living",
    title: "Belgrade Waterfront Sky Penthouse",
    subtitle: "Photorealistic Living & Lounge Visualization",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2026",
    location: "Belgrade, Serbia",
    area: "185 m²",
    software: ["3ds Max 2024", "Corona 11", "Photoshop", "Forest Pack"],
    image: "/images/penthouse-living-room.jpg",
    downloadFile: "/downloads/penthouse-living-room.max",
    downloadFileName: "penthouse-living-room.max",
    fileFormat: ".MAX",
    fileSize: "284 MB",
    description: "Full architectural interior CGI for a dual-aspect luxury penthouse overlooking the river. Features customized travertine wall cladding with brass reveals, curved bouclé seating, and physical sky & sun lighting balance calibrated to Belgrade autumn latitude.",
    tags: ["Residential", "Luxury Living", "Corona 11", "Photorealistic CGI"],
    specifications: [
      { label: "Renderer", value: "Corona Renderer 11.2" },
      { label: "Poly Count", value: "8.4M Triangles (Optimized Proxies)" },
      { label: "Lighting Rig", value: "HDRI 8K + Corona Sun + IES Profiles" },
      { label: "Material Set", value: "PBR Travertine, Oiled Oak, Bouclé Fabric" },
      { label: "Design File", value: "Autodesk 3ds Max Scene (.MAX)" }
    ]
  },
  {
    id: "ashland-floorplan",
    title: "Ashland Villa Executive Residence",
    subtitle: "Comprehensive 2D Architectural Layout & Drafting",
    category: "autocad",
    categoryLabel: "AutoCAD",
    year: "2026",
    location: "Zemun, Belgrade",
    area: "240 m²",
    software: ["AutoCAD 2024", "DWG TrueView"],
    image: "/images/ashland-residence-floorplan.jpg",
    downloadFile: "/downloads/ashland-residence-floorplan.dwg",
    downloadFileName: "ashland-residence-floorplan.dwg",
    fileFormat: ".DWG",
    fileSize: "18.4 MB",
    description: "Complete architectural floor plan documentation compliant with European architectural drafting standards. Fully organized with strict layer hierarchy (A-WALL, A-GLAZ, A-FLOR, A-FURN, A-ANNO), precise millimetric dimensions, partition schedules, and circulation analysis.",
    tags: ["Architectural Drafting", "Floor Plan", "DWG Standards", "Permit Drawing"],
    specifications: [
      { label: "CAD Standard", value: "ISO 13567 Architectural Layering" },
      { label: "Scale", value: "1:50 & 1:100 Layout Views" },
      { label: "Drawing Sheet", value: "A101 - General Floor Plan" },
      { label: "Units", value: "Millimeters (mm) Decimal" },
      { label: "Design File", value: "AutoCAD Drawing (.DWG)" }
    ]
  },
  {
    id: "master-suite-render",
    title: "Minimalist Master Suite & En-Suite Spa",
    subtitle: "Warm Atmospheric Bedroom CGI Visualization",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2026",
    location: "Vračar, Belgrade",
    area: "42 m²",
    software: ["3ds Max 2024", "V-Ray 6", "Marvelous Designer"],
    image: "/images/render-master-suite.jpg",
    downloadFile: "/downloads/minimalist-master-suite.max",
    downloadFileName: "minimalist-master-suite.max",
    fileFormat: ".MAX",
    fileSize: "312 MB",
    description: "Sensory bedroom retreat featuring bespoke slatted walnut headboard, natural linen textiles simulated in Marvelous Designer, and warm concealed cove illumination (2700K Kelvin). Seamless transition to en-suite fluted glass walk-in bathroom.",
    tags: ["Master Bedroom", "Atmospheric Lighting", "Textile Simulation", "3ds Max"],
    specifications: [
      { label: "Renderer", value: "Chaos V-Ray 6 Update 2" },
      { label: "Cloth Physics", value: "Marvelous Designer 12 Linen Bedsheet" },
      { label: "Color Temp", value: "2700K Concealed Cove & Bedside Accent" },
      { label: "Textures", value: "4K Seamless PBR Normal/Displacement" },
      { label: "Design File", value: "Autodesk 3ds Max Scene (.MAX)" }
    ]
  },
  {
    id: "cad-millwork-spec",
    title: "Bespoke Kitchen & Joinery Millwork Details",
    subtitle: "Fabrication Drawings, Cross-Sections & Elevations",
    category: "autocad",
    categoryLabel: "AutoCAD",
    year: "2025",
    location: "Dedinje, Belgrade",
    area: "35 m²",
    software: ["AutoCAD 2024", "Detailing Extension"],
    image: "/images/cad-millwork-spec.jpg",
    downloadFile: "/downloads/custom-millwork-kitchen.dwg",
    downloadFileName: "custom-millwork-kitchen.dwg",
    fileFormat: ".DWG",
    fileSize: "14.2 MB",
    description: "Carpenter-ready fabrication drawing set for custom handleless veneer kitchen cabinetry, integrated appliance pocket doors, stone countertop waterfall miters, and internal Blum drawer runner hardware specifications.",
    tags: ["Joinery Details", "Kitchen Millwork", "Section Cut 1:20", "AutoCAD"],
    specifications: [
      { label: "Detail Scale", value: "1:20 / 1:10 Sections & 1:5 Details" },
      { label: "Hardware Specs", value: "Blum Legrabox & Tip-On Blumotion" },
      { label: "Drawing Sheet", value: "D-204 Millwork Joinery Specification" },
      { label: "Annotation", value: "Complete Materials & Finish Callouts" },
      { label: "Design File", value: "AutoCAD Technical Drawing (.DWG)" }
    ]
  },
  {
    id: "boutique-cafe-render",
    title: "Atelier Coffee Bar & Aperitivo Lounge",
    subtitle: "Hospitality Commercial Interior Visualization",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2025",
    location: "Dorćol, Belgrade",
    area: "115 m²",
    software: ["3ds Max 2024", "Corona 11", "Substance 3D"],
    image: "/images/render-boutique-cafe.jpg",
    downloadFile: "/downloads/boutique-cafe-interior.max",
    downloadFileName: "boutique-cafe-interior.max",
    fileFormat: ".MAX",
    fileSize: "410 MB",
    description: "Commercial interior visualization for an artisanal cafe by day and aperitivo bar by dusk. Highlights include a monolithic cast-terrazzo espresso counter, brushed patinated brass backbar gantry, and custom banquette seating ergonomics.",
    tags: ["Commercial", "Hospitality", "Bar Design", "Corona 11"],
    specifications: [
      { label: "Renderer", value: "Corona Renderer 11" },
      { label: "Camera Setup", value: "35mm Architectural Tilt-Shift Perspective" },
      { label: "Lighting", value: "Dusk Atmospheric Balance (IES Fixtures)" },
      { label: "Assets", value: "Custom modeled Modbar & Terrazzo Bar" },
      { label: "Design File", value: "Autodesk 3ds Max Scene (.MAX)" }
    ]
  },
  {
    id: "cad-rcp-lighting",
    title: "Reflected Ceiling Plan & Electrical Schematics",
    subtitle: "Lighting Circuitry, Air Distribution & Ceiling Levels",
    category: "autocad",
    categoryLabel: "AutoCAD",
    year: "2025",
    location: "Novi Beograd",
    area: "160 m²",
    software: ["AutoCAD 2024", "Electrical Legend Toolset"],
    image: "/images/cad-rcp-lighting.jpg",
    downloadFile: "/downloads/lighting-rcp-technical-plan.dwg",
    downloadFileName: "lighting-rcp-technical-plan.dwg",
    fileFormat: ".DWG",
    fileSize: "16.8 MB",
    description: "Rigorous Reflected Ceiling Plan (RCP) with electrical switching schematics, recessed magnetic track lighting positions, drop ceiling soffit elevations, HVAC diffuser coordinates, and circuit switching schedule legend.",
    tags: ["Reflected Ceiling Plan", "Electrical Layout", "HVAC Coordination", "AutoCAD"],
    specifications: [
      { label: "Sheet Code", value: "E-102 Reflected Ceiling & Electrical Plan" },
      { label: "Symbols", value: "Standard European Electrical & Luminaire Icons" },
      { label: "Coordination", value: "Integrated HVAC Slot Diffusers & Drywall Soffits" },
      { label: "Scale", value: "1:50 Primary Floor Layout" },
      { label: "Design File", value: "AutoCAD Drawing (.DWG)" }
    ]
  }
];

export const skillsList = [
  {
    name: "3ds Max & CGI",
    level: "Advanced / Expert",
    detail: "High-poly 3D modeling, photorealistic Corona & V-Ray lighting, complex PBR multi-layer shaders, camera composition & color grading.",
    icon: "box"
  },
  {
    name: "AutoCAD Drafting",
    level: "Production Precision",
    detail: "Full architectural working drawings (GA plans, elevations, sections, reflected ceiling plans, millwork fabrication sheets, dynamic blocks).",
    icon: "grid"
  },
  {
    name: "Spatial Architecture",
    level: "Concept to Build",
    detail: "Zoning ergonomics, circulation flow analysis, building code compliance, functional space planning for residential & commercial.",
    icon: "layers"
  },
  {
    name: "FF&E & Specifications",
    level: "Material Science",
    detail: "Comprehensive furniture, fixtures & equipment schedules, joinery hardware specification, material boards, contractor coordination.",
    icon: "clipboard"
  }
];
