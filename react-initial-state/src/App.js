import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: `Let’s rock with constructor 🎸`
    };
  }

  handleInputChange(name) {
    this.setState({name})
  }
  render() {
    const {name} = this.state
    console.log('Name--', name)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Initial State Example</h1>
        </header>
        <input
            type="text"
            id="inputName"
            //value={name}
            placeholder="Change the guitar - type here"
            onChange={event => this.handleInputChange(event.target.value)}
        />
        <p className="App-intro">
          {name}
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