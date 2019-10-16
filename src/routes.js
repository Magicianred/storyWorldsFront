import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Affiliations from './pages/Affiliation';
import Books from './pages/Book';
import Characters from './pages/Character';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Universes from './pages/Universe';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/universes" component={Universes} />
        <Route path="/profile" component={Profile} />
        <Route path="/character" component={Characters} />
        <Route path="/book" component={Books} />
        <Route path="/affiliation" component={Affiliations} />
      </Switch>
    </BrowserRouter>
  )
}