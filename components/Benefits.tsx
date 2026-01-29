import React from 'react';
import { Zap, Ticket, Scissors, Globe, Sparkles } from 'lucide-react';

const benefitList = [
  {
    icon: <Zap className="w-5 h-5 text-[#C5A059]" />,
    title: "Ofertas"
  },
  {
    icon: <Ticket className="w-5 h-5 text-[#C5A059]" />,
    title: "Sorteios Diários"
  },
  {
    icon: <Scissors className="w-5 h-5 text-[#C5A059]" />,
    title: "Peças"
  },
  {
    icon: <Globe className="w-5 h-5 text-[#C5A059]" />,
    title: "Enviamos Para"
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Moldura Azul de Prestígio */}
        <div className="border border-blue-400/20 p-8 md:p-14 relative bg-[#020202]">
          <div className="text-center mb-16">
            <p className="text-xl md:text-3xl tracking-[0.3em] uppercase font-light text-white mb-2 opacity-90">
              Privilégio de fazer parte do
            </p>
            <p className="text-2xl md:text-4xl gold-text font-serif italic mb-4">
              Grupo
            </p>
            <h2 className="text-4xl md:text-[6.5rem] tracking-[0.05em] uppercase font-bold gold-text font-serif leading-none drop-shadow-2xl">
              Império Facas
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefitList.map((item, index) => (
              <div key={index} className="p-8 border border-gray-900/40 bg-black flex flex-col justify-between aspect-[3/4.5] group transition-all duration-500 hover:border-[#C5A059]/30">
                <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <h3 className="text-[10px] md:text-xs font-serif uppercase tracking-[0.25em] gold-text leading-tight mt-auto font-bold">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Badge inferior de Oportunidade Única */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center space-x-3 border border-gray-800/60 bg-black px-6 py-2 rounded-full">
            <Sparkles size={12} className="text-[#C5A059]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-gray-500">Oportunidade Única</span>
          </div>
        </div>
      </div>
    </section>
  );
};