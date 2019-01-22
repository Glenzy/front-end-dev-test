import * as types from '../constants/actionTypes';

export function filterBrands(brand){
    return {type: types.FILTER_BRANDS, brand}
}

export function showAllBrands(){
    return {type: types.SHOW_ALL_BRANDS}
}