import React, { PropTypes } from 'react';
import AddItem from './AddItem';
import List from './List';

const Lists = (props) => {
  return (
    <div>
    <h2>Income:</h2>
      <List items={props.income.items} clickRemove={props.removeIncome} />
      <p>Total Income: {props.income.total}</p>
    <AddItem onClick={props.addIncome}/>
      <h2>Expenses:</h2>
        <List items={props.expense.items} clickRemove={props.removeExpense} />
        <p>Total Income: {props.expense.total}</p>
      <AddItem onClick={props.addExpense}/>
    </div>
  )
}

Lists.propTypes = {
  income: PropTypes.object.isRequired,
  expense: PropTypes.object.isRequired,
  removeIncome: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  addIncome: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired
}

export default Lists;
