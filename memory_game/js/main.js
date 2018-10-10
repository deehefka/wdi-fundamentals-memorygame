var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');

var cardOne = cards[0];
var CardTwo = cards[2]

console.log("User flipped queen");
console.log("User flipped king");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.");
}
