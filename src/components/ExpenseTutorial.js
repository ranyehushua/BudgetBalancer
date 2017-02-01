import React from 'react';
import {hashHistory} from 'react-router';

const ExpenseTutorial = (props) => {
  return (
    <div className="prompt">
      <h1>Great work so far!</h1>
      <p>Don't worry, if you have more income sources to add to the list, you will have an opportunity to add them shortly.</p>
      <p>For now, let's go through a few expenses. This will work just like the income prompts, we will start with the essentials and later you will have the opportunity to add more discretionary or essential expenses.</p>
      <h4>Ready to get started? <button className="btn btn-success" type="button" onClick={() => hashHistory.push('/HousingExpense')}>Let's Go!</button></h4>
    </div>
  )
}

export default ExpenseTutorial;
