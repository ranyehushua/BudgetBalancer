import React from 'react';
import IncomePrompt from '../../../containers/IncomePrompt';

const SpouseWorkingIncome = (props) => {
  return (
    <IncomePrompt prompt="If you are married, what is your spouse's monthly working income?" desc="Spouse's Working Income" next="InvestmentIncome" />
  )
}

export default SpouseWorkingIncome;
