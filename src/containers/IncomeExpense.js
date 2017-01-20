import { connect } from 'react-redux';
import { removeIncome, addIncome, removeExpense, addExpense } from '../actions';
import Lists from '../components/Lists';

const mapStateToProps = (state) => {
  return {
    income: state.income,
    expense: state.expense
  }
}

const mapDispatchToProps = (dispatch) => {
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

const Income = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);

export default Income;
