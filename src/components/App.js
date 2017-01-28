import React from 'react'

const App = (props) => {
  return (
    <div className="container-fluid">
      {props.children}
    </div>
  )
}

export default App;
