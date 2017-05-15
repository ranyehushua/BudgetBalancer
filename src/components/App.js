import React from 'react';
import { RouteTransition } from 'react-router-transition';
import '../index.css'

const App = (props) => {
  return (
    <div className="container-fluid">
      <RouteTransition
        pathname={props.location.pathname}
        atEnter={{ translateX: 100, opacity:1 }}
        atLeave={{ translateX: -100, opacity:0, display:'none' }}
        atActive={{ translateX: 0, opacity:1 }}
        mapStyles={styles => ({
          transform: `translateX(${styles.translateX}%)`,
          position: 'absolute',
          height: '100%',
          top: '0px',
          left: '0',
          right: '0',
          padding: '5%'
        })}
      >
        <div className="app">
          {props.children}
        </div>
      </RouteTransition>
    </div>
  )
}

export default App;
