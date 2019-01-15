import * as types from '../constants/actionTypes'

export function addToCart(productName){
    console.log('Action called', productName);
    return {type: types.ADD_TO_CART, productName};
}