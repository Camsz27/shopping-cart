import React from 'react';
import CartItem from './CartItem';
import { useLocation } from 'react-router';

const totalContainer = { width: '70%' };

const Cart = () => {
  const location = useLocation();

  const trial = () => {
    console.log(location.data);
  };

  return (
    <div>
      <div className='container mt-5 text-center'>
        <h1 className='display-4'>Your Shopping Cart</h1>
        <div className='container d-flex justify-content-center'>
          <CartItem />
        </div>
        <div
          className='total d-flex justify-content-around mx-auto mt-4'
          style={totalContainer}
        >
          <h3>Total</h3>
          <h3>$320</h3>
        </div>
        <div>
          <button className='btn btn-dark btn-lg px-5' onClick={trial}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
