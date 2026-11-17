import { products } from "@/data/products";
export const normalizeText = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
export const getProducts = () => products;
export const getFeaturedProducts = () => products.filter((product) => product.featured);
export const getProductById = (id: number) => products.find((product) => product.id === id);