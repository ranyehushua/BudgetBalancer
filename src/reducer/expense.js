import { removeExpense, addExpense } from '../utils/reducerHelper';
import expect from 'expect';
var deepFreeze = require('deep-freeze');

//Started idCounter for expense state at 10,000 and income at 0, so that keys don't match
export const expense = (state = {essential: [], discretionary: [], total: 0, idCounter: 10000}, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return addExpense(state, action);
    case 'REMOVE_EXPENSE':
      return removeExpense(state, action.id);
    default:
      return state;
  }
}

export const testExpense = () => {
  const before = {essential: [], discretionary: [], total: 0, idCounter: 10000};
  let after = {
    essential: [
      {
        id: 1,
        desc: 'test',
        amount: 10.00,
      }
    ],
    discretionary: [],
    total: 10.00,
    idCounter: 10001
  };

  const action = {
    type: 'ADD_EXPENSE',
    id: 1,
    desc: 'test',
    amount: 10.00,
    essential: true
  }

  deepFreeze(before);
  deepFreeze(action);

  expect(expense(before, action)).toEqual(after);
  console.log('expense reducer successfully adds essential item to expense array and updates expense total!');

  const afterB = {
    essential: [
      {
        id: 1,
        desc: 'test',
        amount: 10.00,
      }
    ],
    discretionary: [
      {
        id: 2,
        desc: 'test',
        amount: 10.00
      }
    ],
    total: 20.00,
    idCounter: 10002
  };

  const actionB = {
    type: 'ADD_EXPENSE',
    id: 2,
    desc: 'test',
    amount: 10.00,
    essential: false
  }

  deepFreeze(actionB);

  expect(expense(after, actionB)).toEqual(afterB);
  console.log('expense reducer successfully adds discretionary item to expense array and updates expense total!');

  const before2 = afterB;

  const after2 = {
    essential: [
      {
        id: 1,
        desc: 'test',
        amount: 10.00,
      }
    ],
    discretionary: [],
    total: 10.00,
    idCounter: 10002
  };

  const action2 = {
    type: 'REMOVE_EXPENSE',
    id: 2
  };

  deepFreeze(before2);
  deepFreeze(action2);

  expect(expense(before2, action2)).toEqual(after2);
  console.log('expense reducer successfully removes expense item and updates total!');
  console.log('all expense reducer tests passed!');
}
