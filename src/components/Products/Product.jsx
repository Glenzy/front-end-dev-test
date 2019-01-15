import React from 'react';
import { productPropTypes } from '../../types/productPropTypes';
import { Col } from 'bootstrap-4-react';
import Button  from '../Button';

const Product = (props) => {
    const {productName, productImage, price, handleClick} = {...props}; 
    return (
        <Col col="md-3 sm-4 xs-12 product">
            <h5>{productName}</h5>
            <img src={`${productImage}`} alt={`${productName}`} className="img-fluid" />
            <p>${price}</p>
            <Button text="Add to cart" name={productName} classes=" primary add-to-cart"  icon="cart-plus"  handleClick={handleClick}/>
        </Col>
    );
}

Product.propTypes = {
    ...productPropTypes,
}
export default Product;