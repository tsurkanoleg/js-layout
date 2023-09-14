export const createElement = (tag, className, text) => {
	const elem = document.createElement(tag)

	if(className) {
		elem.className = className
	}

	if (text) {
		elem.innerHTML = text
	}

	return elem
}

const HEADER_BUTTON_LIST = [
	{
		width: 24,
		height: 24,
		src:'/svg/header__back.svg'
	},
	{
		width: 24,
		height: 24,
		src:'/img/header__avatar.png'
	},
]

export const createHeader = () => {
	const header = createElement('header', 'header')

	HEADER_BUTTON_LIST.forEach((params) => {
		const button = createElement('button', 'button')

		const img = createElement('img')

		Object.entries(params).forEach(([key, value]) => {
			img[key] = value
		})

		button.insertAdjacentElement('beforeend',img)

		header.insertAdjacentElement('beforeend',button)
	})

	return header
}

// const info = [
// 	{
// 		width: "45%",
// 		height: 35,
// 		text: 'База знань'
// 	},

// 	{
// 		width: "45%",
// 		height: 35,
// 		src:'Інформація'
// 	}
// ]

// export const COMM_LIST = () => {
// 	const comm = createElement('div', 'comm--list')

// 	info.forEach((params) => {
// 		const button = createElement('button', 'button')
// 		const text = createElement('text')

// 		Object.entries(params).forEach(([key, value]) => {
// 			text[key] = value
// 		})

// 		button.insertAdjacentElement('beforeend',img)

// 		comm.insertAdjacentElement('beforeend',button)

// 	})

// 		return comm

// }