import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import './index.css';
import { testIncome } from './reducer/income';
import { testExpense } from './reducer/expense';
import { testUser } from './reducer/user';
import reducer from './reducer';
import { createStore } from 'redux';
import IncomeExpenseLists from './containers/IncomeExpenseLists';
import WorkingIncome from './components/Prompts/Income/WorkingIncome';
import InvestmentIncome from './components/Prompts/Income/InvestmentIncome';
import MainContainer from './containers/MainContainer';
import { loadState, saveState } from './utils/localStorage';
import { addIncome } from './actions';
import { syncHistoryWithStore } from 'react-router-redux';

const persistedState = loadState();
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState({
    income: store.getState().income,
    expense: store.getState().expense,
    user: store.getState().user
  });
});

// localStorage.removeItem('budgetCalcState');
// store.dispatch(addIncome('poop', 100));

// const App = () => {
//   return store.getState().income.items.length > 0 || store.getState().expense.items.length > 0
//     ? <div><IncomeExpenseLists /></div>
//     : <div><IncomeExpensePrompts /></div>
// }

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={MainContainer}/>
      <Route path='/BudgetList' component={IncomeExpenseLists} />
      <Route path='/WorkingIncome' component={WorkingIncome} />
      <Route path='/InvestmentIncome' component={InvestmentIncome} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

testIncome();
testExpense();
testUser();
