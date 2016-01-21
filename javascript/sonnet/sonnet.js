var text = document.getElementById("sonnet").innerHTML;
console.log(text);

var orphans = text.indexOf("orphans");
console.log("orphans is at ",orphans);

var lengthOfSonnet = text.length;
console.log("length of sonnet is",lengthOfSonnet);

var replace = text.replace("winter", "yultide");
console.log("replace phrase",replace);

var largeReplace = text.replace(/the/g, "A large");
console.log("large is replacing the",largeReplace);

document.getElementById("sonnet").innerHTML = largeReplace;
