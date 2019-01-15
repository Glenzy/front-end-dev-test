import React from 'react';
import { productPropTypes } from '../../types/productPropTypes';
import { Col } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button  from '../Button';

const Product = (props) => {
    const {productName, productImage, price, handleClick} = {...props}; 
    return (
        <Col col="md-3 sm-4 xs-12 product">
            <h5>{productName}</h5>
            <img src={`${productImage}`} alt={`${productName}`} className="img-fluid" />
            <p>${price}</p>
            <FontAwesomeIcon icon="cart-plus" onClick={handleClick} />
            <Button text="Add to cart" classes=" primary add-to-cart"  onClick={handleClick}/>
        </Col>
    );
}

Product.propTypes = {
    ...productPropTypes,
}
export default Product;