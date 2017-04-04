import React, { PropTypes } from 'react';
import AddItem from './AddItem';
import List from './List';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
import Surplus from './Surplus';
import Deficit from './Deficit';

const Lists = (props) => {
  return (
    <div>
      <h1 className="text-center">Welcome {props.user}!</h1>
      {
        props.surplus > 0
          ? <Surplus amount={props.surplus} />
          : props.surplus < 0
            ? <Deficit amount={-1 * props.surplus} />
            : null
      }

      {
        props.income.items.length > 0
          ? <IncomeList income={props.income} removeIncome={props.removeIncome} addIncome={props.addIncome} editIncome={props.editIncome} />
          : null
      }
      {
        props.expense.essential.length > 0
          ? <ExpenseList expense={props.expense} removeExpense={props.removeExpense} addExpense={props.addExpense} editExpense={props.editExpense} />
          : null
      }
      {
        props.savings.items.length > 0
          ? <div><h3>Monthly Savings:</h3>
          <List items={props.savings.items} clickRemove={props.removeSavings} clickEdit={props.editSavings} />
          <h4>Total Monthly Savings: ${props.savings.total}</h4></div>
          : null
      }
      {
        props.income.total - props.expense.total - props.savings.total > 0
          ? <AddItem onClick={props.addSavings} savings surplus={props.surplus} />
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
