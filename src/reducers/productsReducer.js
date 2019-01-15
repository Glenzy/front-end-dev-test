import initialState from './initialState';

const productsReducer = (state = initialState.productsList, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
        console.log('state', ...state);
        return  {
          ...state.map((product) => {
            if(product.productName === action.productName){
              return {
                ...product,
              inCart:true
              };
            }  else {
              return product;
            }
          })
        };
    default:
      return state;
    }
}

export default productsReducer 