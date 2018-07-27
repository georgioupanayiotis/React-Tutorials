import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
      state = {
        name: `Lets Rock 🎸`
      };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Initial State Example</h1>
        </header>
        <p className="App-intro">
          {this.state.name}
        </p>
        <footer className="App-footer">
          <p id="blogLink">
            <a href="https://www.panayiotisgeorgiou.net" target="_blank">Check out the blog post</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;