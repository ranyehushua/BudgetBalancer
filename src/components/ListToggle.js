import React, { PropTypes } from 'react';

const ListToggle = React.createClass({
  propTypes: {
    handleToggle: PropTypes.func.isRequired
  },
  styles: {
    button: {
      margin: '0px 3%',
      width: '25%',
      padding: '5px 3px'
    },
    summary: {
      width: '87%'
    }
  },
  getInitialState() {
    return {selected: 'INCOME'}
  },
  toggleSummary() {
    this.props.handleToggle('SUMMARY');
    this.setState({selected: 'SUMMARY'});
  },
  toggleIncome() {
    this.props.handleToggle('INCOME');
    this.setState({selected: 'INCOME'});
  },
  toggleExpenses() {
    this.props.handleToggle('EXPENSES');
    this.setState({selected: 'EXPENSES'});
  },
  toggleSavings() {
    this.props.handleToggle('SAVINGS');
    this.setState({selected: 'SAVINGS'});
  },
  render () {
    return (
      <div>
      <div className="form-group text-center">
        <button type="button"
                className={this.state.selected === 'SUMMARY' ? "btn btn-info" : "btn btn-default"}
                onClick={this.toggleSummary} style={this.styles.summary}
                >Summary
        </button>
      </div>
      <div className="form-group text-center">
        <button type="button"
                className={this.state.selected === 'INCOME' ? "btn btn-info" : "btn btn-default"}
                onClick={this.toggleIncome} style={this.styles.button}
                >Income
        </button>
        <button type="button"
                className={this.state.selected === 'EXPENSES' ? "btn btn-info" : "btn btn-default"}
                onClick={this.toggleExpenses} style={this.styles.button}
                >Expenses
        </button>
        <button type="button"
                className={this.state.selected === 'SAVINGS' ? "btn btn-info" : "btn btn-default"}
                onClick={this.toggleSavings} style={this.styles.button}
                >Savings
        </button>
      </div>
      </div>
    )
  }
});


export default ListToggle;
