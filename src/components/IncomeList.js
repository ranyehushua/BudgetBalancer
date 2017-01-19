import React, { PropTypes } from 'react';
import LineItem from './LineItem';
import AddItem from './AddItem';

const IncomeList = (props) => {
  return (
    <div>
    <h2>Income:</h2>
    <ul>
      {props.income.items.map((item) => {
        return <LineItem desc={item.desc} amount={item.amount} onClick={props.onRemoveClick.bind(null, item.id)} key={item.id} />
      })}
    </ul>
    <p>Total Income: {props.income.total}</p>
    <AddItem onClick={props.onAddClick}/>
    </div>
  )
}

IncomeList.propTypes = {
  income: PropTypes.object.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired
}

export default IncomeList;
