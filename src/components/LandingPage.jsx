import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link
              className='btn btn-outline-light btn-lg position-absolute top-50 h1 py-3 px-4 ms-n4'
              to='/store'
            >
              Shop Now
            </Link>
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
