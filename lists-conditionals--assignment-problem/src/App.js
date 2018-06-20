import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import Char from './CharComponent';

class App extends Component {

  state = {
    text_length: 0,
    char_array: []
  };

  calcLength = (event) => {

    const text_length = event.target.value.length;

    const char_array = event.target.value.split('');

    this.setState( {text_length: text_length, char_array: char_array} );

  }

  deleteCharHandler = (index) => {
    const text = this.state.char_array;
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({char_array: updatedText});
  }

  render() {

    const charList = this.state.char_array.map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <h1 align="center"> Assignment: </h1>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <h1 align="center"> Solution: </h1>

        <input id="input_field" type="text" onChange={(s) => this.calcLength(s)} />
        <p> {this.state.text_length} </p>
        <ValidationComponent text_length={this.state.text_length} />
        {charList}

      </div>
    );
  }
}

export default App;
