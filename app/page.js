'use client';
import Hero from './components/Hero';
import OurPartners from './components/OurPartners';
import WhatWeDo from './components/WhatWeDo';
import Industries from './components/Industries';
import Process from './components/Process';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import Technology from './components/Technology';
import CTA from './components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white font-['NeueMontreal'] relative overflow-hidden">
      <Hero />
      <OurPartners />
      <WhatWeDo />
      <Industries />
      <Process />
      <FeaturedProjects />
      <Testimonials />
      <Technology />
      <CTA />

      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s both;
        }
      `}</style>
    </div>
  );
}