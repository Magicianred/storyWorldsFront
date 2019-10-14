import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Affiliation from './pages/Affiliation';
import Book from './pages/Book';
import Character from './pages/Character';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Universe from './pages/Universe';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/universe" component={Universe} />
        <Route path="/profile" component={Profile} />
        <Route path="/character" component={Character} />
        <Route path="/book" component={Book} />
        <Route path="/affiliation" component={Affiliation} />
      </Switch>
    </BrowserRouter>
  )
}