import MainContainer from '../containers/MainContainer';
import TutorialContainer from '../containers/TutorialContainer';
import BudgetList from '../containers/BudgetList';
import App from '../components/App';
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import IncomeRoutes from './incomeRoutes';


const routes = (
  <div>
    <Route path='/' component={App} >
      <IndexRoute component={MainContainer} />
      {IncomeRoutes}
      <Route path='/BudgetList' component={BudgetList} />
      <Route path='/Tutorial' component={TutorialContainer} />
    </Route>
  </div>
)

export default routes;
