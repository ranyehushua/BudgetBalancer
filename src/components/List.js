import React, { PropTypes } from 'react';
import LineItem from './LineItem';

const List  = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <LineItem desc={item.desc} amount={item.amount} id={item.id} remove={props.clickRemove.bind(null, item.id)} edit={props.clickEdit} key={item.id} />
      })}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  clickRemove: PropTypes.func.isRequired,
  clickEdit: PropTypes.func.isRequired
}

export default List;
