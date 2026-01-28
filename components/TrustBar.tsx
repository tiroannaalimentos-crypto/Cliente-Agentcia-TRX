
import React from 'react';
import { ShieldCheck, Truck, CreditCard, Lock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-black py-8 border-y border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center justify-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <ShieldCheck className="gold-text" size={24} />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-none">Compra Segura</p>
              <p className="text-[8px] text-gray-500 uppercase tracking-tighter">Criptografia de ponta</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <Truck className="gold-text" size={24} />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-none">Envio Nacional</p>
              <p className="text-[8px] text-gray-500 uppercase tracking-tighter">Seguro Total incluso</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <CreditCard className="gold-text" size={24} />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-none">Parcelamento</p>
              <p className="text-[8px] text-gray-500 uppercase tracking-tighter">Até 12x no Cartão</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <Lock className="gold-text" size={24} />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-none">Garantia Vitalícia</p>
              <p className="text-[8px] text-gray-500 uppercase tracking-tighter">No fio e na estrutura</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
