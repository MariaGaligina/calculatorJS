import {jest} from '@jest/globals'
import {powMock} from '../js/funcTestMock'

describe('Power test with mock', () => {
	test('3**4 should return 81', () => {
		const mathPow = jest.spyOn(Math, 'pow')
		powMock(3, 4)
		expect(mathPow).toBeCalledTimes(1)
	})
	test('is not called', () => {
		const mathPow = jest.spyOn(Math, 'pow')
		powMock(1, 4)
		expect(mathPow).not.toBeCalled()
	})

	//mocks accumulate so they need to be removed with each test
	afterEach(() => {
		jest.clearAllMocks()
	})
})
