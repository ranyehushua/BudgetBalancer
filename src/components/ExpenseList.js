import React, { PropTypes } from 'react';
import LineItem from './LineItem';
import AddItem from './AddItem';

const ExpenseList = (props) => {
  return (
    <div>
    <h2>Expenses:</h2>
    <ul>
      {props.expense.items.map((item) => {
        return <LineItem desc={item.desc} amount={item.amount} onClick={props.onRemoveClick.bind(null, item.id)} key={item.id} />
      })}
    </ul>
    <p>Total Expenses: {props.expense.total}</p>
    <AddItem onClick={props.onAddClick}/>
    </div>
  )
}

ExpenseList.propTypes = {
  expense: PropTypes.object.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired
}

export default ExpenseList;
