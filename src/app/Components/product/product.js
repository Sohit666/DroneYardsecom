//component/product.js
"use client";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
