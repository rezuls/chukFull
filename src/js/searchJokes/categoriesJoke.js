const {body,setJokes} = require('./setJokes');
const {alreadyFavourite} = require('./alreadyFavouriteJokes');
const jokeForm = body.querySelector('.joke__form');

categoriesJoke = () => {

	const categoryActive = jokeForm.querySelector('.joke__form-categories-link.active');
	const link = `https://api.chucknorris.io/jokes/random?category=${categoryActive.innerHTML}`;

	fetch(link) 
		.then(r => r.json())
		.then((data) => {

			setJokes(data);

			alreadyFavourite();
		});
};

module.exports = {categoriesJoke, jokeForm};