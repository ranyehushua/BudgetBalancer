import React, { PropTypes } from 'react';
import IncomePrompt from '../../../containers/IncomePrompt';

const WorkingIncome = (props) => {
  return (
    <IncomePrompt prompt="What is your monthly working income?" desc="Working Income" next="InvestmentIncome" />
  )
}

export default WorkingIncome
