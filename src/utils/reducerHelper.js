//helper function for removing income or expenses from their respective lists
export const removeItem = (state, id) => {
  let remove;
  const filtered = state.items.filter((item) => {
    if (item.id !== id) return item;
    else if (item.id === id) remove = item.amount;
  });
  const newState = {
    items: filtered,
    total: state.total - remove
  }

  return newState;
}

export const addItem = (state, action) => {
  return {
    items: state.items.concat({
      id: action.id,
      desc: action.desc,
      amount: action.amount
    }),
    total: state.total + action.amount
  }
}
