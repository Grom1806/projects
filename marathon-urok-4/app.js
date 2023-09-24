const board = document.querySelector('#board')

const SQUARES_NUMBE = 500

for (let i = 0; i < SQUARES_NUMBE; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mousemove', () => setColor(square))

	square.addEventListener('mouseleave', () => removeColor(square))

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 40px ${color}, 0 0 90px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
	let letters = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}
