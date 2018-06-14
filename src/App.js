import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      {id: '1', name: "Max", age: "31"},
      {id: '2', name: "Helen", age: "19"},
      {id: '3', name: "Mark", age: "27"}
    ],
    showPersons: false
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
   });
  }

  deletePersonHandler = (personIndex) => {
    // create a copy of state by splice() without args to maintain state-imutability
    // const persons = this.state.persons.slice();
    // ES6 analog (like [].extend(...) in Python):
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    
    // findIndex will check every element of the array for the condition function beeing passed
    // and return indices of elelments, for which condition is true
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // not mutate state - use ... (spread) operator
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    // not mutate - use ... (spread) operator
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  // show/hide function
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // everything inside render method is executed, when react re-renders the content of the page
  render() {
    // use switchNameHandler without () to prevent it to be called immediately after the browser renders the page
    // events, supported by ReactJS:
    // https://reactjs.org/docs/events.html#supported-events
    // if function looks like () => some_shit... , then react implicitly adds return statement before that shit
    // this function isnamed 'anonimous'
    // this.switchNameHandler.bind(this, 'Maximilian') can be written as:
    // () => this.switchNameHandler('Maximilian')

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '5px',
        cursor: 'pointer'
    };

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return (
                  <Person 
                    name={person.name} 
                    age={person.age} 
                    click={() => this.deletePersonHandler(index)} 
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
                );
            })}
          </div>
          );
    }

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div> 
      // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'))
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
