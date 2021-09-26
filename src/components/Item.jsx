import React from 'react';
import { Header } from './Header';
import { useLocation, useParams } from 'react-router';
import shoes from './shoes';

const select = { width: '30%', minWidth: '120px' };
const shoeImage = { height: '600px' };

const Item = () => {
  const { id } = useParams();
  const location = useLocation();

  const findShoe = () => {
    const shoe = shoes.filter((shoe) => shoe.name === id);
    return shoe;
  };

  const shoe = findShoe()[0];

  const addToCartHandler = () => {
    location.data(shoe);
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='card mt-5 border-4'>
          <div className='row'>
            <div className='col-md-6'>
              <img
                src={shoe.img}
                className='img-fluid rounded-start'
                alt='shoes'
                style={shoeImage}
              />
            </div>
            <div className='col-md-5'>
              <div className='card-body mt-5 ms-5'>
                <h5 className='card-title fw-bold fs-4'>{shoe.name}</h5>
                <p className='card-text'>{shoe.description}</p>
                <p className='card-text fw-bold fs-3'>${shoe.price}</p>
                <div>
                  <select
                    className='form-select form-select-m d-inline me-5 mt-5 mb-3'
                    id='quantity'
                    style={select}
                  >
                    <option value=''>Quantity</option>
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                  </select>
                  <button className='btn btn-dark' onClick={addToCartHandler}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
