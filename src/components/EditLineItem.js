import React, { PropTypes } from 'react';

const style = {
  button: {
    padding: '2px 5px',
    float: 'right'
  },
  desc: {
    maxWidth: '60%',
    marginRight: '5px'
  },
  amount: {
    maxWidth: '25%'
  }
}

const EditLineItem = React.createClass({
  propTypes: {
    edit: PropTypes.func.isRequired,
    desc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired
  },
  getInitialState() {
    return {
      desc: this.props.desc,
      amount: this.props.amount
    }
  },
  handleTextChange(e) {
    this.setState({
      desc: e.target.value
    });
  },
  handleAmountChange(e) {
    this.setState({
      amount: e.target.value
    })
  },
  handleSubmit() {
    this.props.edit(this.props.id, this.state.desc, parseFloat(this.state.amount));
  },
  render () {
    return (
      <div>
        <input type="text" value={this.state.desc} onChange={this.handleTextChange} style={style.desc} />
        <input type="number" value={this.state.amount} onChange={this.handleAmountChange} style={style.amount} />
          <button type="button" className="btn btn-success" aria-label="Left Align" onClick={this.handleSubmit} style={style.button}>
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
          </button>
      </div>
    )
  }
})




export default EditLineItem;
