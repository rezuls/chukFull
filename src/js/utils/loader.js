const {jokeItemsWrapper} = require('../searchJokes/setJokes');
const loader = jokeItemsWrapper.querySelector('.joke__reloader');

loadJokes = () => {
	loader.classList.add('active');
 };

 removeLoadJokes = () => {
	loader.classList.remove('active');
 };

 module.exports = {loadJokes, removeLoadJokes};