const powMock = (number, power) => {
	if (number === 1) {
		return 1
	}
	return Math.pow(number, power)
}

export {powMock}
