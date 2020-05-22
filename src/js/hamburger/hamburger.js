const {body} = require('../searchJokes/setJokes');

const hamburger = body.querySelector('.hamburger');

hamburger.addEventListener('click', (e) => {
	e.stopPropagation();
	body.classList.toggle('overlay-tablet');
});
