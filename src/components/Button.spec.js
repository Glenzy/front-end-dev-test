import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.jsx';

let wrapper;

const handleClick = jest.fn();
const defaultProps = {
    handleClick,
  text: 'Test Button',
  type: 'primary',
  classes: 'test test-btn', 
  name: 'Test Button',
  icon:'cart-plus',
};

describe('the button component', ()=>{

  it('should call click handler when clicked', ()=>{
    givenButtonWithProps(defaultProps);
    wrapper.simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });

  it('renders correctly', () => {
    givenButtonWithProps(defaultProps);
    expect(wrapper).toMatchSnapshot();
  });
});

const givenButtonWithProps = (defaultProps) => wrapper = shallow(
  <Button {...defaultProps} />
);
