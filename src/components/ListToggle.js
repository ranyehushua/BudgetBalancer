import React, { PropTypes } from 'react';

const ListToggle = React.createClass({
  propTypes: {
    handleToggle: PropTypes.func.isRequired
  },
  toggleIncome() {
    this.props.handleToggle('INCOME');
    this.className = "btn btn-info"
  },
  toggleExpenses() {
    this.props.handleToggle('EXPENSES');
  },
  toggleSavings() {
    this.props.handleToggle('SAVINGS');
  },
  toggleAll() {
    this.props.handleToggle('ALL');
  },
  render () {
    return (
      <div className="form-group text-center">
        <button type="button" className="btn btn-default" onClick={this.toggleIncome}>Income</button>
        <button type="button" className="btn btn-default" onClick={this.toggleExpenses}>Expenses</button>
        <button type="button" className="btn btn-default" onClick={this.toggleSavings}>Savings</button>
        <button type="button" className="btn btn-default" onClick={this.toggleAll}>All</button>
      </div>
    )
  }
})




export default ListToggle;
