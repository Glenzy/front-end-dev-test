import initialState from './initialState';
const checkIfFiltered = (product) => product.filtered ? true : false;

const productsReducer = (state = initialState.products, action) => {
    switch(action.type){
        case 'REMOVE_FROM_CART_UPDATE_PRODUCTS':
        return {
        ...state,
            productsList: state.productsList.map((product) => {
                if(product.productName === action.productName){
                return {
                    ...product,
                    inCart:false,
                    show:!checkIfFiltered(product),
                };
                }  else {
                return product;
                }
            })
        };
        case 'ADD_TO_CART_UPDATE_PRODUCTS':
            return {
            ...state,
                productsList: state.productsList.map((product) => {
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
            };
        case 'GET_PRODUCTS_SUCCESS':
        return {
            ...state,
            errorLoadingProducts:false,
            productsList:action.products.map((product) => {
                if(product.isPublished === "true"){
                    return {
                        ...product,
                        isPublished:true,
                        show:true,
                    }
                } else {
                    return {
                        ...product,
                        isPublished:false,
                        show:false,
                    }
                }
            })
        };

        case 'GET_PRODUCTS_ERROR':
        return {
            ...state,
            errorLoadingProducts:true
        };

      case 'FILTER_BRANDS':
      return {
        ...state,
        productsList:state.productsList.map((product) => {
          if(product.brand === action.brand && !product.inCart){
            return {
              ...product,
            show:true,
            filtered:false
            };
          }  else {
            return {
                ...product,
              show:false,
              filtered:true
              };
          }
        })
      };

      case 'SHOW_ALL_BRANDS':
      return {
        ...state,
        productsList:state.productsList.map((product) => {
          if(product.inCart){
            return {
              ...product,
            show:false
            };
          } else {
            return {
              ...product,
            show:true
            };
          }
        })
      };
    default:
      return state;
    }
}

export default productsReducer 
