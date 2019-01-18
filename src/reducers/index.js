import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  products :cartReducer,
});

export default rootReducer;
