const navBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const navMobileLink = document.querySelectorAll('.nav-mobile__link');
const footerYear = document.querySelector('.footer__year');
const body = document.querySelector('body');

function toggleNav() {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
	body.classList.toggle('hidden-body');
}

navBtn.addEventListener('click', toggleNav);

navMobileLink.forEach((item) => {
	item.addEventListener('click', () => {
		navBtn.classList.remove('is-active');
		navMobile.classList.remove('nav-mobile--active');
		body.classList.remove('hidden-body');
	});
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
