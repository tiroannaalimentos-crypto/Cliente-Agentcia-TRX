
import React from 'react';

export const Authority: React.FC = () => {
  const userImageUrl = "https://lh3.googleusercontent.com/d/1fdwMjG2RWg8FWwC_AK8KsaWVk0AhscI0";

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-gray-900">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <img 
            src={userImageUrl} 
            alt="Detalhe Facas Império" 
            className="rounded-sm border border-[#C5A059]/30 shadow-2xl grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-6 -right-6 bg-matte p-6 border border-[#C5A059] shadow-2xl">
            <p className="gold-text font-bold text-2xl uppercase tracking-tighter">Autêntica</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Artesania de Elite</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl tracking-widest leading-tight">
            Forjadas para <span className="gold-text">Protagonistas</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Diferente das facas comuns, as lâminas da <strong>Império Facas</strong> carregam identidade. Seja o escudo do seu time, a marca da sua fazenda ou o logo da sua empresa, nós transformamos aço bruto em um legado. 
          </p>
          <div className="bg-matte/50 p-6 border-l-4 border-[#C5A059]">
            <p className="text-gray-200 text-lg italic leading-relaxed">
              "A faca do churrasco diz muito sobre quem está no comando do fogo."
            </p>
          </div>
          <div className="pt-4 grid grid-cols-2 gap-4">
             <div className="border border-gray-800 p-4">
               <p className="gold-text font-bold text-lg">Aço Premium</p>
               <p className="text-xs text-gray-500 uppercase">Têmpera profissional</p>
             </div>
             <div className="border border-gray-800 p-4">
               <p className="gold-text font-bold text-lg">Cabos em Resina</p>
               <p className="text-xs text-gray-500 uppercase">Durabilidade extrema</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
