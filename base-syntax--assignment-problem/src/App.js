import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    username: "Ira"
  }

  insertName = (name) => {
      this.setState({
        username: 'David'
      });
  }

  changedInput = (event) => {
    this.setState({
      username: event.target.value
    });
    console.log("New name is " + this.state.username);
  }

  render() {
    return (
      <div className="App">
        <h1 align="center"> Task: </h1>

        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <h1 align="center"> Solution: </h1>
        <UserInput changed={this.changedInput} name={this.state.username}> </UserInput>
        <UserOutput username={this.state.username}>  has a little lamb. </UserOutput>
        <UserOutput> The show must go on. </UserOutput>
        <UserOutput> The quick brown fox jumps over the lazy dog. </UserOutput>

      </div>
    );
  }
}



const UserInput = (props) => { 

    return (
      <div className="UserInput">
        <input type="text" onChange={props.changed} defaultValue={props.name} />  
      </div>
      );

}

class UserOutput extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="UserOutput">
        <p> {this.props.username} {this.props.children} </p>
        <p>  </p>
      </div>
      );
  }
}

export default App;
