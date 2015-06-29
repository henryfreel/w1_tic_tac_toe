// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {

	// Define Variables
	var numOfMoves = 0;
	var move = "X"
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
			return move = "Y"
		} else {
			return move = "X"
		}

	}

	// Change Appearence when clicked
	var switchColor = function() {

		if (move === "Y") {
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

	// Check for winner
	// function getWinner() {
	// 	if (winnerIsX()) {
	// 		return "X";
	// 	} else if (winnerIsO()) {
	// 		return "Y";
	// 	}
	// }

	// function winnerIsX() {
	// 	if (xWinsRow() || xWinsColumn() || xWinsDiagonal()) {
	// 		return true;
	// 	}
	// }

	// function xWinsRow() {
	// 	If ((box1.innerText != "") )
	// }

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
			default : return null
		}
	}

	function allThree(player, box_one, box_two, box_three) {
		if ((box_one === player) && (box_two === player) && (box_three === player)) {
			return true;
		}
	}

	function winsRow(player) {
		if (allThree(player, boxValue(1), boxValue(2), boxValue(3)) ||
			allThree(player, boxValue(1), boxValue(2), boxValue(3)) ||
			allThree(player, boxValue(1), boxValue(2), boxValue(3))) {

			return true;
		}
	}

	// Click Events
	for (i = 0; i < boxes.length; i++) {

  		var box = boxes[i];

  		box.addEventListener("click", function(event) {
  			event.preventDefault();

  			if (move === "Y") {
  				turn.innerText = "It is X's turn to go";
  			} else {
  				turn.innerText = "It is Y's turn to go";
  			}

  			// Change the boxes when clicked
  			if (this.innerText === "") {

  				this.innerText = switchMove();
  				this.style.backgroundColor = switchColor();
  				console.log("click " + move);
  				numOfMoves += 1;

  				//Check if game is over
  				if (checkAll()) {
  					resetButton.style.display = "block";
  					turn.innerText = ("The winner is ")
  				}

  			}

  		});
	}

	// Reset The Board
	resetButton.addEventListener("click", function(event) {
		for (i = 0; i < boxes.length; i ++) {
			var box = boxes[i];
			box.innerText = "";
			box.style.backgroundColor = "#fff";
			numOfMoves = 0;
		}
	})


});
