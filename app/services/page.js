'use client'
import Link from 'next/link';
import {useEffect} from 'react';

export default function Services() {
  useEffect(() => {
    // Add 3D rotation effect to the material samples
    const samples = document.querySelectorAll('.material-sample');
    
    const handleMouseMove = (e, element) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      element.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale3d(1.05, 1.05, 1.05)`;
      element.style.boxShadow = `${x * 10}px ${y * 10}px 20px rgba(0, 0, 0, 0.4)`;
    };
    
    samples.forEach(sample => {
      sample.addEventListener('mousemove', (e) => handleMouseMove(e, sample));
      sample.addEventListener('mouseleave', () => {
        sample.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
        sample.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.2)';
      });
    });
    
    return () => {
      samples.forEach(sample => {
        sample.removeEventListener('mousemove', handleMouseMove);
        sample.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white pt-24 pb-20 font-['NeueMontreal'] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      {/* Services Header with Animated Elements */}
      <div className="container mx-auto px-6 mb-16 relative z-10 animate-fade-in-up">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 bg-dark-200 rounded-full py-1 px-3 mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium font-['NeueMontreal']">Advanced Manufacturing Solutions</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 relative font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal drop-shadow-xl tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-metal">Our</span> 
            <span className="bg-clip-text text-transparent bg-gradient-red ml-3">Services</span>
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-primary rounded-full"></div>
          </h1>
        <p className="text-xl text-gray-400 max-w-3xl font-['NeueMontreal']">Galactic 3D offers comprehensive additive manufacturing solutions to bring your ideas to life with precision and innovation. We specialize in metal, alloy, and polymer 3D printing for industries that demand excellence.</p>
      </div>
      {/* Main Services with 3D Effects */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 3D Printing Service */}
          <div className="group animate-fade-in-up">
            <div className="relative overflow-hidden rounded-3xl mb-8 border border-dark-100 group-hover:border-primary transition-all duration-500 shadow-2xl bg-background/80 backdrop-blur-xl">
              <img 
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Industrial 3D Printing" 
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-400/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold group-hover:text-primary transition duration-300 font-['MonumentExtended']">Industrial 3D Printing</h3>
                <div className="w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full mt-2 rounded-full"></div>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 font-['NeueMontreal']">
                Metal & Polymer
              </div>
            </div>
            <p className="text-gray-400 mb-6 font-['NeueMontreal']">Our industrial-grade 3D printing services utilize the latest technology to create high-quality parts and prototypes with exceptional precision and detail. We offer a wide range of materials including polymers, metals, and composites to meet your specific requirements.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="material-sample bg-dark-200/80 p-4 rounded-xl border border-dark-100 hover:border-primary transition duration-300 shadow-lg" style={{transformStyle: 'preserve-3d', transition: 'all 0.3s ease'}}>
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 rounded-full bg-metal-300 mr-2"></span>
                  <h4 className="font-bold font-['MonumentExtended']">Titanium Alloys</h4>
                </div>
                <p className="text-sm text-gray-400 font-['NeueMontreal']">High strength-to-weight ratio, excellent corrosion resistance</p>
              </div>
              <div className="material-sample bg-dark-200/80 p-4 rounded-xl border border-dark-100 hover:border-primary transition duration-300 shadow-lg" style={{transformStyle: 'preserve-3d', transition: 'all 0.3s ease'}}>
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 rounded-full bg-metal-400 mr-2"></span>
                  <h4 className="font-bold font-['MonumentExtended']">Stainless Steel</h4>
                </div>
                <p className="text-sm text-gray-400 font-['NeueMontreal']">Durable, heat-resistant, ideal for functional parts</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start group">
                <svg className="w-5 h-5 text-primary mt-1 mr-2 group-hover:animate-pulse-glow transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="group-hover:text-primary transition duration-300 font-['NeueMontreal']">Selective Laser Sintering (SLS)</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-5 h-5 text-primary mt-1 mr-2 group-hover:animate-pulse-glow transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="group-hover:text-primary transition duration-300 font-['NeueMontreal']">Fused Deposition Modeling (FDM)</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-5 h-5 text-primary mt-1 mr-2 group-hover:animate-pulse-glow transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="group-hover:text-primary transition duration-300 font-['NeueMontreal']">Stereolithography (SLA)</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-5 h-5 text-primary mt-1 mr-2 group-hover:animate-pulse-glow transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="group-hover:text-primary transition duration-300 font-['NeueMontreal']">Direct Metal Laser Sintering (DMLS)</span>
              </li>
            </ul>
          </div>
          {/* Prototyping Service */}
          <div className="group animate-fade-in-up">
            <div className="relative overflow-hidden rounded-3xl mb-8 border border-dark-100 group-hover:border-primary transition-all duration-500 shadow-2xl bg-background/80 backdrop-blur-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Rapid Prototyping" 
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-400/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold group-hover:text-primary transition duration-300 font-['MonumentExtended']">Rapid Prototyping</h3>
                <div className="w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full mt-2 rounded-full"></div>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 font-['NeueMontreal']">
                Fast Turnaround
              </div>
            </div>
            <p className="text-gray-400 mb-6 font-['NeueMontreal']">Accelerate your product development cycle with our rapid prototyping services. We help you quickly iterate designs, validate concepts, and refine your products before full-scale production, saving you time and resources.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="material-sample bg-dark-200/80 p-4 rounded-xl border border-dark-100 hover:border-primary transition duration-300 shadow-lg" style={{transformStyle: 'preserve-3d', transition: 'all 0.3s ease'}}>
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 rounded-full bg-accent mr-2"></span>
                  <h4 className="font-bold font-['MonumentExtended']">High-Detail Resins</h4>
                </div>
                <p className="text-sm text-gray-400 font-['NeueMontreal']">Ultra-precise details for visual prototypes and models</p>
              </div>
              <div className="material-sample bg-dark-200/80 p-4 rounded-xl border border-dark-100 hover:border-primary transition duration-300 shadow-lg" style={{transformStyle: 'preserve-3d', transition: 'all 0.3s ease'}}>
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  <h4 className="font-bold font-['MonumentExtended']">Engineering Polymers</h4>
                </div>
                <p className="text-sm text-gray-400 font-['NeueMontreal']">Functional prototypes with mechanical properties</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start group">
                <svg className="w-5 h-5 text-primary mt-1 mr-2 group-hover:animate-pulse-glow transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="group-hover:text-primary transition duration-300 font-['NeueMontreal']">Concept Validation</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-5 h-5 text-primary mt-1 mr-2 group-hover:animate-pulse-glow transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="group-hover:text-primary transition duration-300 font-['NeueMontreal']">Functional Testing</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-5 h-5 text-primary mt-1 mr-2 group-hover:animate-pulse-glow transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="group-hover:text-primary transition duration-300 font-['NeueMontreal']">Design Iteration</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-5 h-5 text-primary mt-1 mr-2 group-hover:animate-pulse-glow transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="group-hover:text-primary transition duration-300 font-['NeueMontreal']">Pre-production Samples</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Additional Services with Hover Effects */}
      <div className="bg-dark-400/90 py-20 relative rounded-3xl shadow-2xl border border-dark-100 animate-fade-in-up">
        <div className="absolute top-0 left-0 w-full h-20 bg-black clip-path-diagonal-reverse"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center font-['MonumentExtended']">Additional <span className="text-primary">Services</span></h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto font-['NeueMontreal']">Comprehensive solutions to support your additive manufacturing needs from concept to production</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Service */}
            <div className="bg-dark-200 p-8 rounded-lg border border-dark-100 hover:border-primary transition duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 h-full group">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition duration-300">3D Design & Modeling</h3>
              <p className="text-gray-400">Our expert designers can help create or optimize your 3D models for manufacturing, ensuring they meet your specifications and are production-ready.</p>
              <div className="mt-6 pt-6 border-t border-dark-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>CAD Design Services</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Design Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Consulting Service */}
            <div className="bg-dark-200 p-8 rounded-lg border border-dark-100 hover:border-primary transition duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 h-full group">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition duration-300">Additive Manufacturing Consulting</h3>
              <p className="text-gray-400">Get expert advice on material selection, design optimization, and manufacturing processes to maximize the benefits of additive manufacturing for your projects.</p>
              <div className="mt-6 pt-6 border-t border-dark-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Material Selection</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Process Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Production Service */}
            <div className="bg-dark-200 p-8 rounded-lg border border-dark-100 hover:border-primary transition duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 h-full group">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364zm1.735.992a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition duration-300">Small-Batch Production</h3>
              <p className="text-gray-400">Bridge the gap between prototyping and mass production with our small-batch manufacturing services, ideal for market testing or limited production runs.</p>
              <div className="mt-6 pt-6 border-t border-dark-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Low-Volume Production</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Bridge Manufacturing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-20 bg-black clip-path-diagonal"></div>
      </div>

      {/* Process Section with Animation */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center font-['MonumentExtended']">Our <span className="text-primary">Process</span></h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto font-['NeueMontreal']">A streamlined approach to bring your ideas from concept to reality</p>
        <div className="relative flex flex-col items-center animate-fade-in-up">
          {/* Animated vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full -translate-x-1/2 z-0" style={{minHeight: '100%'}}></div>
          {/* Steps */}
          {[
            {
              title: 'Consultation',
              desc: 'We begin with a detailed consultation to understand your project requirements, goals, and constraints.',
              icon: (
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"></path></svg>
              )
            },
            {
              title: 'Design & Engineering',
              desc: 'Our team works on creating or optimizing designs for additive manufacturing, ensuring they meet all technical specifications.',
              icon: (
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h6v-6H3v6zm13.293-13.293a1 1 0 011.414 0l1.586 1.586a1 1 0 010 1.414l-8.586 8.586a1 1 0 01-.707.293H7v-1.586a1 1 0 01.293-.707l8.586-8.586z"></path></svg>
              )
            },
            {
              title: 'Prototyping',
              desc: 'We create initial prototypes for testing and validation, allowing for design refinements before final production.',
              icon: (
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              )
            },
            {
              title: 'Production',
              desc: 'Once designs are finalized, we move to production using the most appropriate additive manufacturing technology for your project.',
              icon: (
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h2l1 2h13l1-2h2M5 10V6a2 2 0 012-2h10a2 2 0 012 2v4M9 16h6m-6 4h6"></path></svg>
              )
            },
            {
              title: 'Quality Assurance',
              desc: 'Every product undergoes rigorous quality checks to ensure it meets our high standards and your specifications.',
              icon: (
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              )
            }
          ].map((step, idx, arr) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center group w-full max-w-xl mb-12 last:mb-0" tabIndex={0} aria-label={`Step ${idx+1}: ${step.title}`}> 
              {/* Step number and icon */}
              <div className="flex flex-col items-center mb-4">
                <div className={`w-14 h-14 rounded-full bg-background/80 border-2 border-primary flex items-center justify-center shadow-lg mb-2 transition-all duration-300 group-hover:scale-110 group-focus:scale-110 group-hover:shadow-primary/30 group-focus:shadow-primary/30`}>
                  {step.icon}
                </div>
                <span className="block text-lg font-bold text-primary font-['MonumentExtended']">{idx+1}</span>
              </div>
              {/* Step card */}
              <div className="w-full bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 backdrop-blur-xl transition-all duration-300 group-hover:border-primary group-focus:border-primary group-hover:scale-[1.03] group-focus:scale-[1.03]">
                <h3 className="text-xl font-bold mb-3 text-center group-hover:text-primary group-focus:text-primary transition duration-300 font-['MonumentExtended']">{step.title}</h3>
                <p className="text-gray-400 text-center font-['NeueMontreal']">{step.desc}</p>
              </div>
              {/* Animated connector for all but last step */}
              {idx < arr.length-1 && (
                <div className="w-1 h-12 bg-gradient-to-b from-primary via-secondary to-primary rounded-full my-4"></div>
              )}
            </div>
          ))}
                </div>
              </div>

      {/* Our Technology Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center font-['MonumentExtended']">Our <span className="text-primary">Technology</span></h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto font-['NeueMontreal']">We leverage the most advanced manufacturing technologies to deliver precision, speed, and innovation for every project.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in-up">
          {/* DMLS */}
          <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">DMLS</h3>
            <p className="text-gray-400 font-['NeueMontreal']">Direct Metal Laser Sintering for high-strength, complex metal parts with excellent accuracy.</p>
          </div>
          {/* SLS */}
          <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
                </div>
            <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">SLS</h3>
            <p className="text-gray-400 font-['NeueMontreal']">Selective Laser Sintering for durable, functional prototypes and end-use polymer parts.</p>
              </div>
          {/* FDM */}
          <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 8h8v8H8z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">FDM</h3>
            <p className="text-gray-400 font-['NeueMontreal']">Fused Deposition Modeling for cost-effective, rapid prototyping in a variety of plastics.</p>
          </div>
          {/* DLP */}
          <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M2 12a10 6 0 0020 0"/></svg>
                </div>
            <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">DLP</h3>
            <p className="text-gray-400 font-['NeueMontreal']">Digital Light Processing for ultra-high resolution parts and smooth surface finishes.</p>
              </div>
          {/* Vacuum Casting */}
          <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M6 12h12"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">Vacuum Casting</h3>
            <p className="text-gray-400 font-['NeueMontreal']">For short-run production of high-quality polyurethane parts with excellent detail.</p>
                </div>
          {/* CNC Machining & Fabrication */}
          <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 7h10v10H7z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">CNC Machining & Fabrication</h3>
            <p className="text-gray-400 font-['NeueMontreal']">Precision subtractive manufacturing and fabrication for metals and plastics at any scale.</p>
          </div>
        </div>
      </div>

      {/* CTA Section with Animated Background */}
      <div className="bg-primary py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-40 h-40 rounded-full bg-secondary/30 -top-10 -left-10 animate-spin-slow"></div>
          <div className="absolute w-60 h-60 rounded-full bg-secondary/20 -bottom-20 -right-20 animate-spin-slow"></div>
          <div className="absolute w-20 h-20 rounded-full bg-white/10 top-1/4 right-1/4 animate-float"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today to discuss how Galactic 3D can help bring your ideas to life with our advanced additive manufacturing services.</p>
          <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition duration-300 text-lg inline-block group relative overflow-hidden">
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative flex items-center justify-center">
              Contact Us
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
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
}