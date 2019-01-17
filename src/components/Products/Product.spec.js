import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product.jsx';


let wrapper;
const handleClick = jest.fn();
let defaultProps = {
    productName: 'Test Product',
    productImage: 'https://test-img-url.com',
    price:'199',
    handleClick,
}
describe('The Product component', () => {

    it('shows the correct product title', () => {
        givenContentWithProps(defaultProps);
        expect(wrapper.find('h5').text()).toEqual('Test Product');
    });
});

const givenContentWithProps = (defaultProps) => wrapper = shallow( 
    <Product {...defaultProps}/>
);