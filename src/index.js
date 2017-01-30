import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import './index.css';
import runTests from './reducer/runTests';
import reducer from './reducer';
import { createStore } from 'redux';
import { loadState, saveState } from './utils/localStorage';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

const persistedState = loadState();
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState({
    income: store.getState().income,
    expense: store.getState().expense,
    user: store.getState().user
  });
});

localStorage.removeItem('budgetCalcState');

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

runTests();
