    window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
 if (window.pageYOffset > sticky) {
   header.classList.add("sticky");
 } else {
   header.classList.remove("sticky");
 }
} 
/////////////////////////////////////////////Button code below:
console.log("Be inspired!");

var quotes = [ 	
			'"Be brave and go on an adventure."',
			'"Never, Never, Never Ever give up."',
		'"Imagine with all your mind, Believe with all your heart."',
			'"Achieve with all your might."',
			'"Little things make big days."',
			'"Stay positive work hard and make it happen."',
			 '"Never stop learning because life never stops teaching."',
			'"Believe in you, and you are already halfway up there."',
			'"All things are difficult before they are easy."',
			'"A journey of a 1000 miles begins with a single step."',
			'"Your attitude determines your direction."',
];

var randomNum = Math.floor(Math.random() * quotes.length);
function newQuote() {
document.getElementById('sentence')= quotes[randomNum];
}

