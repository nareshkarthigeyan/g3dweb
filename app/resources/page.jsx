'use client';
import React, { useState } from 'react';

const resources = [
  { id: 1, type: 'blog', title: 'The Future of Additive Manufacturing in Aerospace', description: 'Explore how 3D printing is revolutionizing the aerospace industry.', image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 2, type: 'brochure', title: 'Galactic FDM 1 Brochure', description: 'Download the brochure for our flagship FDM printer.', image: 'https://images.unsplash.com/photo-1611606023593-2a18a5e2f5aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 3, type: 'case-study', title: 'Case Study: Medical Implants', description: 'How we helped a medical device company create custom implants.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 4, type: 'guide', title: 'Design for Additive Manufacturing Guide', description: 'A comprehensive guide to designing parts for 3D printing.', image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 5, type: 'webinar', title: 'Webinar: Metal 3D Printing', description: 'Watch our webinar on the latest trends in metal 3D printing.', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 6, type: 'blog', title: 'Metal vs. Polymer 3D Printing', description: 'Choosing the right technology for your application.', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 7, type: 'brochure', title: 'Galactic SLS 1 Brochure', description: 'Download the brochure for our flagship SLS printer.', image: 'https://images.unsplash.com/photo-1611606023593-2a18a5e2f5aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 8, type: 'case-study', title: 'Case Study: Automotive Prototyping', description: 'How we accelerated automotive innovation with rapid prototyping.', image: 'https://images.unsplash.com/photo-1553531580-652231da6a15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

const ResourcesPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredResources = resources.filter(resource => filter === 'all' || resource.type === filter);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Resources</h1>

        <div className="flex justify-center mb-8">
          <button onClick={() => setFilter('all')} className={`mx-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-primary' : 'bg-gray-700'}`}>All</button>
          <button onClick={() => setFilter('blog')} className={`mx-2 px-4 py-2 rounded ${filter === 'blog' ? 'bg-primary' : 'bg-gray-700'}`}>Blogs</button>
          <button onClick={() => setFilter('brochure')} className={`mx-2 px-4 py-2 rounded ${filter === 'brochure' ? 'bg-primary' : 'bg-gray-700'}`}>Brochures</button>
          <button onClick={() => setFilter('case-study')} className={`mx-2 px-4 py-2 rounded ${filter === 'case-study' ? 'bg-primary' : 'bg-gray-700'}`}>Case Studies</button>
          <button onClick={() => setFilter('guide')} className={`mx-2 px-4 py-2 rounded ${filter === 'guide' ? 'bg-primary' : 'bg-gray-700'}`}>Guides</button>
          <button onClick={() => setFilter('webinar')} className={`mx-2 px-4 py-2 rounded ${filter === 'webinar' ? 'bg-primary' : 'bg-gray-700'}`}>Webinars</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-gray-800 p-4 rounded-lg">
              <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">{resource.title}</h3>
              <p className="text-gray-400">{resource.description}</p>
              <a href="#" className="text-primary hover:underline mt-4 inline-block">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
