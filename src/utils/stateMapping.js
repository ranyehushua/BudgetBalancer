import { removeIncome, addIncome, removeExpense, addExpense, addUser } from '../actions';

export const listsMapping = {
  mapStateToProps: (state) => {
    return {
      income: state.income,
      expense: state.expense,
      user: state.user
    }
  },
  mapDispatchToProps: (dispatch) => {
    return {
      removeIncome: (id) => {
        dispatch(removeIncome(id));
      },
      removeExpense: (id) => {
        dispatch(removeExpense(id));
      },
      addIncome: (desc, amount) => {
        dispatch(addIncome(desc, amount));
      },
      addExpense: (desc, amount) => {
        dispatch(addExpense(desc, amount));
      }
    }
  }
}

export const incomePromptMapping = {
  mapStateToProps: (state) => {
    return {
      income: state.income
    }
  },
  mapDispatchToProps: (dispatch) => {
    return {
      addIncome: (desc, amount) => {
        dispatch(addIncome(desc, amount));
      }
    }
  }
}

export const expensePromptMapping = {
  mapStateToProps: (state) => {
    return {
      expense: state.expense
    }
  },
  mapDispatchToProps: (dispatch) => {
    return {
      addIncome: (desc, amount) => {
        dispatch(addExpense(desc, amount));
      }
    }
  }
}

export const mainMapping = {
  mapStateToProps: (state) => {
    return {
      income: state.income,
      expense: state.expense,
      user: state.user
    }
  },
  mapDispatchToProps: (dispatch) => {
    return {
      addUser: (name) => {
        dispatch(addUser(name));
      }
    }
  }
}
