import {keyboardElements} from './keyboard.js'
import {createButtons} from './createButtons.js'
import {fillAndDisplay, fillNumber} from './fillNumber.js'
import {clear} from './clear.js'
import {deleteSymbol} from './deleteSymbol.js'
import {answer} from './answer.js'
import {percent} from './percent.js'
import {clickCallback} from './clickCallback.js'
import {testClick} from './testFunctionForClick.js'

const buttons = document.querySelector('.buttons')
let screen = document.querySelector('.screen p')
console.log('screen', screen)
let firstNumber = '',
	secondNumber = '',
	operation = ''

keyboardElements.map((item) => {
	buttons.appendChild(createButtons(item))
})

buttons.querySelector('#clear').addEventListener('click', () => {
	return ([screen.textContent, firstNumber, secondNumber, operation] = clear(
		screen.textContent,
		firstNumber,
		secondNumber,
		operation
	))
})
buttons.querySelector('#answer').addEventListener('click', () => {
	let isCorrect = false
	;[firstNumber, secondNumber, operation, isCorrect] = answer(firstNumber, secondNumber, operation)
	if (isCorrect) {
		screen.textContent = firstNumber
	} else {
		screen.textContent = 0
	}
	//screen.textContent = firstNumber
	console.log('fn', firstNumber, 'op', operation, 'sc', secondNumber)

	//screen.textContent
})

buttons.querySelector('#del').addEventListener('click', () => {
	;[firstNumber, secondNumber, operation, screen.textContent] = deleteSymbol(
		firstNumber,
		secondNumber,
		operation,
		screen.textContent
	)
})

buttons.querySelector('#percent').addEventListener('click', () => {
	;[firstNumber, secondNumber, screen.textContent] = percent(
		firstNumber,
		secondNumber,
		screen.textContent
	)
})

buttons.addEventListener('click', (event) => {
	;[firstNumber, secondNumber, operation, screen] = clickCallback(
		event,
		firstNumber,
		secondNumber,
		operation,
		screen
	)
})

//buttons.addEventListener('click', testClick)
//export {finish, screen, firstNumber, secondNumber}//
