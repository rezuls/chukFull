const {jokeItemsWrapper} = require('../searchJokes/setJokes');
const {filterJokes} = require('../filterJokes/filter');

removeFromFav = (event) => {

	const addToFav = event.target;
	addToFav.classList.remove('active');
	const removeLikedItem = addToFav.parentNode;
	const filterJokesId = removeLikedItem.getAttribute('data-id');

	filterJokes(filterJokesId);

	removeLikedItem.remove();

	if (jokeItemsWrapper.querySelector(`[data-id="${filterJokesId}"]`)) {

		const itemId = jokeItemsWrapper.querySelector(`[data-id="${filterJokesId}"]`);
		const removeClassActive = itemId.querySelector('.joke__item-fav');

		removeClassActive.classList.remove('active');
	}
};