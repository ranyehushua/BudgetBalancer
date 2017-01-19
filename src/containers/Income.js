import { connect } from 'react-redux';
import { removeIncome, addIncome } from '../actions';
import IncomeList from '../components/IncomeList';

const mapStateToProps = (state) => {
  return {
    income: state.income
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveClick: (id) => {
      dispatch(removeIncome(id))
    },
    onAddClick: (desc, amount) => {
      dispatch(addIncome(desc, amount))
    }
  }
}

const Income = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomeList)

export default Income;
