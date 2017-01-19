import React, { PropTypes } from 'react';

const AddItem = React.createClass({
  propTypes: {
    onClick: PropTypes.func.isRequired
  },
  render () {
    return (
      <form className="form-inline" onSubmit={(e) => {
          e.preventDefault();
          //will need to add security validation for text input
          if (AddItem.text.value && parseFloat(AddItem.amount.value) !== NaN) {
            this.props.onClick(AddItem.text.value, parseFloat(AddItem.amount.value));
            AddItem.text.value = '';
            AddItem.amount.value = '';
          }
        }}>
        <div className="form-group">
          <label className="sr-only" htmlFor="text">Item Description</label>
          <input type="text" className="form-control" id="text" placeholder="Item Description" onChange={() => AddItem.text = this.value} />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="amount">Amount</label>
          <input type="number" className="form-control" id="amount" placeholder="Amount" onChange={() => AddItem.amount = this.value} />
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit">Add Item</button>
        </div>
      </form>
    )
  }
})

export default AddItem;
