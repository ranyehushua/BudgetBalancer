import React, { PropTypes } from 'react';
import {browserHistory} from 'react-router';

const Prompt = React.createClass({
  propTypes: {
    addItem: PropTypes.func.isRequired,
    prompt: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired
  },
  getInitialState() {
    return {amount: ''}
  },
  handleAmountChange(e) {
    this.setState({amount: e.target.value})
  },
  render () {
    return (
      <div>
        <p>{this.props.prompt}</p>
          <form className="form-inline" onSubmit={(e) => {
              e.preventDefault();
              //will need to add security validation for text input
              if (parseFloat(this.state.amount)) {
                this.props.addItem(this.props.desc, parseFloat(this.state.amount));
                this.setState({amount: ''});
                browserHistory.push('/' + this.props.next);
              }
            }}>
            <div className="form-group">
              <label className="sr-only" htmlFor="amount">Amount</label>
              <input type="number" className="form-control" id="amount" placeholder="Amount" value={this.state.amount} onChange={this.handleAmountChange} />
            </div>
            <div className="form-group">
              <button className="btn btn-success" type="submit">Add Item</button>
            </div>
          </form>
      </div>
    )
  }
});


export default Prompt;
