import React, { PropTypes } from 'react'

const style = {
  desc: {
    width: '75%',
    fontSize: '1.3rem'
  },
  amount: {
    float: 'right',
    fontSize: 'inherit'
  }
}

const Total = (props) => {
  return (
    <h4 style={style.desc}>{props.desc}:<span style={style.amount}>${props.amount}</span></h4>
  )
}

Total.propTypes = {
  desc: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Total
