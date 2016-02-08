var userInput = "";

document.getElementById('submit').onclick = function() {
	userInput = document.getElementById("input").value;
	console.log(userInput);
	reversal(userInput);
	alphabits(userInput);
	palindrome(userInput);
};

function reversal(text) {
	var reversed = text.split('').reverse().join('');
	console.log(reversed);
	reverseText.innerHTML = reversed;
};

function alphabits(text) {
	var alpha = text.split('').sort().join('');
	console.log(alpha);
	alphabitsText.innerHTML = alpha;
};


function palindrome(text) {
	var palinCheck = text.split('').reverse().join('');
	console.log(palinCheck);
	var palinInput = text.split('').join('');
	console.log(palinInput);
		if(palinCheck === palinInput)
			palindromeText.innerHTML = "Hurray your input is a palindrome!";
			else {
				palindromeText.innerHTML = "Your input is nae a palindrome!";
		};

};





