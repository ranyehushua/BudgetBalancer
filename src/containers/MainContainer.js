import { connect } from 'react-redux';
import { MainMapping } from '../utils/stateMapping';
import Main from '../components/Main';

const MainContainer = connect(
  MainMapping.mapStateToProps,
  MainMapping.mapDispatchToProps
)(Main);

export default MainContainer;
