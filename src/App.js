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

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DO NOT DO THIS: this.state.persons[0].name = 'Maximilian';
    // Direct mutation if the state not allowed!
    this.setState({
    persons: [
      {name: newName, age: "31"},
      {name: "Helen", age: "19"},
      {name: "Mark", age: "28"}
    ]
   })
  }

  render() {
    // use switchNameHandler without () to prevent it to be called immediately after the browser renders the page
    // events, supported by ReactJS:
    // https://reactjs.org/docs/events.html#supported-events
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Click!</button>
        <Person name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click = {this.switchNameHandler.bind(this, 'Max!')}> 
        </Person>
        <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click = {this.switchNameHandler.bind(this, 'TestName')}> 
        </Person>
      </div> 
      // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'))
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
