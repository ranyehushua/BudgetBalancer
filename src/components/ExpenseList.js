import React, { PropTypes } from 'react';
import List from './List';
import AddItem from './AddItem';
import Total from './Total';


const ExpenseList = (props) => {
  return (
    <div>
        <h2 className="text-center">Monthly Expenses</h2>
        <div><h4>Essential Expenses:</h4>
        <List items={props.expense.essential} clickRemove={props.removeExpense} clickEdit={props.editExpense} /></div>

      {
        props.expense.discretionary.length > 0
          ? <div><h4>Discretionary Expenses:</h4>
            <List items={props.expense.discretionary} clickRemove={props.removeExpense} clickEdit={props.editExpense} /></div>
          : null
      }
      {
        props.expense.discretionary.length > 0 || props.expense.essential.length > 0
          ? <Total desc="Total Monthly Expenses" amount={props.expense.total} />
          : null
      }
      <AddItem onClick={props.addExpense} expense />
    </div>
  )
}

ExpenseList.propTypes = {
  expense: PropTypes.object.isRequired,
  removeExpense: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired
}

export default ExpenseList;
