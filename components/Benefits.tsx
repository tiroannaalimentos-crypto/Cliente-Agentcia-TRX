
import React from 'react';
import { Zap, Ticket, Scissors, Globe } from 'lucide-react';

const benefitList = [
  {
    icon: <Zap className="w-8 h-8 text-[#C5A059]" />,
    title: "Ofertas exclusivas",
    desc: "Aos membros do Grupo."
  },
  {
    icon: <Ticket className="w-8 h-8 text-[#C5A059]" />,
    title: "Sorteios Diários",
    desc: "A Partir de R$ 15!"
  },
  {
    icon: <Scissors className="w-8 h-8 text-[#C5A059]" />,
    title: "Peças personalizadas e exclusiva",
    desc: "Temos peças exclusiva e personalizada pelo cliente."
  },
  {
    icon: <Globe className="w-8 h-8 text-[#C5A059]" />,
    title: "Enviamos para todos Brasil!",
    desc: "Enviamos para tudo brasil."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-matte">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl text-center mb-16 tracking-widest">
          Privilégio de fazer parte do <span className="gold-text">Grupo Império Facas</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitList.map((item, index) => (
            <div key={index} className="p-8 border border-gray-800 bg-black/50 hover:border-[#C5A059]/50 transition-colors group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter gold-text">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
