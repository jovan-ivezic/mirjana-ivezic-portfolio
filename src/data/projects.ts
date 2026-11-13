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
  gallery: string[];
  description: string;
  tags: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "garsonjera-do-40m2",
    title: "Garsonjera do 40 m²",
    subtitle: "Fotorealistična 3D vizuelizacija kompaktnog prostora",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2026",
    location: "Novi Sad, Srbija",
    area: "38 m²",
    software: ["3ds Max", "Corona"],
    image: "/images/projects/dnevna-2.webp",
    gallery: [
      "/images/projects/dnevna-2.webp",
      "/images/projects/dnevna-3.webp",
      "/images/projects/dnevna-4.webp",
      "/images/projects/dnevna-5.webp"
    ],
    description: "Kompletna unutrašnja 3D vizuelizacija garsonjere otvorene koncepcije do 40 m². Pažljivo balansirana kompozicija prirodnog dnevnog svetla i skrivene tople ambijentalne rasvete, uz naglašene teksture prirodnog drveta, mekog bukle štofa i optimalno organizovan multifunkcionalni prostor.",
    tags: ["Garsonjera", "Open space", "Corona Renderer", "3D CGI", "Fotorealizam"],
    specifications: [
      { label: "Render sistem", value: "Corona Renderer (Fizikalna kamera)" },
      { label: "Osvetljenje", value: "Sun & Sky prirodno svetlo + 2700K LED akcenti" },
      { label: "Materijali", value: "Prirodni furnir hrasta, travertin, bukle tkanina" },
      { label: "Postprodukcija", value: "Corona VFB kolor balans i toniranje" },
      { label: "Broj kadrova", value: "4 fotorealistična 3D rendera" }
    ]
  },
  {
    id: "kuhinja-po-meri",
    title: "Minimalistička kuhinja sa trpezarijom",
    subtitle: "3D modelovanje stolarije i studija materijala",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2026",
    location: "Novi Sad, Srbija",
    area: "18 m²",
    software: ["3ds Max", "Corona", "AutoCAD"],
    image: "/images/projects/kuhinja-1.webp",
    gallery: [
      "/images/projects/kuhinja-1.webp",
      "/images/projects/kuhinja-2.webp",
      "/images/projects/kuhinja-3.webp",
      "/images/projects/kuhinja-4.webp"
    ],
    description: "Projektovanje i vizuelizacija savremene kuhinje povezane sa trpezarijom. Fokus na čistim linijama bez vidljivih ručica (gola profil), integrisanoj radnoj rasveti ispod gornjih ormarića i harmoniji mat tamnih frontova sa kamenom radnom pločom i trpezarijskim ambijentom.",
    tags: ["Kuhinja po meri", "Trpezarija", "Corona Renderer", "Dizajn enterijera"],
    specifications: [
      { label: "Render sistem", value: "Corona Renderer" },
      { label: "Stolarski detalji", value: "Frontovi bez ručica sa pocket mehanizmom" },
      { label: "Materijali", value: "Mat lakirani medijapan, kompozitni kvarc, tamni hrast" },
      { label: "Rasveta", value: "Ugradne LED linije 3000K i dekorativne visilice" },
      { label: "Broj kadrova", value: "4 detaljna 3D rendera" }
    ]
  },
  {
    id: "radna-soba-home-office",
    title: "Home Office",
    subtitle: "Multifunkcionalni enterijer za rad i fokus",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2026",
    location: "Novi Sad, Srbija",
    area: "24 m²",
    software: ["3ds Max", "Corona"],
    image: "/images/projects/radna-soba-7.webp",
    gallery: [
      "/images/projects/radna-soba-7.webp",
      "/images/projects/radna-soba-2.webp",
      "/images/projects/radna-soba-3.webp",
      "/images/projects/radna-soba-4.webp",
      "/images/projects/radna-soba-5.webp",
      "/images/projects/radna-soba-6.webp"
    ],
    description: "Kompleksna vizuelizacija radnog prostora prilagođenog produktivnosti i miru. Projekat obuhvata radni sto sa integrisanim menadžmentom kablova, police po meri sa integrisanim svetlom, fotelju za odmor i dekorativne akustične letvice.",
    tags: ["Home Office", "Radna soba", "Police po meri", "Corona Renderer", "3ds Max"],
    specifications: [
      { label: "Render sistem", value: "Corona Renderer" },
      { label: "Dispozicija", value: "Ergonomski radni sto + zona za odmor" },
      { label: "Rasveta", value: "Difuzna dnevna svetlost i ciljana radna rasveta" },
      { label: "Akcenti", value: "Akustične zidne lamele i topla ambijentalna rasveta" },
      { label: "Broj kadrova", value: "6 detaljnih 3D rendera" }
    ]
  },
  {
    id: "osnova-kuce-autocad",
    title: "Glavna arhitektonska osnova kuće",
    subtitle: "Tehnički 2D plan dispozicije i organizacije prostora",
    category: "autocad",
    categoryLabel: "AutoCAD",
    year: "2026",
    location: "Novi Sad, Srbija",
    area: "100 m²",
    software: ["AutoCAD", "2D Detalji"],
    image: "/images/projects/house-plan.webp",
    gallery: [
      "/images/projects/house-plan.webp"
    ],
    description: "Tehnička 2D razrada osnove porodične kuće u AutoCAD-u sa definisanom funkcionalnom organizacijom, kotiranjem svih prostorija, pozicijama unutrašnje stolarije i dispozicijom nameštaja uz poštovanje ergonomskih standarda kretanja.",
    tags: ["AutoCAD", "Osnova kuće", "Arhitektonski crtež", "Dispozicija", "Izvođački plan"],
    specifications: [
      { label: "CAD alat", value: "Autodesk AutoCAD" },
      { label: "Tip nacrta", value: "Arhitektonska osnova sa dispozicijom nameštaja" },
      { label: "Standard", value: "Standardizovani lejeri, kote i oznake prostorija" },
      { label: "Merna jedinica", value: "Centimetri (cm) / Milimetri (mm)" },
      { label: "Format", value: "Tehnički nacrt visoke rezolucije" }
    ]
  }
];
