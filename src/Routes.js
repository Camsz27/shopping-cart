import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { Store } from './components/Store';
import Item from './components/Item';
import './Routes.css';
import Cart from './components/Cart';
import { Header } from './components/Header';
import { useState } from 'react';

function Routes() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (shoe) => {
    setCart((prevState) => {
      if (itemInCart(shoe)) {
        return [...prevState];
      }
      return [...prevState, shoe];
    });
  };

  const itemInCart = (shoe) => {
    const result = cart.find((element) => element.name === shoe.name);
    if (result) {
      return true;
    }
    return false;
  };

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/store/item/:id'>
          <Item handler={addItemToCart} />
        </Route>
        <Route path='/store' component={Store} />
        <Route path='/cart'>
          <Cart cart={cart} />
        </Route>
        <Route path='/' component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
