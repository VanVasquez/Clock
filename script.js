const clock = document.querySelector('#time');
const span = document.createElement('span');
span.classList.add('glow');

function update() {
	const date = new Date();
	const time = date.toLocaleTimeString();
	span.innerText = time;
	clock.append(span);
	window.requestAnimationFrame(update);
}
update();
