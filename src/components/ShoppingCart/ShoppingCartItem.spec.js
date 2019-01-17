import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCartItem from './ShoppingCartItem.jsx';

let wrapper;

const handleClick = jest.fn();
const defaultProps = {};

describe('shopping cart item component', ()=>{

  it('should call click handler when clicked', ()=>{
    givenButtonWithProps(defaultProps);
    wrapper.simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });

  /*it('renders correctly', () => {
    givenButtonWithProps(defaultProps);
    expect(wrapper).toMatchSnapshot();
  }); */
});

const givenButtonWithProps = (defaultProps) => wrapper = shallow(
  <ShoppingCartItem {...defaultProps} />
);
