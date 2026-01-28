
import React from 'react';
import { Zap, Ticket, Scissors, Globe } from 'lucide-react';

const benefitList = [
  {
    icon: <Zap className="w-8 h-8 text-[#C5A059]" />,
    title: "Ofertas"
  },
  {
    icon: <Ticket className="w-8 h-8 text-[#C5A059]" />,
    title: "Sorteios Diários"
  },
  {
    icon: <Scissors className="w-8 h-8 text-[#C5A059]" />,
    title: "Peças"
  },
  {
    icon: <Globe className="w-8 h-8 text-[#C5A059]" />,
    title: "Enviamos para"
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl tracking-[0.1em] leading-tight uppercase font-light">
            Privilégio de fazer parte do <span className="gold-text font-serif italic">Grupo</span>
          </h2>
          <h2 className="text-4xl md:text-7xl tracking-[0.2em] leading-tight uppercase font-bold gold-text font-serif mt-2">
            Império Facas
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {benefitList.map((item, index) => (
            <div key={index} className="p-10 border border-gray-900 bg-black/40 hover:bg-black/60 hover:border-gold/30 transition-all duration-500 flex flex-col justify-between aspect-square group">
              <div className="group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.3)] transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[0.1em] gold-text mt-8">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
