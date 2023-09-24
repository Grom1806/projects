const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders) {
placeholder.addEventListener('dragover', dragover)
placeholder.addEventListener('dragenter', dragenter)
placeholder.addEventListener('dragleave', dragleave)
placeholder.addEventListener('drop', dragdrop)
}


function dragStart(e){

	e.target.classList.add('hold')
	setTimeout(() => e.target.classList.add('hide'), 0)

}

function dragEnd(e) {
	e.target.className = 'item'

	
}

function dragover(event) {
	event.preventDefault()
}

function dragenter(event) {
	
	event.target.classList.add('hovered')
}


function dragleave(event) {
	event.target.classList.remove('hovered')
}


function dragdrop(event) {
	event.target.classList.remove('hovered')
	event.target.append(item)
}



