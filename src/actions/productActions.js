import axios from 'axios';
import * as types from '../constants/actionTypes';

const apiEndPoint = 'http://localhost:3000/data/products.json';

export function getProducts() {
    return axios.get(apiEndPoint);
  }

  export function getProductsSuccess(products){
    return {type:types.GET_PRODUCTS_SUCCESS, products};
  }

  export function getProductsError(error){
    return {type:types.GET_PRODUCTS_ERROR, error};
  }

  export function addFilterMenuButton(filterButtons){
    return { type: types.ADD_FILTER_MENU_LIST,filterButtons}
}

const setUpFilterMenu = (products) =>{
  const brandNames = products.map((product) =>{
      return product.brand;
  });
  const deduplicatedNames = [...new Set(brandNames)];
  deduplicatedNames.unshift('Show All');
  return  addFilterMenuButton(deduplicatedNames);
}

  export function loadProducts(){
      return function(dispatch){
          return getProducts().then(response =>{
            const products = response.data;
            return new Promise(function(resolve, reject){
              dispatch(getProductsSuccess(products));
              resolve(products);
              reject();
            }).then((products) => {
              dispatch(setUpFilterMenu(products));
            }).catch(error =>{
              dispatch(getProductsError(error));
             });
        }).catch(error =>{
          dispatch(getProductsError(error));
        });
      }
    }