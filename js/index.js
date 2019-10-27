var slide = document.querySelector('.header-slide__items')
var dots = document.querySelector('.dots')
var dotLength = document.querySelector('.dots').children.length

dots.firstElementChild.setAttribute('onclick', 'item(1)')
dots.firstElementChild.className = 'span-dots span-dots_header active'

while (dotLength < slide.children.length) {
	var node = document.createElement('span')
	node.className = 'span-dots span-dots_header active'
		node.setAttribute('onclick', ('item' + '('+(dotLength + 1)+')'))
		dots.appendChild(node)
		dotLength++
}

var s = 1;
showSlides(s);

function nextSlide() {
	showSlides(s += 1)
};
function prevSlide() {
	showSlides(s -= 1)
};
function item(n) {
	showSlides(s = n)
};

function showSlides(n) {
	let i;
	if (n > slide.children.length) {
		s = 1
	};
	if (n < 1) {
		s = slide.children.length
	};
	for (i = 0; i < slide.children.length; i++) {
		slide.children[i].style.display = "none"
	};
	for (i = 0; i < dots.children.length; i++) {
		dots.children[i].className = dots.children[i].className.replace(" active", "")
	};
	slide.children[s - 1].style.display = "block";
	dots.children[s - 1].className += " active";
};

// -------------------

var slideComment = document.querySelector('.slider-comment__items')
var dotsComment = document.querySelector('.dots-comment')
var dotComLength = document.querySelector('.dots-comment').children.length

dotsComment.firstElementChild.setAttribute('onclick', 'itemCom(1)')
dotsComment.firstElementChild.className = 'span-dots span-dots_comment active'

while (dotComLength < slideComment.children.length) {
	var nodeCom = document.createElement('span')
	nodeCom.className = 'span-dots span-dots_comment active'
	nodeCom.setAttribute('onclick', ('itemCom' + '(' + (dotComLength + 1) + ')'))
	dotsComment.appendChild(nodeCom)
	dotComLength++
}

var sc = 1;
showSlidesCom(sc);

function nextSlideCom() {
	showSlidesCom(sc += 1)
}
function prevSlideCom() {
	showSlidesCom(sc -= 1)
}
function itemCom(a) {
	showSlidesCom(sc = a)
}
function showSlidesCom(a) {
	let b
	if (a > slideComment.children.length) {
		sc = 1
	}
	if (a < 1) {
		sc = slideComment.children.length
	}
	for (b = 0; b < slideComment.children.length; b++) {
		slideComment.children[b].style.display = "none"
	}
	for (b = 0; b < dotsComment.children.length; b++) {
		dotsComment.children[b].className = dotsComment.children[b].className.replace(" active", "")
	}
	slideComment.children[sc - 1].style.display = "block"
	dotsComment.children[sc - 1].className += " active"
}
// --------------------
var close = document.querySelector('#close').addEventListener('click', close)
var body = document.querySelector('#body')
var bodyBgr = document.querySelector('#body-bgr')
var headerMenu = document.querySelector('.header-menu')
function close() {
	headerMenu.style.right = '-400px';
	body.style.overflow = "auto";
	bodyBgr.style.backgroundColor = "transparent";
	bodyBgr.style.opacity = "1";
	bodyBgr.style.zIndex = "-1";
}
var open = document.querySelector('#open').addEventListener('click', open)
function open() {
	headerMenu.style.right = '0';
	body.style.overflow = "hidden";
	bodyBgr.style.backgroundColor = "#000000";
	bodyBgr.style.zIndex = "1000";
	bodyBgr.style.opacity = "0.6";
}
var li = document.querySelectorAll('.li')
var liLeng
for (liLeng = 0; liLeng < li.length; liLeng++){
	li[liLeng].addEventListener('click', function(){
		headerMenu.style.right = '-400px'
	})
}
