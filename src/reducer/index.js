import { combineReducers } from 'redux';
import { user } from './user';
import { expense } from './expense';
import { income } from './income';
import { savings } from './savings';
import { routerReducer} from 'react-router-redux';

const reducer = combineReducers({
  user,
  income,
  expense,
  savings,
  routing: routerReducer
});


export default reducer;
