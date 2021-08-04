// ########## NAVBAR ###########
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
// ######### CLIPBOARD BUTTON #########
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
});

// ############### MOUSEMOVE ################
