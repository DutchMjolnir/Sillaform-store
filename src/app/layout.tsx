import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
export const metadata:Metadata={title:{default:"SillaForma",template:"%s | SillaForma"},description:"Catálogo de sillas ergonómicas para oficina, estudio y gaming."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body><Header/><main className="mx-auto min-h-[75vh] max-w-6xl px-5 py-10">{children}</main><Footer/></body></html>}