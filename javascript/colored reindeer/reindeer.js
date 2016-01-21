var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer"); 


var finalList = "";

for ( var count = 0; count < reindeer.length; count++) {
	console.log(colors[count]);
    console.log(reindeer[count]);
    finalList += "<p>" + colors[count] + " " + reindeer[count] + "</p>";
}
console.log(finalList);

hohohoElement.innerHTML = finalList;
