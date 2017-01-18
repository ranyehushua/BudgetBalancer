import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { testIncome } from './reducer/income';
import { testExpense } from './reducer/expense';
import reducer from './reducer';
import redux, { createStore } from 'redux';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let incomeID = 1;
let expenseID = 1;

let action = {type: 'ADD_INCOME', id: incomeID++, desc: 'test', amount: 10.00};
store.dispatch(action);
action = {type: 'ADD_INCOME', id: incomeID++, desc: 'test', amount: 10.00};
store.dispatch(action);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

testIncome();
testExpense();
