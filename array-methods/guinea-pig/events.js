
			// CLICKING ON SECTIONS // 


document.getElementById("intro").onclick = function() {
	var introduction = document.getElementById("intro").innerHTML;
	var fullIntro = "You have clicked on the " + introduction + " section";
	console.log(fullIntro);
	outputTarget.innerHTML = fullIntro;
};


document.getElementById("body").onclick = function() {
	var body = document.getElementById("body").innerHTML;
	var fullBody = "You have clicked on the " + body + " section";
	console.log(fullBody);
	outputTarget.innerHTML = fullBody;
};

document.getElementById("section1").onclick = function() {
	var body = document.getElementById("section1").innerHTML;
	var fullBody = "You have clicked on " + body;
	console.log(fullBody);
	outputTarget.innerHTML = fullBody;
};

document.getElementById("section2").onclick = function() {
	var body = document.getElementById("section2").innerHTML;
	var fullBody = "You have clicked on " + body;
	console.log(fullBody);
	outputTarget.innerHTML = fullBody;
};


document.getElementById("section3").onclick = function() {
	var body = document.getElementById("section3").innerHTML;
	var fullBody = "You have clicked on " + body;
	console.log(fullBody);
	outputTarget.innerHTML = fullBody;
};

document.getElementById("conclusion").onclick = function() {
	var body = document.getElementById("conclusion").innerHTML;
	var fullBody = "You have clicked on the " + body + " section";
	console.log(fullBody);
	outputTarget.innerHTML = fullBody;
};



		      // MOUSE OVER H1 //

document.getElementById('page-title').addEventListener("mouseenter", function () {
	var body = document.getElementById("page-title").innerHTML;
	var fullbody = "You moved your mouse over the " + body;
	console.log(fullbody);
	outputTarget.innerHTML = fullbody;
});


document.getElementById('page-title').addEventListener("mouseout", function () {
	outputTarget.innerHTML = "You left me!!";
});


		// INPUT TO OUTPUT KEY UP'S // 

document.getElementById('keypress-input').addEventListener("keyup", function () {
	var body = document.getElementById("keypress-input").value;
	outputTarget.innerHTML = body;
	// console.log(body); NEED TO FIND NICE WAY TO CONSOLE LOG THIS
});


		// CHANGING COLOR OF GUINEA PIG // 

document.getElementById('add-color').onclick = function () {
	var output = document.getElementById("guineaPig");
	guineaPig = output.classList.add("bluetext");
};


document.getElementById('make-large').onclick = function () {
	var output = document.getElementById("guineaPig");
	guineaPig = output.classList.add("bigtext");
};


document.getElementById('add-border').onclick = function () {
	var output = document.getElementById("guineaPig");
	guineaPig = output.classList.add("border");
};


document.getElementById('add-rounding').onclick = function () {
	var output = document.getElementById("guineaPig");
	guineaPig = output.classList.add("border-rounded");
};
































