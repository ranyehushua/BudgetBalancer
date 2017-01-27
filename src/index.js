import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import './index.css';
import runTests from './reducer/runTests';
import reducer from './reducer';
import { createStore } from 'redux';
import WorkingIncome from './components/Prompts/Income/WorkingIncome';
import InvestmentIncome from './components/Prompts/Income/InvestmentIncome';
import MainContainer from './containers/MainContainer';
import { loadState, saveState } from './utils/localStorage';
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

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={MainContainer}/>
      <Route path='/WorkingIncome' component={WorkingIncome} />
      <Route path='/InvestmentIncome' component={InvestmentIncome} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

runTests();
