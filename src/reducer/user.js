import expect from 'expect';

export const user = (state = '', action) => {
  switch (action.type) {
    case 'ADD_USER':
      return action.name;
    default:
      return state;
  }
}

export const testUser = () => {
  const before = '';
  const after = 'Ran';

  const action = {type: 'ADD_USER', name: 'Ran'};

  expect(user(before, action)).toEqual(after);
  console.log('Add user test passed!');
}
