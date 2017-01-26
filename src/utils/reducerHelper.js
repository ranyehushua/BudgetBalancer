export const removeItem = (state, id) => {
  let remove;
  const filtered = state.items.filter((item) => {
    if (item.id !== id) return item;
    else if (item.id === id) remove = item.amount;
  });
  const newState = {
    items: filtered,
    total: state.total - remove,
    idCounter: state.idCounter
  }

  return newState;
}

export const addItem = (state, action) => {
  return {
    items: state.items.concat({
      id: action.id || state.idCounter, //action.id will only be specified in unit tests
      desc: action.desc,
      amount: action.amount
    }),
    total: state.total + action.amount,
    idCounter: state.idCounter + 1
  }
}
