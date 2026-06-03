import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Sersisteca | Seguridad Industrial y Electrónica",
  description: "Diseño, suministro, instalación y mantenimiento de sistemas de seguridad industrial en Valencia, Venezuela. +25 años de trayectoria protegiendo a la gran industria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#fcfcfc] text-zinc-950 selection:bg-zinc-200">
        {children}
      </body>
    </html>
  );
}
