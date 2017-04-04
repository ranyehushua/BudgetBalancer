import React, { PropTypes } from 'react';
import List from './List';
import AddItem from './AddItem';


const ExpenseList = (props) => {
  return (
    <div>
      {
        props.expense.essential.length > 0
          ? <div><h3>Monthly Essential Expenses:</h3>
          <List items={props.expense.essential} clickRemove={props.removeExpense} clickEdit={props.editExpense} /></div>
          : null
      }
      {
        props.expense.discretionary.length > 0
          ? <div><h3>Monthly Discretionary Expenses:</h3>
            <List items={props.expense.discretionary} clickRemove={props.removeExpense} clickEdit={props.editExpense} /></div>
          : null
      }
      {
        props.expense.discretionary.length > 0 || props.expense.essential.length > 0
          ? <h4>Total Monthly Expenses: ${props.expense.total}</h4>
          : null
      }
      <AddItem onClick={props.addExpense} expense />
    </div>
  )
}

ExpenseList.propTypes = {
  expense: PropTypes.object.isRequired,
  removeExpense: PropTypes.object.isRequired,
  addExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired
}

export default ExpenseList;
