import React from 'react';
import { RouteTransition } from 'react-router-transition';
import '../index.css';
import $ from 'jquery';

export const setHeight = () => {
  //Using .last() because the last instance of app class will always be the Lists component
  if ($('html').height() < $('.app').last().height()) $('html').height($('.app').last().height());
  console.log('setting height');
}

const App = React.createClass({
  componentDidUpdate() {
    setHeight();
  },
  shouldComponentUpdate() {
    //reset html height before each toggle update
    $('html').height('100%');
    return true;
  },
  componentDidMount() {
    setHeight();
  },
  render () {
    return (
      <div className="container-fluid">
        <RouteTransition
          pathname={this.props.location.pathname}
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
            {this.props.children}
          </div>
        </RouteTransition>
      </div>
    )
  }
})


export default App;
