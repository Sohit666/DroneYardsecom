// pages/products.js
"use client";
import Product from '../../../Components/product/product';

const products = [
  { id: 1, name: 'Drone A', description: 'Fast drone', price: 299, image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320' },
  { id: 2, name: 'Drone B', description: 'Stealth drone', price: 499, image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320' },
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
