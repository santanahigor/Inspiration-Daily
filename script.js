console.log("Be inspired!");

var quotes = [ 	
			'Be brave and go on an adventure.',
			'Never, Never, Never Ever give up.',
		'Imagine with all your mind, Believe with all your heart.',
			'Achieve with all your might.',
			' Little things make big days.',
			'Stay positive work hard and make it happen.',
			 'Never stop learning because life never stops teaching.',
			'Believe you and &youare already halfway up there.',
			'All things are deifficult before they are easy.',
			' A journey of a 1000 miles begins with a single step.',
			'Your attitude determines your direction.',
];

var randomNum = Math.floor(Math.random() * 10);

document.getElementById('quoteDisplay').innerHTML= quotes[randomNum];
}
