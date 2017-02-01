import React, { PropTypes } from 'react';
import {hashHistory} from 'react-router';

const NewUser = React.createClass({
  propTypes: {
    user: PropTypes.string.isRequired,
    addUser: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      user: ''
    }
  },
  handleUserInput(e) {
    this.setState({
      user: e.target.value
    })
  },
  handleUserSubmit() {

  },
  render () {
    return (
      <div className="text-center">
        <h1>Welcome!</h1>
        <h4>Before we get started on balancing your budget, please enter a username:</h4>
        <form className="form-inline" onSubmit={(e) => {
            e.preventDefault();
            this.props.addUser(this.state.user);
            this.setState({user: ''});
            hashHistory.push('/Tutorial')
          }} >

          <div className="form-group">
            <label className="sr-only" htmlFor="text">Username</label>
            <input type="text" className="form-control" placeholder="Username" value={this.state.user} onChange={this.handleUserInput} />
          </div>

          <div className="form-group">
            <button className="btn btn-success" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
})

export default NewUser;
