var Sandwich = (function(maker) {
  var meat = {
    "turkey": 0.40,
    "chicken": 0.50,
    "bacon": 0.60,
    "country-ham": 0.70, 
    "no-meat": 0,  
  };

  maker.getMeat = function(options) {
    console.log(meat[options]);
    var cost = Number(meat[options]);
    return cost;
  };
  return maker;

})(Sandwich);