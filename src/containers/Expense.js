import { connect } from 'react-redux';
import { removeExpense, addExpense } from '../actions';
import ExpenseList from '../components/ExpenseList';

const mapStateToProps = (state) => {
  return {
    expense: state.expense
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveClick: (id) => {
      dispatch(removeExpense(id))
    },
    onAddClick: (desc, amount) => {
      dispatch(addExpense(desc, amount))
    }
  }
}

const Expense = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseList)

export default Expense;
