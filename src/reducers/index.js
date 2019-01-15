import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  productsList :productsReducer,
});

export default rootReducer;
