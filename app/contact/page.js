'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.subject) newErrors.subject = 'Subject is required';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', company: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white pt-24 pb-20">
      {/* Header with animation */}
      <div className="relative container mx-auto px-6 mb-16 flex flex-col items-center justify-center text-center animate-fade-in">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark-400 to-dark-500 animate-gradient-x"></div> */}
          {/* <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,49,49,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div> */}
        </div>
        <h1 className="heading-1 text-primary drop-shadow-xl tracking-tight leading-tight animate-slide-down">Contact Us</h1>
        <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl font-['test'] mx-auto  animate-fade-in delay-200">Have a question or ready to start your next project? Get in touch with our team of experts.</p>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form Card */}
        <main className="order-2 lg:order-1 lg:col-span-2 flex flex-col gap-12">
          <div className="bg-background/90 p-10 rounded-3xl shadow-2xl animate-fade-in-up border border-dark-200 hover:shadow-primary/30 transition-all duration-300">
            <h2 className="heading-2 text-primary drop-shadow-lg animate-slide-right mb-8">Send Us a Message</h2>
            <form className="space-y-8" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-gray-300 mb-2" style={{fontFamily: 'NeueMontreal, new, sans-serif'}}>Your Name<span className="text-primary">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full bg-black/80 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`} 
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1 animate-fade-in">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-gray-300 mb-2" style={{fontFamily: 'NeueMontreal, new, sans-serif'}}>Your Email<span className="text-primary">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full bg-black/80 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`} 
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1 animate-fade-in">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-base font-semibold text-gray-300 mb-2" style={{fontFamily: 'NeueMontreal, new, sans-serif'}}>Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full bg-black/80 border border-gray-700 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10" 
                  placeholder="Your Company"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-base font-semibold text-gray-300 mb-2" style={{fontFamily: 'NeueMontreal, new, sans-serif'}}>Subject<span className="text-primary">*</span></label>
                <input 
                  type="text" 
                  id="subject" 
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={`w-full bg-black/80 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`} 
                  placeholder="How can we help you?"
                  value={form.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p id="subject-error" className="text-red-500 text-xs mt-1 animate-fade-in">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-semibold text-gray-300 mb-2" style={{fontFamily: 'NeueMontreal, new, sans-serif'}}>Message<span className="text-primary">*</span></label>
                <textarea 
                  id="message" 
                  rows="6" 
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full bg-black/80 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10 resize-none`} 
                  placeholder="Tell us about your project or inquiry..."
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1 animate-fade-in">{errors.message}</p>}
              </div>
              <div>
                <button 
                  type="submit" 
                  className={`w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transition-all duration-300 flex items-center justify-center focus:ring-4 focus:ring-primary/40 focus:outline-none active:scale-95 hover:shadow-primary/40`}
                  disabled={status === 'loading'}
                  aria-busy={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center"><span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></span>Sending...</span>
                  ) : status === 'success' ? (
                    <span className="flex items-center"><svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Message Sent!</span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {status === 'success' && <p className="text-green-400 text-center mt-3 animate-fade-in">Thank you! We have received your message.</p>}
              </div>
            </form>
          </div>
          
          {/* Google Maps Embed */}
          <div className="bg-dark-200/80 p-4 rounded-2xl shadow-xl animate-fade-in-up border border-dark-100">
            <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-lg overflow-hidden relative group">
              <iframe
                title="Galactic 3D Location"
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d62198.617989690334!2d77.60654333821292!3d13.00931143128238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d13.0242069!2d77.6025813!4m5!1s0x3bae11a915ab800d%3A0x7b9df0b7c02a0008!2sGalactic-3D%2C%20Cambridge%20Institute%20of%20Technology%2C%20Jai%20Bhuvaneshwari%20Layout%20Road%2C%20SR%20Layout%2C%20Chikkabasavanapura%2C%20Krishnarajapuram%2C%20Bengaluru%2C%20Karnataka!3m2!1d13.0135513!2d77.7036341!5e0!3m2!1sen!2sin!4v1750678240914!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* Overlay for directions */}
              <button
                aria-label="Get Directions to Galactic 3D"
                className="absolute inset-0 z-10 cursor-pointer bg-transparent transition-all duration-200 group-hover:bg-black/10 focus:bg-black/20"
                style={{ outline: 'none', border: 'none' }}
                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=123+Innovation+Drive,+San+Francisco,+CA+94107', '_blank')}
              >
                <span className="sr-only">Get Directions to Galactic 3D</span>
              </button>
        </div>
      </div>

          {/* Testimonial Strip */}
          <div className="bg-primary/10 rounded-2xl py-10 px-6 flex flex-col md:flex-row items-center justify-center gap-8 shadow-lg animate-fade-in-up border border-primary/30">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-20 h-20 rounded-full border-4 border-primary shadow-md animate-fade-in" />
            <div className="text-center md:text-left">
              <p className="text-2xl text-gray-100 font-medium mb-2 animate-fade-in delay-200" style={{fontFamily: 'NeueMontreal, new, sans-serif'}}>“Galactic 3D delivered our prototypes faster than anyone else, and the quality was outstanding. Their team is responsive and truly understands innovation.”</p>
              <p className="text-primary font-bold text-lg animate-fade-in delay-300" style={{fontFamily: 'MonumentExtended, NeueMontreal, new, sans-serif'}}>— Alex Johnson, CTO, FutureTech</p>
            </div>
          </div>
        </main>
        {/* Sticky Contact Info Sidebar */}
        <aside className="order-1 lg:order-2 lg:col-span-1 space-y-8 lg:sticky lg:top-32 lg:self-start animate-slide-left">
          <div className="bg-dark-200/80 rounded-2xl shadow-2xl p-8 flex flex-col gap-8">
            {/* Location */}
            <div className="flex items-start space-x-4 group transition-all duration-200 hover:bg-primary/10 rounded-lg p-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all duration-200">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 tracking-wide">Our Location</h3>
                <address className="font-['test'] not-italic text-gray-400 leading-tight">
                Cambridge Institute of Technology, Jai Bhuvaneshwari Layout Rd, SR Layout, Chikkabasavanapura, Krishnarajapuram, Bengaluru, Karnataka 560036
                </address>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start space-x-4 group transition-all duration-200 hover:bg-primary/10 rounded-lg p-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all duration-200">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 tracking-wide">Phone</h3>
                <p className="font-['test'] text-gray-400 mb-1">Main: 89390 58575</p>
                {/* <p className="text-gray-400">Support: (123) 456-7891</p> */}
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start space-x-4 group transition-all duration-200 hover:bg-primary/10 rounded-lg p-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all duration-200">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <div className="font-['test']">
                <h3 className="text-lg font-semibold mb-1 tracking-wide">Email</h3>
                <p className="text-gray-400 mb-1">admin@galactic-3d.com</p>
                {/* <p className="text-gray-400">support@galactic3d.com</p> */}
              </div>
            </div>
            {/* Business Hours */}
            <div className="flex items-start space-x-4 group transition-all duration-200 hover:bg-primary/10 rounded-lg p-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all duration-200">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="font-['test']">
                <h3 className="text-lg font-semibold mb-1 tracking-wide">Business Hours</h3>
                <p className="text-gray-400 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition duration-300">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A105323006&keywords=Galactic%203D%20PVT%20LTD&origin=ENTITY_SEARCH_HOME_HISTORY&sid=q%3B_" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition duration-300">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                {/* <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition duration-300">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a> */}
                <a href="https://www.instagram.com/galactic.3d/" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition duration-300">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 mb-20 animate-fade-in-up">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-6 tracking-tight leading-tight">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{fontFamily: 'NeueMontreal, new, sans-serif'}}>Find answers to common questions about our services and processes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">What materials do you work with?</h3>
            <p className="text-gray-400">We work with a wide range of materials including various plastics (PLA, ABS, PETG, Nylon), resins, metals (aluminum, titanium, steel), and composites. The specific material choice depends on your project requirements.</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">How long does the 3D printing process take?</h3>
            <p className="text-gray-400">Project timelines vary based on complexity, size, and material. Simple prototypes can be completed in 1-3 days, while complex production parts may take 1-2 weeks. We'll provide a detailed timeline during your consultation.</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Do you offer design services?</h3>
            <p className="text-gray-400">Yes, our team of experienced designers can help bring your ideas to life. We offer comprehensive design services from concept development to CAD modeling and optimization for additive manufacturing.</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">What file formats do you accept?</h3>
            <p className="text-gray-400">We accept most standard 3D file formats including STL, OBJ, STEP, IGES, and native CAD files from software like SolidWorks, Fusion 360, and AutoCAD.</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Do you ship internationally?</h3>
            <p className="text-gray-400">Yes, we ship to customers worldwide. International shipping rates and delivery times vary by location. Contact us for specific shipping information for your region.</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Can you handle large production runs?</h3>
            <p className="text-gray-400">Absolutely. Our facility is equipped for both small batch production and larger manufacturing runs. We'll work with you to determine the most efficient production method based on your quantity requirements.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16 animate-fade-in-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="heading-2 mb-6 tracking-tight leading-tight">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{fontFamily: 'NeueMontreal, new, sans-serif'}}>Contact us today to discuss your needs and discover how our additive manufacturing solutions can benefit your business.</p>
          <Link href="/services" className="bg-white text-primary hover:bg-gray-200 font-bold py-4 px-10 rounded-xl text-lg inline-block shadow-lg transition-all duration-300 focus:ring-4 focus:ring-primary/40 focus:outline-none active:scale-95 hover:shadow-primary/40" style={{fontFamily: 'MonumentExtended, NeueMontreal, new, sans-serif'}}>
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1s both; }
        .animate-fade-in-up { animation: fade-in-up 1s both; }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slide-down 1s both; }
        @keyframes slide-down {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-right { animation: slide-right 1s both; }
        @keyframes slide-right {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}