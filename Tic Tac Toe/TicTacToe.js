var boxesOnTheBoard = ['boxa', 'boxb', 'boxc', 'boxd', 'boxe', 'boxf', 'boxg', 'boxh', 'boxi'];
var playerOneRecord = 0;
var playerTwoRecord = 0;
var gameSelected = "";
var playerOnesTurn = true;
var playerTwosTurn = false;
var computersTurn = false;

//On page load, this is the message that is seen by the user.
function welcome() {
  alert("Welcome to Tic-Tac-Toe. Choose to play either head to head or against the computer by selecting your choice below.");
	
}

// Below is the function that runs on the click of the Let's Play button. In this code the buttons are specifically named to reflect the user's choice - either Head to Head or the playing against the computer. Also the game board is set and the firstgame function is run.
function selectGame(id) {
	var chosenGame = document.getElementById(id);
	
	if (id === "Computer") {
		
		document.getElementById('HeadToHead').style.visibility = 'hidden';
		alert("You selected to play the " + id + ". Click the Let's Play button below."); 
	}
	else {
		
		document.getElementById('Computer').style.visibility = 'hidden';
		alert("Then grab a friend and let's get started. Click the Let's Play button below.");
	}
	gameSelected = chosenGame.id;
	return gameSelected;
}

//This resets the gameboard to all ????, and the variable gameLoser to an empty string. newGame() is called once the player either clicks on 'Let's Play' or when a game has ended and the player continues to play.
function newGame() {
	playerTwo.style.visibility = 'hidden';
	playerOne.style.visibility = 'hidden';
	document.getElementById('HeadToHead').style.visibility = 'visible';
 	document.getElementById('Computer').style.visibility = 'visible';
 		for (var i = 0; i<boxesOnTheBoard.length; i++) {
		document.getElementById(boxesOnTheBoard[i]).innerHTML = "?";
	}
}

//At the beginning of the game, the board resets and the buttons that indicate whether or not it is "Player One", "Player Two", or the "Computer's" turn are made visible. I have broken the steps of this master function up into smaller functions to make things easier to read and more organized.
function playTheGame() {
	var playerOne = document.getElementById('playerOne');
	var playerTwo = document.getElementById('playerTwo');
	newGame();
	assigningThePlayers();
	alert(playerOne.innerHTML + ", you will be X. " + playerTwo.innerHTML + ", you will be O. Player One, select your space!");
	playerOnesTurn = true;
	playerOne.style.animation = 'pulse 2s infinite';
	playerTwo.style.animation = 'none';
	
}

function assigningThePlayers() {

	playerOne.innerHTML = 'Player One';
	if (gameSelected === 'HeadToHead') {	
		playerTwo.innerHTML = 'Player Two';
		document.getElementById('Computer').style.visibility = 'hidden';
	} else {	
		playerTwo.innerHTML = 'Computer';
		document.getElementById('HeadToHead').style.visibility = 'hidden';
	}
	playerTwo.style.visibility = 'visible';
	playerOne.style.visibility = 'visible';
}

// // This is what happens when a player makes a selection on the board. Each click on a space runs the activePlay() method. First two variables store true or false so I can determine which user is currently active. Then if Player One is active, x will run. If Player Two is active, y will run.

function activePlay(elementID) {
	if (gameSelected === 'HeadToHead' && playerTwosTurn === true) {
		playerTwoTurn(elementID);
	}
	else if (gameSelected === 'HeadToHead' && playerOnesTurn === true) {
		playerOneTurn(elementID);
	}
	else if (gameSelected === 'Computer' && playerOnesTurn === true) {
		playerOneTurn(elementID);
		setTimeout(computerTurn, 1000);
	}
	else  {
		console.log(playerOnesTurn);
		console.log(playerTwosTurn);
	}
}

// // These three functions describe the actions taken during each player's turn: Player One, Player Two and the Computer. It makes one player active (checked) and the other player not active. 

function playerOneTurn(elementID) {
	//Keeps the player from selecting a space that is occupied....
	if (document.getElementById(elementID).innerHTML === "X" || document.getElementById(elementID).innerHTML === "O") {
		alert("That space is already occupied. Select another space.");
	}
	else {
		document.getElementById(elementID).innerHTML = "X";
		setTimeout(checkForWin,500);
		playerOnesTurn = false;
		playerTwosTurn = true;
		playerOne.style.animation = 'none';
		playerTwo.style.animation = 'pulse 2s infinite';
	}

}

function playerTwoTurn(elementID) {
	playerTwosTurn = true;
	
	//Keeps the player from selecting a space that is occupied....	
	if (document.getElementById(elementID).innerHTML === "X" || document.getElementById(elementID).innerHTML === "O") {
		alert("That space is already occupied. Select another space.");
	}
	else {
		
		document.getElementById(elementID).innerHTML = "O";
		setTimeout(checkForWin,500);
		playerOnesTurn = true;
		playerTwosTurn = false;
		playerOne.style.animation = 'pulse 2s infinite';
		playerTwo.style.animation = 'none';
	}
}

function computerTurn() {
	
	var rand = boxesOnTheBoard[Math.floor(Math.random() * boxesOnTheBoard.length)];
	if (document.getElementById(rand).innerHTML === "?") {
		document.getElementById(rand).innerHTML = "O";
		setTimeout(checkForWin,500);
		playerOnesTurn = true;
		playerTwosTurn = false;
		playerOne.style.animation = 'pulse 2s infinite';
		playerTwo.style.animation = 'none';
	}
	else {
		setTimeout(computerTurn, 500);
	}
	
}

// //After each player's move is made, we have to check to see if there is a winner. This function looks into boxes A through I to see if there are three matching values of X or O.

function checkForWin() {
	if (playerOneRecord > 4 || playerTwoRecord > 4) {
		alert("Aren/'t you tired of Tic-Tac-Toe?");
	}
	var boxA = document.getElementById('boxa').innerHTML;
	var boxB = document.getElementById('boxb').innerHTML;
	var boxC = document.getElementById('boxc').innerHTML;
	var boxD = document.getElementById('boxd').innerHTML;
	var boxE = document.getElementById('boxe').innerHTML;
	var boxF = document.getElementById('boxf').innerHTML;
	var boxG = document.getElementById('boxg').innerHTML;
	var boxH = document.getElementById('boxh').innerHTML;
	var boxI = document.getElementById('boxi').innerHTML;

	if ((boxA === 'X' && boxB === 'X' && boxC === 'X') || 
		(boxA === 'X' && boxD === 'X' && boxG === 'X') ||
		(boxA === 'X' && boxE === 'X' && boxI === 'X') ||  
	 	(boxD === 'X' && boxE === 'X' && boxF === 'X') ||
	 	(boxB === 'X' && boxE === 'X' && boxH === 'X') ||  
  		(boxG === 'X' && boxH === 'X' && boxI === 'X') || 
  		(boxC === 'X' && boxF === 'X' && boxI === 'X') ||
  		(boxC === 'X' && boxE === 'X' && boxG === 'X')) {

 // If a match is found for X, a message is sent to let them know that PLayer One is the winner, a gameLoser is assigned. And then one win is added to the Player One's win column.

  		alert("Player One (X) wins! Choose either Head-to-Head or versus the Computer to play again.");
  		playerOneRecord++;
  		document.getElementById('playerOneWins').innerHTML = playerOneRecord;
 		newGame();
	}

// This is the same sequence, but for Player Two.
 	else if ((boxA === 'O' && boxB === 'O' && boxC === 'O') ||
 		(boxA === 'O' && boxD === 'O' && boxG === 'O') ||
 		(boxA === 'O' && boxE === 'O' && boxI === 'O') ||
	 	(boxD === 'O' && boxE === 'O' && boxF === 'O') ||
	 	(boxB === 'O' && boxE === 'O' && boxH === 'O') ||  
  		(boxG === 'O' && boxH === 'O' && boxI === 'O') ||
  		(boxC === 'O' && boxF === 'O' && boxI === 'O') || 
  		(boxC === 'O' && boxE === 'O' && boxG === 'O')) {
  
  		if (gameSelected === "HeadToHead") {
  			alert("Player Two (O) wins!");
  		} else {
  			alert("The Computer wins. Choose either Head-to-Head or versus the Computer to play again.");
  		}

		
		var playerTwoRecord = document.getElementById('playerTwoWins').innerHTML;
  		playerTwoRecord++;
  		document.getElementById('playerTwoWins').innerHTML = playerTwoRecord;
		newGame();

	}

 	else if (boxA !== '?' && boxB !== '?' && boxC !== '?' && boxD !== '?' && boxE !== '?' && boxF !== '?' && boxG !== '?' && boxH !== '?' && boxI !== '?') {
 		alert("It's a draw. Choose either Head-to-Head or versus the Computer to play again.");
 		newGame();
	}
		
}
