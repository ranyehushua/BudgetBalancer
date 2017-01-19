export const removeIncome = (id) => {
  return {
    type: 'REMOVE_INCOME',
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

export const addExpense = (desc, amount) => {
  return {
    type: 'ADD_EXPENSE',
    desc,
    amount
  }
}
