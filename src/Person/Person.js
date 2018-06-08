import React from 'react';

// in the simplest form, a component is just a function, that returns JSX
const person = (props) => {
	/* we can pass methods as props, like it's done in <p onClick={props.click}> */
	return (
		<div>
			<p onClick = {props.click}> I'm a {props.name} and I am {props.age} years old. </p>
			<p>{props.children}</p>
		</div>
		)
};

export default person;