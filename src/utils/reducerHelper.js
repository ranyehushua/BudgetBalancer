export const removeIncome = (state, id) => {
  let remove;
  // eslint-disable-next-line
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

export const addIncome = (state, action) => {
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

export const addExpense = (state, action) => {
  switch(action.essential) {
    case true:
      return {
        essential: state.essential.concat({
          id: action.id || state.idCounter, //action.id will only be specified in unit tests
          desc: action.desc,
          amount: action.amount
        }),
        discretionary: state.discretionary,
        total: state.total + action.amount,
        idCounter: state.idCounter + 1
      }
    case false:
      return {
        essential: state.essential,
        discretionary: state.discretionary.concat({
          id: action.id || state.idCounter, //action.id will only be specified in unit tests
          desc: action.desc,
          amount: action.amount
        }),
        total: state.total + action.amount,
        idCounter: state.idCounter + 1
      }
    default:
      return state;
  }
}

export const removeExpense = (state, id) => {
  let remove;
  // eslint-disable-next-line
  const filteredEssential = state.essential.filter((item) => {
    if (item.id !== id) return item;
    else if (item.id === id) remove = item.amount;
  });
  // eslint-disable-next-line
  const filteredDiscretionary = state.discretionary.filter((item) => {
    if (item.id !== id) return item;
    else if (item.id === id) remove = item.amount;
  });
  const newState = {
    essential: filteredEssential,
    discretionary: filteredDiscretionary,
    total: state.total - remove,
    idCounter: state.idCounter
  }

  return newState;
}
