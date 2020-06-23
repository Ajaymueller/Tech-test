import React from 'react';
import '../styles/App.css';
import Search from './Search'

const App = () => {
  return (
    <div className="App">
      <img src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
      width="200" 
      height="200" 
      className="logo" />
    <Search />
  </div>
  )

}

export default App;
