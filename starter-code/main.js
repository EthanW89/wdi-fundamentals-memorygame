console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";

var cardTwo = "queen";

var cardThree = "king";

var cardFour = "king";

if cardTwo == cardFour {
	alert("You found a match");
} else {
	alert("Sorry, try again.");
}

var createBoard = function() {
	var gameBoard = getElementById('game-board');
				for (var i = 0; i < cards.length; i++)  {
			var newDiv = document.createElement('div');
			newDiv.className = 'card';
			board.appendChild(newDiv);
			cardElement.setAttribute('data-card', cards[i]);
		}

}
