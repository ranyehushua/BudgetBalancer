import React, { PropTypes } from 'react';
import CurrencyInput from './CurrencyInput';

const AddItem = React.createClass({
  propTypes: {
    onClick: PropTypes.func.isRequired,
    expense: PropTypes.bool
  },
  getInitialState () {
    return {text: '', amount: '', essential: false}
  },
  handleTextChange(e) {
    this.setState({text: e.target.value})
  },
  handleAmountChange(e) {
    this.setState({amount: e.target.value})
  },
  handleEssential() {
    this.setState({essential: !this.state.essential})
  },
  render () {
    return (
      <form className="form-inline" onSubmit={(e) => {
          e.preventDefault();
          //will need to add security validation for text input
          if (this.state.text && parseFloat(this.state.amount)) {
            //if onClick is for addIncome, it will just ignore the last essential argument
            this.props.onClick(this.state.text, parseFloat(this.state.amount), this.state.essential);
            this.setState({text: '', amount: '', essential: false});
          }
        }}>
        <div className="form-group">
          <label className="sr-only" htmlFor="text">Item Description</label>
          <input type="text" className="form-control" id="text" placeholder="Item Description" value={this.state.text} onChange={this.handleTextChange} />
        </div>
        {this.props.expense
          ? <div className="checkbox">
            <label>
              <input type="checkbox" onChange={this.handleEssential} /> <span>Essential expense?</span>
            </label>
          </div>
          : null
        }
        <CurrencyInput value={this.state.amount} onChange={this.handleAmountChange} />
        <div className="form-group">
          <button className="btn btn-success" type="submit">{this.props.expense ? 'Add Expense' : 'Add Income'}</button>
        </div>
      </form>
    )
  }
})

export default AddItem;
