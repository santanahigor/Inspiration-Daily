console.log("Be inspired!");

var quotes={
	quote :
			['Be brave and go on an adventure.'],
			['Never, Never, Never Ever give up.'],
			['Imagine with all your mind, Believe with all your heart.'],
			['Achieve with all your might.'],
			[' Little things make big days.'],
			['Stay positive work hard and make it happen.'],
			[ 'Never stop learning because life never stops teaching.'],
			['Believe you and &youare already halfway up there.'],
			['All things are deifficult before they are easy.'],
			[' A journey of a 1000 miles begins with a single step.'],
			['Your attitude determines your direction.'],
};



function getQuote(){
	let randomQuote=  quotes.quote[Math.floor(Math.random() * quotes.quote.length)];
	return randomQuote;
}
console.log( `Your quote for the the days is ${getQuote}. Hope you are at ease`);
