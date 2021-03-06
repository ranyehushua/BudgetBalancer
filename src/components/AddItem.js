import React, { PropTypes } from 'react';
import CurrencyInput from './CurrencyInput';
import TransparentContainer from './TransparentContainer';

const styles = {
  form: {
    maxWidth: '450px',
    margin: '10px auto'
  },
  button: {
    margin: '5px'
  },
  surplus: {
    color: 'white',
    fontWeight: '400',
    paddingBottom: '5px'
  }
}

const AddItem = React.createClass({
  propTypes: {
    onClick: PropTypes.func.isRequired,
    expense: PropTypes.bool,
    savings: PropTypes.bool,
    surplus: PropTypes.number
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
      <TransparentContainer>
      <form className="form" style={styles.form} onSubmit={(e) => {
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

        <CurrencyInput value={this.state.amount} onChange={this.handleAmountChange} />
        <div className="form-group text-center">
          {this.props.expense
            ? <button className="btn btn-primary" type="submit" onClick={this.handleEssential} style={styles.button} >{this.props.expense ? 'Add Essential Expense' : 'Add Income'}</button>
            : null
          }
          {
            this.props.surplus
              ? <div style={styles.surplus}>Remaining surplus: ${this.props.surplus}</div>
              : null
          }
          <button className={this.props.expense ? "btn btn-default" : "btn btn-success"} type="submit" style={styles.button}>{this.props.expense ? 'Add Discretionary Expense' : this.props.savings ? 'Add Savings' : 'Add Income'}</button>
        </div>
      </form>
      </TransparentContainer>
    )
  }
})

export default AddItem;
