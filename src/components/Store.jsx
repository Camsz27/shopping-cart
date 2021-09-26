import React from 'react';
import Card from './Card';
import shoes from './shoes';

export const Store = () => {
  return (
    <div>
      <div className='container'>
        <div className='row pt-5 ms-lg-5 ps-lg-2'>
          {shoes.map((shoe) => (
            <div className='col-lg-4 col-md-6 my-3'>
              <Card shoe={shoe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
