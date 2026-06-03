"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-100 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative h-8 w-32 md:h-10 md:w-40 transition-opacity hover:opacity-90">
          <Image
            src="/images/logo.png"
            alt="Sersisteca Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {["Inicio", "Servicios", "Clientes", "Nosotros"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-bold text-zinc-600 hover:text-blue-600 transition-colors uppercase tracking-[0.2em]"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/10 active:scale-[0.98]"
          >
            Contáctanos
          </Link>
        </div>

        <button className="md:hidden text-zinc-950 p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
