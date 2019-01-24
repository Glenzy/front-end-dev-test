import cartReducer from './cartReducer';

describe('The cart reducer', () => {

    it('should set initial state by default', () => {
        const action = { type: 'unknown',};
    expect(cartReducer(testState, action)).toEqual(testState);
    });

    it('should handle ADD_TO_CART', () => {
        const productName = 'Apple iPhone X';
        const action = { type: 'ADD_TO_CART', productName}; 
        expect(cartReducer(testState, action)).toEqual(expectedAddCartState);
    });

    it('should handle REMOVE_FROM_CART', () => {
        const productName = 'Apple iPhone X';
        const action = { type: 'REMOVE_FROM_CART', productName}; 
        expect(cartReducer(expectedAddCartState, action)).toEqual(expectedRemoveCartState);
    });

    it('should handle TOGGLE_CART', () => {
        const cartIsOpen = false;
        const expectedState ={'cartIsOpen':true};
        const action = { type: 'TOGGLE_CART', }; 
        expect(cartReducer(cartIsOpen, action)).toEqual(expectedState);
    });

    it('should handle FILTER_BRANDS', () => {
        const brand = "Apple";
        const action = { type: 'FILTER_BRANDS', brand}; 
        let expectedState = testState;
        expectedState.show = false;
        expect(cartReducer(testState, action)).toEqual(expectedState);
    });

    it('should handle SHOW_ALL_BRANDS', () => {
        const brand = "Apple";
        const action = { type: 'SHOW_ALL_BRANDS', brand}; 
        let showFalseState = testState;
        showFalseState.show = false;
        expect(cartReducer(showFalseState, action)).toEqual(testState);
    });
});

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
const expectedAddCartState = {
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
const expectedRemoveCartState = {
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
            "inCart":false
        }
    ]
};