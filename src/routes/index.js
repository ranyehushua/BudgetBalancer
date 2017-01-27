import MainContainer from '../containers/MainContainer';
import WorkingIncome from '../components/Prompts/Income/WorkingIncome';
import InvestmentIncome from '../components/Prompts/Income/InvestmentIncome';
import { Route } from 'react-router';
import React from 'react';

const routes = (
  <div>
    <Route path='/' component={MainContainer}/>
    <Route path='/WorkingIncome' component={WorkingIncome} />
    <Route path='/InvestmentIncome' component={InvestmentIncome} />
  </div>
)

export default routes;
