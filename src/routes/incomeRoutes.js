import { Route } from 'react-router';
import React from 'react';
import IncomePrompt from '../containers/IncomePrompt';

const prompts = [
  {
    prompt: "What is your monthly working income, after taxes?",
    desc: "Working Income"
  },
  {
    prompt: "What is your spouse's working income, after taxes?",
    desc: "Spouses Working Income"
  },
  {
    prompt: "Do you receive a monthly income from dividends?",
    desc: "Dividends"
  },
  {
    prompt: "Do you collect monthly interest on any investments?",
    desc: "Interest"
  },
  {
    prompt: "Do you collect any other income from investments?",
    desc: "Other Investment Income"
  }
]

//IncomePrompt component expects prompt, desc, next props
const IncomeRoutes = [];
prompts.forEach((item, i) => {
  const Component = (props) => {
    return (
      <IncomePrompt prompt={item.prompt} desc={item.desc} next={i === prompts.length - 1 ? 'BudgetList' : prompts[i+1].desc.split(' ').join('')} key={i.toString()}/>
    )
  }
  const route = (<Route path={'/' + item.desc.split(' ').join('')} component={Component} key={i.toString()} />);
  IncomeRoutes.push(route);
});

export default IncomeRoutes;
