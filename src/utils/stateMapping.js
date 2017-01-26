import { removeIncome, addIncome, removeExpense, addExpense } from '../actions';

export const IncomeExpense = {
  mapStateToProps: (state) => {
    return {
      income: state.income,
      expense: state.expense
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
