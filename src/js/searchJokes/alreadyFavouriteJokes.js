const {jokeItemsWrapper} = require('./setJokes');
const {getJokes} = require('./getListStorage');

alreadyFavourite = () => {
	const jokesArray = getJokes();

	jokesArray.forEach(array => {
		const jokesId = array.id;

		if (jokeItemsWrapper.querySelector(`[data-id="${jokesId}"]`)) {
			const alreadyAddedItem = jokeItemsWrapper.querySelector(`[data-id="${jokesId}"]`);
			const alreadyAddedItemButton = alreadyAddedItem.querySelector('.joke__item-fav');

			alreadyAddedItemButton.classList.add('active');
		}
	});
};

module.exports = {alreadyFavourite};