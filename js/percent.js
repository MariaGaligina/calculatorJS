const percent = (firstNumber, secondNumber, output) => {
	if (!(firstNumber || secondNumber)) {
		output = '0'
		return [firstNumber, secondNumber, output]
	}
	if (secondNumber === '') {
		firstNumber = String(firstNumber / 100)
		output = firstNumber
		console.log('fn', firstNumber)
	} else {
		secondNumber = String(secondNumber / 100)
		output = secondNumber
		console.log('sc', secondNumber)
	}
	return [firstNumber, secondNumber, output]
}

export {percent}
