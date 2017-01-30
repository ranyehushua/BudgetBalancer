import React, { PropTypes } from 'react';

const LineItem = React.createClass({
  propTypes: {
    desc: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  },
  render () {
    return (
      <li>
        {this.props.desc + ": $" + this.props.amount}
        <button className="btn btn-danger" onClick={this.props.remove} style={{padding: '0 3px'}}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
      </li>
    )
  }
})

export default LineItem;
