import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { testIncome } from './reducer/income';
import { testExpense } from './reducer/expense';
import reducer from './reducer';
import { createStore } from 'redux';
import IncomeExpenseLists from './containers/IncomeExpenseLists';
import { loadState, saveState } from './utils/localStorage';

const persistedState = loadState();
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <div>
    <IncomeExpenseLists />
  </div>
)
store.subscribe(() => {
  saveState({
    income: store.getState().income,
    expense: store.getState().expense
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

testIncome();
testExpense();
