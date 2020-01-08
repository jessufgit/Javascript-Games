var attemptcount = 12;
var verticalSpaceStarters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var horizontalSpaceStarters = [1, 2, 6, 7, 11, 12, 16, 17, 21, 22];
var diagonalSpaceStarters = [1, 2, 4, 5, 6, 7, 9, 10];

var startingShipSpaceVH = Math.floor(Math.random() * 10);
var startingShipSpaceD = Math.floor(Math.random() * 8);

var verticalStart = verticalSpaceStarters[startingShipSpaceVH];
var horizontalStart = horizontalSpaceStarters[startingShipSpaceVH];
var diagonalStart = diagonalSpaceStarters[startingShipSpaceD];

var directionOptions = ["vertical", "horizontal", "diagonal"];
var shipLocations = [];
var randomDirection = directionOptions[Math.floor(Math.random() * 3)];


$(document).ready(function() {
	newGame();
	$('button').on('click', function(buttonID) {
		if (buttonID.target.innerHTML === 'X' || buttonID.target.innerHTML === '-') {
			alert("You've already selected that space - choose another.");
			return;
		}
		attemptcount--;
		document.getElementById("attemptcount").innerHTML = attemptcount;
		for (var i = 0; i < shipLocations.length; i++) {
			if (buttonID.target.id === "b" + shipLocations[i].toString()) {
				buttonID.target.innerHTML = 'X';
				shipLocations.splice(i, 1);
				if (shipLocations === undefined || shipLocations.length < 1) {
					setTimeout(theWin, 500);
					return;
				}
				return;
			}
		}
		if (attemptcount === 0) {
			setTimeout(gameOver, 500);
		}
		buttonID.target.innerHTML = '-';
	}).hover(
		function(){
  			$(this).css("background-color", "rgba(65, 258, 220, 0.5)"); 
  		}, 
  		function() {
  			$(this).css("background-color", "rgba(255, 248, 220, 0.5)");

		});
});

function newGame() {
	attemptcount = 12;
	document.getElementById("attemptcount").innerHTML = attemptcount;
	for (i = 1; i < 26; i++) {
		var index = i.toString();
		var newindex = "b" + index;
		document.getElementById(newindex).style.backgroundColor = '#FFF8DC7F';
		document.getElementById(newindex).innerHTML = '?';
	}
	randomDirection = directionOptions[Math.floor(Math.random() * 3)];
	if (randomDirection === 'vertical') {
		startingShipSpaceVH = Math.floor(Math.random() * 10);
		verticalStart = verticalSpaceStarters[startingShipSpaceVH];
		console.log(randomDirection + ", " + verticalStart);
		for (var i = 0; i < 4; i++) {
			shipLocations.push(verticalStart);
			verticalStart = verticalStart + 5;
		}
		console.log(shipLocations);
	} else if (randomDirection === 'diagonal') {
		startingShipSpaceD = Math.floor(Math.random() * 8);
		diagonalStart = diagonalSpaceStarters[startingShipSpaceD];
		console.log (randomDirection + ", " + diagonalStart);
		if (diagonalStart === 1 || diagonalStart === 2 || diagonalStart === 6 || diagonalStart === 7) {	
			for (var i = 0; i < 4; i++) {
				shipLocations.push(diagonalStart);
				diagonalStart = diagonalStart + 6;
			}
		console.log(shipLocations);
		} else if (randomDirection === 'diagonal' && diagonalStart === 4 || diagonalStart === 5 || diagonalStart === 9 || diagonalStart === 10) {
			for (var i = 0; i < 4; i++) {
				shipLocations.push(diagonalStart);
				diagonalStart = diagonalStart + 4;
			}
			console.log(shipLocations);
		}
	}
	else {
		startingShipSpaceVH = Math.floor(Math.random() * 10);
		horizontalStart = horizontalSpaceStarters[startingShipSpaceVH];
		console.log (randomDirection + ", " + horizontalStart);
		for (var i = 0; i < 4; i++) {
			shipLocations.push(horizontalStart);
			horizontalStart = horizontalStart + 1;
		}
		console.log(shipLocations);
	}
}
function theWin() {
	alert("You win!");
	newGame();
}
function gameOver() {
	alert("You have exceeded your number of allowed attempts - game over!");
	newGame();
}
