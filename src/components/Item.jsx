import React from 'react';
import { Header } from './Header';
import shoes from '../assets/shoe1.jpeg';

const select = { width: '30%', minWidth: '120px' };

const Item = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='card mt-5 border-4'>
          <div className='row'>
            <div className='col-md-6'>
              <img
                src={shoes}
                className='img-fluid rounded-start'
                alt='shoes'
              />
            </div>
            <div className='col-md-5'>
              <div className='card-body mt-5 ms-5'>
                <h5 className='card-title fw-bold fs-4'>Card title</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className='card-text fw-bold fs-3'>$59.99</p>
                <div>
                  <select
                    className='form-select form-select-m d-inline me-5 mt-5 mb-3'
                    id='quantity'
                    style={select}
                  >
                    <option value='0'>Quantity</option>
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
                  <button className='btn btn-dark'>Add to cart</button>
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
