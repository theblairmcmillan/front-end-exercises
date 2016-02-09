function add(a, b) {
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


function calculate(a, b, func) {
  return func(a, b);
}


var outputElement = document.getElementById('outputTarget');

var number1 = document.getElementById('input1');
var number2 = document.getElementById('input2');

var addButton = document.getElementById('add');
var subtractButton = document.getElementById('subtract');
var multiplyButton = document.getElementById('multiply');
var divideButton = document.getElementById('divide');


function getNumber1(){
  return parseFloat(number1.value);
}

function getNumber2() {
  return parseFloat(number2.value);
}

var answer;

addButton.addEventListener("click", function() {
  a = getNumber1();
  b = getNumber2();
  answer = calculate(a, b, add);
  outputElement.innerHTML = answer;
  console.log(answer);
})


subtractButton.addEventListener("click", function() {
  a = getNumber1();
  b = getNumber2();
  answer = calculate(a, b, subtract);
  outputElement.innerHTML = answer;
})


multiplyButton.addEventListener("click", function() {
  a = getNumber1();
  b = getNumber2();
  answer = calculate(a, b, multiply);
  outputElement.innerHTML = answer;
})


divideButton.addEventListener("click", function() {
  a = getNumber1();
  b = getNumber2();
  answer = calculate(a, b, divide);
  outputElement.innerHTML = answer;
})
