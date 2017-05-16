import React, { PropTypes } from 'react';
import {hashHistory} from 'react-router';
import CurrencyInput from './CurrencyInput';
import TransparentContainer from './TransparentContainer';
import '../index.css';

const Prompt = React.createClass({
  propTypes: {
    addItem: PropTypes.func.isRequired,
    prompt: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    essential: PropTypes.bool
  },
  getInitialState() {
    return {amount: ''}
  },
  handleAmountChange(e) {
    this.setState({amount: e.target.value})
  },
  nextView() {
    hashHistory.push('/' + this.props.next);
  },
  render () {
    return (
      <div className='centered'>
        <TransparentContainer>
          <div className='text-center'>
            <h3>{this.props.prompt}</h3>
              <form className="form-inline" onSubmit={(e) => {
                  e.preventDefault();
                  //will need to add security validation for text input
                  if (parseFloat(this.state.amount)) {
                    this.props.addItem(this.props.desc, parseFloat(this.state.amount), this.props.essential);
                    this.setState({amount: ''});
                    this.nextView();
                  }
                }}>
                <CurrencyInput value={this.state.amount} onChange={this.handleAmountChange} />
                <button type="submit" className="btn btn-success" style={{margin: '10px'}}>Add Item</button>
                <button type="button" className="btn btn-default" onClick={this.nextView}>Skip Item</button>
              </form>
          </div>
        </TransparentContainer>
      </div>
    )
  }
});


export default Prompt;
