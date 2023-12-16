import {percent} from '../js/percent'

describe('Testing percent function', () => {
	test('Should return 0.2 (first var)', () => {
		expect(percent('20', '', '')).toEqual(['0.2', '', '0.2'])
	})
	test('Should return 1 (second var)', () => {
		expect(percent('20', '100', '100')).toEqual(['20', '1', '1'])
	})
	test('Should return 0.05 (first var) operation save', () => {
		expect(percent('5', '', '')).toEqual(['0.05', '', '0.05'])
	})
	test('Should return Nan (first var)', () => {
		expect(percent('', '', '')).toEqual(['', '', 'NaN'])
	})
})
