import React from 'react';

const cardWidth = { width: '18rem', minHeight: '34rem' };

const Card = ({ shoe }) => {
  return (
    <div className='card border-3' style={cardWidth}>
      <img src={shoe.img} className='card-img-top img-fluid' alt={shoe.name} />
      <div className='card-body'>
        <h5 className='card-title ft-bold fs-2'>{shoe.name}</h5>
        <h6 className='card-subtitle mb-2 fw-bold fs-5'>${shoe.price}</h6>
        <a href='/store/item1' className='btn btn-primary'>
          More Info
        </a>
      </div>
    </div>
  );
};

export default Card;
