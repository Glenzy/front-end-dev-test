import React from 'react';
import { shallow } from 'enzyme';
import initialState from '../../reducers/initialState';
import { ProductPage } from './ProductPage.jsx';

function getVisibleProducts(){
    return productsList.filter(product => product.isPublished === "true")
}
let wrapper;
let  productsList = initialState.productsList;
let visibleProducts = getVisibleProducts();
describe('The ProductPage component', () => {
    it('renders without crashing', ()=> {
        //given
        givenContentWithProps(productsList);
        //then
        expect(wrapper.find('.product-list')).toHaveLength(1);
    });
    it('renders correct products', () => {
        // given
        givenContentWithProps(productsList);
        // when
        // then
        expect(wrapper.find('.col-product')).toHaveLength(visibleProducts.length);
    });
});

const givenContentWithProps = (productsList) => wrapper = shallow( 
    <ProductPage productsList = {productsList}/>
);