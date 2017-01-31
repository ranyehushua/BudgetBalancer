export const removeIncome = (id) => {
  return {
    type: 'REMOVE_INCOME',
    id
  }
}

export const removeSavings = (id) => {
  return {
    type: 'REMOVE_SAVINGS',
    id
  }
}

export const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

export const addIncome = (desc, amount) => {
  return {
    type: 'ADD_INCOME',
    desc,
    amount
  }
}

export const addSavings = (desc, amount) => {
  return {
    type: 'ADD_SAVINGS',
    desc,
    amount
  }
}

export const addExpense = (desc, amount, essential) => {
  return {
    type: 'ADD_EXPENSE',
    desc,
    amount,
    essential
  }
}

export const editIncome = (id, desc, amount) => {
  return {
    type: 'EDIT_INCOME',
    id,
    desc,
    amount
  }
}

export const editSavings = (id, desc, amount) => {
  return {
    type: 'EDIT_SAVINGS',
    id,
    desc,
    amount
  }
}

export const editExpense = (id, desc, amount) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    desc,
    amount
  }
}

export const addUser = (name) => {
  return {
    type: 'ADD_USER',
    name
  }
}
