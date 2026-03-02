export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  sizes: string[];
  colors: ProductColor[];
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Robe Élégante Soirée",
    price: 189,
    originalPrice: 249,
    category: "Robes",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Noir", hex: "#0B0B0B", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop" },
      { name: "Rose", hex: "#C2185B", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop" },
      { name: "Bordeaux", hex: "#800020", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop" },
    ],
    description: "Une robe élégante parfaite pour les soirées spéciales. Coupe flatteuse et tissu premium.",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Robe Cocktail Chic",
    price: 159,
    category: "Robes",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Ivoire", hex: "#FFFFF0", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop" },
      { name: "Noir", hex: "#0B0B0B", image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=600&h=800&fit=crop" },
      { name: "Bleu Nuit", hex: "#191970", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop" },
    ],
    description: "Robe cocktail moderne avec des détails raffinés. Idéale pour toutes les occasions.",
    isFeatured: true,
  },
  {
    id: "3",
    name: "Robe Longue Bohème",
    price: 219,
    originalPrice: 279,
    category: "Robes",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Terracotta", hex: "#CC4E24", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop" },
      { name: "Vert Sauge", hex: "#9CAF88", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop" },
      { name: "Crème", hex: "#FFFDD0", image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop" },
    ],
    description: "Robe longue fluide au style bohème chic. Parfaite pour l'été.",
    isNew: true,
  },
  {
    id: "4",
    name: "Robe Moulante Velours",
    price: 175,
    category: "Robes",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Bordeaux", hex: "#800020", image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&h=800&fit=crop" },
      { name: "Noir", hex: "#0B0B0B", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop" },
      { name: "Émeraude", hex: "#50C878", image: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=600&h=800&fit=crop" },
    ],
    description: "Robe moulante en velours luxueux. Coupe ajustée et élégante.",
    isFeatured: true,
  },
  {
    id: "5",
    name: "Robe Midi Plissée",
    price: 145,
    category: "Robes",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Rose Poudré", hex: "#E8B4B8", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=600&h=800&fit=crop" },
      { name: "Noir", hex: "#0B0B0B", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&q=80" },
      { name: "Camel", hex: "#C19A6B", image: "https://images.unsplash.com/photo-1502716119720-b23a1e3b3c35?w=600&h=800&fit=crop" },
    ],
    description: "Robe midi plissée au tombé fluide. Un classique intemporel.",
  },
  {
    id: "6",
    name: "Robe de Soirée Paillettes",
    price: 299,
    originalPrice: 399,
    category: "Robes",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Or", hex: "#FFD700", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop" },
      { name: "Argent", hex: "#C0C0C0", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop" },
      { name: "Noir", hex: "#0B0B0B", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707998?w=600&h=800&fit=crop" },
    ],
    description: "Robe de soirée glamour avec paillettes. Pour briller en toute occasion.",
    isNew: true,
    isFeatured: true,
  },
];

export const categories = ["Toutes", "Robes", "Tops", "Pantalons", "Accessoires"];
export const priceRanges = [
  { label: "Tous les prix", min: 0, max: Infinity },
  { label: "Moins de 150 DT", min: 0, max: 150 },
  { label: "150 - 200 DT", min: 150, max: 200 },
  { label: "200 - 300 DT", min: 200, max: 300 },
  { label: "Plus de 300 DT", min: 300, max: Infinity },
];
