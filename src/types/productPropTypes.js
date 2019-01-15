// Centralized propType definitions shape, number,bool, 
import PropTypes from 'prop-types';
const {string, func} = PropTypes;
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