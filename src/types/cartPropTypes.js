// Centralized propType definitions shape, number,bool, 
import PropTypes from 'prop-types';
const {string, func} = PropTypes;

export const shoppinCartItemPropTypes = {
    productName:string.isRequired,
    productImage: string.isRequired,
    handleClick:func.isRequired,
};