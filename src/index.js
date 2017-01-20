import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { testIncome } from './reducer/income';
import { testExpense } from './reducer/expense';
import reducer from './reducer';
import { createStore } from 'redux';
import Income from './containers/Income';
import Expense from './containers/Expense';
import IncomeExpense from './containers/IncomeExpense';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <div>
    <IncomeExpense />
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

testIncome();
testExpense();
