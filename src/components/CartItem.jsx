import React, { useState } from 'react';

const imageStyle = { maxWidth: '150px' };
const select = { width: '30%', minWidth: '120px' };

const CartItem = ({ item, handler }) => {
  const [price, setPrice] = useState(item.price * item.quantity);

  const calculatePrice = (e) => {
    item.quantity = e.target.value;
    setPrice(item.quantity * item.price);
    handler();
  };

  return (
    <div className='d-flex border-2 border flex-lg-row flex-column px-3 px-md-0 justify-content-lg-between justify-content-center'>
      <div className='me-lg-4 my-3 my-md-0'>
        <img
          src={item.img}
          style={imageStyle}
          alt='shoe'
          className='img-fluid rounded-start'
        />
      </div>
      <div className='d-flex flex-column align-items-center justify-content-center me-lg-4'>
        <h4>{item.name}</h4>
        <select
          className='form-select form-select-m'
          id='quantity'
          style={select}
          defaultValue={item.quantity}
          onChange={calculatePrice}
        >
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
      <div className='d-flex align-items-middle justify-content-center mx-5 mt-3 mt-lg-0'>
        <h5 className='align-self-center'>${price}</h5>
      </div>
    </div>
  );
};

export default CartItem;
