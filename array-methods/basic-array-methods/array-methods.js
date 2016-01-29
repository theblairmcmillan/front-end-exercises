
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

var el = document.getElementById("planets");
console.log(planets);

planets.forEach(function(currentPlanet){
	console.log(currentPlanet);
	el.innerHTML += `<div>${currentPlanet}</div>`;
});


// Use the map method to create a new array where the first letter of each planet is capitalized


var planetsCapital = planets.map(function(currentPlanet){
		return currentPlanet.slice(0, 1).toUpperCase() + currentPlanet.slice(1);
});

console.log("capitalized Planets are", planetsCapital);

// Use the filter method to create a new array that contains planets with the letter 'e'

function filterForE(element, index, array) {
	if (element.indexOf('e') !== -1) {
		return element;
	}
}

var filteredPlanets = planets.filter(filterForE);
console.log(filteredPlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(previousValue, currentValue, index, array) {
		
	return previousValue + " " + currentValue;
});


console.log(sentence);

