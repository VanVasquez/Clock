const clock = document.querySelector('#time');
const time = document.createElement('span');
time.classList.add('glow');
function startTime() {
	const date = new Date();
	time.innerText = date.toLocaleTimeString();
	clock.append(time);
	setTimeout(startTime, 1000);
}
startTime();
