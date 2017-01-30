import React, { PropTypes } from 'react';
import EditLineItem from './EditLineItem';

const LineItem = React.createClass({
  propTypes: {
    desc: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      editting: false
    }
  },
  render () {
    return (
      <li>
        {this.state.editting === true
          ? <EditLineItem edit={this.props.edit} id={this.props.id} desc={this.props.desc} amount={this.props.amount} />
          : <div>
              {this.props.desc + ": $" + this.props.amount}
              <button className="btn btn-danger" onClick={this.props.remove} style={{padding: '0 3px'}}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
              <button className="btn btn-default" onClick={() => {this.setState({editting: !this.state.editting})}} style={{padding: '0 3px'}}><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
            </div>
        }

      </li>
    )
  }
})

export default LineItem;
