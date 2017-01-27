import { connect } from 'react-redux';
import { listsMapping } from '../utils/stateMapping';
import Lists from '../components/Lists';

const IncomeExpenseLists = connect(
  listsMapping.mapStateToProps,
  listsMapping.mapDispatchToProps
)(Lists);

export default IncomeExpenseLists;
