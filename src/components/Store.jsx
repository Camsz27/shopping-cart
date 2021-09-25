import React from 'react';
import { Header } from './Header';
import Card from './Card';
import '../styles/Store.css';

export const Store = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row pt-5 ms-5 ps-2'>
          <div className='col-4 my-3'>
            <Card />
          </div>
          <div className='col-4 my-3'>
            <Card />
          </div>
          <div className='col-4 my-3'>
            <Card />
          </div>
          <div className='col-4 my-3'>
            <Card />
          </div>
          <div className='col-4 my-3'>
            <Card />
          </div>
          <div className='col-4 my-3'>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
