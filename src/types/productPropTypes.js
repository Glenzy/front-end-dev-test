// Centralized propType definitions shape, number,bool, 
import PropTypes from 'prop-types';
const {string, func, shape, bool, } = PropTypes;
export const buttonPropTypes = {
    text: string.isRequired,
    handleClick: func.isRequired,
    classes:string.isRequired,
    icon:string,
    name:string,
  };
  export const productPropTypes = {
    productName: string.isRequired,
    productImage: string.isRequired,
    price: string.isRequired,
    handleClick: func.isRequired
  };

export const productPagePropTypes = {
  productList:shape({
    productName: string.isRequired,
    productImage: string.isRequired,
    price: string.isRequired,
    brand: string.isRequired,
    show: bool.isRequired,
  }).isRequired,
  actions:shape({
    handleClick: func.isRequired,
    filterBrands: func.isRequired,
  }).isRequired
};