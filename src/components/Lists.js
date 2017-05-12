import React, { PropTypes } from 'react';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
import SavingsList from './SavingsList';
import SummaryList from './SummaryList';
import ListToggle from './ListToggle';
import Surplus from './Surplus';
import Deficit from './Deficit';
import '../index.css';


const Lists = React.createClass({
  propTypes: {
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
  },
  getInitialState() {
    return {toggle: 'SUMMARY'}
  },
  handleToggle(selection) {
    this.setState({toggle: selection})
  },
  render () {
    return (
      <div>
        <h1 className="text-center">Welcome {this.props.user}!</h1>
        {
          this.props.surplus > 0
            ? <Surplus amount={this.props.surplus} />
            : this.props.surplus < 0
              ? <Deficit amount={-1 * this.props.surplus} />
              : null
        }
        <ListToggle handleToggle={this.handleToggle} />
        {
          this.state.toggle === 'SUMMARY'
            ? <SummaryList income={this.props.income} expense={this.props.expense} savings={this.props.savings} surplus={this.props.surplus} />
            : null
        }
        {
          this.state.toggle === 'INCOME'
            ? <IncomeList income={this.props.income} removeIncome={this.props.removeIncome} addIncome={this.props.addIncome} editIncome={this.props.editIncome} />
            : null
        }
        {
          this.state.toggle === 'EXPENSES'
            ? <ExpenseList expense={this.props.expense} removeExpense={this.props.removeExpense} addExpense={this.props.addExpense} editExpense={this.props.editExpense} />
            : null
        }
        {
          this.state.toggle === 'SAVINGS'
            ? <SavingsList savings={this.props.savings} removeSavings={this.props.removeSavings} addSavings={this.props.addSavings} editSavings={this.props.editSavings} incomeTotal={this.props.income.total} expenseTotal={this.props.expense.total} />
            : null
        }
      </div>
    )
  }
})

export default Lists;
