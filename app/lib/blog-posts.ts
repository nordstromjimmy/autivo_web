export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  keywords: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "mina-fordon-alternativ",
    title: "Mina Fordon stängs ner – här är bästa alternativen",
    excerpt:
      "Transportstyrelsen stänger ner Mina Fordon. Upptäck moderna alternativ för att hålla koll på din bils historik och service.",
    category: "Nyheter",
    categoryColor: "from-orange-500 to-red-500",
    date: "2026-03-19",
    readTime: "5 min",
    author: "Autivo",
    image: "/blog/mina-fordon-hero.jpg",
    keywords: [
      "mina fordon",
      "alternativ",
      "transportstyrelsen",
      "bilapp",
      "digital servicebok",
    ],
  },
  {
    slug: "besiktningschecklista-2026",
    title: "Komplett besiktningschecklista 2026: Allt du behöver veta",
    excerpt:
      "Förbered dig inför besiktningen med vår detaljerade checklista. Lär dig vad kontrollanterna tittar på och hur du undviker vanliga fel.",
    category: "Besiktning",
    categoryColor: "from-green-500 to-emerald-500",
    date: "2026-03-18",
    readTime: "8 min",
    author: "Autivo",
    image: "/blog/besiktning-hero.jpg",
    keywords: [
      "besiktning",
      "checklista",
      "2026",
      "förberedelse",
      "bilbesiktning",
    ],
  },
  {
    slug: "servicehistorik-viktig",
    title: "Varför är en komplett servicehistorik viktig för din bil?",
    excerpt:
      "En fullständig servicehistorik kan öka din bils värde med upp till 20%. Lär dig varför dokumentation är så viktigt och hur du gör det enkelt.",
    category: "Service & Underhåll",
    categoryColor: "from-blue-500 to-cyan-500",
    date: "2026-03-15",
    readTime: "6 min",
    author: "Autivo",
    image: "/blog/servicehistorik-hero.jpg",
    keywords: [
      "servicehistorik",
      "bilunderhåll",
      "andrahandsvärde",
      "dokumentation",
      "servicebok",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
