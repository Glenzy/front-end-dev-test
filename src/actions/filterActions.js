import * as types from '../constants/actionTypes';

export function filterBrands(brand){
    return {type: types.FILTER_BRANDS, brand}
}

export function showAllBrands(){
    return {type: types.SHOW_ALL_BRANDS}
}

export function activateMenu(){
    return {type: types.FILTER_MENU_INTERACTION}
}

export function addFilterMenuButton(filterButtons){
    return { type: types.ADD_FILTER_MENU_LIST,filterButtons}
}