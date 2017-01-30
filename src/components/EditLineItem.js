import React, { PropTypes } from 'react';

const EditLineItem = (props) => {
  return (
    <div>
      
    </div>
  )
}

EditLineItem.PropTypes = {
  edit: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
}

export default EditLineItem;
