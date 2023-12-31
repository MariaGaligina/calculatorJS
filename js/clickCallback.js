import {fillAndDisplay} from './fillNumber.js'

const clickCallback = (event, firstNumber, secondNumber, operation, screen) => {
	const elem = event.target.closest('div')
	//console.log('elem', elem)

	if (event.target.classList.contains('buttons'))
		return [firstNumber, secondNumber, operation, screen]
	else {
		if (elem.dataset.type === 'number') {
			const fillAndDisplayFirstNumber = fillAndDisplay(firstNumber, elem, screen)
			const fillAndDisplaySecondNumber = fillAndDisplay(secondNumber, elem, screen)

			;(secondNumber === '') & (operation === '')
				? ([firstNumber, screen] = fillAndDisplayFirstNumber())
				: ([secondNumber, screen] = fillAndDisplaySecondNumber())
		} else if (elem.dataset.type === 'arithmetic') {
			operation = elem.childNodes[0].textContent
			screen.textContent = operation
		}
		return [firstNumber, secondNumber, operation, screen]
	}
}

export {clickCallback}
