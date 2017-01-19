import React, { PropTypes } from 'react'

const AddItem = (props) => (
    <form className="form-inline" onSubmit={(e) => {
        e.preventDefault();
        props.onClick(AddItem.text.value, parseInt(AddItem.amount.value));
        AddItem.text.value = '';
        AddItem.amount.value = '';
      }}>
      <div className="form-group">
        <label className="sr-only" htmlFor="text">Email address</label>
        <input type="text" className="form-control" id="text" placeholder="Item Description" ref={(text) => AddItem.text = text} />
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="amount">Email address</label>
        <input type="number" className="form-control" id="amount" placeholder="Amount" ref={(amount) => AddItem.amount = amount} />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">Add Item</button>
      </div>
    </form>
)

AddItem.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default AddItem;
