// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {

	// Define Variables
	var numOfMoves = 0;
	var move = "O"
	var boxes = document.querySelectorAll(".box");
	var resetButton = document.getElementById("reset-button");
	var turn = document.getElementById("turn");

	//Define Boxes
	var box1 = document.getElementById("box-1");
	var box2 = document.getElementById("box-2");
	var box3 = document.getElementById("box-3");

	var box4 = document.getElementById("box-4");
	var box5 = document.getElementById("box-5");
	var box6 = document.getElementById("box-6");

	var box7 = document.getElementById("box-7");
	var box8 = document.getElementById("box-8");
	var box9 = document.getElementById("box-9");

	// var firstBox = document.getElementById("first-box");
	// firstBox.addEventListener("click", function(event) {
	// 	alert("you have been clicked");
	// })
	
	// Switch Moves
	var switchMove = function() {

		if (move === "X") {
			return move = "O"
		} else {
			return move = "X"
		}

	}

	// Change Appearence when clicked
	var switchColor = function() {

		if (move === "O") {
			return "lightblue";
		} else {
			return "pink";
		}
	}

	// Show reset Button When game Over
	var checkAll = function() {


		if (numOfMoves < 9) {
			console.log("still playing")
		} else {
			console.log("game over")
			return true
		}

	}

	function boxValue(value){
		switch(value) {
			case 1 : return box1.innerText;
			case 2 : return box2.innerText;
			case 3 : return box3.innerText;
			case 4 : return box4.innerText;
			case 5 : return box5.innerText;
			case 6 : return box6.innerText;
			case 7 : return box7.innerText;
			case 8 : return box8.innerText;
			case 9 : return box9.innerText;
			default : return null;
		}
	}

	function allThree(player, box_one, box_two, box_three) {
		if ((box_one === player) && (box_two === player) && (box_three === player)) {
			return true;
		}
	}

	function winsRow(player) {
		if (allThree(player, boxValue(1), boxValue(2), boxValue(3))) {
			box1.style.color = "#87E026";
			box2.style.color = "#87E026";
			box3.style.color = "#87E026";
			console.log("First Row Won");
			return true;
		} else if (allThree(player, boxValue(4), boxValue(5), boxValue(6))) {
			// box4.className = "col-xs-4 box winner";
			box4.style.color = "#87E026";
			box5.style.color = "#87E026";
			box6.style.color = "#87E026";
			console.log("Second Row Won");
			console.log(box4.className)
			return true;
		} else if (allThree(player, boxValue(7), boxValue(8), boxValue(9))) {
			box7.style.color = "#87E026";
			box8.style.color = "#87E026";
			box9.style.color = "#87E026";
			console.log("Last Row Won");
			return true;
		}
	}

	function winsColumn(player) {
		if (allThree(player, boxValue(1), boxValue(4), boxValue(7))) {
			box1.style.color = "#87E026";
			box4.style.color = "#87E026";
			box7.style.color = "#87E026";
			console.log("First Column Won");
			return true;
		} else if (allThree(player, boxValue(2), boxValue(5), boxValue(8))) {
			box2.style.color = "#87E026";
			box5.style.color = "#87E026";
			box8.style.color = "#87E026";
			console.log("Second Column Won");
			return true;
		} else if (allThree(player, boxValue(3), boxValue(6), boxValue(9))) {
			box3.style.color = "#87E026";
			box6.style.color = "#87E026";
			box9.style.color = "#87E026";
			console.log("Last Column Won");
			return true;
		}
	}

	function winsDiagonal(player) {
		if (allThree(player, boxValue(1), boxValue(5), boxValue(9))) {
			box1.style.color = "#87E026";
			box5.style.color = "#87E026";
			box9.style.color = "#87E026";
			console.log("Back-slash Diagonal Won");
			return true;
		} else if (allThree(player, boxValue(3), boxValue(5), boxValue(7))) {
			box3.style.color = "#87E026";
			box5.style.color = "#87E026";
			box7.style.color = "#87E026";
			console.log("Forward-slash Diagonal Won");
			return true;
		}
	}

	function isWinner(player) {
		if (winsRow(player) || winsColumn(player) || winsDiagonal(player)) {
			return true;
		}
	}

	function getWinner() {
		if (isWinner("X")) {
			return "X";
		} else if (isWinner("O")) {
			return "O";
		}
	}

	// Click Events
	for (i = 0; i < boxes.length; i++) {

  		var box = boxes[i];

  		box.addEventListener("click", function(event) {
  			event.preventDefault();

  			if (move === "O") {
  				turn.innerText = "It is O's turn to go";
  			} else if (move === "X") {
  				turn.innerText = "It is X's turn to go";
  			}

  			// Change the boxes when clicked
  			if (this.innerText === "") {

  				this.innerText = switchMove();
  				// this.style.backgroundColor = switchColor();
  				console.log("click " + move);
  				numOfMoves += 1;

  				// Declare Winner

  				if (isWinner("X") || isWinner("O")) {
  					resetButton.style.display = "block";
  					turn.innerText = ("The winner is " + getWinner());
  					for (i = 0; i < boxes.length; i ++) {
  						var box = boxes[i]
  						box.style.cursor = "default";
  						// box.removeEventListener("click", funtion(event) { 
  							// event.preventDefault();
  						// })
  					}
  				// Tie Game
  				} else if (numOfMoves === 9) {
  					turn.innerText = ("Tie Game, play again");
  					resetButton.style.display = "block";
  				}

  			}

  		});
	}

	// Reset The Board
	resetButton.addEventListener("click", function(event) {

		resetButton.style.display = "none";

		for (i = 0; i < boxes.length; i ++) {
			var box = boxes[i];
			box.innerText = "";
			box.style.color = "#000";
			box.style.backgroundColor = "#fff";
			numOfMoves = 0;
			box.style.cursor = "pointer";
		}

		if (move === "X") {
  				turn.innerText = "It is O's turn to go";
  			} else if (move === "Y") {
  				turn.innerText = "It is X's turn to go";
  		}

	})


});
