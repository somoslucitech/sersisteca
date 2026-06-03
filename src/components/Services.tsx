"use client";

import { motion } from "framer-motion";
import { Fire, ShieldCheck, HardHat, Broadcast } from "@phosphor-icons/react";

const services = [
  {
    title: "Sistemas Contra Incendios",
    description: "Diseño, instalación y mantenimiento bajo normas NFPA 13, 20 y 25. Bombas, rociadores y detección temprana.",
    icon: Fire,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Seguridad Electrónica",
    description: "CCTV inteligente, control de acceso industrial y sistemas de intrusión con monitoreo centralizado.",
    icon: ShieldCheck,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Consultoría Técnica",
    description: "Auditorías de riesgo, planes de emergencia y capacitación de personal bajo estándares internacionales.",
    icon: HardHat,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Detección y Alarma",
    description: "Sistemas de notificación masiva y detección inteligente de humo y calor para grandes superficies.",
    icon: Broadcast,
    color: "bg-indigo-50 text-indigo-600",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      {/* Connecting Pipe Detail */}
      <div className="absolute top-0 left-1/4 w-[1px] h-32 bg-gradient-to-b from-red-600/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-4 block">Nuestras Capacidades</span>
            <h2 className="text-4xl md:text-6xl font-semibold text-zinc-950 tracking-tight leading-none">
              Soluciones de ingeniería <br /> sin compromisos.
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs text-sm leading-relaxed pb-2">
            Cubrimos todo el espectro de la seguridad industrial con equipos de última generación y personal certificado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2rem] border border-zinc-100 hover:border-blue-100 hover:bg-zinc-50/50 transition-all duration-500 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={32} weight="duotone" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
