
import React from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Scarcity } from './components/Scarcity';
import { Testimonials } from './components/Testimonials';
import { SocialGallery } from './components/SocialGallery';
import { TrustBar } from './components/TrustBar';
import { FAQ } from './components/FAQ';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-[#C5A059] selection:text-black">
      <Hero />
      <TrustBar />
      <Benefits />
      <Scarcity />
      <Testimonials />
      <SocialGallery />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
