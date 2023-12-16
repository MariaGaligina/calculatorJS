import {fillAndDisplay} from './fillNumber.js'

const modifiedClickCallback = (elem, firstNumber, secondNumber, operation, screen) => {
	if (elem.classList.contains('buttons')) return [firstNumber, secondNumber, operation, screen]
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

export {modifiedClickCallback}
