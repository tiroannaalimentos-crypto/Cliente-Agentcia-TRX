
import React from 'react';
import { ShieldCheck, Truck, CreditCard, Lock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-black py-10 border-y border-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="flex items-center justify-center space-x-3 opacity-80 hover:opacity-100 transition-all">
            <ShieldCheck className="gold-text" size={20} />
            <div className="text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] leading-none text-gray-200">Compra Segura</p>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">Criptografia de ponta</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 opacity-80 hover:opacity-100 transition-all">
            <Truck className="gold-text" size={20} />
            <div className="text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] leading-none text-gray-200">Envio Nacional</p>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">Seguro Total incluso</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 opacity-80 hover:opacity-100 transition-all">
            <CreditCard className="gold-text" size={20} />
            <div className="text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] leading-none text-gray-200">Parcelamento</p>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">Até 12x no Cartão</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 opacity-80 hover:opacity-100 transition-all border border-blue-400/30 p-4 relative group">
            <Lock className="gold-text" size={20} />
            <div className="text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] leading-none text-gray-200">Garantia Vitalícia</p>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">No fio e na estrutura</p>
            </div>
            {/* Efeito de destaque azul conforme screenshot */}
            <div className="absolute inset-0 border border-blue-400/20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
