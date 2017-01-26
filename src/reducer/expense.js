import { removeItem, addItem } from '../utils/reducerHelper';
import expect from 'expect';
var deepFreeze = require('deep-freeze');

//Started idCounter for expense state at 10,000 and income at 0, so that keys don't match
export const expense = (state = {items: [], total: 0, idCounter: 10000}, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return addItem(state, action);
    case 'REMOVE_EXPENSE':
      return removeItem(state, action.id);
    default:
      return state;
  }
}

export const testExpense = () => {
  const before = {items: [], total: 0, idCounter: 10000};
  const after = {
    items: [{
      id: 1,
      desc: 'test',
      amount: 10.00
    }],
    total: 10.00,
    idCounter: 10001
  };

  const action = {
    type: 'ADD_EXPENSE',
    id: 1,
    desc: 'test',
    amount: 10.00
  }

  deepFreeze(before);
  deepFreeze(action);

  expect(expense(before, action)).toEqual(after);
  console.log('expense reducer successfully adds item to expense array and updates expense total!');

  const before2 = {
    items:
      [{
          id: 1,
          desc: 'test',
          amount: 10.00
        },
        {
          id: 2,
          desc: 'testing',
          amount: 20.00
        },
        {
          id: 3,
          desc: 'tested',
          amount: 30.00
        }
      ],
    total: 60.00,
    idCounter: 3
  };

  const after2 = {
    items:
      [{
          id: 1,
          desc: 'test',
          amount: 10.00
        },
        {
          id: 3,
          desc: 'tested',
          amount: 30.00
        }
      ],
    total: 40.00,
    idCounter: 3
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
