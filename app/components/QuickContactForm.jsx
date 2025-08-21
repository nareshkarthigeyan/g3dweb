'use client';

export default function QuickContactForm() {
  return (
    <section className="py-20 bg-dark-200 relative overflow-hidden animate-fade-in-up">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-['MonumentExtended']">
          <span className="relative inline-block">
            Get a <span className="text-primary">Quote</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
          </span>
        </h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-['NeueMontreal'] mb-2">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 rounded-md bg-dark-100 text-white border border-dark-100 focus:outline-none focus:border-primary" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-['NeueMontreal'] mb-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 rounded-md bg-dark-100 text-white border border-dark-100 focus:outline-none focus:border-primary" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-['NeueMontreal'] mb-2">Message</label>
            <textarea id="message" rows="4" className="w-full px-4 py-2 rounded-md bg-dark-100 text-white border border-dark-100 focus:outline-none focus:border-primary"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block text-white font-['NeueMontreal'] mb-2">Upload File</label>
            <input type="file" id="file" className="w-full px-4 py-2 rounded-md bg-dark-100 text-white border border-dark-100 focus:outline-none focus:border-primary" />
          </div>
          <button type="submit" className="bg-primary hover:bg-secondary text-white font-monumentExtended tracking-wide px-5 py-3 rounded-md transition duration-300 shadow focus:outline-none focus-visible:underline w-full">Submit</button>
        </form>
      </div>
    </section>
  );
}