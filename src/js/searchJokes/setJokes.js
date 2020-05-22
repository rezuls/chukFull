const {createJoke} = require('../utils/markupCreators');

const body = document.querySelector('.body');
const jokeItemsWrapper = body.querySelector('.joke__wrapper');

setJokes = (data) => {
	const valueJoke = {
		id: data.id,
		text: data.value,
		date: new Date(data.updated_at).toLocaleTimeString(),
		categories: data.categories,
		event: 'onclick',
		eventName: 'addToFav(event)',
	};

	const itemSearch = createJoke(valueJoke);
	const itemSearchCategories = itemSearch.querySelector('.joke__item-info-categories');

	jokeItemsWrapper.appendChild(itemSearch);

	if (data.categories.length >= 1) {
		itemSearchCategories.classList.add('show');
	} else {
		itemSearchCategories.classList.remove('show');
	}
};

module.exports = {body, jokeItemsWrapper, setJokes};