import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  products: cartReducer,
  filterMenu: filterReducer
});

export default rootReducer;
