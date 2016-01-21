

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash",];

// // The number of loops to perform (what if the array changes?)
// var loopCount = 5;

// // Keep track of which band we're on in the loop
// var currentBand = "";

// // Keep track of which veggie we're on in the loop
// var currentVeggie = "";

// // Get a reference to the appropriate DOM element for bands
// var bandElement = document.getElementById(???);

// // Get a reference to the appropriate DOM element for vegetables
// var veggieElement = ???;

// // Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

//   // Add the band names into the correct <div>
//   currentBand = ???;


//   // Add the veggie names into the correct <div>
//   currentVeggie = ???;

// }


var finalBandsList = ""
var finalVegetablesList = ""

for (var count = 0; count < vegetables.length; count++) {
	console.log("loopcount", count)
	finalBandsList += "<p>" + bands[count] + "</p>";
	console.log(finalBandsList);
	finalVegetablesList += "<p>" + vegetables[count] + "</p>";
	console.log(finalVegetablesList);

};

var bandsElement = document.getElementById("boybands");
var vegetablesElement = document.getElementById("vegetables");

bandsElement.innerHTML = finalBandsList;
vegetablesElement.innerHTML = finalVegetablesList;














