import React, { PropTypes } from 'react';

const LineItem = (props) => {
  return (
    <li>
      {props.desc + ": $" + props.amount}
      <button className="btn btn-danger" onClick={props.remove} style={{padding: '0 3px'}}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
    </li>
  )
}

LineItem.propTypes = {
  desc: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired
}

export default LineItem;
