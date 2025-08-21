import React from 'react';

const ourPrinters = [
  {
    name: 'Galactic FDM 1',
    type: 'FDM',
    features: ['Large build volume', 'High-speed printing', 'Dual extrusion'],
    image: 'https://images.unsplash.com/photo-1611606023593-2a18a5e2f5aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Galactic SLS 1',
    type: 'SLS',
    features: ['High-precision printing', 'Wide range of materials', 'Self-supporting prints'],
    image: 'https://images.unsplash.com/photo-1611606023593-2a18a5e2f5aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const partnerPrinters = [
  {
    brand: 'Partner Brand A',
    name: 'Metal Printer X',
    specs: '250 x 250 x 300 mm build volume, 20-100 micron layer height',
    brochure: '/brochures/metal-printer-x.pdf',
    demoVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1611606023593-2a18a5e2f5aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    brand: 'Partner Brand B',
    name: 'Metal Printer Y',
    specs: '500 x 500 x 500 mm build volume, 50-200 micron layer height',
    brochure: '/brochures/metal-printer-y.pdf',
    demoVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1611606023593-2a18a5e2f5aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const MachinesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Machines</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Printers We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ourPrinters.map((printer, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <img src={printer.image} alt={printer.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">{printer.name} ({printer.type})</h3>
                <ul className="list-disc list-inside text-gray-400 mb-4">
                  {printer.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">Get a Quote</button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Metal Printers We Sell</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerPrinters.map((printer, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <img src={printer.image} alt={printer.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">{printer.brand} {printer.name}</h3>
                <p className="text-gray-400 mb-4">{printer.specs}</p>
                <div className="flex space-x-4">
                  <a href={printer.brochure} className="text-primary hover:underline">Download Brochure</a>
                  <a href={printer.demoVideo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Watch Demo</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Custom Builds</h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="requirements" className="block text-white mb-2">Requirements</label>
              <textarea id="requirements" rows="4" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"></textarea>
            </div>
            <button type="submit" className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded w-full">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default MachinesPage;