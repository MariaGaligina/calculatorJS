import {answer, calculation, countDecimalPlaces} from '../js/answer'

//тестирую функцию answer, которая возвращает вычисления (результат этой функции передаётся в блок с выводом на экран)

test('Count of decimal Places > 8', () => {
	expect(countDecimalPlaces(21)).toEqual(0)
	expect(countDecimalPlaces(0.9)).toEqual(1)
	expect(countDecimalPlaces(1977.0307)).toEqual(4)
})

describe('Testing calculation', () => {
	test('Calculation operations with integer', () => {
		expect(calculation('44', '4', '+')).toBe(44 + 4)
		expect(calculation('44', '4', '-')).toBe(44 - 4)
		expect(calculation('44', '4', '*')).toBe(44 * 4)
		expect(calculation('44', '4', '/')).toBe(44 / 4)
	})

	test('Calculation operations with float', () => {
		expect(calculation('0.2', '0.1', '+')).toBeCloseTo(0.3)
		expect(calculation('0.2', '0.1', '-')).toBe(0.2 - 0.1)
		expect(calculation('0.2', '0.1', '*')).toBe(0.2 * 0.1)
		expect(calculation('0.2', '0.1', '/')).toBe(0.2 / 0.1)
	})
})

describe('Tisting answer', () => {
	test(`Should return array with result, '' and ''`, () => {
		expect(answer(77, 7, '+')).toEqual(['84', '', '', true])
		expect(answer(77, 7, '-')).toEqual(['70', '', '', true])
		expect(answer(77, 7, '*')).toEqual(['539', '', '', true])
		expect(answer(77, 7, '/')).toEqual(['11', '', '', true])
	})
})
