import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import filterReducer from './filterReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  filterMenu: filterReducer,
  products: productsReducer,
});

export default rootReducer;
