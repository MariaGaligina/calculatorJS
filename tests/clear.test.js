import {clear} from '../js/clear.js'

describe(`Should return array of empty strings and '0'`, () => {
	test(`Should return array of '0' and empty variables`, () => {
		expect(clear('88', '88', '88', '+')).toEqual(['0', '', '', ''])
	})
	test(`Should return array of '0' and empty variables (second num is empty)`, () => {
		expect(clear('+', '9', '', '+')).toEqual(['0', '', '', ''])
	})
	test(`Should return array of '0' and empty variables (variables are empty, screen display 0)`, () => {
		expect(clear('0', '', '', '')).toEqual(['0', '', '', ''])
	})
})
