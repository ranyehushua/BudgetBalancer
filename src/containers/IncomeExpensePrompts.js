import { connect } from 'react-redux';
import { IncomeExpense } from '../utils/stateMapping';
import Prompts from '../components/Prompts';

const IncomeExpensePrompts = connect(
  IncomeExpense.mapStateToProps,
  IncomeExpense.mapDispatchToProps
)(Prompts);

export default IncomeExpensePrompts;
