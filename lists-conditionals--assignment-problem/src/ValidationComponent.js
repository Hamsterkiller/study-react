import React, { Component } from 'react';
import './App.css';

const validation = (props) => {

	const validate = (text) => {
		if (text.length < 5) {
			return 'The text is too short!'
		} else {
			return 'The text is long enough.'
		}	
	}

	return (
		<div>
			<p> Length of the input text is: {props.text.length}. {validate(props.text)} </p>
		</div>
	);
};

export default validation;