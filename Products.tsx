import React from 'react';

const products = [
  {
    name: 'Grid-Tie Inverter',
    price: 'Ksh200.00',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Pure Sine Wave Inverter',
    price: 'Ksh150.00',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Off-Grid Inverter',
    price: 'Ksh180.00',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Lithium-Ion Battery',
    price: 'Ksh300.00',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Gel Battery',
    price: 'Ksh100.00',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80'
  }
];

export function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif mb-12">PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="aspect-square bg-white rounded-lg overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <h3 className="mt-4 font-serif">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}