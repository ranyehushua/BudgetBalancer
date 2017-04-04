import React, { PropTypes } from 'react';
import List from './List';
import AddItem from './AddItem';


const IncomeList = (props) => {
  return (
    <div><h3>Monthly Income:</h3>
      <List items={props.income.items} clickRemove={props.removeIncome} clickEdit={props.editIncome} />
      <h4>Total Monthly Income: ${props.income.total}</h4>
      <AddItem onClick={props.addIncome} className='text-center' />
    </div>
  )
}

IncomeList.propTypes = {
  income: PropTypes.object.isRequired,
  removeIncome: PropTypes.func.isRequired,
  addIncome: PropTypes.func.isRequired,
  editIncome: PropTypes.func.isRequired
}

export default IncomeList;
