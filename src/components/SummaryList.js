import React, { PropTypes } from 'react'
import SummaryLI from './SummaryLI'


const SummaryList = (props) => {
  return (
    <ul>
      <SummaryLI desc="Monthly Income" amount={props.income.total} />
      <SummaryLI desc="Monthly Essential Expenses" amount={props.expense.totalEssential} />
      <SummaryLI desc="Monthly Discretionary Expenses" amount={props.expense.totalDiscretionary} />
      <SummaryLI desc="Allocated Savings" amount={props.savings.total} />
    </ul>
  )
}

SummaryList.propTypes = {
  income: PropTypes.object.isRequired,
  expense: PropTypes.object.isRequired,
  savings: PropTypes.object.isRequired,
  surplus: PropTypes.number.isRequired
}

export default SummaryList;
