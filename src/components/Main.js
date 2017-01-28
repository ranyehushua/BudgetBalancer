import React, { PropTypes } from 'react';
import {browserHistory} from 'react-router';
import NewUser from './NewUser';

const goToList = () => {
  browserHistory.push('/BudgetList');
}

const Main = (props) => {
  return (
    <div>
      {props.income.items.length > 0 || props.expense.items.length > 0
        ? {goToList}
        : <NewUser user={props.user} addUser={props.addUser} /> //Replace with link to Add new user component
      }
    </div>
  )
}

Main.propTypes = {
   income: PropTypes.object.isRequired,
   expense: PropTypes.object.isRequired,
   user: PropTypes.string.isRequired,
   addUser: PropTypes.func.isRequired
}

export default Main;
