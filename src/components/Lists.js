import React, { PropTypes } from 'react';
import AddItem from './AddItem';
import List from './List';

const Lists = (props) => {
  return (
    <div>
      <h1 className="text-center">Welcome {props.user}!</h1>
      <h2>Monthly Income:</h2>
      <List items={props.income.items} clickRemove={props.removeIncome} />
      <p>Total Monthly Income: ${props.income.total}</p>
      <AddItem onClick={props.addIncome}/>
      <h2>Monthly Essential Expenses:</h2>
      <List items={props.expense.essential} clickRemove={props.removeExpense} />
      <h2>Monthly Discretionary Expenses:</h2>
      <List items={props.expense.discretionary} clickRemove={props.removeExpense} />
      <p>Total Monthly Expenses: ${props.expense.total}</p>
      <AddItem onClick={props.addExpense} expense />
    </div>
  )
}

Lists.propTypes = {
  income: PropTypes.object.isRequired,
  expense: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired,
  removeIncome: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  addIncome: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired
}

export default Lists;
