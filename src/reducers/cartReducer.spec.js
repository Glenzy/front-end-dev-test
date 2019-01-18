import cartReducer from './cartReducer';
import initialState from './initialState';

const originalState = initialState;

describe('The cart reducer', () => {
    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
    expect(cartReducer(undefined, action)).toEqual(originalState);
  });
});
