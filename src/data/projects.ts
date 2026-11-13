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
    id: "savremena-dnevna-zona",
    title: "Savremena dnevna zona & trpezarija",
    subtitle: "Fotorealistična 3D vizuelizacija otvorenog koncepta",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2026",
    location: "Novi Sad, Srbija",
    area: "52 m²",
    software: ["3ds Max 2024", "Corona Renderer"],
    image: "/images/projects/dnevna-1.webp",
    gallery: [
      "/images/projects/dnevna-1.webp",
      "/images/projects/dnevna-2.webp",
      "/images/projects/dnevna-3.webp",
      "/images/projects/dnevna-4.webp",
      "/images/projects/dnevna-5.webp"
    ],
    description: "Kompletna unutrašnja 3D vizuelizacija prostrane dnevne sobe povezane sa trpezarijom. Pažljivo balansirana kompozicija prirodnog dnevnog svetla i skrivene tople ambijentalne rasvete, uz naglašene teksture prirodnog drveta, mekog bukle štofa i mermernih detalja.",
    tags: ["Dnevna soba", "Trpezarija", "Corona Renderer", "3D CGI", "Fotorealizam"],
    specifications: [
      { label: "Render sistem", value: "Corona Renderer (Fizikalna kamera)" },
      { label: "Osvetljenje", value: "Sun & Sky prirodno svetlo + 2700K LED akcenti" },
      { label: "Materijali", value: "Prirodni furnir hrasta, travertin, bukle tkanina" },
      { label: "Postprodukcija", value: "Corona VFB kolor balans i toniranje" },
      { label: "Broj kadrova", value: "5 fotorealističnih 3D rendera" }
    ]
  },
  {
    id: "kuhinja-po-meri",
    title: "Minimalistička kuhinja sa ostrvom",
    subtitle: "3D modelovanje stolarije i studija materijala",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2026",
    location: "Novi Sad, Srbija",
    area: "18 m²",
    software: ["3ds Max 2024", "Corona Renderer", "AutoCAD"],
    image: "/images/projects/kuhinja-1.webp",
    gallery: [
      "/images/projects/kuhinja-1.webp",
      "/images/projects/kuhinja-2.webp",
      "/images/projects/kuhinja-3.webp",
      "/images/projects/kuhinja-4.webp",
      "/images/projects/kuhinja-5.webp"
    ],
    description: "Projektovanje i vizuelizacija savremene kuhinje sa monolitnim radnim ostrvom. Fokus na čistim linijama bez vidljivih ručica (gola profil), integrisanoj radnoj rasveti ispod gornjih ormarića i harmoniji mat tamnih frontova sa kamenom radnom pločom.",
    tags: ["Kuhinja po meri", "Kuhinjsko ostrvo", "Corona Renderer", "Dizajn enterijera"],
    specifications: [
      { label: "Render sistem", value: "Corona Renderer" },
      { label: "Stolarski detalji", value: "Frontovi bez ručica sa pocket mehanizmom" },
      { label: "Materijali", value: "Mat lakirani medijapan, kompozitni kvarc, tamni hrast" },
      { label: "Rasveta", value: "Ugradne LED linije 3000K i dekorativne visilice" },
      { label: "Broj kadrova", value: "5 detaljnih 3D rendera" }
    ]
  },
  {
    id: "radna-soba-home-office",
    title: "Kućna kancelarija & biblioteka",
    subtitle: "Multifunkcionalni enterijer za rad i fokus",
    category: "3dsmax",
    categoryLabel: "3ds Max",
    year: "2026",
    location: "Novi Sad, Srbija",
    area: "24 m²",
    software: ["3ds Max 2024", "Corona Renderer"],
    image: "/images/projects/radna-soba-1.webp",
    gallery: [
      "/images/projects/radna-soba-1.webp",
      "/images/projects/radna-soba-2.webp",
      "/images/projects/radna-soba-3.webp",
      "/images/projects/radna-soba-4.webp",
      "/images/projects/radna-soba-5.webp",
      "/images/projects/radna-soba-6.webp",
      "/images/projects/radna-soba-7.webp"
    ],
    description: "Kompleksna vizuelizacija radnog prostora prilagođenog produktivnosti i miru. Projekat obuhvata radni sto sa integrisanim menadžmentom kablova, police za knjige pune visine sa integrisanim svetlom, fotelju za odmor i dekorativne akustične letvice.",
    tags: ["Home Office", "Radna soba", "Police po meri", "Corona Renderer", "3ds Max"],
    specifications: [
      { label: "Render sistem", value: "Corona Renderer" },
      { label: "Dispozicija", value: "Ergonomski radni sto + zona za odmor" },
      { label: "Rasveta", value: "Difuzna dnevna svetlost i ciljana radna rasveta" },
      { label: "Akcenti", value: "Akustične zidne lamele i topla bibliotečka rasveta" },
      { label: "Broj kadrova", value: "7 detaljnih 3D rendera" }
    ]
  },
  {
    id: "osnova-stana-autocad",
    title: "Glavna arhitektonska osnova stana",
    subtitle: "Tehnički 2D plan dispozicije i organizacije prostora",
    category: "autocad",
    categoryLabel: "AutoCAD",
    year: "2026",
    location: "Novi Sad, Srbija",
    area: "125 m²",
    software: ["AutoCAD 2024", "Arhitektonska razrada"],
    image: "/images/projects/house-plan.webp",
    gallery: [
      "/images/projects/house-plan.webp"
    ],
    description: "Tehnička 2D razrada osnove stana u AutoCAD-u sa definisanom funkcionalnom organizacijom, kotiranjem svih prostorija, pozicijama unutrašnje stolarije i dispozicijom nameštaja uz poštovanje ergonomskih standarda kretanja.",
    tags: ["AutoCAD", "Osnova stana", "Arhitektonski crtež", "Dispozicija", "Izvođački plan"],
    specifications: [
      { label: "CAD alat", value: "Autodesk AutoCAD" },
      { label: "Tip nacrta", value: "Arhitektonska osnova sa dispozicijom nameštaja" },
      { label: "Standard", value: "Standardizovani lejeri, kote i oznake prostorija" },
      { label: "Merna jedinica", value: "Centimetri (cm) / Milimetri (mm)" },
      { label: "Format", value: "Tehnički nacrt visoke rezolucije" }
    ]
  }
];
