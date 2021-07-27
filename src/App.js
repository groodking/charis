import './App.css';
import React from "react";
import Home from './Home.js';
import Product from './components/Product/Product';
import ProductPage from './components/Product/ProductPage';
import Added from './components/Product/Added';
import Favourite from './components/Product/Favourite';
import {Route, Switch} from "react-router-dom";
// import Sliderfeature from './components/Featured/Sliderfeature';

function App() {
  
  return (
    <>
      <Switch>
        <Route path="/charis" component={Home} exact />
        <Route path="/Product" component={Product} exact />
        <Route path="/Product/ProductPage" component={ProductPage} />
        <Route path="/Product/Added" component={Added} />
        <Route path="/Product/Favourite" component={Favourite} />
      </Switch>
    </>
  );
}

export default App;
