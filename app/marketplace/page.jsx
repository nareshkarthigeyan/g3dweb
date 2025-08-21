'use client';
import React, { useState } from 'react';

const designs = [
  { id: 1, name: 'Mechanical Part', category: 'mechanical', price: '$50', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Artistic Sculpture', category: 'art', price: '$120', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Architectural Model', category: 'architecture', price: '$200', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Gadget Accessory', category: 'gadgets', price: '$25', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

const MarketplacePage = () => {
  const [filter, setFilter] = useState('all');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const filteredDesigns = designs.filter(design => filter === 'all' || design.category === filter);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Marketplace</h1>

        <div className="flex justify-center mb-8">
          <button onClick={() => setFilter('all')} className={`mx-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-primary' : 'bg-gray-700'}`}>All</button>
          <button onClick={() => setFilter('mechanical')} className={`mx-2 px-4 py-2 rounded ${filter === 'mechanical' ? 'bg-primary' : 'bg-gray-700'}`}>Mechanical</button>
          <button onClick={() => setFilter('art')} className={`mx-2 px-4 py-2 rounded ${filter === 'art' ? 'bg-primary' : 'bg-gray-700'}`}>Art</button>
          <button onClick={() => setFilter('architecture')} className={`mx-2 px-4 py-2 rounded ${filter === 'architecture' ? 'bg-primary' : 'bg-gray-700'}`}>Architecture</button>
          <button onClick={() => setFilter('gadgets')} className={`mx-2 px-4 py-2 rounded ${filter === 'gadgets' ? 'bg-primary' : 'bg-gray-700'}`}>Gadgets</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {filteredDesigns.map(design => (
            <div key={design.id} className="bg-gray-800 p-4 rounded-lg">
              <img src={design.image} alt={design.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">{design.name}</h3>
              <p className="text-gray-400">{design.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Have a design to sell or a part to produce?</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded">Sell/Upload Design</button>
            <button className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded">Upload Part for Production</button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">My Account</h2>
          {isLoggedIn ? (
            <div>
              <p>Welcome back, user!</p>
              <button onClick={() => setIsLoggedIn(false)} className="text-primary hover:underline">Logout</button>
            </div>
          ) : (
            <div>
              <p>Login to view your orders and manage your account.</p>
              <button onClick={() => setIsLoggedIn(true)} className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">Login</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MarketplacePage;