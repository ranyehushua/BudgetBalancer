import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const App = (props) => {
  return (
    <div className="container-fluid">
      <CSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={500}
      >
        {React.cloneElement(props.children, {key: props.location.pathname})}
      </CSSTransitionGroup>
    </div>
  )
}

export default App;
