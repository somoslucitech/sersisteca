"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden relative">
      {/* Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-zinc-950 flex items-center justify-center relative">
              {/* Background Detail */}
              <div className="absolute inset-0 opacity-20" 
                   style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              
              {/* Red Pipe Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[30%] left-0 w-full h-[2px] bg-red-600/40" />
                <div className="absolute top-0 left-[40%] w-[2px] h-full bg-red-600/40" />
                <div className="absolute top-[30%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
              </div>

              <div className="relative z-10 text-center p-12">
                <div className="text-sm uppercase tracking-[0.4em] text-zinc-500 font-bold mb-4">Established</div>
                <div className="text-7xl font-black text-white leading-none tracking-tighter">1999</div>
              </div>
            </div>

            {/* Floating Achievement */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-6 md:-right-12 bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-2xl max-w-[280px]"
            >
              <div className="text-5xl font-bold mb-2">+25</div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-100 leading-tight">Años de Excelencia Ininterrumpida</p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-6 block">Trayectoria Industrial</span>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-950 mb-10 leading-[1.05]">
              Compromiso técnico <br /> con el legado familiar.
            </h2>
            <div className="space-y-8 text-zinc-600 text-lg leading-relaxed">
              <p>
                Con raíces que se remontan a <span className="text-zinc-950 font-bold border-b-2 border-red-500/20">1988</span> como &quot;Servicios y Sistemas Técnicos Carlos Aponte&quot;, nuestra identidad como <span className="text-zinc-950 font-bold">Sersisteca C.A.</span> se formaliza en 1999 bajo la visión de elevar los estándares de protección industrial.
              </p>
              <p>
                Hoy, liderados por <span className="text-zinc-950 font-bold border-b-2 border-red-500/20">Leifer Aponte</span>, continuamos evolucionando, integrando tecnologías de vanguardia con la misma ética de trabajo que definió nuestro origen hace más de tres décadas.
              </p>
              <p className="text-base italic">
                &quot;No solo instalamos equipos, diseñamos tranquilidad para la gran industria.&quot;
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-12 pt-12 border-t border-zinc-100">
              <div>
                <p className="text-2xl font-bold text-zinc-950 mb-1">+50</p>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Clientes Corporativos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-950 mb-1">Valencia</p>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Sede Principal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
