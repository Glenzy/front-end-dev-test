import React from 'react';
import { shallow } from 'enzyme';
import { ShoppingCart } from './ShoppingCart.jsx';


let wrapper;
const cart = {
    itemsInCart:1,
    cartIsOpen:false,
    cartList:[
        {
            "isPublished": "true",
            "productName": "Apple iPhone X",
            "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
            "price": "299",
            "brand":"Apple",
            inCart:true
        },
    ]
}

describe('The ShoppingCart component', () => {

    it('renders without crashing', ()=> {
        givenContentWithProps(cart);
        expect(wrapper.find('.shopping-cart')).toHaveLength(1);
    });
    
});

const givenContentWithProps = (cart) => wrapper = shallow( 
    <ShoppingCart 
        cartList={cart.cartList}
        itemsInCart={cart.itemsInCart}
        cartIsOpen={cart.cartIsOpen}
    />
);