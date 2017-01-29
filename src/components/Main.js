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
//
// const Main = (props) => {
//   return (
//     <div>
//       {props.income.idCounter > 0 || props.expense.idCounter > 10000
//         ? <BudgetList />
//         : <NewUser user={props.user} addUser={props.addUser} /> //Replace with link to Add new user component
//       }
//     </div>
//   )
// }
//
// Main.propTypes = {
//    income: PropTypes.object.isRequired,
//    expense: PropTypes.object.isRequired,
//    user: PropTypes.string.isRequired,
//    addUser: PropTypes.func.isRequired
// }
//
// export default Main;
