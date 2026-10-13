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
    title: "Belgrade Waterfront Penthouse",
    subtitle: "Fotorealistična 3D vizuelizacija dnevne zone",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2026",
    location: "Beograd, Srbija",
    area: "185 m²",
    software: ["3ds Max 2024", "Corona 11", "Photoshop"],
    image: "/images/penthouse-living-room.jpg",
    downloadFile: "/downloads/penthouse-living-room.max",
    downloadFileName: "penthouse-living-room.max",
    fileFormat: ".MAX",
    fileSize: "284 MB",
    description: "Kompletna unutrašnja fotorealistična vizuelizacija luksuznog penthausa sa pogledom na reku. Zidne obloge od travertina, zaobljeni bukle nameštaj i fizikalno simulirano prirodno osvetljenje u Corona renderu.",
    tags: ["Rezidencijalni enterijer", "Corona 11", "Dnevna soba", "3D CGI"],
    specifications: [
      { label: "Render sistem", value: "Corona Renderer 11.2" },
      { label: "Geometrija", value: "8.4M poligona (optimizovani proksiji)" },
      { label: "Rasveta", value: "HDRI 8K + Corona Sun + IES svetla" },
      { label: "Materijali", value: "PBR travertin, dimljeni hrast, bukle" },
      { label: "Fajl za preuzimanje", value: "Autodesk 3ds Max scena (.MAX)" }
    ]
  },
  {
    id: "ashland-floorplan",
    title: "Vila Ashland – Glavni izvođački projekat",
    subtitle: "2D arhitektonska razrada osnove i dispozicije",
    category: "autocad",
    categoryLabel: "AutoCAD",
    year: "2026",
    location: "Zemun, Beograd",
    area: "240 m²",
    software: ["AutoCAD 2024", "DWG TrueView"],
    image: "/images/ashland-residence-floorplan.jpg",
    downloadFile: "/downloads/ashland-residence-floorplan.dwg",
    downloadFileName: "ashland-residence-floorplan.dwg",
    fileFormat: ".DWG",
    fileSize: "18.4 MB",
    description: "Kompletna tehnička dokumentacija osnove stana urađena po ISO standardima slojeva (lejera). Detaljne kotne linije, specifikacije pregradnih zidova, dispozicija fiksnog i pokretnog nameštaja sa analizom cirkulacije.",
    tags: ["Arhitektonski crtež", "Osnova stana", "AutoCAD", "Glavni projekat"],
    specifications: [
      { label: "CAD standard", value: "ISO 13567 arhitektonski lejeri" },
      { label: "Razmera", value: "1:50 i 1:100 layout prikazi" },
      { label: "List crteža", value: "A101 – Glavna osnova prizemlja" },
      { label: "Merna jedinica", value: "Milimetri (mm)" },
      { label: "Fajl za preuzimanje", value: "AutoCAD radni crtež (.DWG)" }
    ]
  },
  {
    id: "master-suite-render",
    title: "Master spavaća soba & Spa kupatilo",
    subtitle: "Atmosferska fotorealistična 3D vizuelizacija",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2026",
    location: "Vračar, Beograd",
    area: "42 m²",
    software: ["3ds Max 2024", "V-Ray 6", "Marvelous Designer"],
    image: "/images/render-master-suite.jpg",
    downloadFile: "/downloads/minimalist-master-suite.max",
    downloadFileName: "minimalist-master-suite.max",
    fileFormat: ".MAX",
    fileSize: "312 MB",
    description: "Senzualni ambijent master apartmana sa uzglavljem od orahovih letvica, lanenim tekstilom simuliranim u Marvelous Designer-u i toplom skrivenom rasvetom (2700K). Fluted glass pregrada ka master kupatilu.",
    tags: ["Spavaća soba", "Topla rasveta", "Tekstil", "3ds Max"],
    specifications: [
      { label: "Render sistem", value: "Chaos V-Ray 6 Update 2" },
      { label: "Simulacija tkanine", value: "Marvelous Designer 12" },
      { label: "Temperatura svetla", value: "2700K toplo LED osvetljenje" },
      { label: "Teksture", value: "4K Seamless PBR mape" },
      { label: "Fajl za preuzimanje", value: "Autodesk 3ds Max scena (.MAX)" }
    ]
  },
  {
    id: "cad-millwork-spec",
    title: "Detalji stolarije i kuhinje po meri",
    subtitle: "Radionički crteži, preseci i izgledi frontova",
    category: "autocad",
    categoryLabel: "AutoCAD",
    year: "2025",
    location: "Dedinje, Beograd",
    area: "35 m²",
    software: ["AutoCAD 2024", "Detailing Toolset"],
    image: "/images/cad-millwork-spec.jpg",
    downloadFile: "/downloads/custom-millwork-kitchen.dwg",
    downloadFileName: "custom-millwork-kitchen.dwg",
    fileFormat: ".DWG",
    fileSize: "14.2 MB",
    description: "Izvođački stolarski detalji kuhinje bez vidljivih ručica, ugradni elementi sa pocket vratima, gerovani spojevi radne ploče od kvarca i specifikacija Blum okova.",
    tags: ["Stolarski detalji", "Kuhinja po meri", "Presek 1:20", "AutoCAD"],
    specifications: [
      { label: "Razmera detalja", value: "1:20 preseci i 1:5 karakteristični detalji" },
      { label: "Okov", value: "Blum Legrabox & Tip-On Blumotion" },
      { label: "Broj lista", value: "D-204 – Specifikacija stolarije" },
      { label: "Materijali", value: "Prirodni furnir hrasta, medijapan, kvarc" },
      { label: "Fajl za preuzimanje", value: "AutoCAD radionički crtež (.DWG)" }
    ]
  },
  {
    id: "boutique-cafe-render",
    title: "Atelier Specialty Cafe & Bar",
    subtitle: "Komercijalni enterijer i ugostiteljski prostor",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2025",
    location: "Dorćol, Beograd",
    area: "115 m²",
    software: ["3ds Max 2024", "Corona 11", "Photoshop"],
    image: "/images/render-boutique-cafe.jpg",
    downloadFile: "/downloads/boutique-cafe-interior.max",
    downloadFileName: "boutique-cafe-interior.max",
    fileFormat: ".MAX",
    fileSize: "410 MB",
    description: "Projekat ugostiteljskog enterijera sa monolitnim teraco šankom, elementima od brušenog mesinga i akustičnim oblogama od drvenih letvica.",
    tags: ["Komercijalni prostor", "Bar", "Corona 11", "Hospitality"],
    specifications: [
      { label: "Render sistem", value: "Corona Renderer 11" },
      { label: "Optika kamere", value: "35mm Architectural Tilt-Shift" },
      { label: "Rasveta", value: "Večernji balans prirodnog i IES svetla" },
      { label: "Modeli", value: "Bespoke teraco šank i barske stolice" },
      { label: "Fajl za preuzimanje", value: "Autodesk 3ds Max scena (.MAX)" }
    ]
  },
  {
    id: "cad-rcp-lighting",
    title: "Plan plafona i elektroinstalacija (RCP)",
    subtitle: "Dispozicija rasvete, spušteni plafoni i prekidači",
    category: "autocad",
    categoryLabel: "AutoCAD",
    year: "2025",
    location: "Novi Beograd",
    area: "160 m²",
    software: ["AutoCAD 2024", "Electrical Legend"],
    image: "/images/cad-rcp-lighting.jpg",
    downloadFile: "/downloads/lighting-rcp-technical-plan.dwg",
    downloadFileName: "lighting-rcp-technical-plan.dwg",
    fileFormat: ".DWG",
    fileSize: "16.8 MB",
    description: "Koordinacioni plan reflektovanog plafona (RCP) sa rasporedom magnetnih šina, skrivenih LED traka, visinama spuštenih gipsanih kaskada i šemom paljenja svetlosnih grupa.",
    tags: ["Plan plafona", "Elektroinstalacije", "Rasveta", "AutoCAD"],
    specifications: [
      { label: "Broj lista", value: "E-102 – Plan plafona i rasvete" },
      { label: "Standard", value: "Standardni evropski elektro simboli" },
      { label: "Koordinacija", value: "Usklađeni HVAC difuzori i rasveta" },
      { label: "Razmera", value: "1:50 osnova" },
      { label: "Fajl za preuzimanje", value: "AutoCAD tehnički crtež (.DWG)" }
    ]
  }
];
