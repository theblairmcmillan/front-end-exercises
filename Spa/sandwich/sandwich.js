//initial IIFE
var Sandwich = (function() {
  
  return { 
  };
})();

var orderTotal = 0;
var foodsArray = [];

document.addEventListener("click", function(event) {
  	if (event.target.type === "checkbox") { 
   
	    console.log(event.target.value); 
		var selection = event.target.value;
		var category = event.target["name"];
		console.log(category);
		var outputDiv = document.getElementById("outputTarget");
		var fillerDiv = document.getElementById("fillerList");

		// IF MEAT:
		if (category === "meat") {
			if (event.target.checked) {
		    	console.log("selection", selection);
		    	console.log(">>>", Sandwich.getMeat(selection));

				orderTotal += Sandwich.getMeat(selection);
				console.log("total:", orderTotal);
				foodsArray.push(selection);

				outputDiv.innerHTML = orderTotal;
				fillerDiv.innerHTML = foodsArray.join(" - ");
			} else { 
				orderTotal -= Sandwich.getMeat(selection); 	// find the index of selection in foodsArray
				var i = foodsArray.indexOf(selection); // remove that element from foodsArray
				if (i > -1) {
				    foodsArray.splice(i, 1);
				}
				fillerDiv.innerHTML = foodsArray.join(" - "); // update dom with new foodsArray.join(" - ")
				outputDiv.innerHTML = orderTotal;
			} // end of else statment
		// IF CHEESE:
		} else if (category === "cheese") {
			if (event.target.checked) {
		    	console.log("selection", selection);
		    	console.log(">>>", Sandwich.getCheese(selection));

				orderTotal += Sandwich.getCheese(selection);
				console.log("total:", orderTotal);
				foodsArray.push(selection);

				outputDiv.innerHTML = orderTotal;
				fillerDiv.innerHTML = foodsArray.join(" - ");
			} else { 
				orderTotal -= Sandwich.getCheese(selection); // find the index of selection in foodsArray
				var i = foodsArray.indexOf(selection); // remove that element from foodsArray
				if (i > -1) {
				    foodsArray.splice(i, 1);
				}
				fillerDiv.innerHTML = foodsArray.join(" - "); // update dom with new foodsArray.join(" - ")
				outputDiv.innerHTML = orderTotal;
			} // end of else statment
		// iF BREAD:
		} else if (category === "bread") {
			if (event.target.checked) {
		    	console.log("selection", selection);
		    	console.log(">>>", Sandwich.getBread(selection));

				orderTotal += Sandwich.getBread(selection);
				console.log("total:", orderTotal);
				foodsArray.push(selection);

				outputDiv.innerHTML = orderTotal;
				fillerDiv.innerHTML = foodsArray.join(" - ");
			} else { 
				orderTotal -= Sandwich.getBread(selection); // find the index of selection in foodsArray
				var i = foodsArray.indexOf(selection); // remove that element from foodsArray
				if (i > -1) {
				    foodsArray.splice(i, 1);
				}
				fillerDiv.innerHTML = foodsArray.join(" - "); // update dom with new foodsArray.join(" - ")
				outputDiv.innerHTML = orderTotal;
			} // end of else statment
		// IF CONDIMENTS:
		} else if (category === "condiments") {
			if (event.target.checked) {
		    	console.log("selection", selection);
		    	console.log(">>>", Sandwich.getCondiments(selection));

				orderTotal += Sandwich.getCondiments(selection);
				console.log("total:", orderTotal);
				foodsArray.push(selection);

				outputDiv.innerHTML = orderTotal;
				fillerDiv.innerHTML = foodsArray.join(" - ");
			} else { 
				orderTotal -= Sandwich.getCondiments(selection); 	// find the index of selection in foodsArray
				var i = foodsArray.indexOf(selection); // remove that element from foodsArray
				if (i > -1) {
				    foodsArray.splice(i, 1);
				}
				fillerDiv.innerHTML = foodsArray.join(" - "); // update dom with new foodsArray.join(" - ")
				outputDiv.innerHTML = orderTotal;
			} // end of else statment
		// IF VEG:
		} else if (category === "veg") {
			if (event.target.checked) {
		    	console.log("selection", selection);
		    	console.log(">>>", Sandwich.getVeg(selection));

				orderTotal += Sandwich.getVeg(selection);
				console.log("total:", orderTotal);
				foodsArray.push(selection);

				outputDiv.innerHTML = orderTotal;
				fillerDiv.innerHTML = foodsArray.join(" - ");
			} else { 
				orderTotal -= Sandwich.getVeg(selection); // find the index of selection in foodsArray
				var i = foodsArray.indexOf(selection); 	// remove that element from foodsArray
				if (i > -1) {
				    foodsArray.splice(i, 1);
				}
				fillerDiv.innerHTML = foodsArray.join(" - "); // update dom with new foodsArray.join(" - ")
				outputDiv.innerHTML = orderTotal;
			} // END OF ELSE STATEMENT
		} // End OF CHECKING CATAGORIES
	} // END OF IF CHECKBOX CHECK
}); // END OF EVENT LISTENER IN BODY

