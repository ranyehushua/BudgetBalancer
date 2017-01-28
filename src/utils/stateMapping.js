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
      addExpense: (desc, amount, essential) => {
        dispatch(addExpense(desc, amount, essential));
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
      next: ownProps.next
    }
  },
  mapDispatchToProps: (dispatch) => {
    return {
      addItem: (desc, amount) => {
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

export const tutorialMapping = {
  mapStateToProps: (state) => {
    return {
      user: state.user
    }
  }
}
