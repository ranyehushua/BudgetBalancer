import MainContainer from '../containers/MainContainer';
import TutorialContainer from '../containers/TutorialContainer';
import ExpenseTutorial from '../components/ExpenseTutorial';
import BudgetList from '../containers/BudgetList';
import App from '../components/App';
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import incomeRoutes from './incomeRoutes';
import expenseRoutes from './expenseRoutes';


const routes = (
  <div>
    <Route path='/' component={App} >
      <IndexRoute component={MainContainer} />
      {incomeRoutes}
      <Route path='/ExpenseTutorial' component={ExpenseTutorial} />
      {expenseRoutes}
      <Route path='/BudgetList' component={BudgetList} />
      <Route path='/Tutorial' component={TutorialContainer} />
    </Route>
  </div>
)

export default routes;
