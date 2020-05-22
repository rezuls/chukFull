const {setJokes} = require('./setJokes');
const {alreadyFavourite} = require('./alreadyFavouriteJokes');

randomJoke = () => {

	const link = 'https://api.chucknorris.io/jokes/random';
	
	fetch(link) 
		.then(r => r.json())
		.then((data) => {
			
			setJokes(data);

			alreadyFavourite();
		});
};

randomJoke();

module.exports = {randomJoke};