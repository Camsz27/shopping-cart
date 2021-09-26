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

  const trial = (shoe) => {
    console.log('here we are');
    console.log(cart);
    setCart((prevState) => {
      return [...prevState, shoe];
    });
    console.log(cart);
  };

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/store/item/:id'>
          <Item handler={trial} />
        </Route>
        <Route path='/store' component={Store} />
        <Route path='/cart' component={Cart} />
        <Route path='/' component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
