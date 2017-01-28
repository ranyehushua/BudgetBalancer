import MainContainer from '../containers/MainContainer';
import WorkingIncome from '../components/Prompts/Income/WorkingIncome';
import InvestmentIncome from '../components/Prompts/Income/InvestmentIncome';
import { Route } from 'react-router';
import TutorialContainer from '../containers/TutorialContainer';
import App from '../components/App';
import { Route, IndexRoute } from 'react-router';
import React from 'react';

const routes = (
  <div>
    <Route path='/' component={App} >
      <IndexRoute component={MainContainer} />
      <Route path='/WorkingIncome' component={WorkingIncome} />
      <Route path='/InvestmentIncome' component={InvestmentIncome} />
      <Route path='/Tutorial' component={TutorialContainer} />
    </Route>
  </div>
)

export default routes;
