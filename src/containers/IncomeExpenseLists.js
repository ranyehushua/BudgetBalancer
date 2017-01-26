import { connect } from 'react-redux';
import { IncomeExpense } from '../utils/stateMapping';
import Lists from '../components/Lists';

const IncomeExpenseLists = connect(
  IncomeExpense.mapStateToProps,
  IncomeExpense.mapDispatchToProps
)(Lists);

export default IncomeExpenseLists;
