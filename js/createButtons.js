const createButtons = (elementInfo) => {
	const element = document.createElement('div')
	splitString(elementInfo.classes).map((item) => {
		element.classList.add(`${item}`)
	})
	element.setAttribute('id', `${elementInfo.id}`)
	element.dataset.type = `${elementInfo.data}`
	//console.log(elementInfo.data)
	/*`element.dataset.${elementInfo.data}`= `${elementInfo.data}`*/

	element.innerHTML = `<span>${elementInfo.title}</span>`

	return element
}

const splitString = (string) => {
	const lines = string.split(' ')
	return lines
}

export {createButtons}
