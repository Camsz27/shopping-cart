import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { Store } from './components/Store';
import './Routes.css';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/store' component={Store} />
        <Route path='/' component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
