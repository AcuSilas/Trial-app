import React from 'react';

const services = [
  {
    name: 'Solar Panel Installation',
    price: 'US$250',
  },
  {
    name: 'Battery Installation',
    price: 'US$150',
  },
  {
    name: 'Inverter Installation',
    price: 'US$200',
  }
];

export function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif mb-12">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="border p-6 rounded-lg">
              <h3 className="text-xl font-serif">{service.name}</h3>
              <div className="w-12 h-0.5 bg-black my-4" />
              <p className="text-2xl mb-6">{service.price}</p>
              <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}