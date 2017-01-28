import { connect } from 'react-redux';
import { tutorialMapping } from '../utils/stateMapping';
import Tutorial from '../components/Tutorial';

const TutorialContainer = connect(
  tutorialMapping.mapStateToProps,
  tutorialMapping.mapDispatchToProps
)(Tutorial);

export default TutorialContainer;
