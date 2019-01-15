import initialState from './initialState';

const productsReducer = (state = initialState.productsList, action) => {
    switch(action.type){
        case 'ADD_TO_CART':

      return state;
    default:
      return state;
    }
}

export default productsReducer 