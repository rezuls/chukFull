const {createJoke} = require('../../js/utils/markupCreators');

describe('function createJoke', () => {
	let jokeData;
	let itemsFavourite;
	
	beforeEach( () => {
		itemsFavourite = [];
		jokeData = {
			id: '#someId',
			text: 'some test text',
			date: '1:42:20 PM',
			categories: 'animal',
			event: 'onClick',
			eventName: 'onclick'
		};
	});

	test('adding item to favourite list', () => {

		const item = createJoke(jokeData);
		itemsFavourite.push(item);

		expect(itemsFavourite).toContain(item);
	});

	test('adding items to favourite list', () => {
		jokeDataAnimal = {
			id: '#someId',
			text: 'some test text',
			date: '1:42:20 PM',
			categories: 'animal',
			event: 'onClick',
			eventName: 'onclick'
		};

		jokeDataCareer = {
			id: '#someId',
			text: 'some test text',
			date: '1:42:20 PM',
			categories: 'animal',
			event: 'onClick',
			eventName: 'onclick'
		};

		const item = createJoke(jokeData);
		const itemAnimal = createJoke(jokeDataAnimal);
		const itemCareer = createJoke(jokeDataCareer);

		itemsFavourite.push(item, itemAnimal, itemCareer);

		expect(itemsFavourite).toContain(item, itemAnimal, itemCareer);
	});
});