var Sandwich = (function(maker) {
 var condiments = {
     "none": 0,
     "butter": 0.50,
     "mayo": 0.60,
     "mustard": 0.70, 
     "salt": 0.10,
     "pepper": 0.10,
};

  maker.getCondiments = function(options) {
  	console.log(condiments[options]);
  	var cost = Number(condiments[options]);
     return cost;
};
 return maker;
})(Sandwich);
