import initialState from './initialState';

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
        return {
          ...state,
          itemsInCart:state.itemsInCart+1,
          productsList:[
            ...state.productsList.map((product) => {
              if(product.productName === action.productName){
                return {
                  ...product,
                inCart:true
                };
              }  else {
                return product;
              }
            })
          ]
        };
      case 'REMOVE_FROM_CART':
      return {
        ...state,
        itemsInCart:state.itemsInCart-1,
        productsList:[
          ...state.productsList.map((product) => {
            if(product.productName === action.productName){
              return {
                ...product,
              inCart:false
              };
            }  else {
              return product;
            }
          })
        ]
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        cartIsOpen: !state.cartIsOpen
      }
    default:
      return state;
    }
}

export default productsReducer 
