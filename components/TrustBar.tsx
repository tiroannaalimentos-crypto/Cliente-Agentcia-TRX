import React from 'react';
import { ShieldCheck, Truck, CreditCard, Lock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-black py-4 border-b border-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-stretch">
          <div className="flex items-center justify-center space-x-3 py-2">
            <ShieldCheck className="text-[#C5A059]" size={16} />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-200 leading-tight">Compra Segura</p>
              <p className="text-[7px] text-gray-500 uppercase tracking-widest leading-none">Criptografia de ponta</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 py-2">
            <Truck className="text-[#C5A059]" size={16} />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-200 leading-tight">Envio Nacional</p>
              <p className="text-[7px] text-gray-500 uppercase tracking-widest leading-none">Seguro Total incluso</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 py-2">
            <CreditCard className="text-[#C5A059]" size={16} />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-200 leading-tight">Parcelamento</p>
              <p className="text-[7px] text-gray-500 uppercase tracking-widest leading-none">Até 12x no Cartão</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 border border-blue-400/30 p-2 px-4 bg-blue-400/5">
            <Lock className="text-[#C5A059]" size={16} />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-200 leading-tight">Garantia Vitalícia</p>
              <p className="text-[7px] text-gray-500 uppercase tracking-widest leading-none">No fio e na estrutura</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};