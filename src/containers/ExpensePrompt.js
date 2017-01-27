import { connect } from 'react-redux';
import { expensePromptMapping } from '../utils/stateMapping';
import Prompt from '../components/Prompt';

const ExpensePrompt = connect(
  expensePromptMapping.mapStateToProps,
  expensePromptMapping.mapDispatchToProps
)(Prompt);

export default ExpensePrompt;
