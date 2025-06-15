'use client'
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  const printerRef = useRef(null);
  const layersRef = useRef(null);
  const sceneRef = useRef(null);

  // 3D printer animation and interactive effects
  useEffect(() => {
    // 3D rotation effect on mouse move
    const handleMouseMove = (e) => {
      if (!printerRef.current) return;
      
      const xAxis = (window.innerWidth / 2 - e.pageX) / 35;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 35;
      
      printerRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    // Animate the printing layers
    const animatePrintingLayers = () => {
      if (!layersRef.current) return;
      const layers = layersRef.current.querySelectorAll('.print-layer');
      
      layers.forEach((layer, index) => {
        setTimeout(() => {
          layer.style.opacity = '1';
          layer.style.transform = 'translateY(0)';
        }, index * 300);
      });
    };

    // Parallax effect for the scene
    const handleScroll = () => {
      if (!sceneRef.current) return;
      const scrollY = window.scrollY;
      sceneRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    animatePrintingLayers();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-300">
      {/* Hero Section with 3D Printing Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-300 to-dark-400"></div>
          <div className="absolute inset-0 opacity-30">
            {/* 3D Grid Pattern */}
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 49, 49, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 49, 49, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: '-1px -1px' }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Next-Gen <span className="text-primary">3D Printing</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transforming industries with cutting-edge additive manufacturing technology and innovative materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg inline-block">
                  Explore Services
                </Link>
                <Link href="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* 3D Printer Model with Animation */}
              <div ref={printerRef} className="relative w-full max-w-md h-96 perspective-1000 transition-transform duration-300 ease-out" style={{ transformStyle: 'preserve-3d' }}>
                {/* Printer Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-100 to-dark-300 rounded-xl shadow-2xl border border-gray-800 flex items-center justify-center" style={{ transform: 'translateZ(0px)' }}>
                  {/* Printer Frame */}
                  <svg className="w-64 h-64 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2H17V7H19V13H16.5L13 17H11L7.5 13H5V7H7V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 20H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 17V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 7H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 13L11 17L13 17L16.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  
                  {/* Printing Animation */}
                  <div ref={layersRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="print-layer absolute w-full bg-primary opacity-0" 
                        style={{
                          height: '2px',
                          bottom: `${i * 4}px`,
                          transform: 'translateY(20px)',
                          transition: 'opacity 0.5s ease, transform 0.5s ease',
                          transitionDelay: `${i * 0.1}s`,
                          boxShadow: '0 0 10px rgba(255, 49, 49, 0.8)'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* 3D Effect Elements */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full filter blur-xl animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full filter blur-xl animate-pulse"></div>
                
                {/* Extruder Movement Animation */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full animate-bounce shadow-lg shadow-primary/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase Section with 3D Animations */}
      <section className="py-20 bg-dark-200 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(255, 49, 49, 0.1) 1px, transparent 1px)', 
            backgroundSize: '30px 30px',
            animation: 'pulse 4s infinite alternate'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="relative inline-block">
              Cutting-Edge <span className="text-primary">3D Printing</span> Technology
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Metal Printing Card with 3D Effect */}
            <div className="bg-dark-100 p-8 rounded-xl transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl hover:shadow-primary/20" style={{ transformStyle: 'preserve-3d' }}>
              <div className="mb-6 text-primary text-5xl relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-full filter blur-md"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">Metal Printing</span>
                <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </h3>
              <p className="text-gray-400">Precision metal printing with titanium, aluminum, stainless steel, and custom alloys for aerospace, automotive, and medical applications.</p>
              
              {/* 3D Metal Printing Visualization */}
              <div className="mt-6 relative h-20 w-full overflow-hidden rounded-lg bg-dark-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute w-full h-1 bg-gradient-to-r from-metal-300/30 via-metal-200 to-metal-300/30" 
                      style={{
                        bottom: `${i * 4}px`,
                        transform: 'translateX(-100%)',
                        animation: `slideIn 3s ${i * 0.5}s infinite alternate ease-in-out`
                      }}
                    ></div>
                  ))}
                </div>
                <style jsx>{`
                  @keyframes slideIn {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                  }
                `}</style>
              </div>
            </div>
            
            {/* Polymer Printing Card with 3D Effect */}
            <div className="bg-dark-100 p-8 rounded-xl transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl hover:shadow-primary/20" style={{ transformStyle: 'preserve-3d' }}>
              <div className="mb-6 text-primary text-5xl relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-full filter blur-md"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">Polymer Printing</span>
                <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </h3>
              <p className="text-gray-400">High-performance polymer printing with engineering-grade materials for functional prototypes and end-use parts with exceptional detail.</p>
              
              {/* 3D Polymer Printing Visualization */}
              <div className="mt-6 relative h-20 w-full overflow-hidden rounded-lg bg-dark-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 relative">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute left-1/2 top-1/2 w-full h-full border border-primary/30 rounded-md" 
                        style={{
                          transform: `translate(-50%, -50%) scale(${0.4 + i * 0.1}) rotate(${i * 5}deg)`,
                          opacity: 1 - i * 0.1,
                          animation: `pulse 2s ${i * 0.2}s infinite alternate`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <style jsx>{`
                  @keyframes pulse {
                    0% { opacity: 0.3; }
                    100% { opacity: 0.8; }
                  }
                `}</style>
              </div>
            </div>
            
            {/* Composite Materials Card with 3D Effect */}
            <div className="bg-dark-100 p-8 rounded-xl transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl hover:shadow-primary/20" style={{ transformStyle: 'preserve-3d' }}>
              <div className="mb-6 text-primary text-5xl relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-full filter blur-md"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">Composite Materials</span>
                <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </h3>
              <p className="text-gray-400">Advanced composite material printing combining polymers with carbon fiber, fiberglass, and other reinforcements for superior strength.</p>
              
              {/* 3D Composite Printing Visualization */}
              <div className="mt-6 relative h-20 w-full overflow-hidden rounded-lg bg-dark-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {[...Array(6)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute left-0 w-full" 
                        style={{
                          height: '2px',
                          bottom: `${i * 4 + 5}px`,
                          background: i % 2 === 0 ? 'linear-gradient(90deg, #ff3131, transparent)' : 'linear-gradient(90deg, #9ca3af, transparent)',
                          animation: `growWidth 3s ${i * 0.3}s infinite alternate ease-in-out`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <style jsx>{`
                  @keyframes growWidth {
                    0% { width: 0; }
                    100% { width: 100%; }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Printing Process Section with Interactive Elements */}
      <section className="py-20 bg-dark-300 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 49, 49, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 49, 49, 0.1) 1px, transparent 1px)', 
            backgroundSize: '30px 30px',
            backgroundPosition: '-1px -1px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="relative inline-block">
                  Our 3D Printing <span className="text-primary">Process</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
                </span>
              </h2>
              <p className="text-gray-300 mb-8">Our advanced 3D printing process combines cutting-edge technology with expert craftsmanship to deliver exceptional results for every project.</p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-primary rounded-full p-2 mr-4 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="transition-all duration-300 group-hover:translate-x-2">
                    <h3 className="text-xl font-bold mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-400">We utilize the latest industrial-grade 3D printers and materials to ensure precision and quality in every print.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-primary rounded-full p-2 mr-4 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="transition-all duration-300 group-hover:translate-x-2">
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-gray-400">Our team of engineers and designers work closely with you to optimize your designs for 3D printing success.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-primary rounded-full p-2 mr-4 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="transition-all duration-300 group-hover:translate-x-2">
                    <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                    <p className="text-gray-400">We provide tailored solutions for your specific industry needs, from prototyping to full-scale production.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              {/* Interactive 3D Printer Visualization */}
              <div className="relative w-full max-w-md h-96 perspective-1000">
                {/* 3D Printer Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-100 to-dark-300 rounded-xl shadow-2xl border border-gray-800 flex items-center justify-center overflow-hidden">
                  {/* Animated Printing Process */}
                  <div className="relative w-64 h-64">
                    {/* Printer Frame */}
                    <svg className="w-full h-full text-primary absolute" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 2H17V7H19V13H16.5L13 17H11L7.5 13H5V7H7V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 20H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 17V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 7H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 13L11 17L13 17L16.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    
                    {/* Printing Object Animation */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20">
                      <div className="relative w-full h-full">
                        {/* Printing Layers */}
                        {[...Array(10)].map((_, i) => (
                          <div 
                            key={i} 
                            className="absolute left-0 w-full bg-primary" 
                            style={{
                              height: '2px',
                              bottom: `${i * 2}px`,
                              opacity: 0.3 + (i * 0.07),
                              animation: `fadeInUp 0.5s ${i * 0.2}s forwards`
                            }}
                          ></div>
                        ))}
                        
                        {/* Active Printing Layer */}
                        <div className="absolute left-0 w-full h-1 bottom-[20px] bg-primary animate-pulse" style={{ boxShadow: '0 0 10px rgba(255, 49, 49, 0.8)' }}></div>
                        
                        {/* Print Head */}
                        <div className="absolute left-0 w-4 h-4 bg-primary rounded-full bottom-[21px] animate-bounce-slow" style={{ 
                          animation: 'moveLeftRight 3s infinite alternate ease-in-out',
                          boxShadow: '0 0 15px rgba(255, 49, 49, 0.8)'
                        }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Process Steps Indicators */}
                  <div className="absolute bottom-6 left-0 w-full flex justify-center space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 rounded-full bg-primary opacity-50" 
                        style={{
                          animation: `pulseStep 2s ${i * 0.5}s infinite`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <style jsx>{`
                  @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 0.3 + (index * 0.07); transform: translateY(0); }
                  }
                  @keyframes moveLeftRight {
                    0% { left: 0; }
                    100% { left: calc(100% - 16px); }
                  }
                  @keyframes pulseStep {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.5); }
                  }
                  @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Printing Process Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our <span className="text-primary">3D Printing</span> Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-dark-200 p-8 rounded-lg border border-dark-100">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">1. Design & Engineering</h3>
              <p className="text-gray-400">Our team works with you to optimize your designs for additive manufacturing, ensuring printability and performance.</p>
            </div>
            
            <div className="bg-dark-200 p-8 rounded-lg border border-dark-100">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">2. Material Selection</h3>
              <p className="text-gray-400">Choose from our wide range of metals, polymers, and composite materials to meet your specific requirements.</p>
            </div>
            
            <div className="bg-dark-200 p-8 rounded-lg border border-dark-100">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">3. Production</h3>
              <p className="text-gray-400">Our advanced 3D printers create your parts with precision, layer by layer, ensuring exceptional quality and accuracy.</p>
            </div>
          </div>
          
          {/* 3D Printer Visualization */}
          <div className="mt-20 flex justify-center">
            <div className="w-full max-w-4xl h-80 bg-dark-300 rounded-lg p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-dark-400 via-transparent to-dark-400"></div>
              
              {/* Stylized 3D Printer */}
              <div className="relative z-10 w-full max-w-md h-full flex items-center justify-center">
                <div className="w-64 h-64 border-8 border-primary/30 rounded-lg relative">
                  {/* Printer Frame */}
                  <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/50"></div>
                  
                  {/* Print Head */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-primary/70"></div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary"></div>
                  
                  {/* Print Bed */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-dark-100"></div>
                  
                  {/* Printed Object (3D Cube) */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary/20 border border-primary/50"></div>
                  
                  {/* Support Columns */}
                  <div className="absolute top-4 left-4 w-2 h-48 bg-primary/50"></div>
                  <div className="absolute top-4 right-4 w-2 h-48 bg-primary/50"></div>
                </div>
              </div>
              
              {/* Technical Specs */}
              <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                <div className="flex items-center mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Build Volume: 300 x 300 x 300 mm</span>
                </div>
                <div className="flex items-center mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Layer Resolution: 20-100 microns</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Print Speed: Up to 150 mm/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve with 3D Elements */}
      <section className="py-20 bg-dark-200 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-300 to-dark-200"></div>
          <div className="absolute inset-0 opacity-10">
            {/* 3D Grid Pattern */}
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle, rgba(255, 49, 49, 0.2) 1px, transparent 1px)', 
              backgroundSize: '50px 50px',
              backgroundPosition: '0 0',
              animation: 'rotate 120s linear infinite'
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="relative inline-block">
              Industries We <span className="text-primary">Serve</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aerospace Card with 3D Effect */}
            <div className="group relative overflow-hidden rounded-xl h-80 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-400/80 to-dark-300/50 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Aerospace" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* 3D Floating Elements */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-primary/30 rounded-full transform rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border border-primary/20 rounded-full transform -rotate-12 animate-float"></div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 z-30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="bg-dark-100/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary flex items-center">
                    <span className="mr-2">Aerospace</span>
                    <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  </h3>
                  <p className="text-gray-300 text-sm">Lightweight components with complex geometries for aircraft and spacecraft applications.</p>
                </div>
              </div>
            </div>
            
            {/* Medical Card with 3D Effect */}
            <div className="group relative overflow-hidden rounded-xl h-80 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-400/80 to-dark-300/50 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Medical" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* 3D Floating Elements */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-primary/30 rounded-full transform rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border border-primary/20 rounded-full transform -rotate-12 animate-float"></div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 z-30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="bg-dark-100/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary flex items-center">
                    <span className="mr-2">Medical</span>
                    <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  </h3>
                  <p className="text-gray-300 text-sm">Custom implants, prosthetics, and anatomical models for healthcare applications.</p>
                </div>
              </div>
            </div>
            
            {/* Consumer Products Card with 3D Effect */}
            <div className="group relative overflow-hidden rounded-xl h-80 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-400/80 to-dark-300/50 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Consumer Products" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* 3D Floating Elements */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/4 right-1/3 w-16 h-16 border border-primary/30 rounded-full transform rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-primary/20 rounded-full transform -rotate-12 animate-float"></div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 z-30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="bg-dark-100/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary flex items-center">
                    <span className="mr-2">Consumer Products</span>
                    <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  </h3>
                  <p className="text-gray-300 text-sm">Innovative designs and rapid prototyping for consumer goods and electronics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </section>

      {/* CTA Section with 3D Elements */}
      <section className="py-24 relative overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-dark-500"></div>
          
          {/* Animated 3D Elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-white/10" 
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s infinite alternate ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5 + 0.2,
                  transform: `translateZ(${Math.random() * 50}px)`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto bg-dark-100/30 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-2xl transform transition-all duration-500 hover:shadow-primary/20 hover:border-primary/30" style={{ transformStyle: 'preserve-3d' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your <span className="text-white relative inline-block">
                Ideas
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary"></span>
              </span> into Reality?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-200">Partner with Galactic 3D for your next project and experience the future of manufacturing today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/submit" className="group bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-md transition-all duration-300 text-lg inline-block relative overflow-hidden">
                 <span className="relative z-10 flex items-center">
                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                   </svg>
                   Submit Your 3D File
                 </span>
                 <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 opacity-20"></span>
               </Link>
               <Link href="/contact" className="group bg-transparent border-2 border-white text-white hover:border-primary hover:text-primary font-bold py-4 px-10 rounded-md transition-all duration-300 text-lg inline-block">
                 <span>Contact Us</span>
                 <svg className="inline-block w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                 </svg>
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
