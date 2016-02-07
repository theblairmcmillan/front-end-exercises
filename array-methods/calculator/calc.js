// ADD //
document.getElementById("add").onclick = function() {
	var inputOne = parseInt(document.getElementById("input1").value);
	var inputTwo = parseInt(document.getElementById("input2").value);
	console.log("the number",inputOne);
	console.log("plus",inputTwo);
	var answer = inputOne + inputTwo;
	console.log(typeof answer);
	if (isNaN(answer)) {
			document.getElementById("outputTarget").innerHTML = "ARE YOU SERIOUS?"
	} else {
		console.log("is equal to", answer);
		document.getElementById("outputTarget").innerHTML = answer;
	};
};


// SUBTRACT // 
document.getElementById("subtract").onclick = function() {
	var inputOne = parseInt(document.getElementById("input1").value);
	var inputTwo = parseInt(document.getElementById("input2").value);
	console.log("the number",inputOne);
	console.log("minus",inputTwo);
	var answer = inputOne - inputTwo;
	console.log(typeof answer);
	if (isNaN(answer)) {
			document.getElementById("outputTarget").innerHTML = "ARE YOU SERIOUS?"
	} else {
		console.log("is equal to",answer);
		document.getElementById("outputTarget").innerHTML = answer;
	};
};

// MULTIPLY // 
document.getElementById("multiply").onclick = function() {
	var inputOne = parseInt(document.getElementById("input1").value);
	var inputTwo = parseInt(document.getElementById("input2").value);
	console.log("the number",inputOne);
	console.log("multiplied by",inputTwo);
	var answer = inputOne * inputTwo;
	console.log(typeof answer);
	if (isNaN(answer)) {
			document.getElementById("outputTarget").innerHTML = "ARE YOU SERIOUS?"
	} else {
		console.log("is equal to",answer);
		document.getElementById("outputTarget").innerHTML = answer;
	};
};


// DIVIDE // 
document.getElementById("divide").onclick = function() {
	var inputOne = parseInt(document.getElementById("input1").value);
	var inputTwo = parseInt(document.getElementById("input2").value);
	console.log("the number",inputOne);
	console.log("divided by",inputTwo);
	var answer = inputOne / inputTwo;
	console.log(typeof answer);
	if (isNaN(answer)) {
			document.getElementById("outputTarget").innerHTML = "ARE YOU SERIOUS?"
	} else {
		console.log("is equal to",answer);
		document.getElementById("outputTarget").innerHTML = answer;
	};
};

// CLEAR //
document.getElementById("clear").onclick = function() {
	var inputOne = parseInt(document.getElementById("input1").value = "");
	var inputTwo = parseInt(document.getElementById("input2").value = "");
	document.getElementById("outputTarget").innerHTML = "";
};

