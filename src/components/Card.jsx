import React from 'react';
import { Link } from 'react-router-dom';

// const cardWidth = { minWidth: '14rem', height: '42rem' };
// const cardWidth = { width: '18rem', minHeight: '34rem' };

const Card = ({ shoe }) => {
  return (
    <div className='card border-3' id='storeCard'>
      <img src={shoe.img} className='card-img-top img-fluid' alt={shoe.name} />
      <div className='card-body'>
        <h5 className='card-title ft-bold fs-2'>{shoe.name}</h5>
        <h6 className='card-subtitle mb-2 fw-bold fs-5'>${shoe.price}</h6>
        <Link
          to={{ pathname: `/store/item/${shoe.name}` }}
          className='btn btn-primary'
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default Card;
