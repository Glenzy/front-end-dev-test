import * as types from '../constants/actionTypes';

export function showAllBrands(){
    return {type: types.SHOW_ALL_BRANDS}
}

export function makeButtonActive(name){
    return {type: types.MAKE_ACTIVE, name}
}
export function openFilterMenu(){
    return {type:types.OPEN_FILTER_MENU}
}

export function filterBrands(brand){
    return (dispatch) =>{
        dispatch({type: types.FILTER_BRANDS, brand})
        dispatch({type:types.OPEN_FILTER_MENU})
    }
}