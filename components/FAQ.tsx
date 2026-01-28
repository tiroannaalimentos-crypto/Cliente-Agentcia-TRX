
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    q: "O grupo é pago?",
    a: "Não. O acesso ao Grupo VIP Império Facas é 100% gratuito. "
  },
  {
    q: "Como fico sabendo dos sorteios?",
    a: "Todos os sorteios são informados dentro do grupo. Basta seguir as instruções, é bem simples."
  },
  {
    q: "Qual a frequência dos sorteios?",
    a: "Os sorteios são realizados todos os dias, de um a dois por dia"
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl text-center mb-16 tracking-widest">
          Dúvidas <span className="gold-text">Frequentes</span>
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-800 bg-matte/50 overflow-hidden transition-all"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-black/40 transition-colors"
              >
                <span className="font-bold uppercase tracking-wider text-gray-200">{item.q}</span>
                {openIndex === index ? <Minus className="gold-text" /> : <Plus className="gold-text" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 p-6 pt-0 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 leading-relaxed italic">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
