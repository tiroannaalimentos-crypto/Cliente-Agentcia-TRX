
import React from 'react';

export const LogoSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col items-center justify-center`}>
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          {/* Gradiente complexo para simular o efeito metálico de ouro 3D */}
          <linearGradient id="gold-metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A6E2F" />
            <stop offset="20%" stopColor="#C5A059" />
            <stop offset="40%" stopColor="#FFFACD" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="80%" stopColor="#8E6D31" />
            <stop offset="100%" stopColor="#4D3B12" />
          </linearGradient>

          {/* Filtro para profundidade, relevo e sombra projetada (Drop Shadow) */}
          <filter id="luxury-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feOffset dx="0" dy="4" result="offsetBlur" />
            <feFlood floodColor="black" floodOpacity="0.7" result="color" />
            <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
            
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.2" specularExponent="25" lightingColor="#ffffff" result="spec">
              <fePointLight x="-5000" y="-10000" z="20000" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" result="spec" />
            
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="spec" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#luxury-glow)">
          {/* Coroa Real - Réplica do Design Original */}
          <path 
            d="M215 70 L225 45 L240 65 L250 35 L260 65 L275 45 L285 70 L285 95 L215 95 Z" 
            fill="url(#gold-metal-gradient)" 
          />
          <path d="M210 92 Q250 88 290 92 L290 100 Q250 96 210 100 Z" fill="url(#gold-metal-gradient)" />

          {/* Escudo com Borda Dupla */}
          <path 
            d="M195 110 C195 110 195 230 250 260 C305 230 305 110 305 110 L195 110 Z" 
            fill="none" 
            stroke="url(#gold-metal-gradient)" 
            strokeWidth="8" 
          />
          
          {/* Facas Cruzadas (Faca e Cutelo como na imagem) */}
          <g stroke="url(#gold-metal-gradient)" strokeWidth="6" strokeLinecap="round">
            {/* Cabo/Lâmina 1 */}
            <path d="M175 140 L280 230" />
            <path d="M170 135 L190 155" strokeWidth="12" />
            
            {/* Cabo/Lâmina 2 */}
            <path d="M325 140 L220 230" />
            <path d="M330 135 L310 155" strokeWidth="12" />
          </g>

          {/* O "I" Central com Serifa e Curva Superior */}
          <path 
            d="M242 135 H258 M250 135 V225 M242 225 H258" 
            stroke="url(#gold-metal-gradient)" 
            strokeWidth="14" 
            strokeLinecap="butt" 
          />
          <path d="M215 145 Q250 125 285 145" fill="none" stroke="url(#gold-metal-gradient)" strokeWidth="4" />

          {/* Nome da Marca: IMPÉRIO FACAS */}
          <text
            x="250"
            y="320"
            textAnchor="middle"
            fill="url(#gold-metal-gradient)"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "48px",
              fontWeight: "bold",
              letterSpacing: "4px",
              textTransform: "uppercase"
            }}
          >
            Império Facas
          </text>

          {/* Slogan: FACAS PERSONALIZADAS */}
          <text
            x="250"
            y="360"
            textAnchor="middle"
            fill="url(#gold-metal-gradient)"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              letterSpacing: "12px",
              textTransform: "uppercase",
              opacity: 0.9,
              fontWeight: "600"
            }}
          >
            Facas Personalizadas
          </text>
        </g>
      </svg>
    </div>
  );
};
