const fillNumber = (number, element) => {
	if (number.indexOf('.') === -1) {
		number += element.childNodes[0].textContent
	} else {
		if (element.childNodes[0].textContent === '.') return number
		else {
			number += element.childNodes[0].textContent
		}
	}
	return number
}

const fillAndDisplay = (number, element, output) => {
	return () => {
		if (number.indexOf('.') === -1) {
			number += element.childNodes[0].textContent
		} else {
			if (element.childNodes[0].textContent === '.') {
				output.textContent = number
				return [number, output]
			} else {
				number += element.childNodes[0].textContent
				output.textContent = number
			}
		}
		output.textContent = number
		return [number, output]
	}
}

export {fillAndDisplay, fillNumber}
