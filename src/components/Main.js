import React, { PropTypes } from 'react';
import {browserHistory} from 'react-router';
import NewUser from './NewUser';
import BudgetList from '../containers/BudgetList';

const goToList = () => {
  browserHistory.push('/BudgetList');
}

const Main = React.createClass({
  propTypes: {
    income: PropTypes.object.isRequired,
    expense: PropTypes.object.isRequired,
    user: PropTypes.string.isRequired,
    addUser: PropTypes.func.isRequired
  },
  componentDidMount() {
    if (this.props.idCounter > 0 || this.props.expense.idCounter > 10000) browserHistory.push('/BudgetList');
  },
  render () {
    return (
        <NewUser user={this.props.user} addUser={this.props.addUser} />
    )
  }
});

export default Main
