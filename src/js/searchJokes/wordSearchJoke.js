const {alreadyFavourite} = require('./alreadyFavouriteJokes');
const {jokeForm} = require('./categoriesJoke');
const {setJokes} = require('./setJokes');

wordSearchJoke = () => {

	const searchWord = jokeForm.querySelector('.joke__form-search-input').value;
	const link = `https://api.chucknorris.io/jokes/search?query=${searchWord}`;

	fetch(link) 
		.then(r => r.json())
		.then(data => {
			const dataItem = data.result;
			dataItem.forEach(item => {
				const data = item;

				setJokes(data);

				alreadyFavourite();
			});
		});
};

module.exports = {wordSearchJoke};