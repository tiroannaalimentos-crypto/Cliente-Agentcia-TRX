
import React from 'react';
import { Instagram } from 'lucide-react';

const galleryItems = [
  {
    url: "https://lh3.googleusercontent.com/d/1Gtjo73SFphooCXJK0qpZwxAqlqASSDe4",
    title: "Coleção Premium Império"
  },
  {
    url: "https://lh3.googleusercontent.com/d/17Bzwjbol2Q7ATKhb11GxyBaYqrNfKzv7",
    title: "Personalização a Laser"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1UBulDlld4pP1mY__nboYUnfnbwljjcQQ",
    title: "Tradição em Cada Corte"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1lgqHyD08etkv8ZOKN2tFNgv6qKASQb0P",
    title: "Lâminas de Performance"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1sSXn5nnejAuypatDjKvAqsS_prm_a4LF",
    title: "O Ritual do Churrasco"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1UHzDDcWXcGZCApEWw-27RNm1Wkm0OFqA",
    title: "Acabamento Artesanal"
  }
];

export const SocialGallery: React.FC = () => {
  return (
    <section className="py-24 bg-matte overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 border-b border-gray-800/50 pb-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl tracking-[0.2em] uppercase mb-6 font-light">
              IMPÉRIO <span className="gold-text font-bold">EM AÇÃO</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base opacity-80">
              Onde o fogo encontra a arte. Veja a qualidade das nossas lâminas personalizadas em detalhes.
            </p>
          </div>
          <div className="text-right hidden md:flex flex-col items-end">
            <a 
              href="https://instagram.com/imperiofacas_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 mb-2"
            >
              <span className="text-2xl font-bold gold-text tracking-tight group-hover:opacity-80 transition-opacity">@imperiofacas_</span>
              <Instagram className="gold-text group-hover:scale-110 transition-transform" size={24} />
            </a>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.6em] font-light leading-none">
              SIGA-NOS NO <br/> INSTAGRAM
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {galleryItems.map((img, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden group border border-gray-900 bg-black">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  if (!e.currentTarget.src.includes('unsplash')) {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1594047543255-4089856aef74?auto=format&fit=crop&q=80&w=800&sig=${i}`;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                <p className="gold-text text-xs font-bold uppercase tracking-[0.4em] mb-2">{img.title}</p>
                <div className="h-0.5 w-16 bg-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
