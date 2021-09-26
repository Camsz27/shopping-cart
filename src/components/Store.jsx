import React, { useState } from 'react';
import { Header } from './Header';
import Card from './Card';
import shoe2 from '../assets/shoes/shoe2.jpeg';
import shoes from './shoes';
import '../styles/Store.css';

export const Store = () => {
  const [cart, setCart] = useState([
    {
      name: 'Air Jordan 1 Low',
      img: shoe2,
      price: 90,
      description:
        "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. It's made for casual mode, with an iconic design that goes with everything and never goes out of style.",
    },
  ]);

  const addItemToCart = (shoe) => {
    setCart(cart.push(shoe));
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row pt-5 ms-5 ps-2'>
          {shoes.map((shoe) => (
            <div className='col-lg-4 col-md-6 my-3'>
              <Card shoe={shoe} cart={addItemToCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
