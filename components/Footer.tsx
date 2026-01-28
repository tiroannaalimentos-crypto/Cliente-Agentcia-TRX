
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-black border-t border-gray-900 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 font-bold">
          Império Facas © {new Date().getFullYear()} - Cutelaria de Elite
        </p>
        <p className="text-[10px] text-gray-700 uppercase tracking-widest max-w-lg mx-auto leading-loose px-4">
          A tradição do aço em suas mãos. Nossas peças são ferramentas de precisão destinadas ao uso responsável por profissionais e entusiastas. Siga-nos no ritual do fogo e do aço.
        </p>
        <div className="mt-8 flex justify-center space-x-6 text-[10px] text-gray-800 uppercase tracking-tighter no-print">
          <span>Política de Privacidade</span>
          <span>Termos de Uso</span>
          <span>Envios e Devoluções</span>
        </div>
      </div>
    </footer>
  );
};
