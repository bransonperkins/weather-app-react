import React from 'react';
import './App.css';

console.log(process.env.REACT_APP_OW_API_KEY);

class App extends React.Component {
  state = {};
  render() { 
    return <p>Hello World!</p>;
  }
}

export default App;
