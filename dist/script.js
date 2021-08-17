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
// function copyToClipboard(id) {
// 	let r = document.createRange();
// 	r.selectNode(document.getElementById(id));
// 	window.getSelection().removeAllRanges();
// 	window.getSelection().addRange(r);
// 	document.execCommand('copy');
// 	window.getSelection().removeAllRanges();
// }

// const clipboardBtn = document.getElementById('copyBtn');
// clipboardBtn.addEventListener('click', () => {
// 	const checkmark = document.querySelector('.notify-bubble');
// 	checkmark.classList.add('appear');
// 	setTimeout(() => {
// 		checkmark.classList.remove('appear');
// 	}, 1000);
// 	clipboardBtn.classList.toggle('paused');
// });

// ############### MOUSEMOVE ################

// let img1 = document.getElementById('square');
// let img2 = document.getElementById('triangle');

// function imgMove(e) {
// 	let x = e.clientX;
// 	let y = e.clientY;
// 	img1.style.left = x / 10 + 'px';
// 	img1.style.top = y / 5 + 'px';
// 	img2.style.right = x / 5 + 'px';
// 	img2.style.bottom = y / 5 + 'px';
// }
// document.addEventListener('mousemove', imgMove, false);

// ########### ABOUT-TABS SWITCHING ###########
// console.log('banzaaaiii');
// // Select show tab on load page
// let idxOpen = 0;
// let btnTab = document.querySelectorAll('.tabs li button');
// let contentTab = document.querySelectorAll('.content-tab');
// console.log(btnTab);
// btnTab[0].addEventListener('click', () => {
// 	console.log('click');
// });

// function tabCurrent(thisTab) {
// 	let currentId = thisTab.dataset.tab;
// 	for (let i = 0; i < btnTab.length; i++) {
// 		btnTab[i].classList.remove('tab-current');
// 	}
// 	thisTab.classList.add('tab-current');

// 	for (let i = 0; i < contentTab.length; i++) {
// 		if (currentId === contentTab[i].id) {
// 			contentTab[i].classList.add('current-content-tab');
// 		} else {
// 			contentTab[i].classList.remove('current-content-tab');
// 		}
// 	}
// }

// for (let i = 0; i < btnTab.length; i++) {
// 	btnTab[i].onclick = () => {
// 		tabCurrent(this);
// 		console.log(btnTab, contentTab, indexOpen, thisTab);
// 	};
// }

// tabCurrent(btnTab[idxOpen]);
