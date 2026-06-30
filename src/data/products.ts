export type Category = "Desechables" | "Pods" | "Líquidos" | "Accesorios";

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: Category;
  price: number;
  puffs?: number;
  nicotine?: string;
  flavors: string[];
  description: string;
  image: string;
  badge?: string;
  inStock: boolean;
  features?: string[];
}

export const products: Product[] = [
  // ─── GEEK BAR PULSE X ───────────────────────────────────────
  {
    id: 1,
    name: "Geek Bar Pulse X 25000",
    brand: "Geek Bar",
    category: "Desechables",
    price: 1300,
    puffs: 25000,
    nicotine: "50mg",
    flavors: ["Cool Mint"],
    description:
      "El desechable más avanzado del mercado. Pantalla 3D curva, modo Pulse (15K puffs) y modo Regular (25K puffs). Chip NPU para vapor constante de principio a fin.",
    image: "/products/geekbar-pulse-x.jpeg",
    badge: "Top",
    inStock: true,
    features: ["Pantalla 3D curva", "Modo Pulse 15K", "Modo Regular 25K", "Chip NPU"],
  },
  // ─── GEEK BAR PULSE 15000 ────────────────────────────────────
  {
    id: 2,
    name: "Geek Bar Pulse 15000",
    brand: "Geek Bar",
    category: "Desechables",
    price: 1200,
    puffs: 15000,
    nicotine: "50mg",
    flavors: ["Frozen Cherry Apple"],
    description:
      "Combinación explosiva de cereza y manzana con un toque helado. Modo Pulse 7,500 puffs de vapor denso o modo Regular hasta 15,000. Batería recargable incluida.",
    image: "/products/geekbar-cherry-apple.jpeg",
    badge: "Nuevo",
    inStock: true,
    features: ["Modo Pulse 7.5K", "Modo Regular 15K", "Chip NPU", "Recargable"],
  },
  {
    id: 3,
    name: "Geek Bar Pulse 15000",
    brand: "Geek Bar",
    category: "Desechables",
    price: 1200,
    puffs: 15000,
    nicotine: "50mg",
    flavors: ["Frozen White Grape"],
    description:
      "Uva blanca helada de sabor suave y refrescante. Dos modos de vapeo para elegir: Pulse (intensidad máxima) o Regular (larga duración). Niebla abundante con cada hit.",
    image: "/products/geekbar-white-grape.jpeg",
    inStock: true,
    features: ["Modo Pulse 7.5K", "Modo Regular 15K", "Chip NPU", "Recargable"],
  },
  {
    id: 4,
    name: "Geek Bar Pulse 15000",
    brand: "Geek Bar",
    category: "Desechables",
    price: 1200,
    puffs: 15000,
    nicotine: "50mg",
    flavors: ["Frozen Watermelon"],
    description:
      "Sandía fresca al máximo, con el frío característico del Pulse. Hasta 15,000 puffs suaves y consistentes. Uno de los sabores más pedidos de la colección.",
    image: "/products/geekbar-watermelon.jpeg",
    badge: "Más Vendido",
    inStock: true,
    features: ["Modo Pulse 7.5K", "Modo Regular 15K", "Chip NPU", "Recargable"],
  },
  // ─── ELF BAR BC15K ───────────────────────────────────────────
  {
    id: 5,
    name: "Elf Bar BC15K",
    brand: "Elf Bar",
    category: "Desechables",
    price: 1000,
    puffs: 15000,
    nicotine: "50mg",
    flavors: ["Blue Razz Ice", "Bubbaloo Grape", "Miami Mint"],
    description:
      "El clásico de Elf Bar renovado con 15,000 puffs. Modo Turbo para vapor ultra denso o Smooth para una experiencia más suave. Pantalla de batería y e-líquido integrada.",
    image: "/products/elfbar-bc15k.jpeg",
    badge: "Popular",
    inStock: true,
    features: ["Modo Turbo", "Modo Smooth", "Pantalla batería", "3 sabores disp."],
  },
  // ─── FRIQBAR VIZ ZEL 8000 ────────────────────────────────────
  {
    id: 6,
    name: "Friqbar Viz Zel — Con Batería",
    brand: "Friqbar",
    category: "Desechables",
    price: 600,
    puffs: 8000,
    nicotine: "50mg",
    flavors: ["Peppermint Strawberry Ice", "Pinafire"],
    description:
      "Viz Zel versión con batería recargable. Malla DuoMesh para vapor uniforme y denso. Sabores tropicales únicos: Peppermint Strawberry Ice y Pinafire. Más duración, mismo sabor brutal.",
    image: "/products/vizzel-group.jpeg",
    inStock: true,
    features: ["Con batería", "Malla DuoMesh", "8000 puffs", "Recargable"],
  },
  {
    id: 7,
    name: "Friqbar Viz Zel — Pod",
    brand: "Friqbar",
    category: "Desechables",
    price: 500,
    puffs: 8000,
    nicotine: "50mg",
    flavors: ["Peppermint Ice", "Coco Tropical"],
    description:
      "Viz Zel versión pod. Compacto, ligero y potente. Malla DuoMesh garantiza un vapor limpio y consistente en cada calada. Ideal para llevar en el bolsillo todo el día.",
    image: "/products/vizzel-peppermint.jpeg",
    inStock: true,
    features: ["Formato pod", "Malla DuoMesh", "8000 puffs"],
  },
  // ─── WAKA POCKET 6000 ────────────────────────────────────────
  {
    id: 8,
    name: "Waka Pocket 6000",
    brand: "Waka",
    category: "Desechables",
    price: 800,
    puffs: 6000,
    nicotine: "5%",
    flavors: ["Cherry Bomb"],
    description:
      "Formato ultra compacto con tecnología Smoother Airflow para un hit suave y controlado. Cherry Bomb: cereza explosiva con fondo dulce. 5% nicotina, satisfacción garantizada.",
    image: "/products/waka-cherry-bomb.jpeg",
    inStock: true,
    features: ["Smoother Airflow", "Formato pocket", "5% Nicotina"],
  },
  {
    id: 9,
    name: "Waka Pocket 6000",
    brand: "Waka",
    category: "Desechables",
    price: 800,
    puffs: 6000,
    nicotine: "5%",
    flavors: ["Grape"],
    description:
      "Uva morada intensa con la tecnología Smoother Airflow de Waka. 6,000 puffs en un cuerpo pequeño y elegante. Hit limpio y constante de inicio a fin.",
    image: "/products/waka-grape.jpeg",
    inStock: true,
    features: ["Smoother Airflow", "Formato pocket", "5% Nicotina"],
  },
  // ─── WAKA BLAST 36000 ────────────────────────────────────────
  {
    id: 10,
    name: "Waka Blast 36000",
    brand: "Waka",
    category: "Desechables",
    price: 1200,
    puffs: 36000,
    nicotine: "5%",
    flavors: ["Icy Mint"],
    description:
      "El desechable de mayor duración en stock: 36,000 puffs. Función Ice Blast activable manteniendo el botón para un frío extra intenso. Pantalla digital con indicador de batería y e-líquido.",
    image: "/products/waka-blast-1.jpeg",
    badge: "Premium",
    inStock: true,
    features: ["36,000 puffs", "+Ice Blast", "Pantalla digital", "Recargable"],
  },
  {
    id: 11,
    name: "Waka Blast 36000",
    brand: "Waka",
    category: "Desechables",
    price: 1200,
    puffs: 36000,
    nicotine: "5%",
    flavors: ["Icy Mint"],
    description:
      "Segunda unidad disponible del Waka Blast. 36,000 puffs con Ice Blast y pantalla digital. Perfecto para quien no quiere cambiar de vape en semanas. Stock limitado.",
    image: "/products/waka-blast-2.jpeg",
    inStock: true,
    features: ["36,000 puffs", "+Ice Blast", "Pantalla digital", "Recargable"],
  },
];

export const categories: Category[] = ["Desechables", "Pods", "Líquidos", "Accesorios"];
