import * as types from '../constants/actionTypes';

export function addToCart(productName){
    return {type: types.ADD_TO_CART, productName};
}

export function removeFromCart(productName){
    return {type: types.REMOVE_FROM_CART, productName};
}

export function toggleCart(){
    return {type: types.TOGGLE_CART}
}