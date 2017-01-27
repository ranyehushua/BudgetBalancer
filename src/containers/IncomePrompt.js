import { connect } from 'react-redux';
import { incomePromptMapping } from '../utils/stateMapping';
import Prompt from '../components/Prompt';

const IncomePrompt = connect(
  incomePromptMapping.mapStateToProps,
  incomePromptMapping.mapDispatchToProps
)(Prompt);

export default IncomePrompt;
