import {deleteSymbol} from '../js/deleteSymbol'

describe('Delete symbol', () => {
	//let first, second, operation, output
	const first = '88',
		second = '99',
		operation = '+',
		output = '99'

	test('delete symbol from first number', () => {
		//expect(deleteSymbol(first, second, operation, output)).toBeCalled
		expect(deleteSymbol(first, second, operation, output)).toEqual(['88', '9', '+', '9'])
		expect(deleteSymbol(...deleteSymbol(first, second, operation, output))).toEqual([
			'88',
			'',
			'+',
			'88+',
		])
		expect(deleteSymbol('88', '', '+', '88+')).toEqual(['88', '', '', '88'])
		expect(deleteSymbol(...deleteSymbol('88', '', '+', '88+'))).toEqual(['8', '', '', '8'])
		expect(deleteSymbol('8', '', '', '8')).toEqual(['', '', '', '0'])
	})
})
