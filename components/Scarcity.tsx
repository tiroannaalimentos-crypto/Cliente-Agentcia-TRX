
import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export const Scarcity: React.FC = () => {
  return (
    <section className="py-24 bg-matte relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center space-x-2 bg-gold-900/20 text-[#C5A059] px-6 py-2 rounded-full mb-8 border border-[#C5A059]/20 animate-pulse">
          <Sparkles size={18} />
          <span className="text-sm font-bold uppercase tracking-widest">Oportunidade Única</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl mb-8 tracking-widest uppercase">
          Adquira ou <span className="gold-text">ganhe uma peça de elite</span>
        </h2>
        
        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
          Na Império Facas, cada detalhe importa. Já entregamos <strong>mais de 3.000 facas artesanais</strong> para todo o Brasil. Peças em Aço Damasco, Inox e personalizações exclusivas (times, marcas e temas) que passam por um rigoroso processo de têmpera. Faça parte da nossa elite de colecionadores.
        </p>
        
        <div className="bg-black p-10 border-2 border-[#C5A059] relative mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center uppercase tracking-tighter">
                <div>
                    <p className="text-3xl font-bold gold-text">+3.000</p>
                    <p className="text-[10px] text-gray-500 tracking-[0.2em] mt-1">Lâminas Entregues</p>
                </div>
                <div className="md:border-x border-gray-800">
                    <p className="text-3xl font-bold gold-text">Personalizadas</p>
                    <p className="text-[10px] text-gray-500 tracking-[0.2em] mt-1">Peças Sob Medida</p>
                </div>
                <div>
                    <p className="text-3xl font-bold gold-text">VIP</p>
                    <p className="text-[10px] text-gray-500 tracking-[0.2em] mt-1">Sorteios Diários</p>
                </div>
            </div>
        </div>

        <a 
          href="https://chat.whatsapp.com/CDo0IMZzVgOJt3aOoRSlxg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="gold-gradient text-black font-bold py-5 px-14 rounded-sm text-xl uppercase tracking-widest inline-flex items-center hover-gold transition-all shadow-2xl"
        >
          Entrar no Grupo
          <ChevronRight className="ml-2 w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
