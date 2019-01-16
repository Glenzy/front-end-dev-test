import * as types from '../constants/actionTypes';

export function removeFromCart(productName){
    return {type: types.REMOVE_FROM_CART, productName};
}