import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = props => {
	//here you have to return expected html using the properties being passed to the component
	<div class="jumbotron m-5">
		<h1 class="display-4">{props.title}</h1>
		<p class="lead">{props.description}</p>
		<a class="btn btn-primary btn-lg" href={props.buttonLabel} role="button">
			{props.buttonURL}}
		</a>
	</div>;
};

Jumbotron.propTypes = {
	//proptypes here
};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);
