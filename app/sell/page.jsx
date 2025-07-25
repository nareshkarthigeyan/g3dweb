"use client"
import React from 'react';
import Link from 'next/link';

const SellPage = () => {
  const offerings = [
    {
      title: "Metal 3D Printing (EOS Parts)",
      description: "Leverage the power of Direct Metal Laser Sintering (DMLS) with our EOS machines. We produce high-strength, fully dense metal parts from materials like stainless steel, titanium, and aluminum. Ideal for aerospace, medical, and high-performance automotive applications where material integrity is critical.",
      useCases: ["Functional prototypes", "End-use production parts", "Complex geometries"],
    },
    {
      title: "FLN Parts",
      description: "Our Fused Layer Modeling (FLM) services offer a fast and cost-effective solution for producing thermoplastic parts. With a wide range of materials, including ABS, PETG, and PLA, we deliver durable components suitable for functional testing, jigs, fixtures, and custom enclosures. High precision and excellent layer adhesion come standard.",
      useCases: ["Rapid prototyping", "Manufacturing aids", "Consumer products"],
    },
    {
      title: "SLS Printing",
      description: "Selective Laser Sintering (SLS) technology enables the creation of tough, durable nylon parts with complex geometries without the need for support structures. This process is perfect for functional prototypes, small-batch manufacturing, and parts with intricate internal channels. Our SLS parts offer excellent mechanical properties and a clean, professional finish.",
      useCases: ["Complex ductwork", "Living hinges", "Low-volume production"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white pt-24 pb-20 font-['NeueMontreal'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 mb-16 animate-fade-in-up">
        <div className="inline-block mb-4">
          <div className="flex items-center space-x-2 bg-dark-200 rounded-full py-1 px-3 mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium font-['NeueMontreal']">Marketplace</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal drop-shadow-xl tracking-tight leading-tight">
          Sell Your <span className='bg-clip-text text-transparent bg-gradient-red'>Creations</span>
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-primary"></div>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl font-['NeueMontreal']">
          Monetize your 3D printing capabilities by offering your services to a global audience of innovators.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {offerings.map((offering, index) => (
          <div key={index} className="bg-black/60 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 h-full shadow-xl group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <h2 className="text-2xl font-bold mb-4 font-['MonumentExtended']">{offering.title}</h2>
            <p className="text-gray-400 font-['NeueMontreal'] mb-6">{offering.description}</p>
            <h3 className="text-lg font-bold mb-2 font-['MonumentExtended']">Ideal Use Cases:</h3>
            <ul className="text-gray-400 space-y-2 font-['NeueMontreal']">
              {offering.useCases.map((useCase, i) => (
                <li key={i} className="flex items-start"><span className="text-primary mr-2">•</span><span>{useCase}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 text-center bg-dark-300/50 rounded-3xl border border-dark-100 animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 font-['MonumentExtended']">Why Sell With Us?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-['NeueMontreal']">
          Join a curated marketplace dedicated to quality and innovation. We connect you with serious buyers and provide the tools you need to manage your orders, streamline your workflow, and grow your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact?subject=SellingInquiry" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg">
            Become a Partner
          </Link>
          <Link href="/about" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg">
            Learn More
          </Link>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s both; }
      `}</style>
    </div>
  );
};

export default SellPage;