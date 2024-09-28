// components/cart.js
"use client";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice'; // Ensure correct import path
import Link from 'next/link';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div className="flex-1 mx-4">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>
          <button className="bg-red-500 text-white px-4 py-2" onClick={handleClearCart}>
            Clear Cart
          </button>
          <Link href="/checkout">
            <button className="bg-green-500 text-white px-4 py-2">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
