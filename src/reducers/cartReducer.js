import initialState from './initialState';

const emptyCartList = initialState.cart.cartList;
const isFirstElement = (arr) =>{
  if(arr.length === 1){
    return true;
  } else {
    return false;
  }
}

const cartReducer = (state = initialState.cart, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
        return {
          ...state,
            itemsInCart:state.itemsInCart+1,
            cartList:[...state.cartList, ...action.product]
        };

      case 'REMOVE_FROM_CART':
        if(isFirstElement(state.cartList)){
          return {
            ...state,
            itemsInCart:state.itemsInCart-1,
            cartList:emptyCartList
          };
        } else {
          return {
            ...state,
            itemsInCart:state.itemsInCart-1,
            cartList:state.cartList.filter((product) => product.productName != action.productName )
          };
        }
        case 'TOGGLE_CART':
        return {
          ...state,
            cartIsOpen:!state.cartIsOpen
        };
    default:
      return state;
    }
}

export default cartReducer 
