const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

menuBtn.addEventListener('click', toggleMenu);
let displayMenu = false;

function toggleMenu() {
	if (!displayMenu) {
		hamburger.classList.add('show');
		nav.classList.add('show');
		menuNav.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));

		displayMenu = true;
	} else {
		hamburger.classList.remove('show');
		nav.classList.remove('show');
		menuNav.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));

		displayMenu = false;
	}
}

// #####################

// const box = document.querySelector('.home');
// const text = box.querySelector('h1');
// const range = 100; //px

// function shadow(e) {
// 	const { offsetWidth: width, offsetHeight: height } = box;
// 	let { offsetX: x, offsetY: y } = e;

// 	if (this !== e.target) {
// 		x = x + e.target.offsetLeft;
// 		y = y + e.target.offsetTop;
// 	}

// 	const xRange = Math.round((x / width) * range - range / 2);
// 	const yRange = Math.round((y / height) * range - range / 2);

// 	text.style.textShadow = `
//         ${xRange * -1}px ${yRange * -1}px 0 rgba(245, 222, 76,0.3)
//     `;
// }

// box.addEventListener('mousemove', shadow);

// #####################
