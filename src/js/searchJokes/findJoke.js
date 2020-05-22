const {jokeForm, categoriesJoke} = require('./categoriesJoke');
const {randomJoke} = require('./randomJoke');
const {wordSearchJoke} = require('./wordSearchJoke');
const {jokeItemsWrapper} = require('./setJokes');
const {loadJokes, removeLoadJokes} = require('../utils/loader');

findJoke = () => {

	const RandomChoseInput = jokeForm.querySelector('#joke-random');
	const categoriesChoseInput = jokeForm.querySelector('#joke-categories');
	const wordSearchInput = jokeForm.querySelector('#joke-search');

	if (RandomChoseInput.checked) {
		randomJoke();
	}
	if (categoriesChoseInput.checked) {
		categoriesJoke();
	}
	if (wordSearchInput.checked) {
		wordSearchJoke();
	}

};

clearJokes = () => {
	const jokeItems = jokeItemsWrapper.querySelectorAll('.joke__item');
	jokeItems.forEach(clearItem => {
		
		clearItem.remove();
		
		loadJokes();

	});
};

jokeForm.addEventListener('submit', (e) => {

	e.preventDefault();

	clearJokes();

	findJoke();

	setTimeout(() => {
		removeLoadJokes();
	}, 1000);
	
});