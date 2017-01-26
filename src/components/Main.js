import React, { PropTypes } from 'react';

const Main = (props) => {
  return (
    <div>
      {props.income.items.length > 0 || props.expense.items.length > 0
        ? <div>Welcome Back!</div> //Replace with link to Welcome back component
        : <div>Welcome New User!</div> //Replace with link to Add new user component
      }
    </div>
  )
}

Main.propTypes = {
   income: PropTypes.object.isRequired,
   expense: PropTypes.object.isRequired,
   addUser: PropTypes.func.isRequired
}

export default Main;
