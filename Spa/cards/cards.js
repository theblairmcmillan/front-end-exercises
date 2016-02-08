// SET UP BLANK ARRAY TO HOLD CARDS. 
var cardArray = [];

// ON CLICK OF CREATE BUTTON GET VALUE OF USER INPUT AND PUSH TO THE ARRAY
document.getElementById("create").onclick = function() {
	var userText = document.getElementById("userText").value;
	cardArray.push(userText);
	outputCards();
};


//FUNCTION TO LOOP THROUGH AND BUILD FULL CARDS WITH DELETE BUTTON AND USER INPUT
function outputCards() {
	var allCards = "";
	for (var i = 0; i < cardArray.length; i++) {
		var deleteButton = "<button id='" + cardArray[i] + "' class='delete'>delete</button>";
		var fullCard = "<div class='cardDiv'>" + cardArray[i] + deleteButton + "</div>";
		allCards += fullCard;
	};
	document.getElementById('outputTarget').innerHTML = allCards; //PUSHES TO DOM
};

console.log("getting down to bottom");


var deleteButton = document.getElementsByClassName("delete");
console.log(deleteButton);
deleteButton.add

document.getElementsByClassName("delete").addEventListener("click", function() {
	var currentButton = this.getElementsByClassName("delete");
	console.log(currentButton);
});




// // make button html with class of deletes. 

// var deleteButton = document.getElementsByClassName("delete");
// console.log(deleteButton);

// for (var i = 0; i < cardArray.length; i++) {
// 	deleteButton[i].addEventListener("click", function() {
// 		console.log(click);
// 		console.log(this.deleteButton);
// 	})
// };