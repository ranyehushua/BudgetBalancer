import React, { PropTypes } from 'react';

const CurrencyInput = (props) => {
  return (
    <div className="form-group">
      <label className="sr-only" htmlFor="amount">Amount</label>
      <div className="input-group">
        <div className="input-group-addon">$</div>
        <input type="number" className="form-control" id="amount" placeholder="Amount" value={props.value} onChange={props.onChange} />
      </div>
    </div>
  )
}

CurrencyInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CurrencyInput;
