import React from 'react';
import { Sparkles } from 'lucide-react';

export const Scarcity: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center space-x-2 bg-gold-900/10 text-[#C5A059] px-6 py-2 rounded-full mb-10 border border-[#C5A059]/10 animate-pulse">
          <Sparkles size={16} />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Oportunidade Única</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl mb-10 tracking-widest uppercase font-light">
          Adquira ou <span className="gold-text font-bold">ganhe uma peça de elite</span>
        </h2>
        
        <p className="text-gray-400 text-base md:text-lg mb-16 leading-relaxed max-w-4xl mx-auto opacity-90">
          Na Império Facas, cada detalhe importa. Já entregamos <strong>mais de 3.000 facas artesanais</strong> para todo o Brasil. Peças em Aço Damasco, Inox e personalizações exclusivas (times, marcas e temas) que passam por um rigoroso processo de têmpera. Faça parte da nossa elite de colecionadores.
        </p>
        
        <div className="bg-black p-0 border border-[#C5A059] relative mb-16 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                {/* Lâminas Entregues */}
                <div className="py-10 px-4">
                    <p className="text-4xl font-bold gold-text tracking-tighter mb-1">+3.000</p>
                    <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Lâminas Entregues</p>
                </div>
                
                {/* Peças Sob Medida */}
                <div className="py-10 px-4 border-y md:border-y-0 md:border-x border-gray-800/80">
                    <p className="text-2xl md:text-3xl font-bold gold-text tracking-[0.05em] uppercase mb-1">Personalizadas</p>
                    <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Peças Sob Medida</p>
                </div>
                
                {/* Sorteios Diários / GRUPO */}
                <div className="py-10 px-4">
                    <p className="text-4xl font-bold gold-text tracking-[0.2em] uppercase mb-1">GRUPO</p>
                    <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Sorteios Diários</p>
                </div>
            </div>
        </div>

        <a 
          href="https://chat.whatsapp.com/CDo0IMZzVgOJt3aOoRSlxg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#C5A059] hover:bg-[#D4B579] text-black font-bold py-5 px-16 rounded-none text-lg uppercase tracking-[0.2em] inline-block transition-all shadow-xl hover:scale-105 active:scale-95"
        >
          Entrar no Grupo
        </a>
      </div>
    </section>
  );
};