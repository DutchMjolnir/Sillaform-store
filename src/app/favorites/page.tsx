import { FavoritesGrid } from "@/components/FavoritesGrid";
import { getProducts } from "@/lib/products";
export const metadata={title:"Favoritos"};
export default function FavoritesPage(){return <><header className="mb-10"><p className="text-sm font-bold uppercase tracking-widest text-[#c96f3b]">Tu selección</p><h1 className="mt-2 text-4xl font-black">Sillas favoritas</h1><p className="mt-3 text-stone-600">La selección se guarda en este navegador y permanece después de recargar.</p></header><FavoritesGrid products={getProducts()}/></>}