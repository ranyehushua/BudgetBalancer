import React, { PropTypes } from 'react';

const AddItem = React.createClass({
  propTypes: {
    onClick: PropTypes.func.isRequired
  },
  getInitialState () {
    return {text: '', amount: ''}
  },
  handleTextChange(e) {
    this.setState({text: e.target.value})
  },
  handleAmountChange(e) {
    this.setState({amount: e.target.value})
  },
  render () {
    return (
      <form className="form-inline" onSubmit={(e) => {
          e.preventDefault();
          //will need to add security validation for text input
          if (this.state.text && parseFloat(this.state.amount) !== NaN) {
            this.props.onClick(this.state.text, parseFloat(this.state.amount));
            this.setState({text: '', amount: ''});
          }
        }}>
        <div className="form-group">
          <label className="sr-only" htmlFor="text">Item Description</label>
          <input type="text" className="form-control" id="text" placeholder="Item Description" value={this.state.text} onChange={this.handleTextChange} />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="amount">Amount</label>
          <input type="number" className="form-control" id="amount" placeholder="Amount" value={this.state.amount} onChange={this.handleAmountChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit">Add Item</button>
        </div>
      </form>
    )
  }
})

export default AddItem;
