import React from 'react';
import shoes from '../assets/shoe1.jpeg';

const cardWidth = { width: '18rem' };

const Card = () => {
  return (
    <div className='card border-3' style={cardWidth}>
      <img src={shoes} class='card-img-top img-fluid' alt='shoes' />
      <div class='card-body'>
        <h5 class='card-title ft-bold fs-2'>Air Jordans Retro </h5>
        <h6 class='card-subtitle mb-2 fw-bold fs-5'>$59.99</h6>
        <a href='/store/item1' class='btn btn-primary'>
          More Info
        </a>
      </div>
    </div>
  );
};

export default Card;
