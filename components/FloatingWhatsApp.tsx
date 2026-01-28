import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://chat.whatsapp.com/CDo0IMZzVgOJt3aOoRSlxg" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 gold-gradient p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group animate-gold-pulse no-print"
      aria-label="WhatsApp Group"
    >
      <MessageCircle size={32} className="text-black" />
      <span className="absolute right-full mr-4 bg-matte border border-[#C5A059] text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
        Entrar no Grupo VIP
      </span>
    </a>
  );
};