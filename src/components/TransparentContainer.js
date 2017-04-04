import React from 'react';

const style = {
  backgroundColor: 'rgba(50,50,50, .2)',
  boxShadow: '5px 5px 8px -2px rgba(0,0,0,0.75)',
  borderRadius: '10px',
  padding: '20px',
  maxWidth: '600px',
  margin: '10px auto',
  marginTop: '0'
}

const TransparentContainer = (props) => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default TransparentContainer;
