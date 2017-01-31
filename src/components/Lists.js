import React, { PropTypes } from 'react';
import AddItem from './AddItem';
import List from './List';
import Surplus from './Surplus';

const Lists = (props) => {
  return (
    <div>
      <h1 className="text-center">Welcome {props.user}!</h1>
      {
        props.surplus > 0
          ? <Surplus amount={props.surplus} />
          : props.surplus < 0
            ? <div>It looks like you have a deficit of ${props.surplus}, consider cutting down on your expenses.</div>
            : null
      }
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
      {
        props.savings.items.length > 0
          ? <div><h3>Monthly Savings:</h3>
          <List items={props.savings.items} clickRemove={props.removeSavings} clickEdit={props.editSavings} />
          <h4>Total Monthly Savings: ${props.savings.total}</h4></div>
          : null
      }
      {
        props.income.total - props.expense.total - props.savings.total > 0
          ? <AddItem onClick={props.addSavings} savings />
          : null
      }
    </div>
  )
}

Lists.propTypes = {
  income: PropTypes.object.isRequired,
  savings: PropTypes.object.isRequired,
  surplus: PropTypes.number.isRequired,
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
