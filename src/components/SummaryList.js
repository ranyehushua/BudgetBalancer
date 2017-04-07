import React, { PropTypes } from 'react'

const SummaryList = (props) => {
  return (
    <div>

    </div>
  )
}

SummaryList.propTypes = {
  income: PropTypes.object.isRequired,
  expense: PropTypes.object.isRequired,
  savings: PropTypes.object.isRequired,
  surplus: PropTypes.number.isRequired
}

export default SummaryList;
