import React, { PropTypes } from 'react';

const style = {
  backgroundColor: '#1d8a9b',
  border: '3px solid #5CB85C',
  borderRadius: '5px',
  fontSize: '1em',
  fontWeight: '400',
  color: '#fff',
  padding: '5px',
  marginBottom: '10px'
}

const Surplus = (props) => {
  return (
    <div style={style} className="text-center">
      You currently have a surplus of ${props.amount} in your budget! Scroll below to adjust your essential and discretionary expenses or, better yet, let's allocate some savings!
    </div>
  )
}

Surplus.propTypes = {
  amount: PropTypes.number.isRequired
}

export default Surplus;
