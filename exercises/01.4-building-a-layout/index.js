import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const data = {
	image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia"
	}
};


/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/

 let content = (<div class="card m-5">
                    <img class="card-img-top" src={data.image} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>)

ReactDOM.render(content, document.querySelector("#myDiv"));
