import React, { PropTypes } from 'react';
import EditLineItem from './EditLineItem';

const style={
  li: {
    border: 'black solid 1px',
    margin: '3px 0',
    padding: '5px',
    backgroundColor: 'rgba(100, 100, 100, .4)',
    color: '#fff'
  },
  button: {
    padding: '5px 2% 2px',
    float: 'right',
    fontSize: '12px',
    marginLeft: '5px',
    display: 'inline',
    verticalAlign: 'middle',
    lineHeight: '1.8rem'
  },
  desc: {
    float: 'left',
    maxWidth: '75%',
    fontSize: '1.1rem',
    lineHeight: '2.2em',
    display: 'inline',
    verticalAlign: 'middle'
  },
  clear: {
    clear: 'both'
  }
}

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
  submitEdit(id, desc, amount) {
    this.props.edit(id, desc, amount);
    this.setState({
      editting: false
    });
  },
  render () {
    return (
      <li style={style.li}>
        {this.state.editting === true
          ? <EditLineItem edit={this.submitEdit} id={this.props.id} desc={this.props.desc} amount={this.props.amount} />
        : <div style={{lineHeight: '2rem'}}>
              <div style={style.desc}>{this.props.desc + ": $" + this.props.amount}</div>
              <button className="btn btn-danger" onClick={this.props.remove} style={style.button}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
              <button className="btn btn-default" onClick={() => {this.setState({editting: !this.state.editting})}} style={style.button}><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
              <div style={style.clear}></div>
            </div>
        }

      </li>
    )
  }
})

export default LineItem;
