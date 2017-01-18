import { combineReducers } from 'redux';
import { expense } from './expense';
import { income } from './income';

const reducer = combineReducers({
  income,
  expense
});


export default reducer;
