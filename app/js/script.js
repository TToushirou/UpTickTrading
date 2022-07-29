console.log('HELLO');

const test = () => {
	console.log('this is a test');
};

// Hamburger 
let path = document.querySelector(".path");

console.log(path.getAttribute('d'))

function lerp(start, end, t){
    return start * (1 - t) + end * t;
}

let toggle = false;

let menuToggle = document.querySelector('.menu-tog');
let navWrapper = document.querySelector('.wrapper');
menuToggle.addEventListener('click', () => {
    setTimeout(() => {
        toggle = !toggle;
       
    }, 300);

	if(toggle){
		navWrapper.classList.remove('active');
	} else {
		setTimeout(() => {
			navWrapper.classList.add('active');
		   
		}, 300);
	}

	menuToggle.classList.toggle('active');

});

// Tab Selection 
const tablist = document.querySelectorAll(".tabs__li"); 
const contents = document.querySelector(".courses")


function activeList() {
	tablist.forEach((item) =>
	item.classList.remove('active'));
	this.classList.add('active');
}
tablist.forEach((item) =>
item.addEventListener('click', activeList));

