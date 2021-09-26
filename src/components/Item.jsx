import React from 'react';
import { useParams } from 'react-router';
import shoes from './shoes';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const shoeImage = { height: '600px' };

const popover = (
  <Popover id='popover-basic'>
    <Popover.Header as='h3'>Item Added</Popover.Header>
    <Popover.Body>The shoes have been added to the cart</Popover.Body>
  </Popover>
);

const Item = ({ handler }) => {
  const { id } = useParams();

  const findShoe = () => {
    const shoe = shoes.filter((shoe) => shoe.name === id);
    return shoe;
  };

  const shoe = findShoe()[0];

  const addToCartHandler = () => {
    shoe.quantity += 1;
    handler(shoe);
  };

  return (
    <div>
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
                <div className='my-4'>
                  <OverlayTrigger
                    trigger='click'
                    placement='right'
                    overlay={popover}
                  >
                    <button
                      className='btn btn-dark'
                      onClick={addToCartHandler}
                      data-bs-toggle='popover'
                      title='Popover title'
                      data-bs-content="And here's some amazing content. It's very engaging. Right?"
                    >
                      Add to cart
                    </button>
                  </OverlayTrigger>
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
