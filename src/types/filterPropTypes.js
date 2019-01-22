// Centralized propType definitions
import PropTypes from 'prop-types';
const { shape, bool, string, func } = PropTypes;

export const filterProductsPropTypes = {
  productList:shape({
    productName: string.isRequired,
    productImage: string.isRequired,
    price: string.isRequired,
    brand: string.isRequired,
    show: bool.isRequired,
  }).isRequired,
  actions:shape({
    showAllBrands: func.isRequired,
    filterBrands: func.isRequired,
  }).isRequired
};