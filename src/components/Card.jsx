import React from 'react';
import shoes from '../assets/shoe1.jpeg';

const cardWidth = { width: '20rem' };

const Card = () => {
  return (
    <div className='card border-dark' style={cardWidth}>
      <img src={shoes} class='card-img-top' alt='shoes' />
      <div class='card-body'>
        <h5 class='card-title ft-bold fs-2'>Air Jordans Retro </h5>
        <h6 class='card-subtitle mb-2 fw-bold fs-5'>$59.99</h6>
        <a href='/' class='btn btn-primary'>
          More Info
        </a>
      </div>
    </div>
  );
};

export default Card;
