import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  // Link direto para a imagem do Google Drive enviada pelo usuário
  const userImageUrl = "https://lh3.googleusercontent.com/d/1fdwMjG2RWg8FWwC_AK8KsaWVk0AhscI0";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem Real do Usuário - Com visibilidade máxima para mostrar o produto real */}
      <div className="absolute inset-0 z-0">
        <img 
          src={userImageUrl} 
          alt="Coleção Império Facas" 
          className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
          style={{ 
            objectPosition: 'center 40%',
          }}
          onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
          onError={(e) => {
            // Fallback apenas se o Google Drive bloquear
            e.currentTarget.src = "https://images.unsplash.com/photo-1594047543255-4089856aef74?auto=format&fit=crop&q=80&w=1920";
          }}
        />
        {/* Overlay ultra leve para garantir contraste do texto sem apagar a nitidez das facas */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl flex flex-col items-center">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter uppercase leading-tight drop-shadow-[0_2px_15px_rgba(0,0,0,1)]">
          IMPÉRIO FACAS <br/> 
          <span className="gold-text text-3xl md:text-5xl block mt-2 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">Na Palma da Sua Mão</span>
        </h1>

        <div className="bg-black/70 backdrop-blur-lg p-6 rounded-lg mb-10 border border-[#C5A059]/40 max-w-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <p className="text-lg md:text-xl text-white leading-relaxed font-bold">
            Aqui você tem <span className="gold-text uppercase tracking-wider">peças personalizadas</span> com a sua <span className="gold-text">marca/logotipo</span>! 
            Participe dos nossos <strong className="text-white underline decoration-[#C5A059] decoration-2 underline-offset-4">SORTEIOS DIÁRIOS</strong> no WhatsApp.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 no-print">
          <a 
            href="https://chat.whatsapp.com/CDo0IMZzVgOJt3aOoRSlxg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gold-gradient text-black font-extrabold py-5 px-10 md:px-16 rounded-sm text-lg uppercase tracking-[0.2em] inline-flex items-center group hover-gold transition-all animate-gold-pulse shadow-2xl"
          >
            Entrar no Grupo
            <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-100 no-print">
        <span className="text-[10px] uppercase tracking-[0.4em] mb-4 gold-text font-bold drop-shadow-md">Não Perca Tempo</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#C5A059] to-transparent shadow-glow"></div>
      </div>
    </section>
  );
};