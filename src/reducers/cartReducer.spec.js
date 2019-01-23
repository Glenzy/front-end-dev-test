import cartReducer from './cartReducer';

const testState = {
    itemsInCart:0,
    cartIsOpen:false,
    productsList: [
        {
            "isPublished": "true",
            "productName": "Apple iPhone X",
            "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
            "price": "299",
            "brand": "Apple",
            "show": true,
        }
    ]
};
const expectedState = {
    itemsInCart:1,
    cartIsOpen:false,
    productsList: [
        {
            "isPublished": "true",
            "productName": "Apple iPhone X",
            "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
            "price": "299",
            "brand": "Apple",
            "show": false,
            "inCart":true
        }
    ]
};

describe('The cart reducer', () => {
    it('should set initial state by default', () => {
        const action = { type: 'unknown',};
    expect(cartReducer(testState, action)).toEqual(testState);
  });

    it('should handle ADD_TO_CART', () => {
        const productName = 'Apple iPhone X';
        const action = { type: 'ADD_TO_CART', productName}; 
        expect(cartReducer(testState, action)).toEqual(expectedState);
    });

});
