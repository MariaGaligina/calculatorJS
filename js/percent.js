const percent = (firstNumber, secondNumber, output) => {
	console.log('first', firstNumber)
	if (!(firstNumber || secondNumber)) {
		output = 'NaN'
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
