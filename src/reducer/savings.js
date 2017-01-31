import { removeIncome, addIncome, editIncome } from '../utils/reducerHelper';
import expect from 'expect';
var deepFreeze = require('deep-freeze');

export const savings = (state = {items: [], total: 0, idCounter: 100000}, action) => {
  switch (action.type) {
    case 'ADD_SAVINGS':
      return addIncome(state, action)
    case 'REMOVE_SAVINGS':
      return removeIncome(state, action.id);
    case 'EDIT_SAVINGS':
      return editIncome(state, action)
    default:
      return state;
  }
}

export const testSavings = () => {
  const before = {items: [], total: 0, idCounter: 0};
  const after = {
    items: [{
      id: 1,
      desc: 'test',
      amount: 10.00
    }],
    total: 10.00,
    idCounter: 1
  };

  const action = {
    type: 'ADD_SAVINGS',
    id: 1,
    desc: 'test',
    amount: 10.00
  }

  deepFreeze(before);
  deepFreeze(action);

  expect(savings(before, action)).toEqual(after);
  console.log('savings reducer successfully adds item to savings array and updates savings total!');

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
    type: 'REMOVE_SAVINGS',
    id: 2
  };

  deepFreeze(before2);
  deepFreeze(action2);

  expect(savings(before2, action2)).toEqual(after2);
  console.log('savings reducer successfully removes savings item and updates total!');

  const before3 = before2;
  const after3 = {
    items:
      [{
          id: 1,
          desc: 'test',
          amount: 10.00
        },
        {
          id: 2,
          desc: 'testing',
          amount: 30.00
        },
        {
          id: 3,
          desc: 'tested',
          amount: 30.00
        }
      ],
    total: 70.00,
    idCounter: 3
  };

  const action3 = {
    type: 'EDIT_SAVINGS',
    amount: 30,
    desc: 'testing',
    id: 2
  }

  deepFreeze(before3);
  deepFreeze(action3);
  expect(savings(before3, action3)).toEqual(after3);
  console.log('savings reducer successfully edits an savings item');
  console.log('all savings reducer tests passed!');
}
