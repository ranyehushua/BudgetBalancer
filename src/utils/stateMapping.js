import { removeIncome, addIncome, removeExpense, addExpense, addUser, editIncome, editExpense, addSavings, editSavings, removeSavings } from '../actions';

export const listsMapping = {
  mapStateToProps: (state) => {
    return {
      income: state.income,
      expense: state.expense,
      savings: state.savings,
      surplus: state.income.total - state.expense.total - state.savings.total,
      user: state.user
    }
  },
  mapDispatchToProps: (dispatch) => {
    return {
      removeIncome: (id) => {
        dispatch(removeIncome(id));
      },
      removeSavings: (id) => {
        dispatch(removeSavings(id));
      },
      removeExpense: (id) => {
        dispatch(removeExpense(id));
      },
      addIncome: (desc, amount) => {
        dispatch(addIncome(desc, amount));
      },
      addSavings: (desc, amount) => {
        dispatch(addSavings(desc, amount));
      },
      addExpense: (desc, amount, essential) => {
        dispatch(addExpense(desc, amount, essential));
      },
      editIncome: (id, desc, amount) => {
        dispatch(editIncome(id, desc, amount))
      },
      editSavings: (id, desc, amount) => {
        dispatch(editSavings(id, desc, amount))
      },
      editExpense: (id, desc, amount) => {
        dispatch(editExpense(id, desc, amount))
      }
    }
  }
}

export const incomePromptMapping = {
  mapStateToProps: (state, ownProps) => {
    return {
      prompt: ownProps.prompt,
      desc: ownProps.desc,
      next: ownProps.next
    }
  },
  mapDispatchToProps: (dispatch) => {
    return {
      addItem: (desc, amount) => {
        dispatch(addIncome(desc, amount));
      }
    }
  }
}

export const expensePromptMapping = {
  mapStateToProps: (state, ownProps) => {
    return {
      prompt: ownProps.prompt,
      desc: ownProps.desc,
      next: ownProps.next,
      essential: ownProps.essential
    }
  },
  mapDispatchToProps: (dispatch) => {
    return {
      addItem: (desc, amount, essential) => {
        dispatch(addExpense(desc, amount, essential));
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

export const tutorialMapping = {
  mapStateToProps: (state) => {
    return {
      user: state.user
    }
  }
}
