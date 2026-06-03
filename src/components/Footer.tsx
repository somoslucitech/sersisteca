"use client";

import Image from "next/image";
import Link from "next/link";
import { Envelope, Phone, MapPin, InstagramLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer id="contacto" className="bg-zinc-950 text-white pt-32 pb-12 overflow-hidden relative">
      {/* Mascot (Búho) - Más visible y con carácter */}
      <div className="absolute right-[-2%] bottom-[-2%] w-64 h-64 md:w-[450px] md:h-[450px] opacity-[0.08] pointer-events-none transition-all duration-1000 group-hover:opacity-10">
        <Image
          src="/images/buho.png"
          alt="Sersisteca Mascot Owl"
          fill
          className="object-contain"
        />
      </div>

      {/* Background Pipe Detail */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-red-600" />
        <div className="absolute top-1/3 right-0 w-full h-[1px] bg-red-600" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-10">
              <div className="relative h-12 w-48 brightness-0 invert">
                <Image
                  src="/images/logo.png"
                  alt="Sersisteca Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-zinc-500 max-w-sm text-lg leading-relaxed mb-10">
              Líderes en ingeniería de seguridad industrial. +25 años protegiendo el motor productivo de Venezuela con rigor técnico y normativo.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 border border-zinc-800 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 hover:border-blue-500/50 transition-colors">
                Sencamer
              </span>
              <span className="px-3 py-1 border border-zinc-800 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                Notifier
              </span>
              <span className="px-3 py-1 border border-zinc-800 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                Hochiki
              </span>
              <span className="px-3 py-1 border border-zinc-800 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                Hikvision
              </span>
              <span className="px-3 py-1 border border-zinc-800 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                Ezviz
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold mb-10 uppercase tracking-[0.2em] text-blue-500">Contacto Directo</h4>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <MapPin size={24} className="text-red-600 flex-shrink-0" weight="duotone" />
                <span className="text-zinc-400 text-sm leading-relaxed">
                  Calle Arévalo entre 24 de Junio y Av Lara, San Blas, Valencia, Carabobo.
                </span>
              </li>
              <li className="flex gap-5 items-center">
                <Phone size={24} className="text-blue-500 flex-shrink-0" weight="duotone" />
                <a href="tel:+584145856770" className="text-zinc-400 text-sm hover:text-white transition-colors font-bold">
                  +58 414 585 6770
                </a>
              </li>
              <li className="flex gap-5 items-center">
                <Envelope size={24} className="text-zinc-600 flex-shrink-0" weight="duotone" />
                <a href="mailto:contacto@sersisteca.com" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  contacto@sersisteca.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold mb-10 uppercase tracking-[0.2em] text-zinc-600">Conectar</h4>
            <div className="flex gap-6">
              <a 
                href="https://instagram.com/sersisteca.ve" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all group"
              >
                <InstagramLogo size={28} weight="duotone" className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-center">
          <p className="text-zinc-600 text-[11px] font-bold uppercase tracking-widest text-center">
            © {new Date().getFullYear()} Sersisteca, C.A. — Es ingeniería...
          </p>
        </div>
      </div>
    </footer>
  );
}
