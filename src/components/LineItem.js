import React, { PropTypes } from 'react';

const LineItem = (props) => {
  return (
    <li>
      <p>{props.desc + ": " + props.amount}</p>
      <button className="btn btn-danger" onClick={props.onClick}>Remove item</button>
    </li>
  )
}

LineItem.propTypes = {
  desc: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default LineItem;
