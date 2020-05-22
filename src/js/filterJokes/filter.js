filterJokes = (filterJokesId) => {
	const jokesArray = getJokes();
	const newJokesArray = jokesArray.filter(id => id.id !== filterJokesId);

	localStorage.setItem('jokes', JSON.stringify(newJokesArray));
};

module.exports = {filterJokes};