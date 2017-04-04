import React, { PropTypes } from 'react';
import List from './List';
import AddItem from './AddItem';


const SavingsList = (props) => {
  return (
    <div>

        <div><h3>Monthly Savings:</h3>
        <List items={props.savings.items} clickRemove={props.removeSavings} clickEdit={props.editSavings} />
        <h4>Total Monthly Savings: ${props.savings.total}</h4></div>


      {
        props.incomeTotal - props.expenseTotal - props.savings.total > 0
          ? <AddItem onClick={props.addSavings} savings surplus={props.surplus} />
          : null
      }
    </div>
  )
}

SavingsList.propTypes = {
  savings: PropTypes.object.isRequired,
  removeSavings: PropTypes.func.isRequired,
  addSavings: PropTypes.func.isRequired,
  editSavings: PropTypes.func.isRequired,
  incomeTotal: PropTypes.number.isRequired,
  expenseTotal: PropTypes.number.isRequired
}

export default SavingsList;
