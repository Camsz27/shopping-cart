import React from 'react';
import { Header } from './Header';
import Card from './Card';
import shoes from './shoes';
import '../styles/Store.css';

export const Store = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row pt-5 ms-5 ps-2'>
          {shoes.map((shoe) => (
            <div className='col-lg-4 my-3'>
              <Card shoe={shoe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
