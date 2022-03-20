import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Pages/HomePage/home';
import Navbar from './Navbar';

function Main() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </BrowserRouter>

  );
}

export default Main;