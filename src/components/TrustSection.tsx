"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Colgate", src: "/images/logos marcas/clientes/colgate.png" },
  { name: "Clorox", src: "/images/logos marcas/clientes/clorox.jpg" },
  { name: "Protinal", src: "/images/logos marcas/clientes/protinal.jpg" },
  { name: "Venvidrio", src: "/images/logos marcas/clientes/venvidrio.png" },
  { name: "Regional", src: "/images/logos marcas/clientes/Cerveceria regional.png" },
  { name: "Sinthesis", src: "/images/logos marcas/clientes/sinthesis.jpg" },
  { name: "G3 Logistica", src: "/images/logos marcas/clientes/G3 Logistica.jpg" },
  { name: "Anayasi", src: "/images/logos marcas/clientes/anayasi.jpg" },
];

const brands = [
  { name: "Hikvision", src: "/images/logos marcas/hikvision.jpg" },
  { name: "Notifier", src: "/images/logos marcas/notifier.jpg" },
  { name: "Hochiki", src: "/images/logos marcas/hochiki.jpg" },
  { name: "Ezviz", src: "/images/logos marcas/ezviz.png" },
  { name: "Vencontrol", src: "/images/logos marcas/vencontrol.png" },
  { name: "Sencamer", src: "/images/logos marcas/sencamer.jpg" },
];

export function TrustSection() {
  return (
    <section id="clientes" className="py-24 relative overflow-hidden bg-white/50 backdrop-blur-sm border-y border-zinc-100/50">
      {/* Blueprint Grid - Layered behind */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      
      {/* Connecting Pipes - Visual Narrative */}
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-red-600/10 via-red-600/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
            Cartera de Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-zinc-950 mb-6 tracking-tight">
            Confianza en cada operación.
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Garantizamos la continuidad operativa de las empresas más importantes del país con soluciones de ingeniería de alta disponibilidad.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee - Clients with edge masks */}
      <div className="relative z-10">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
        
        <div className="flex overflow-x-hidden">
          <div className="py-8 animate-marquee whitespace-nowrap flex items-center">
            {[...clients, ...clients].map((client, idx) => (
              <div 
                key={`${client.name}-${idx}`} 
                className="mx-8 md:mx-16 relative h-8 w-28 md:h-10 md:w-36 flex-shrink-0 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-700 cursor-pointer group"
              >
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold mb-6 block">Certificaciones & Normativas</span>
            <h3 className="text-3xl md:text-4xl font-semibold text-zinc-950 mb-8 leading-[1.1] tracking-tight">
              Acreditación nacional <br />y <span className="text-blue-600">mejores prácticas</span>.
            </h3>
            <p className="text-zinc-500 mb-12 text-lg leading-relaxed max-w-[45ch]">
              Nuestra ingeniería se fundamenta en el cumplimiento estricto de los protocolos <span className="text-zinc-900 font-bold tracking-wider">SENCAMER</span>, rigiéndonos bajo los estándares internacionales <span className="text-red-600 font-bold italic text-base">NFPA</span> en cada diseño.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-10">
              <div className="group relative">
                <div className="absolute -inset-4 bg-blue-50 rounded-2xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative h-20 w-40 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="/images/logos marcas/sencamer.jpg"
                    alt="Sencamer Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="hidden sm:block h-12 w-[1px] bg-zinc-100" />
              <div className="flex gap-10 sm:gap-8 items-center justify-center sm:justify-start">
                {brands.slice(0, 3).map((brand) => (
                  <div key={brand.name} className="relative h-6 w-16 opacity-30 hover:opacity-100 transition-opacity">
                    <Image src={brand.src} alt={brand.name} fill className="object-contain grayscale" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden bg-zinc-950 flex items-center justify-center p-12 group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#2563eb20_0,transparent_50%)]" />
            
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            <div className="absolute inset-0">
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" 
              />
              <div className="absolute top-[20%] left-0 w-full h-[1px] bg-red-600/20" />
              <div className="absolute bottom-0 right-[20%] w-[1px] h-full bg-red-600/20" />
              <div className="absolute top-[20%] right-[20%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
            </div>

            <div className="relative text-center">
              <div className="text-[10px] uppercase tracking-[0.5em] text-blue-500 font-bold mb-4">Engineering Standards</div>
              <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                NFPA <span className="text-red-600">COMPLIANCE</span>
              </div>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] max-w-[30ch] mx-auto">Sistemas diseñados bajo las mejores prácticas internacionales</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
