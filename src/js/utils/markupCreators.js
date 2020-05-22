function createJoke(jokeData = {id: '', text: '', date: '', categories: '', event: '', eventName: ''}) {
	
	const rootElement = createAttNode('div', 'joke__item', 'data-id', jokeData.id);
	const buttonElement = createAttNode('button', 'joke__item-fav', jokeData.event, jokeData.eventName);
	const wrapperElement = createNode('div', 'joke__item-wrapper');
	const imgWrapperElement = createNode('div', 'joke__item-img');
	const imgElement = createImgNode('img', '../icons/message.svg', 'joke__item-img--inner', 'alt', 'message');
	const metaElement = createNode('div', 'joke__item-meta');
	const idWrapperElement = createNode('div', 'joke__item-id-wrapper');
	const idTextElement = createNode('span', 'joke__item-id-text', 'ID:');
	const idLinkElement = createAttNode('a', '', 'href', 'javascript:;');
	const idElement = createNode('span', 'joke__item-id', jokeData.id);
	const idIconElement = createImgNode('img', '../icons/id-link.svg', 'joke__item-id-img', 'alt', 'id');
	const textElement = createNode('p', 'joke__item-text', jokeData.text);
	const infoElement = createNode('div', 'joke__item-info');
	const timeWrapperElement = createNode('p', 'joke__item-info-time');
	const timeElement = createNode('span', 'joke__item-info-time--text', 'Last update:');
	const dateElement = createNode('span', 'joke__item-info-time--inner', jokeData.date);
	const categoriesElement = createNode('div', 'joke__item-info-categories', jokeData.categories);

	rootElement.appendChild(buttonElement);
	rootElement.appendChild(wrapperElement);
	wrapperElement.appendChild(imgWrapperElement);
	imgWrapperElement.appendChild(imgElement);
	wrapperElement.appendChild(metaElement);
	metaElement.appendChild(idWrapperElement);
	idWrapperElement.appendChild(idTextElement);
	idWrapperElement.appendChild(idLinkElement);
	idLinkElement.appendChild(idElement);
	idLinkElement.appendChild(idIconElement);
	metaElement.appendChild(textElement);
	metaElement.appendChild(infoElement);
	infoElement.appendChild(timeWrapperElement);
	timeWrapperElement.appendChild(timeElement);
	timeElement.appendChild(dateElement);
	infoElement.appendChild(categoriesElement);

	return rootElement;
};

function createNode(element, className, inner = '') {
	const node = document.createElement(element);
	node.className = className;
	node.innerHTML = inner;

	return node;
};

function createImgNode(element, src, className) {
	const node = document.createElement(element);
	node.className = className;
	node.src = src;

	return node;
};

function createAttNode(element, className, nameAtt, valueAtt) {
	const node = document.createElement(element);
	node.className = className;
	node.setAttribute(nameAtt, valueAtt);

	return node;
};


module.exports = {createJoke};