// pages/products.js
"use client";
import Product from '../../../Components/product/product';

const products = [
  { id: 4, name: 'Controller A', description: 'Fast drone', price: 299, image: '/images/droneA.jpg' },
  { id: 5, name: 'controller B', description: 'Stealth drone', price: 499, image: '/images/droneB.jpg' },
  // Add images for other products...
];

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
