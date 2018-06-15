import React, { Component } from 'react';
import './App.css';

const validation = (props) => {
	return (
		<div>
			<p> Length of the input text is: {props.text_length} </p>
		</div>
	);
};

export default validation;