//замыкания

const clearClosures = (screen, ...numbers) => {
	return () => {
		numbers = numbers.map((item) => (item = ''))
		console.log(screen)
		screen.textContent = '0'
		return [finish, screen, ...numbers]
	}
}

//ещё вариант
const clear = (screenContent, ...numbers) => {
	numbers = numbers.map((item) => (item = ''))
	//console.log(screen)
	screenContent = '0'
	return [screenContent, ...numbers]
}

export {clear, clearClosures}

/** передать параметры в callback eventListener можно, используя замыкание, или callback без параметров, в коором будет вызов функции с параметрами
 *
 * .addEventListener('click', clear(finish, screen, firstNumber, secondNumber, operation))
 */
/**
 
.addEventListener('click', () => clear2(finish, screen, firstNumber, secondNumber, operation))
 */
/*
const clear = () => {
	firstNumber = ''
	finish = false
	console.log(screen)
	screen.textContent = 0
}*/
