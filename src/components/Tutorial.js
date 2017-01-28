import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';

const Tutorial = (props) => {
  return (
    <div>
      <h1>Welcome {props.user}! Are you excited to balance your budget?</h1>
      <p>To get started, you will be prompted with a series of questions regarding your monthly income and expenses.</p>
      <p>If any of the requested items do not apply to you, feel free to hit the <button type="button" className="btn btn-default" onClick={(e) => e.preventDefaults}>Skip Item</button> button.</p>
      <p>We will be sure to separate your expenses by essential and discretionary categories, in case we need to examine curbing your spending habits.</p>
      <p>Once we get through the basic items, you will have the opportunity to add/remove aditional income or expenses and we can determine whether you have money left over that can go into savings.</p>
      <h4>Ready to get started? <button className="btn btn-success" type="button" onClick={() => browserHistory.push('/WorkingIncome')}>Let's Go!</button></h4>
    </div>
  )
}

Tutorial.propTypes = {
  user: PropTypes.string.isRequired
}

export default Tutorial;
