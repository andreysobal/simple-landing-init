
@@include("_alert.js");

window.onload = () => {
	const newLocal = document.querySelectorAll('.row div');

	console.log(newLocal);
	
	for (const item of newLocal) {
		console.log(item);
		item.style.color = 'red';
	}
}
