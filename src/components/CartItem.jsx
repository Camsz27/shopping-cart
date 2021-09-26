import React from 'react';
import image from '../assets/shoes/shoe1.jpeg';

const imageStyle = { width: '150px' };
const select = { width: '30%', minWidth: '120px' };

const CartItem = () => {
  return (
    <div className='d-flex border-2 border flex-md-row flex-column px-3 px-md-0'>
      <div className='me-md-4 my-3 my-md-0'>
        <img
          src={image}
          style={imageStyle}
          alt='shoe'
          className='img-fluid rounded-start'
        />
      </div>
      <div className='d-flex flex-column align-items-center justify-content-center me-md-4'>
        <h4>Air Jordan XXXVI "First Light"</h4>
        <select
          className='form-select form-select-m'
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
      </div>
      <div className='d-flex align-items-middle justify-content-center mx-5 mt-3 mt-md-0'>
        <h5 className='align-self-center'>$120</h5>
      </div>
    </div>
  );
};

export default CartItem;
