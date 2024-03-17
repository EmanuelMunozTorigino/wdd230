


const $navigation = document.querySelector('.nav-list');
const $menuButton = document.getElementById('ham-menu');

$menuButton.addEventListener('click', () => {
	$navigation.classList.toggle("show");
});