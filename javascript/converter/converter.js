document.getElementById('submitTemp').onclick = function() {
	convertTemp();
};



function convertTemp() {
	var temp = document.getElementById("input").value;
	if (document.getElementById("celcius").checked) {
		var output = (temp - 32) * 5 / 9;
		document.getElementById("tempoutput").innerHTML = output;
	} else {
		var output = (temp * 1.8) + 32; 
		document.getElementById("tempoutput").innerHTML = output;
	}
}


document.getElementById("clearForm").onclick = function() {
	clearTemp();
};

function clearTemp() {
	document.getElementById("input").value = "";
	document.getElementById("tempoutput").innerHTML = "";
}

