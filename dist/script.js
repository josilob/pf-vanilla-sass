// ############### NAVBAR ###############
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
// ############ CLIPBOARD BUTTON ############
function copyToClipboard(id) {
	let r = document.createRange();
	r.selectNode(document.getElementById(id));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
}

const clipboardBtn = document.getElementById('copyBtn');
clipboardBtn.addEventListener('click', () => {
	const checkmark = document.querySelector('.notify-bubble');
	checkmark.classList.add('appear');
	setTimeout(() => {
		checkmark.classList.remove('appear');
	}, 1000);
	clipboardBtn.classList.toggle('paused');
});

// ############### MOUSEMOVE ################

let img1 = document.getElementById('square');
let img2 = document.getElementById('triangle');

function imgMove(e) {
	let x = e.clientX;
	let y = e.clientY;
	img1.style.left = x / 10 + 'px';
	img1.style.top = y / 5 + 'px';
	img2.style.right = x / 5 + 'px';
	img2.style.bottom = y / 5 + 'px';
}
document.addEventListener('mousemove', imgMove, false);
