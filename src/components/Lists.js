import React, { PropTypes } from 'react';
import AddItem from './AddItem';
import List from './List';

const Lists = (props) => {
  return (
    <div>
      <h1 className="text-center">Welcome {props.user}!</h1>
      {
        props.income.items.length > 0
          ? <div><h3>Monthly Income:</h3>
          <List items={props.income.items} clickRemove={props.removeIncome} clickEdit={props.editIncome} />
          <h4>Total Monthly Income: ${props.income.total}</h4></div>
          : null
      }
      <AddItem onClick={props.addIncome} className='text-center'/>
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

Lists.propTypes = {
  income: PropTypes.object.isRequired,
  savings: PropTypes.object.isRequired,
  expense: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired,
  removeIncome: PropTypes.func.isRequired,
  removeSavings: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  addIncome: PropTypes.func.isRequired,
  addSavings: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  editIncome: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  editSavings: PropTypes.func.isRequired
}

export default Lists;
