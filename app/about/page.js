"use client"
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white pt-24 pb-20 font-['NeueMontreal'] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/20 rounded-full blur-3xl"></div>
      {/* About Header */}
      <div className="container mx-auto px-6 mb-16 animate-fade-in-up">
      <div className="inline-block mb-4">
          <div className="flex items-center space-x-2 bg-dark-200 rounded-full py-1 px-3 mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium font-['NeueMontreal']">The Team</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal drop-shadow-xl tracking-tight leading-tight">About 
          <span className='bg-clip-text text-transparent bg-gradient-red'> Us</span>
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-primary"></div>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl font-['NeueMontreal']">Pioneering the future of manufacturing through innovative additive technologies and exceptional expertise.</p>
      </div>
      {/* Company Story */}
      <div className="container mx-auto px-6 mb-20 animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-['MonumentExtended']">Our Story</h2>
            <p className="text-gray-400 mb-6 font-['NeueMontreal']">Founded in 2018, Galactic 3D began with a simple mission: to revolutionize manufacturing through advanced additive technologies. What started as a small team of passionate engineers has grown into a leading force in the 3D printing industry.</p>
            <p className="text-gray-400 mb-6 font-['NeueMontreal']">Our journey has been defined by continuous innovation, pushing the boundaries of what's possible with additive manufacturing. From rapid prototyping to full-scale production, we've helped countless clients across various industries transform their ideas into reality.</p>
            <p className="text-gray-400 font-['NeueMontreal']">Today, Galactic 3D stands at the forefront of the additive manufacturing revolution, equipped with cutting-edge technology and a team of experts dedicated to delivering exceptional results for our clients.</p>
          </div>
          <div className="relative animate-fade-in-up">
            <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl border border-dark-100">
              <img 
                src="https://images.unsplash.com/photo-1581093804721-0f879a7eea66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="3D printing lab" 
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/90 rounded-3xl flex items-center justify-center p-6 shadow-xl animate-fade-in-up">
              <p className="text-2xl font-bold text-white font-['MonumentExtended']">5+ Years of Innovation</p>
            </div>
          </div>
        </div>
      </div>
      {/* Mission and Values */}
      <div className="bg-background/90 py-20 rounded-3xl shadow-2xl border border-dark-100 animate-fade-in-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-['MonumentExtended']">Our Mission & Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-['NeueMontreal']">We're driven by a commitment to excellence and innovation in everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-black/60 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 h-full shadow-xl group animate-fade-in-up">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">Our Mission</h3>
              <p className="text-gray-400 font-['NeueMontreal']">To democratize advanced manufacturing by providing accessible, high-quality additive manufacturing solutions that empower businesses to innovate and grow.</p>
            </div>
            {/* Vision */}
            <div className="bg-black/60 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 h-full shadow-xl group animate-fade-in-up">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">Our Vision</h3>
              <p className="text-gray-400 font-['NeueMontreal']">To lead the global transition to additive manufacturing as the primary production method for a sustainable, efficient, and innovative future.</p>
            </div>
            {/* Values */}
            <div className="bg-black/60 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 h-full shadow-xl group animate-fade-in-up">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">Our Values</h3>
              <ul className="text-gray-400 space-y-2 font-['NeueMontreal']">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span><strong>Innovation:</strong> Constantly pushing boundaries and exploring new possibilities</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span><strong>Excellence:</strong> Delivering the highest quality in everything we do</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span><strong>Sustainability:</strong> Minimizing waste and environmental impact</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span><strong>Collaboration:</strong> Working closely with clients to achieve their goals</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="container mx-auto px-6 py-20 animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-['MonumentExtended']">Our Leadership Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-['NeueMontreal']">Meet the experts behind Galactic 3D's innovation and success.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="group animate-fade-in-up">
            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl border border-dark-100">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="CEO" 
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex space-x-3">
                  <a href="#" className="text-white hover:text-primary transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path></svg></a>
                  <a href="#" className="text-white hover:text-primary transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1 font-['MonumentExtended']">Alex Morgan</h3>
            <p className="text-primary mb-2 font-['NeueMontreal']">CEO & Founder</p>
            <p className="text-gray-400 font-['NeueMontreal']">With over 15 years in advanced manufacturing, Alex leads our vision and strategic direction.</p>
          </div>
          {/* Team Member 2 */}
          <div className="group animate-fade-in-up">
            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl border border-dark-100">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="CTO" 
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex space-x-3">
                  <a href="#" className="text-white hover:text-primary transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path></svg></a>
                  <a href="#" className="text-white hover:text-primary transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1 font-['MonumentExtended']">Sarah Chen</h3>
            <p className="text-primary mb-2 font-['NeueMontreal']">Chief Technology Officer</p>
            <p className="text-gray-400 font-['NeueMontreal']">Sarah oversees our technical operations and drives innovation in our manufacturing processes.</p>
          </div>
          {/* Team Member 3 */}
          <div className="group animate-fade-in-up">
            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl border border-dark-100">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Head of Design" 
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex space-x-3">
                  <a href="#" className="text-white hover:text-primary transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path></svg></a>
                  <a href="#" className="text-white hover:text-primary transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1 font-['MonumentExtended']">David Rodriguez</h3>
            <p className="text-primary mb-2 font-['NeueMontreal']">Head of Design</p>
            <p className="text-gray-400 font-['NeueMontreal']">David leads our design team, ensuring all projects meet the highest standards of form and function.</p>
          </div>
          {/* Team Member 4 */}
          <div className="group animate-fade-in-up">
            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl border border-dark-100">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Operations Director" 
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex space-x-3">
                  <a href="#" className="text-white hover:text-primary transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path></svg></a>
                  <a href="#" className="text-white hover:text-primary transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1 font-['MonumentExtended']">Michael Kim</h3>
            <p className="text-primary mb-2 font-['NeueMontreal']">Operations Director</p>
            <p className="text-gray-400 font-['NeueMontreal']">Michael ensures our production processes run smoothly and efficiently to deliver projects on time.</p>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-lg">Industry Partners</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-lg">Materials Available</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-lg">Production Capacity</p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Additive Manufacturing Revolution</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">Partner with Galactic 3D and experience the future of manufacturing today.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/services" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg">
            Explore Our Services
          </Link>
          <Link href="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg">
            Contact Us
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