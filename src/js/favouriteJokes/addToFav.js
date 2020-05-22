const {itemsFavourite} = require('./initFavJokes');
const {filterJokes} = require('../filterJokes/filter');
const {createJoke} = require('../utils/markupCreators');
const {getJokes} = require('../searchJokes/getListStorage');

addToFav = (event) => {

	const addToFav = event.target;
	const itemToFav = addToFav.parentNode;
	const valueJokeId = itemToFav.querySelector('.joke__item-id').innerHTML;
	const valueJokeText = itemToFav.querySelector('.joke__item-text').innerHTML;
	const valueJokeTime = itemToFav.querySelector('.joke__item-info-time--inner').innerHTML;
	const valueJokeCategories = itemToFav.querySelector('.joke__item-info-categories').innerHTML;

	const valueJoke = {
		id: valueJokeId,
		text: valueJokeText,
		date: valueJokeTime,
		categories: valueJokeCategories,
		event: 'onclick',
		eventName: 'removeFromFav(event)',
	};

	if (itemsFavourite.querySelector(`[data-id="${valueJoke.id}"]`)) {

		addToFav.classList.remove('active');
		const itemId = itemsFavourite.querySelector(`[data-id="${valueJoke.id}"]`);
		const filterJokesId = valueJoke.id;

		itemId.remove();

		filterJokes(filterJokesId);

	} else {

		const addItemFavourite = createJoke(valueJoke);
		const addedItemCategories = addItemFavourite.querySelector('.joke__item-info-categories');
	
		itemsFavourite.appendChild(addItemFavourite);
		addToFav.classList.toggle('active');

		if (valueJoke.categories.length >= 1) {
			addedItemCategories.classList.add('show');
		} else {
			addedItemCategories.classList.remove('show');
		}

		const jokesArray = getJokes();
		const jokesList = jokesArray.concat(valueJoke);

		localStorage.setItem('jokes', JSON.stringify(jokesList));
	};

};