import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: "Max", age: "31"},
      {name: "Helen", age: "19"},
      {name: "Mark", age: "27"}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> And I have a little mouse. </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> </Person>
      </div> 
      // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'))
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
