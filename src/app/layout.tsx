import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#060610",
};

export const metadata: Metadata = {
  title: "ASTRA | Carrera Comercial Gamificada - Vendé Productos para Mascotas",
  description:
    "Sumate a ASTRA: la carrera comercial gamificada de reventa de productos para mascotas. Ganá hasta $905,760/mes, subí de rango y desbloqueá recompensas.",
  keywords: [
    "ASTRA",
    "reseller",
    "productos mascotas",
    "gamificación",
    "carrera comercial",
    "ingreso extra",
    "Tucumán",
  ],
  openGraph: {
    title: "ASTRA | Carrera Comercial Gamificada",
    description:
      "Vendé productos para mascotas, subí de nivel y ganá más. La aventura empieza acá.",
    type: "website",
    locale: "es_AR",
  },
  robots: { index: true, follow: true },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ASTRA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
