'use client';

export default function Technology() {
  return (
    <section className="container mx-auto px-6 py-20 bg-white animate-fade-in-up relative overflow-hidden">
      {/* Faint orange gradient at the top */}
      <div className="pointer-events-none absolute left-0 top-0 w-full h-32 z-0" style={{background: 'linear-gradient(180deg, rgba(255,122,0,0.10) 0%, rgba(255,255,255,0) 100%)'}} />
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center font-['MonumentExtended'] text-black relative z-10">
        Our <span className="text-primary">Technology</span>
      </h2>
      <p className="text-xl text-black text-center mb-16 max-w-3xl mx-auto font-['NeueMontreal'] relative z-10">
        We leverage the most advanced manufacturing technologies to deliver
        precision, speed, and innovation for every project.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in-up relative z-10">
        {/* DMLS */}
        <div className="bg-white border border-orange-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 font-['MonumentExtended'] text-black">
            DMLS
          </h3>
          <p className="text-black font-['NeueMontreal']">
            Direct Metal Laser Sintering for high-strength, complex metal
            parts with excellent accuracy.
          </p>
        </div>
        {/* SLS */}
        <div className="bg-white border border-orange-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 font-['MonumentExtended'] text-black">
            SLS
          </h3>
          <p className="text-black font-['NeueMontreal']">
            Selective Laser Sintering for durable, functional prototypes and
            end-use polymer parts.
          </p>
        </div>
        {/* FDM */}
        <div className="bg-white border border-orange-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <path d="M8 8h8v8H8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 font-['MonumentExtended'] text-black">
            FDM
          </h3>
          <p className="text-black font-['NeueMontreal']">
            Fused Deposition Modeling for cost-effective, rapid prototyping in
            a variety of plastics.
          </p>
        </div>
        {/* DLP */}
        <div className="bg-white border border-orange-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <ellipse cx="12" cy="12" rx="10" ry="6" />
              <path d="M2 12a10 6 0 0020 0" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 font-['MonumentExtended'] text-black">
            DLP
          </h3>
          <p className="text-black font-['NeueMontreal']">
            Digital Light Processing for ultra-high resolution parts and
            smooth surface finishes.
          </p>
        </div>
        {/* Vacuum Casting */}
        <div className="bg-white border border-orange-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="6" width="12" height="12" rx="2" />
              <path d="M6 12h12" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 font-['MonumentExtended'] text-black">
            Vacuum Casting
          </h3>
          <p className="text-black font-['NeueMontreal']">
            For short-run production of high-quality polyurethane parts with
            excellent detail.
          </p>
        </div>
        {/* CNC Machining & Fabrication */}
        <div className="bg-white border border-orange-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-primary hover:scale-[1.03] group">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition duration-300">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M7 7h10v10H7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 font-['MonumentExtended'] text-black">
            CNC Machining & Fabrication
          </h3>
          <p className="text-black font-['NeueMontreal']">
            Precision subtractive manufacturing and fabrication for metals and
            plastics at any scale.
          </p>
        </div>
      </div>
    </section>
  );
}
