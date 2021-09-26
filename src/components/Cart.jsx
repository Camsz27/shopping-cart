import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
const totalContainer = { width: '70%' };

const containerStyle = { width: '50%', minWidth: '534px' };

const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const ans = cart
      .map((shoe) => Number(shoe.quantity) * Number(shoe.price))
      .reduce((prev, curr) => prev + curr);
    setTotal(ans);
  };

  useEffect(() => {
    if (cart.length > 0) {
      calculateTotal();
    }
  });

  return (
    <div>
      <div className='container mt-5 text-center'>
        <h1 className='display-4'>Your Shopping Cart</h1>
        <div
          className='container d-flex justify-content-center flex-column'
          style={containerStyle}
        >
          {cart.map((shoe) => (
            <CartItem item={shoe} handler={calculateTotal} />
          ))}
        </div>
        <div
          className='total d-flex justify-content-around mx-auto mt-4'
          style={totalContainer}
        >
          <h3>Total</h3>
          <h3>${total}</h3>
        </div>
        <div>
          <button className='btn btn-dark btn-lg px-5'>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
