


const $navigation = document.querySelector('nav');
const $menuButton = document.getElementById('ham-menu');

$menuButton.addEventListener('click', () => {
	$navigation.classList.toggle("show");
	$menuButton.classList.toggle('show');
});