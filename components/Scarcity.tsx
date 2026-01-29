import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export const Scarcity: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center space-x-2 bg-gold-900/5 text-[#C5A059] px-6 py-2 rounded-full mb-10 border border-[#C5A059]/10">
          <Sparkles size={14} />
          <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Exclusividade</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl mb-10 tracking-widest uppercase font-light">
          Adquira ou <span className="gold-text font-bold">ganhe uma peça de elite</span>
        </h2>
        
        <p className="text-gray-400 text-base md:text-lg mb-16 leading-relaxed max-w-4xl mx-auto opacity-80">
          Na Império Facas, cada detalhe importa. Já entregamos <strong>mais de 3.000 facas artesanais</strong> para todo o Brasil. Peças em Aço Damasco, Inox e personalizações exclusivas que passam por um rigoroso processo de têmpera.
        </p>
        
        <div className="bg-black p-0 border border-[#C5A059]/60 relative mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center divide-y md:divide-y-0 md:divide-x divide-gray-900">
                <div className="py-12 px-4">
                    <p className="text-4xl font-bold gold-text tracking-tighter mb-1">+3.000</p>
                    <p className="text-[9px] text-gray-500 tracking-[0.3em] uppercase">Lâminas Entregues</p>
                </div>
                <div className="py-12 px-4">
                    <p className="text-2xl md:text-3xl font-bold gold-text tracking-[0.1em] uppercase mb-1">Personalizadas</p>
                    <p className="text-[9px] text-gray-500 tracking-[0.3em] uppercase">Peças Sob Medida</p>
                </div>
                <div className="py-12 px-4">
                    <p className="text-4xl font-bold gold-text tracking-[0.2em] uppercase mb-1">GRUPO</p>
                    <p className="text-[9px] text-gray-500 tracking-[0.3em] uppercase">Sorteios Diários</p>
                </div>
            </div>
        </div>

        <a 
          href="https://chat.whatsapp.com/CDo0IMZzVgOJt3aOoRSlxg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#C5A059] hover:bg-[#D4B579] text-black font-bold py-6 px-16 rounded-none text-xl uppercase tracking-[0.25em] inline-flex items-center transition-all shadow-2xl hover:scale-105"
        >
          Entrar no Grupo
          <ChevronRight className="ml-3" size={24} />
        </a>
      </div>
    </section>
  );
};