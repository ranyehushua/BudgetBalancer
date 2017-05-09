import React, { PropTypes } from 'react'

const style = {
  li: {
    border: 'black solid 1px',
    margin: '3px 0',
    padding: '5px',
    backgroundColor: 'rgba(100, 100, 100, .4)',
    color: '#fff',
    fontSize: '1.2rem'
  },
  left: {
    float: 'left',
    fontSize: 'inherit'
  },
  right: {
    float: 'right',
    fontSize: 'inherit'
  },
  clear: {
    clear: 'both'
  }
}

const SummaryLI = (props) => {
  return (
    <li style={style.li}><span style={style.left}>{props.desc}:</span><span style={style.right}>${props.amount}</span><div style={style.clear}></div></li>
  )
}

SummaryLI.propTypes = {
  desc: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}



export default SummaryLI
