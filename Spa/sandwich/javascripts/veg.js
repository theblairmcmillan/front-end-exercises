var Sandwich = (function(maker) {
 var veg = {
     "none": 0,
     "lettuce": 0.50,
     "tomato": 0.60,
     "cucumber": 0.70, 
     "mustard": 0.10,
     "onion": 0.10,
};

  maker.getVeg = function(options) {
  console.log(veg[options]);
   var cost = Number(veg[options]);
    return cost;
};
 return maker;
})(Sandwich);
