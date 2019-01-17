import React from 'react';
import { productPropTypes } from '../../types/productPropTypes';
import { Col } from 'bootstrap-4-react';
import Button  from '../Button';

export const Product = (props) => {
    const {productName, productImage, price, handleClick} = {...props}; 
    return (
        <div className="xs-12 sm-6 md-3 product">
            <h5>{productName}</h5>
            <img src={`${productImage}`} alt={`${productName}`} className="img-fluid" />
            <p>${price}</p>
            <Button 
                text="Add to cart" 
                type="Add to cart" 
                name={productName} 
                classes=" primary add-to-cart"  
                icon="cart-plus"  
                handleClick={handleClick}
                />
        </div>
    );
}

Product.propTypes = {
    ...productPropTypes,
}
export default Product;