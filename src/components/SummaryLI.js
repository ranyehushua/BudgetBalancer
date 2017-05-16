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
  surplus: {
    border: 'black solid 1px',
    margin: '10px 0',
    padding: '5px',
    backgroundColor: 'rgba(60, 195, 60, .5)',
    color: '#fff',
    fontSize: '1.2rem'
  },
  deficit: {
    border: 'black solid 1px',
    margin: '10px 0',
    padding: '5px',
    backgroundColor: 'rgba(140, 50, 50, .5)',
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
    <li style={props.surplus ? style.surplus : props.deficit ? style.deficit : style.li}><span style={style.left}>{props.desc}:</span><span style={style.right}>${props.amount}</span><div style={style.clear}></div></li>
  )
}

SummaryLI.propTypes = {
  desc: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  surplus: PropTypes.bool,
  deficit: PropTypes.bool
}



export default SummaryLI
