import { connect } from 'react-redux';
import { mainMapping } from '../utils/stateMapping';
import Main from '../components/Main';

const MainContainer = connect(
  mainMapping.mapStateToProps,
  mainMapping.mapDispatchToProps
)(Main);

export default MainContainer;
