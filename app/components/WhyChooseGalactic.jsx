'use client';

export default function WhyChooseGalactic() {
  return (
    <section className="py-20 bg-dark-200 relative overflow-hidden animate-fade-in-up">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-['MonumentExtended']">
          <span className="relative inline-block">
            Why Choose <span className="text-primary">Galactic</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-dark-100 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 shadow-xl group">
            <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">Quality & Precision</h3>
            <p className="text-gray-400 font-['NeueMontreal']">We use state-of-the-art technology to deliver parts with exceptional accuracy and a flawless finish.</p>
          </div>
          <div className="bg-dark-100 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 shadow-xl group">
            <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">Expert Team</h3>
            <p className="text-gray-400 font-['NeueMontreal']">Our engineers and designers are leaders in the field of additive manufacturing.</p>
          </div>
          <div className="bg-dark-100 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 shadow-xl group">
            <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">Customer Focused</h3>
            <p className="text-gray-400 font-['NeueMontreal']">We work closely with you to ensure your project's success, from concept to completion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}