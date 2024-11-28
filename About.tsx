import React from 'react';

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif mb-12">ABOUT FEBASHI LIMITED</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed font-serif italic">
              Welcome to Febashi Limited, your premier destination for top-quality solar solutions in Nairobi, Kenya. 
              We specialize in battery and solar panel installations, inverter setups, and a wide range of solar products. 
              Our commitment to eco-friendly practices and energy-saving tips sets us apart in providing sustainable energy 
              solutions for your needs.
            </p>
            <button className="mt-8 border border-black px-8 py-3 hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>
          <div className="aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80"
              alt="Solar panel installation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}