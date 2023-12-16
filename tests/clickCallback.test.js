import {JSDOM} from 'jsdom'
import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/react'
import {screen} from '@testing-library/dom'
import {keyboardElements} from '../js/keyboard.js'
import {createButtons} from '../js/createButtons.js'

import {clickCallback} from '../js/clickCallback.js'
import {modifiedClickCallback} from '../js/modifideClickCallback.js'
import {testClick} from '../js/testFunctionForClick.js'
import * as TestEnvironment from 'jest-environment-jsdom'
//@jest-environment
import {jest} from '@jest/globals'
//@jest-environment
//import {screen} from '@testing-library/dom'
//Так как я добавляю слушатели для click, то рационально один раз проверить, отрабатывает callback
describe('Click event at eventListener', () => {
	const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
	global.document = dom.window.document
	const button = document.createElement('button')
	button.textContent = 'Click'
	document.body.appendChild(button)

	test('Should not be empty', () => {
		expect(button).not.toBeEmptyDOMElement()
	})

	const buttons = document.createElement('div')
	document.body.appendChild(buttons)
	//let screen = document.querySelector('.screen p')
	let firstNumber = '',
		secondNumber = '',
		operation = ''

	keyboardElements.map((item) => {
		buttons.appendChild(createButtons(item))
	})

	test('Test event listener click', () => {
		const clickCallback = jest.fn()
		buttons.addEventListener('click', clickCallback)
		//jest.simulate('click')
		fireEvent.click(buttons)
		expect(clickCallback).toHaveBeenCalled()
	})

	test('Test event listener click outside', () => {
		const clickCallback = jest.fn()
		buttons.addEventListener('click', clickCallback)
		//jest.simulate('click')
		fireEvent.click(document.body)
		expect(clickCallback).toHaveBeenCalledTimes(0)
	})

	//чистим моки
	afterEach(() => {
		jest.clearAllMocks()
	})
})

describe('Test output after clickCallbacks', () => {
	const ev = document.createElement('div')
	ev.innerHTML = `<span>4</span>`
	ev.classList.add('number')
	ev.dataset.type = 'number'
	ev.setAttribute('id', 'four')
	const screen = document.createElement('p')
	const screenReturn = document.createElement('p')
	screenReturn.textContent = '4'

	const ev2 = document.createElement('div')
	ev2.innerHTML = `<span>*</span>`
	ev2.classList.add('operation')
	ev2.dataset.type = 'arithmetic'
	ev2.setAttribute('id', 'multiplication')
	const screen2 = document.createElement('p')
	const screenReturn2 = document.createElement('p')
	screenReturn2.textContent = '*'

	//не сработает, так как не определён метод closest
	/*
	test('test clickCalback return', () => {
		expect(clickCallback(ev, '', '', '', screen)).toEqual(['4', '', '', screenReturn])
	})
	*/
	//изменённый clickCallback
	test('test modifiedClickCalback return (number)', () => {
		expect(modifiedClickCallback(ev, '', '', '', screen)).toEqual(['4', '', '', screenReturn])
	})
	test('test modifiedClickCalback return (operation)', () => {
		expect(modifiedClickCallback(ev2, '4', '', '', screen2)).toEqual(['4', '', '*', screenReturn2])
	})
})
