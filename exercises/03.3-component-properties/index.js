import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonLabel} className="btn btn-primary">
					Go to wikipedia
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonLabel: PropType.string

	// 2) add here the new properties into the proptypes object
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(
	<BootstrapCard
		title="Paul Mccartney"
		description="Es el mejor"
		imageUrl="https://www.latercera.com/resizer/oPbWjx76gTJ-k0RwOYdcEN4ZQhI=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/HFPLA2OBNNCZNBJXH3IXAZHCNI.jpg"
		buttonLabel="https://es.wikipedia.org/wiki/Paul_McCartney"
	/>,
	document.querySelector("#myDiv")
);
