import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shoppinCartItemPropTypes } from '../../types/cartPropTypes';

const ShoppingCartItem = (props) => {
    const {productName, productImage, handleClick} = {...props}; 
    return (    
            <li className="list-group-item  cart-item">
                <img src={`${productImage}`} alt={`${productName}`} className="img-fluid cart" />
                <h6>{productName}</h6>
                <FontAwesomeIcon name={productName} classes=" danger remove-from-cart"  aria-label="Remove from cart" icon="minus-circle"  onClick={handleClick} />
            </li>
    );
}

ShoppingCartItem.propTypes = {
    ...shoppinCartItemPropTypes,
}
export default ShoppingCartItem;