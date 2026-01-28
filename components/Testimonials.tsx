import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    name: "Henrique Arantes",
    location: "Florianópolis - SC",
    text: "Sou entusiasta de cutelaria e minha faca da Império é minha paixão. Corte preciso, peso perfeitamente equilibrado e um acabamento impressionante. Recomendo demais!",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Bruno",
    location: "Orleans - SC",
    text: "A faca é linda, robusta e já virou a estrela dos meus churrascos. Qualidade impressionante. Além disso, participar dos sorteios no WhatsApp virou meu passa tempo favorito. Já ganhei algumas!",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Gustavo Ferreira",
    location: "Criciúma - SC",
    text: "Comprei uma personalizada com o brasão da minha família. A entrega foi rápida e a embalagem em madeira é um espetáculo à parte. Vale cada centavo pela exclusividade.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    role: "Cliente VIP"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl tracking-widest uppercase mb-4">
            <span className="gold-text">Depoimentos</span>
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.4em] text-[10px] md:text-xs font-light">
            A satisfação de quem não aceita menos que a perfeição
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-matte p-8 border border-gray-900 relative hover:border-[#C5A059]/40 transition-all group flex flex-col h-full">
              <Quote className="absolute top-4 right-4 text-gray-800/30 group-hover:text-[#C5A059]/10 transition-colors" size={32} />
              
              <div className="flex items-center mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full border-2 border-[#C5A059] mr-4 object-cover shadow-lg" 
                />
                <div>
                  <p className="gold-text font-bold uppercase tracking-[0.15em] text-base leading-tight">{t.name}</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-1">{t.location}</p>
                </div>
              </div>

              <div className="flex mb-6 space-x-1">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} size={14} className="fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-10 leading-relaxed flex-grow text-sm md:text-base opacity-90">
                "{t.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-gray-800/50 pt-5 mt-auto">
                <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
                  {t.role || "Membro VIP"}
                </span>
                <div className="flex items-center text-green-600 text-[10px] uppercase font-bold tracking-widest">
                  <ShieldCheck size={14} className="mr-1.5" />
                  Verificado
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
