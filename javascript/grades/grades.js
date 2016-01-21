var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeA = 0;

var gradeB = 0;

var gradeC = 0;

var gradeD = 0;

var gradeF = 0;


for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 91) {
		gradeA += 1;
	} else if (scores[i] <= 90 && scores[i] >=81) {
		gradeB += 1;
	} else if (scores[i] <= 80 && scores[i] >=71) {
		gradeC += 1;
    } else if (scores[i] <= 70 && scores[i] >= 61) {
		gradeD += 1;
	} else if (scores[i] <= 60 && scores[i] >= 50) {
		gradeF += 1;
	}
	
};

console.log("there are ", gradeA, " grade A's");
console.log("there are ", gradeB, " grade B's");
console.log("there are ", gradeC, " grades C's");
console.log("there are ", gradeD, " grades D's");
console.log("there are " , gradeF, "  grade F's");


var highestNumber = 0
var lowestNumber = 100

for (var i = 0; i < scores.length; i++) {
	if (scores[i] < lowestNumber) 
		lowestNumber = scores[i];
};

console.log(lowestNumber);

for (var i = 0; i < scores.length; i++) {
	if (scores[i] > highestNumber)
		highestNumber = scores[i];
};

console.log(highestNumber);












