import React, { Component } from 'react';
import './App.css';

const validation = (props) => {

	const validate = (len) => {
		if (len < 5) {
			return 'The text is too short!'
		} else {
			return 'The text is long enough.'
		}	
	}

	return (
		<div>
			<p> Length of the input text is: {props.text_length}. {validate(props.text_length)} </p>
		</div>
	);
};

export default validation;