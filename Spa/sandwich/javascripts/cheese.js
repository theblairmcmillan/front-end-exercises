var Sandwich = (function(maker) {
 var cheese = {
     "none": 0,
     "cheddar": 0.50,
     "american": 0.60,
     "swiss": 0.70, 
     "cream-cheese": 0.90,
};

  maker.getCheese = function(options) {
    console.log(cheese[options]);
    var cost = Number(cheese[options]);
     return cost;
};
 return maker;
})(Sandwich);