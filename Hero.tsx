import React from 'react';

export function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
          alt="Solar panels field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-5xl md:text-7xl font-serif max-w-3xl">
            EXPLORE SOLAR SOLUTIONS HERE
          </h1>
          <p className="text-white/90 text-xl mt-4 font-serif italic">
            Empowering Eco-friendly Energy Choices
          </p>
          <button className="mt-8 bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}