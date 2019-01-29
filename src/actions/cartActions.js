import * as types from '../constants/actionTypes';

export function toggleCart(){
    return {type: types.TOGGLE_CART}
}

export function addToCart(productName){
    return (dispatch, getState) =>{
        const getCurrentState = getState();
        const product = getCurrentState.products.productsList.filter((product)=> product.productName === productName);
        dispatch({type: types.ADD_TO_CART_UPDATE_PRODUCTS, productName})
        dispatch({ type: types.ADD_TO_CART, product})
        dispatch({ type: types.TOGGLE_CART, product})
    }
}

export function removeFromCart(productName){
    return (dispatch) =>{
        dispatch({type: types.REMOVE_FROM_CART_UPDATE_PRODUCTS, productName})
        dispatch({type: types.REMOVE_FROM_CART, productName})
    }
}