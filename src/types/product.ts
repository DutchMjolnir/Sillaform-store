export type ChairCategory = "Oficina" | "Gaming" | "Ejecutiva" | "Compacta";

export interface Product {
  id: number;
  name: string;
  description: string;
  category: ChairCategory;
  price: number;
  rating: number;
  stock: number;
  featured: boolean;
  accent: string;
  icon: string;
  features: string[];
}