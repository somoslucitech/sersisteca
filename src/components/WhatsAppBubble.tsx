"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function WhatsAppBubble() {
  const phoneNumber = "584241234567"; // Ejemplo
  const message = "Hola Sersisteca, me gustaría solicitar una consultoría sobre sus sistemas de seguridad.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsappLogo size={32} weight="fill" />
      <span className="absolute right-full mr-4 bg-white text-zinc-900 px-4 py-2 rounded-xl text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-100">
        ¿En qué podemos ayudarte?
      </span>
    </motion.a>
  );
}
