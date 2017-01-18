import { removeItem, addItem } from '../utils/reducerHelper';
import expect from 'expect';
var deepFreeze = require('deep-freeze');

export const income = (state = {items: [], total: 0}, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return addItem(state, action)
    case 'REMOVE_INCOME':
      return removeItem(state, action.id);
    default:
      return state;
  }
}

export const testIncome = () => {
  const before = {items: [], total: 0};
  const after = {
    items: [{
      id: 1,
      desc: 'test',
      amount: 10.00
    }],
    total: 10.00
  };

  const action = {
    type: 'ADD_INCOME',
    id: 1,
    desc: 'test',
    amount: 10.00
  }

  deepFreeze(before);
  deepFreeze(action);

  expect(income(before, action)).toEqual(after);
  console.log('income reducer successfully adds item to income array and updates income total!');

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
    total: 60.00
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
    total: 40.00
  };

  const action2 = {
    type: 'REMOVE_INCOME',
    id: 2
  };

  deepFreeze(before2);
  deepFreeze(action2);

  expect(income(before2, action2)).toEqual(after2);
  console.log('income reducer successfully removes income item and updates total!');
  console.log('all income reducer tests passed!');
}
