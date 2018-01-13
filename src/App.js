import React, { Component } from 'react';
import ProverbView from './ProverbView.js';
import logo from './colberthead.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" title="Live on tape from the Ed Sullivan Theater in New York City, it's Stephen Colbert !" />
          <h1 className="App-title">Alternative Proverb Generator</h1>
        </header>
          <ProverbView />
      </div>
    );
  }
}

export default App;
