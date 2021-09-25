import React from 'react';
import '../styles/LandingPage.css';
import { Header } from './Header';

export const LandingPage = () => {
  return (
    <div className='landingPage'>
      <Header />
      <div className='ms-5 container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <a
              className='btn btn-outline-light btn-lg position-absolute top-50 h1 py-3 px-4 ms-n4'
              href='/store'
            >
              Shop Now
            </a>
          </div>
          <div className='col'></div>
          <div className='col'></div>
          <div className='col'></div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  );
};
