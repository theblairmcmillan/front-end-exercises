var Sandwich = (function(maker) {
  var breads = {
    "white": 0.40,
    "brown": 0.50,
    "whole-grain": 0.60,
    "morning-roll": 0.70, 
  };

  maker.getBread = function(options) {
    console.log(breads[options]);
    var cost = Number(breads[options]);
     return cost;
  };
  return maker;

})(Sandwich);
