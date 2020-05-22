const {body} = require('../searchJokes/setJokes');
const {createJoke} = require('../utils/markupCreators');

const itemsFavourite = body.querySelector('.joke__like-wrapper');

getFavJokes = () => {

	const jokesArray = getJokes();

	jokesArray.forEach(item => {

		const valueJoke = {
			id: item.id,
			text: item.text,
			date: item.date,
			categories: item.categories,
			event: 'onclick',
			eventName: 'removeFromFav(event)',
		};

		const itemSearch = createJoke(valueJoke);
		const itemSearchCategories = itemSearch.querySelector('.joke__item-info-categories');

		itemsFavourite.appendChild(itemSearch);

		if (item.categories.length >= 1) {
			itemSearchCategories.classList.add('show');
		} else {
			itemSearchCategories.classList.remove('show');
		}
	});
};

getFavJokes();

module.exports = {itemsFavourite};