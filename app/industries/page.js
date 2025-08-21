import React from 'react';

const industries = [
  {
    name: 'Aerospace',
    intro: 'Pioneering the future of aerospace with lightweight, high-strength components.',
    offerings: ['Rapid Prototyping', 'Tooling', 'Production Parts'],
    image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caseStudy: '/case-studies/aerospace',
  },
  {
    name: 'Medical/Dental',
    intro: 'Revolutionizing healthcare with patient-specific implants, surgical guides, and dental models.',
    offerings: ['Custom Implants', 'Anatomical Models', 'Surgical Guides'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caseStudy: '/case-studies/medical-dental',
  },
  {
    name: 'Defence',
    intro: 'Delivering mission-critical components with uncompromising quality and reliability.',
    offerings: ['Surveillance Drones', 'Custom Equipment', 'Legacy Part Replacement'],
    image: 'https://images.unsplash.com/photo-1580654712682-d7e7b56d0b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caseStudy: '/case-studies/defence',
  },
  {
    name: 'Automotive',
    intro: 'Accelerating automotive innovation with rapid prototyping and custom part manufacturing.',
    offerings: ['Jigs & Fixtures', 'Prototyping', 'End-Use Parts'],
    image: 'https://images.unsplash.com/photo-1553531580-652231da6a15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caseStudy: '/case-studies/automotive',
  },
  {
    name: 'Oil & Gas',
    intro: 'Providing robust and reliable solutions for the demanding oil and gas industry.',
    offerings: ['Custom Tooling', 'On-Demand Parts', 'Complex Geometries'],
    image: 'https://images.unsplash.com/photo-1582652510399-524567223353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caseStudy: '/case-studies/oil-gas',
  },
  {
    name: 'Space',
    intro: 'Pushing the boundaries of space exploration with cutting-edge additive manufacturing.',
    offerings: ['Satellite Components', 'Lightweight Structures', 'Research & Development'],
    image: 'https://images.unsplash.com/photo-1541185934-3b062881582b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caseStudy: '/case-studies/space',
  },
];

const IndustriesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Industries</h1>
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-dark-200 rounded-lg shadow-lg overflow-hidden">
              <div className="md:w-1/2">
                <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-4">{industry.name}</h2>
                <p className="text-gray-400 mb-4">{industry.intro}</p>
                <h3 className="text-xl font-bold mb-2">Offerings:</h3>
                <ul className="list-disc list-inside text-gray-400 mb-4">
                  {industry.offerings.map((offering, i) => (
                    <li key={i}>{offering}</li>
                  ))}
                </ul>
                <a href={industry.caseStudy} className="text-primary hover:underline">View Case Study</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;