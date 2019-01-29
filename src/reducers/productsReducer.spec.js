import productsReducer from './productsReducer';
import initialState from './initialState';

describe('The filter reducer', () => {

    it('should set initial state by default', () => {
        const action = { type: 'unknown',};
    expect(productsReducer(testState, action)).toEqual(testState);
    });

    it('should handle GET_PRODUCTS_ERROR', () =>{
        const action = {type:'GET_PRODUCTS_ERROR',};
        let expectedState = testState;
        expectedState.errorLoadingProducts = true;
        expect(productsReducer(testState, action)).toEqual(expectedState);
    });

    it('should handle GET_PRODUCTS_SUCCESS', () =>{
        const action = {type:'GET_PRODUCTS_SUCCESS', products};
        let expectedState = testState;
        expectedState.errorLoadingProducts = false;
        expect(productsReducer(initialState.products, action)).toEqual(expectedState);
    });
    
});

const products = [
        {
        isPublished: "true",
        productName: 'Apple iPhone X',
        productImage: 'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png',
        price: '299',
        brand: 'Apple',
        },
        {
        isPublished: "true",
        productName: 'Apple iPhone 8',
        productImage: 'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png',
        price: '100',
        brand: 'Apple',
        },
        {
        isPublished: "false",
        productName: 'Apple iPhone 8 Plus',
        productImage: 'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8plus-space-grey-grid.png',
        price: '99',
        brand: 'Apple',
        },
    ];

const testState = {
        errorLoadingProducts: false,
        productsList: [
            {
            isPublished: true,
            productName: 'Apple iPhone X',
            productImage: 'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png',
            price: '299',
            brand: 'Apple',
            show: true,
            },
            {
            isPublished: true,
            productName: 'Apple iPhone 8',
            productImage: 'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png',
            price: '100',
            brand: 'Apple',
            show: true,
            },
            {
            isPublished: false,
            productName: 'Apple iPhone 8 Plus',
            productImage: 'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8plus-space-grey-grid.png',
            price: '99',
            brand: 'Apple',
            show: false,
            },
        ],
    }