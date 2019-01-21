/* eslint-disable import/no-named-as-default */
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faShoppingCart, faMinusCircle  } from '@fortawesome/free-solid-svg-icons';
import ProductPage from './Products/ProductPage.jsx';
import ShoppingCart from './ShoppingCart/ShoppingCart.jsx'
import FilterProducts from './FilterSelection/FilterProducts.jsx'
import Header from './Header/Header.jsx';

library.add(faCartPlus,  faShoppingCart, faMinusCircle);
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">   
            <FilterProducts /> 
            <ProductPage />
            <ShoppingCart />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
