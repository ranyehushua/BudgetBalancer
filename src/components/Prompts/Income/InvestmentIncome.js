import React, { PropTypes } from 'react';
import IncomePrompt from '../../../containers/IncomePrompt';

const WorkingIncome = (props) => {
  return (
    <IncomePrompt prompt="What is your monthly income from investments?" desc="Investment Income" next="BudgetList" />
  )
}

export default WorkingIncome
