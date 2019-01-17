import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCartItem from './ShoppingCartItem.jsx';

let wrapper;

const handleClick = jest.fn();
const defaultProps = {
  productName:'Test item' ,
  productImage:'https://www.test.com/images/img.jgp', 
  handleClick
};

describe('shopping cart item component', ()=>{
  it('renders correctly', () => {
    givenShoppingCartItemWithProps(defaultProps);
    expect(wrapper.find('.cart-item')).toHaveLength(1);
  }); 

  it('should display the remove from cart button', ()=>{
    givenShoppingCartItemWithProps(defaultProps);
    expect( wrapper.find('FontAwesomeIcon')).toHaveLength(1);
  });

  it('should display the product image', ()=>{
    givenShoppingCartItemWithProps(defaultProps);
    expect( wrapper.find('img').prop('src')).toEqual('https://www.test.com/images/img.jgp');
  });
});

const givenShoppingCartItemWithProps = (defaultProps) => wrapper = shallow(
  <ShoppingCartItem {...defaultProps} />
);
