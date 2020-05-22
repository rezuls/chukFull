const {getJokes} = require('../../js/searchJokes/getListStorage');

describe('function getJokes', () => {
	test('if localStorage has no jokes', () => {
		expect(getJokes()).toEqual([]);
	});

	test('if localStorage has one jokes', () => {
		const valueJoke = {
			id: 123,
			text: 'like',
			date: new Date().toLocaleTimeString(),
			categories: 'animals',
			event: 'onclick',
			eventName: 'removeFromFav(event)',
		};

		localStorage.setItem('jokes', JSON.stringify(valueJoke));
		expect(getJokes()).toEqual(valueJoke);
		expect(getJokes().id).toEqual(123);

	});

	test ('if localStorage has many jokes', () => {
		const arrayValueJoke = [
			{
				id: 123,
				text: 'like',
				date: new Date().toLocaleTimeString(),
				categories: 'animals',
				event: 'onclick',
				eventName: 'removeFromFav(event)',
			},
			{
				id: 456,
				text: 'dislike',
				date: new Date().toLocaleTimeString(),
				categories: 'company',
				event: 'onclick',
				eventName: 'removeFromFav(event)',
			},
			{
				id: 789,
				text: 'my God, its working',
				date: new Date().toLocaleTimeString(),
				categories: 'pets',
				event: 'onclick',
				eventName: 'removeFromFav(event)',
			},
		];

		localStorage.setItem('jokes', JSON.stringify(arrayValueJoke));

		expect(getJokes().length).toEqual(3);

		expect(getJokes().length).not.toEqual(4);
	});
	
});