import React from 'react';
import { productPropTypes } from '../../types/productPropTypes';
import { ListGroup } from 'bootstrap-4-react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShoppingCartItem = (props) => {
    const {productName, productImage, price, handleClick} = {...props}; 
    return (

        
            <ListGroup.Item className="cart-item">
                <img src={`${productImage}`} alt={`${productName}`} className="img-fluid cart" />
                <h5>{productName}</h5>
                <FontAwesomeIcon name={productName} classes=" danger remove-from-cart"  icon="minus-circle"  onClick={handleClick} />
            </ListGroup.Item>


    );
}

ShoppingCartItem.propTypes = {
    ...productPropTypes,
}
export default ShoppingCartItem;