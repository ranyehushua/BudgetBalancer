import MainContainer from '../containers/MainContainer';
import TutorialContainer from '../containers/TutorialContainer';
import BudgetList from '../containers/BudgetList';
import App from '../components/App';
import { Route, IndexRoute } from 'react-router';
import React from 'react';

import IncomePrompt from '../containers/IncomePrompt';
import { incomePrompts } from './prompts';

//IncomePrompt component expects prompt, desc, next props
const IncomeRoutes = [];
incomePrompts.forEach((item, i) => {
  const Component = (props) => {
    return (
      <IncomePrompt prompt={item.prompt} desc={item.desc} next={i === incomePrompts.length - 1 ? 'BudgetList' : incomePrompts[i+1].desc.split(' ').join('')} key={i.toString()}/>
    )
  }
  const route = (<Route path={'/' + item.desc.split(' ').join('')} component={Component} key={i.toString()} />);
  IncomeRoutes.push(route);
});

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
