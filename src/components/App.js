/* eslint-disable import/no-named-as-default */
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import ProductPage from './Products/ProductPage.jsx';
import ShoppingCartContainer from './ShoppingCart/ShoppingCartContainer.jsx'

library.add(faCartPlus,  faShoppingCart);
class App extends React.Component {
  render() {
    return (
      <div>
          <ProductPage />
          <ShoppingCartContainer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
