import React from 'react';
import { shallow } from 'enzyme';
import initialState from '../../reducers/initialState';
import { ProductPage } from './ProductPage.jsx';

function getVisibleProducts(){
    return productsList.filter(product => product.isPublished === "true");
}
let wrapper;
let  productsList = initialState.productsList;
let visibleProducts = getVisibleProducts();
describe('The ProductPage component', () => {

    it('renders without crashing', ()=> {
        givenContentWithProps(productsList);
        expect(wrapper.find('.product-list')).toHaveLength(1);
    });

    it('renders correct products', () => {
        givenContentWithProps(productsList);
        expect(wrapper.find('Product')).toHaveLength(visibleProducts.length);
    });
});

const givenContentWithProps = (productsList) => wrapper = shallow( 
    <ProductPage productsList = {productsList}/>
);