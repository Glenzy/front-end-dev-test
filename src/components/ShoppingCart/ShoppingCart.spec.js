import React from 'react';
import { shallow } from 'enzyme';
import initialState from '../../reducers/initialState';
import { ShoppingCart } from './ShoppingCart.jsx';


let wrapper;
const productsList = initialState.productsList;
const defaultProps = {
    productsList,
    itemsInCart:1,
    cartIsOpen:false,
};
describe('The ShoppingCart component', () => {

    it('renders without crashing', ()=> {
        givenContentWithProps(defaultProps);
        expect(wrapper.find('.shopping-cart')).toHaveLength(1);
    });

    it('renders correct product when added to cart', () => {
        defaultProps.productsList[0].isInCart = true;
        givenContentWithProps(defaultProps);
        expect(wrapper.find('.cart-item')).toHaveLength(1);
    });
});

const givenContentWithProps = (defaultProps) => wrapper = shallow( 
    <ShoppingCart {...defaultProps}/>
);