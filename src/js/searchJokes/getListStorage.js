getJokes = () => {

	const jokesList = [];

	if (localStorage.getItem('jokes')) {
		return JSON.parse(localStorage.getItem('jokes'));
	}
	return jokesList;
};

getJokes();

module.exports = {getJokes};