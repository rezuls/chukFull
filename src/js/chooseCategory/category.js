const {jokeForm} = require('../searchJokes/categoriesJoke');

const category = jokeForm.querySelectorAll('.joke__form-categories-link');

category.forEach(category => {

	category.addEventListener('click', () => {
		const allCategory = jokeForm.querySelectorAll('.joke__form-categories-link.active');

		allCategory.forEach(item => {
			item.classList.remove('active');
		});
		
		category.classList.add('active');

	});
});
