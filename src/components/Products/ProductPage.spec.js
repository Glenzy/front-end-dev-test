import React from 'react';
import { shallow } from 'enzyme';
import initialState from '../../reducers/initialState';
import { ProductPage } from './ProductPage';

let wrapper;
let  products = initialState.products;
describe('The ProductPage component', () => {
    it('displays all products', () => {
        // given
        givenContentWithProps(products);
        // when
        // then
        expect(wrapper.find('img')).toEqual(products.length);
    });
});

const givenContentWithProps = (products) => wrapper = shallow( 
    <ProductPage products = {products}/>
);