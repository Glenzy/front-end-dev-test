import initialState from './initialState';

const cartReducer = (state = initialState, action) => {
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
                inCart:true,
                show:false,
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
              inCart:false,
              show:true,
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
      };
      case 'FILTER_BRANDS':
      return {
        ...state,
        productsList:[
          ...state.productsList.map((product) => {
            if(product.brand === action.brand){
              return {
                ...product,
              show:true
              };
            }  else {
              return {
                  ...product,
                show:false
                };
            }
          })
        ]
      };
      case 'SHOW_ALL_BRANDS':
      return {
        ...state,
        productsList:[
          ...state.productsList.map((product) => {
              return {
                ...product,
              show:true
              };
          })
        ]
      };
    default:
      return state;
    }
}

export default cartReducer 
