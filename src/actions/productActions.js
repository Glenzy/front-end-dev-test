import * as types from '../constants/actionTypes'

export function addToCart(id){
    return {type: types.ADD_TO_CART, id};
}