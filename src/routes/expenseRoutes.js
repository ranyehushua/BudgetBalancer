import { Route } from 'react-router';
import React from 'react';
import ExpensePrompt from '../containers/ExpensePrompt';

const prompts = [
  {
    prompt: "What is your monthly rent or mortgage payment?",
    desc: "Housing Expense"
  },
  {
    prompt: "If you have a car loan, what is the monthly payment?",
    desc: "Car Loan"
  },
  {
    prompt: "If you have a car, what is your monthly insurance payment?",
    desc: "Car Insurance"
  },
  {
    prompt: "If you have a renter's or homeowner's insurance plan, what is the monthly expense?",
    desc: "Housing Insurance"
  }
]

//ExpensePrompt component expects prompt, desc, next and essential (bool) props
const expenseRoutes = [];
prompts.forEach((item, i) => {
  const Component = (props) => {
    return (
      <ExpensePrompt prompt={item.prompt} desc={item.desc} next={i === prompts.length - 1 ? 'BudgetList' : prompts[i+1].desc.split(' ').join('')} key={i.toString()} essential />
    )
  }
  const route = (<Route path={'/' + item.desc.split(' ').join('')} component={Component} key={i.toString()} />);
  expenseRoutes.push(route);
});

export default expenseRoutes;
