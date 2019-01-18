import cartReducer from './cartReducer';
import initialState from './initialState';

const originalState = initialState;
const productName = "Apple iPhone X";

describe('The cart reducer', () => {

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
    expect(cartReducer(undefined, action)).toEqual(originalState);
  });

  it('should update state when item added to cart', () => {
        let testState = originalState;
        const action = { type: 'ADD_TO_CART' };
        testState.productsList[0].inCart = true;
        const expected = testState;
    expect(cartReducer(productName, action)).toEqual(expected);
  });

  it('should update state when item removed to cart', () => {
        let testState = originalState ;
        const action = { type: 'REMOVE_FROM_CART' };
        testState.productsList[0].inCart = false;
        const expected = testState;
    expect(cartReducer(productName, action)).toEqual(expected);
  });

});
