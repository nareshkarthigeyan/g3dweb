'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white font-['NeueMontreal'] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/20 rounded-full blur-3xl"></div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden animate-fade-in-up">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-xl font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal tracking-tight animate-fade-in-up">
              Unleash <span className="text-primary">Innovation</span> <br className="hidden md:block" /> with <span className="text-primary">3D Printing</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium font-['NeueMontreal'] animate-fade-in-up">
              Transforming ideas into reality with cutting-edge additive manufacturing for every industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <Link href="/services" className="bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg transition duration-300 group relative overflow-hidden">
                <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative">Explore Services</span>
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg transition duration-300 group relative overflow-hidden">
                <span className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background/90 rounded-3xl shadow-2xl border border-dark-100 container mx-auto px-6 my-20 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center font-['MonumentExtended']">What We <span className="text-primary">Do</span></h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto font-['NeueMontreal']">Galactic 3D is your partner for advanced additive manufacturing, from concept to production. We deliver design, prototyping, production, and consulting for every industry.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 shadow-xl group animate-fade-in-up">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">Design & Prototyping</h3>
            <p className="text-gray-400 font-['NeueMontreal']">From CAD to prototype, we help you iterate and validate your ideas quickly and efficiently.</p>
          </div>
          <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 shadow-xl group animate-fade-in-up">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M5 10a7 7 0 0114 0v2a7 7 0 01-14 0v-2z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">Production & Finishing</h3>
            <p className="text-gray-400 font-['NeueMontreal']">We deliver high-quality, end-use parts with a range of finishing options for every application.</p>
          </div>
          <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 shadow-xl group animate-fade-in-up">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">Consulting & Support</h3>
            <p className="text-gray-400 font-['NeueMontreal']">Our experts guide you through material selection, design optimization, and process planning.</p>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-dark-200 relative overflow-hidden animate-fade-in-up">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-['MonumentExtended']">
            <span className="relative inline-block">
              Industries We <span className="text-primary">Serve</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Aerospace */}
            <div className="group relative overflow-hidden rounded-xl h-80 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 bg-dark-100" style={{ transformStyle: 'preserve-3d' }}>
              <img 
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Aerospace" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-400/80 to-dark-300/50 z-10"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 z-30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="bg-dark-100/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary flex items-center font-['MonumentExtended']">
                    <span className="mr-2">Aerospace</span>
                    <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  </h3>
                  <p className="text-gray-300 text-sm font-['NeueMontreal']">Lightweight, high-strength parts for aircraft, satellites, and drones.</p>
                </div>
              </div>
            </div>
            {/* Medical */}
            <div className="group relative overflow-hidden rounded-xl h-80 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 bg-dark-100" style={{ transformStyle: 'preserve-3d' }}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Medical" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-400/80 to-dark-300/50 z-10"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 z-30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="bg-dark-100/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary flex items-center font-['MonumentExtended']">
                    <span className="mr-2">Medical</span>
                    <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  </h3>
                  <p className="text-gray-300 text-sm font-['NeueMontreal']">Custom implants, prosthetics, and anatomical models for healthcare applications.</p>
                </div>
              </div>
            </div>
            {/* Consumer Products */}
            <div className="group relative overflow-hidden rounded-xl h-80 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 bg-dark-100" style={{ transformStyle: 'preserve-3d' }}>
              <img 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Consumer Products" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-400/80 to-dark-300/50 z-10"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 z-30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="bg-dark-100/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary flex items-center font-['MonumentExtended']">
                    <span className="mr-2">Consumer</span>
                    <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  </h3>
                  <p className="text-gray-300 text-sm font-['NeueMontreal']">Bespoke products, electronics enclosures, and lifestyle goods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Modern Vertical Stepper */}
      <section className="py-20 bg-background/90 rounded-3xl shadow-2xl border border-dark-100 container mx-auto px-6 my-20 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center font-['MonumentExtended']">Our <span className="text-primary">Process</span></h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto font-['NeueMontreal']">A streamlined approach to bring your ideas from concept to reality.</p>
        <div className="relative flex flex-col items-center animate-fade-in-up">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full -translate-x-1/2 z-0" style={{minHeight: '100%'}}></div>
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
              <div className="flex flex-col items-center mb-4">
                <div className={`w-14 h-14 rounded-full bg-background/80 border-2 border-primary flex items-center justify-center shadow-lg mb-2 transition-all duration-300 group-hover:scale-110 group-focus:scale-110 group-hover:shadow-primary/30 group-focus:shadow-primary/30`}>
                  {step.icon}
                </div>
                <span className="block text-lg font-bold text-primary font-['MonumentExtended']">{idx+1}</span>
              </div>
              <div className="w-full bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 backdrop-blur-xl transition-all duration-300 group-hover:border-primary group-focus:border-primary group-hover:scale-[1.03] group-focus:scale-[1.03]">
                <h3 className="text-xl font-bold mb-3 text-center group-hover:text-primary group-focus:text-primary transition duration-300 font-['MonumentExtended']">{step.title}</h3>
                <p className="text-gray-400 text-center font-['NeueMontreal']">{step.desc}</p>
              </div>
              {idx < arr.length-1 && (
                <div className="w-1 h-12 bg-gradient-to-b from-primary via-secondary to-primary rounded-full my-4"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-dark-200 relative overflow-hidden animate-fade-in-up">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-['MonumentExtended']">
            <span className="relative inline-block">
              Featured <span className="text-primary">Projects</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Example Project Cards */}
            <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group animate-fade-in-up">
              <img src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Aerospace Component" className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg" />
              <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">Aerospace Component Optimization</h3>
              <p className="text-gray-400 font-['NeueMontreal']">Redesigned critical aerospace components for weight reduction while maintaining structural integrity, resulting in 30% lighter parts and significant fuel savings.</p>
            </div>
            <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group animate-fade-in-up">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Medical Device" className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg" />
              <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">Medical Device Prototyping</h3>
              <p className="text-gray-400 font-['NeueMontreal']">Rapid prototyping of a novel medical device, enabling the client to iterate through 15 design versions in just 8 weeks, accelerating time-to-market by 6 months.</p>
            </div>
            <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group animate-fade-in-up">
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Automotive Parts" className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg" />
              <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">Custom Automotive Parts</h3>
              <p className="text-gray-400 font-['NeueMontreal']">Designed and manufactured custom interior components for a limited-edition sports car, combining aesthetic appeal with functional performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background/90 rounded-3xl shadow-2xl border border-dark-100 container mx-auto px-6 my-20 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center font-['MonumentExtended']">What Our <span className="text-primary">Clients Say</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 shadow-xl group animate-fade-in-up">
            <p className="text-gray-300 text-lg font-['NeueMontreal'] mb-4">“Galactic 3D's expertise in additive manufacturing helped us achieve results we never thought possible. Their team is responsive, innovative, and a pleasure to work with.”</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold font-['MonumentExtended']">Sarah Johnson</h3>
                <p className="text-primary font-['NeueMontreal']">CTO, AeroTech Innovations</p>
              </div>
            </div>
          </div>
          <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 shadow-xl group animate-fade-in-up">
            <p className="text-gray-300 text-lg font-['NeueMontreal'] mb-4">“The rapid prototyping capabilities at Galactic 3D were instrumental in our product development process. Their team's expertise helped us refine our design quickly and efficiently.”</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold font-['MonumentExtended']">Michael Chen</h3>
                <p className="text-primary font-['NeueMontreal']">Product Manager, MediTech Solutions</p>
              </div>
            </div>
          </div>
          <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 shadow-xl group animate-fade-in-up">
            <p className="text-gray-300 text-lg font-['NeueMontreal'] mb-4">“The quality and precision of Galactic 3D's work is unmatched. Their ability to translate our complex designs into functional parts while maintaining aesthetic appeal was impressive.”</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold font-['MonumentExtended']">David Rodriguez</h3>
                <p className="text-primary font-['NeueMontreal']">Design Director, AutoInnovate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="container mx-auto px-6 py-20 animate-fade-in-up">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center animate-fade-in-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-['MonumentExtended']">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-['NeueMontreal']">Contact us today to discuss how Galactic 3D can help bring your ideas to life with our advanced additive manufacturing services.</p>
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
      </section>

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
