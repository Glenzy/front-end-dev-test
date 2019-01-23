import React from 'react';
import { productPropTypes } from '../../types/productPropTypes';
import Button  from '../Button';

export const Product = (props) => {
    const {productName, productImage, price, handleClick} = {...props}; 
    return (
        <div>
            <h5>{productName}</h5>
            <img src={`${productImage}`} alt={`${productName}`} className="img-fluid" />
            <p>${price}</p>
            <Button 
                text="Add to cart" 
                type="Add to cart" 
                name={productName} 
                classes=" btn btn-primary add-to-cart"  
                icon="cart-plus"
                iconPosition="left"  
                handleClick={handleClick}
                />
        </div>
    );
}

Product.propTypes = {
    ...productPropTypes,
}
export default Product;