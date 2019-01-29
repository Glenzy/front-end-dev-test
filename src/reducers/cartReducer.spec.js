import cartReducer from './cartReducer';

describe('The cart reducer', () => {

    it('should set initial state by default', () => {
        const action = { type: 'unknown',};
    expect(cartReducer(defaultState, action)).toEqual(defaultState);
    });

    it('should handle ADD_TO_CART', () => {

        const action = { type: 'ADD_TO_CART', product}; 
        expect(cartReducer(defaultState, action)).toEqual(expectedAddCartState);
    });

    it('should handle REMOVE_FROM_CART', () => {
        const productName = 'Apple iPhone X';
        const action = { type: 'REMOVE_FROM_CART', productName}; 
        expect(cartReducer(expectedAddCartState, action)).toEqual(expectedRemoveFromCartState);
    });

    it('should handle TOGGLE_CART', () => {
        const cartIsOpen = false;
        const expectedState ={'cartIsOpen':true};
        const action = { type: 'TOGGLE_CART', }; 
        expect(cartReducer(cartIsOpen, action)).toEqual(expectedState);
    });
});
const product = [
    {
        "isPublished": "true",
        "productName": "Apple iPhone X",
        "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
        "price": "299",
        "brand": "Apple",
    },
];
const defaultState = {
    itemsInCart:0,
    cartIsOpen:false,
    cartList: [],
};
const expectedAddCartState = {
    itemsInCart:1,
    cartIsOpen:true,
    cartList: [
        {
            "isPublished": "true",
            "productName": "Apple iPhone X",
            "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
            "price": "299",
            "brand": "Apple",
        },
    ]
};
const expectedRemoveFromCartState = {
    itemsInCart:0,
    cartIsOpen:true,
    cartList: [],
};