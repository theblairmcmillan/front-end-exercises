

























var myProductRequest = new XMLHttpRequest(); // creates new xml http request object 

myProductRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myProductRequest.addEventListener("error", executeThisCodeIfXHRFails);
myProductRequest.open("GET", "dogfood.json"); // gets data from file path. could be url 
myProductRequest.send(); // sends the created request 
