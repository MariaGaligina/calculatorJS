const deleteSymbol = (firstNumber, secondNumber, operation, outputContent) => {
	if (!(firstNumber || secondNumber || operation)) {
		outputContent = '0'
		return [firstNumber, secondNumber, operation, outputContent]
	}

	if (secondNumber === '') {
		console.log('sn empty')
		if (operation !== '') {
			console.log('op not empty')
			operation = ''
			outputContent = firstNumber
			return [firstNumber, secondNumber, operation, outputContent]
		}
		firstNumber = firstNumber.slice(0, -1)
		if (!firstNumber) {
			outputContent = '0'
		} else {
			outputContent = firstNumber
		}
		console.log('fn', firstNumber, 'op', operation)
	} else {
		secondNumber = secondNumber.slice(0, -1)
		if (!secondNumber) {
			outputContent = firstNumber + operation
		} else {
			outputContent = secondNumber
		}

		console.log('sn', secondNumber, 'op', operation)
	}
	console.log('delete', [firstNumber, secondNumber, operation, outputContent])
	return [firstNumber, secondNumber, operation, outputContent]
}

export {deleteSymbol}
