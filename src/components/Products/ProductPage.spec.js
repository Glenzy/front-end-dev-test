import React from 'react';
import { shallow } from 'enzyme';
import { ProductPage } from './ProductPage.jsx';

function getVisibleProducts(products){
    return products.productsList.filter(product => product.isPublished === "true");
}
let wrapper;
const loadProducts = jest.fn;
const actions = {
    loadProducts
}
let  products = {
    productsList: [
        {
            "isPublished": "true",
            "productName": "Apple iPhone X",
            "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
            "price": "299",
            "brand":"Apple",
            "show": true
        },
        {
            "isPublished": "true",
            "productName": "Apple iPhone 8",
            "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png",
            "price": "100",
            "brand":"Apple",
            "show": true
        },
        {
            "isPublished": "false",
            "productName": "Apple iPhone 8 Plus",
            "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8plus-space-grey-grid.png",
            "price": "99",
            "brand":"Apple"
        },
        {
            "isPublished": "true",
            "productName": "Samsung Galaxy S9",
            "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/samsung-galaxy-s9/samsung-galaxy-s9-purple-front.png",
            "price": "149",
            "brand":"Samsung",
            "show": true
        },
    ]
};
let visibleProducts = getVisibleProducts(products);
describe('The ProductPage component', () => {

    it('renders without crashing', ()=> {
        givenContentWithProps(products);
        expect(wrapper.find('.product-list')).toHaveLength(1);
    });

    it('renders correct products', () => {
        givenContentWithProps(products);
        expect(wrapper.find('Product')).toHaveLength(visibleProducts.length);
    });
});

const givenContentWithProps = (products) => wrapper = shallow( 
    <ProductPage products={products} actions={actions}/>
);