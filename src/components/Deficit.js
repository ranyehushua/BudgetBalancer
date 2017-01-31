import React, { PropTypes } from 'react';

const style = {
  backgroundColor: '#9b0a38',
  border: '3px solid #0c0205',
  borderRadius: '5px',
  fontSize: '1em',
  fontWeight: '400',
  color: '#fff',
  padding: '5px'
}

const Deficit = (props) => {
  return (
    <div className="text-center" style={style}>It looks like you have a deficit of ${props.amount}. Consider cutting down on your expenses or reallocating savings.</div>
  )
}

Deficit.propTypes = {
  amount: PropTypes.number.isRequired
}

export default Deficit;
