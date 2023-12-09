//import {clear} from './clear.js'

const answer = (firstNum, secondNum, operation) => {
	if (!((firstNum !== '') & (secondNum !== '') & (operation !== ''))) {
		console.log('all variables are empty')
		return ['', '', '', false]
	} else {
		const answerNum = calculation(firstNum, secondNum, operation)
		console.log('count of symbols after comma more then 8 ?', countDecimalPlaces(answerNum) > 8)
		if (countDecimalPlaces(answerNum) > 8) {
			return [String(answerNum.toFixed(8)), '', '', true]
		} else return [String(answerNum), '', '', true]
	}
}

const calculation = (first, second, operation) => {
	console.log(first, operation, second)
	switch (operation) {
		case '+':
			return Number(first) + Number(second)

		case '-':
			return Number(first) - Number(second)

		case '*':
			return Number(first) * Number(second)

		case '/':
			if (second === '0') return NaN
			else return Number(first) / Number(second)
	}
}

const countDecimalPlaces = (number) => {
	return String(number).indexOf('.') === -1 ? 0 : String(number).split('.')[1].length
}

export {answer, calculation, countDecimalPlaces}
