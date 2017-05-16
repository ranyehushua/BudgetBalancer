import React, { PropTypes } from 'react';
import List from './List';
import AddItem from './AddItem';
import Total from './Total';


const IncomeList = (props) => {
  return (
    <div><h2 className="text-center">Monthly Income</h2>
      <List items={props.income.items} clickRemove={props.removeIncome} clickEdit={props.editIncome} />
      <Total desc="Total Monthly Income" amount={props.income.total} />
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
