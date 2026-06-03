"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 overflow-hidden bg-zinc-950">
      
      {/* Background Video - Mobile */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 block md:hidden"
      >
        <source src="/videos/hero-bg-mobile.mp4" type="video/mp4" />
      </video>

      {/* Background Video - Desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Premium Overlay for Text Contrast and Section Transition */}
      <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-[1px]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/70 via-white/10 to-transparent" />
      
      {/* Bottom fade-out gradient to blend perfectly into the next section's white background */}
      <div className="absolute bottom-0 left-0 w-full h-48 z-0 bg-gradient-to-t from-white to-transparent" />

      {/* Blueprint Grid - kept subtle over the video */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-8">
            Sersisteca — Es ingeniería...
          </span>
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tight leading-[0.95] mb-8 text-zinc-950">
            Protección de Alto Nivel <br />
            <span className="text-blue-600">para la Industria.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-12 max-w-[55ch] mx-auto">
            Especialistas en sistemas contra incendios y seguridad electrónica bajo normativas <span className="text-zinc-950 font-bold uppercase tracking-wider">NFPA</span>. +25 años garantizando la continuidad de su operación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-blue-600 text-white px-10 py-5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98]"
            >
              Contactar Especialista
            </a>
            <a
              href="#servicios"
              className="bg-white border border-zinc-200 text-zinc-950 px-10 py-5 rounded-full text-sm font-bold hover:bg-zinc-50 transition-all active:scale-[0.98]"
            >
              Ver Soluciones
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
