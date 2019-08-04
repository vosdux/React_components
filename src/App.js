import React from 'react';


import Navigation from './layout/Navigation/Navigation';
import Main from './layout/Main/Main';


import './App.css'

const App = () => {
  return (
    <div className="main-wrapper">
      <Navigation />
      <Main />
    </div>
  )
}

export default App;
