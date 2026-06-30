import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiendita Vape Store | Bellavista, RD",
  description:
    "Los mejores vapes, pods y líquidos en Bellavista, Santo Domingo. Productos originales a precios justos.",
  keywords: ["vape", "pods", "líquidos", "desechables", "Bellavista", "Santo Domingo", "República Dominicana"],
  openGraph: {
    title: "Tiendita Vape Store",
    description: "Los mejores vapes en Bellavista, RD",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
