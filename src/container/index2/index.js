import { 
	createElement ,
	createHeader,
	// COMM_LIST, 
} from "../../script/layout";

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

// ======================================================

// const bottom__line = document.createElement('div');
// bottom__line.classList.add('hr');
// knowledgeButton.append(bottom__line)
// infoButton.append(bottom__line)


const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
page.appendChild(container);


// Створюємо knowledgeButton
const knowledgeButton = document.createElement('div');
container.appendChild(knowledgeButton);
knowledgeButton.classList.add('grid');

// Створюємо два діви всередині knowledgeButton
const divWithContent = document.createElement('div');
divWithContent.classList.add('button');
divWithContent.textContent = 'База знань';
knowledgeButton.appendChild(divWithContent);

const emptyDiv = document.createElement('div');
emptyDiv.classList.add('hr');
divWithContent.appendChild(emptyDiv);


// Створюємо infoButton
const infoButton = document.createElement('div');
infoButton.classList.add('grid');
container.appendChild(infoButton);

// Створюємо два діви всередині infoButton
const divWithContent2 = document.createElement('div');
divWithContent2.classList.add('button', 'active-button');
divWithContent2.textContent = 'Інформація';
infoButton.appendChild(divWithContent2);

const emptyDiv2 = document.createElement('div');
emptyDiv2.classList.add('hr-active');
infoButton.appendChild(emptyDiv2);


const imageNew = document.createElement('img')
imageNew.src = '/img/img.png'
imageNew.classList.add("image")
page.appendChild(imageNew);


const text = document.createElement('p');
text.classList.add('content');
page.appendChild(text);


const textTitle = document.createElement('p');
textTitle.classList.add('title');
textTitle.textContent = 'Що таке база знань?';
text.appendChild(textTitle);

const textText = document.createElement('em');
textText.classList.add('text');
textText.textContent = 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ';
text.appendChild(textText);



const buttonGo = document.createElement('button');
buttonGo.classList.add('buttonGo');
page.appendChild(buttonGo);

const buttonImg = document.createElement('img')
buttonImg.src = '/img/button.png'
buttonGo.appendChild(buttonImg)


































// ================
// const comm = COMM_LIST()

// page.append(comm)
// =============

// const POST_LIST = [
// 	{
// 		category: [
// 			{text: 'Важливо', id: 1},
// 			{text: 'Нова', id: 2}
// 		],
// 		info:'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
// 		date: '25.01',
// 		viewed: false,
// 	},
// 	{
// 		category: [{text: 'Нова', id: 2}],
// 		info:'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
// 		date: '24.01',
// 		viewed: true,
// 	},
// ]

// const createPost = () => {
// 	const postList = createElement('main', 'post__list')

// 	POST_LIST.forEach((postData) => {
// 		const post = createElement(
// 			'div',
// 			postData.viewed
// 				? 'post button post--viewed'
// 				: 'post button',
// 		)

// 		const postHeader = createElement('div', 'post__headeer')

// 		// =======

// 		const categoryList = createElement(
// 			'div',
// 			'post__category-list',
// 		)

// 		postData.category.forEach((category) => {
// 			const categorySpan = createElement(
// 				'span',
// 				`post__category post__category--${category.id}`,
// 				category.text,
// 			)
// 			categoryList.append(categorySpan)
// 		})

// 		// ==========

// 		const dateSpan = createElement (
// 			'span',
// 			'post__date',
// 			postData.date,
// 		)

// 		// ====

// 		postHeader.append(categoryList, dateSpan)

// 		// ====
		
// 		const infoParagraph = createElement(

// 			'p',
// 			'post__info',
// 			postData.info,
// 		)
// 		post.append(postHeader, infoParagraph)

// 		// ===

// 		postList.append(post)
// 	})

// 	return postList
	
// }

// ====

const post = createPost()
page.append(post)