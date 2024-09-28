// pages/checkout.js
"use client";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice'; // Adjust the path as necessary


const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="p-4">
      <h2 style={{ fontSize: "45px", textAlign: "center", margin: "auto" }}>Checkout</h2>

      {cartItems.length === 0 ? (
        <p style={{ fontSize: "20px", textAlign: "center", margin: "auto" }}>Your cart is empty</p>
      ) : (
        <>
          <h3>Your Order Details:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div className="flex-1 mx-4">
                  <h4>{item.name}</h4>
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
          <h3 className="mt-4">Total: ${totalPrice}</h3>
          <form className="mt-4">
            <input className="border p-2 mb-2 w-full" type="text" placeholder="Name" required />
            <input className="border p-2 mb-2 w-full" type="email" placeholder="Email" required />
            <input className="border p-2 mb-2 w-full" type="text" placeholder="Address" required />
            <button className="bg-blue-500 text-white px-4 py-2" type="submit">
              Confirm Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
