var peopleArray = [];



var person1 = {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797,
  }
};

peopleArray.push(person1);


var person2 = {
  title: "President",
  name: "Theodore Roosevelt",
  bio: "Roosevelt was an American statesman, author, explorer, soldier, naturalist, and reformer who served as the 26th President of the United States from 1901 to 1909",
  image: "http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/like-a-boss-e1350189178780_6.jpg",
  lifespan: {
    birth: 1858,
    death: 1919,
  }
};

peopleArray.push(person2);

var person3 = {
  title: "Son of God",
  name: "Jesus Christ",
  bio: "also referred to as Jesus of Nazareth, JC is the central figure of Christianity",
  image: "http://crazyhyena.com/imagebank/g/funny-jesus-joke-dad-says-i-can-come-back.jpg",
  lifespan: {
    birth: 1666,
    death: 6969,
  }
};

peopleArray.push(person3);
console.log(peopleArray);


var outputElement = document.getElementById('mainoutput');
var outputHTML = "";

for (var i = 0; i < peopleArray.length; i++) {
	var currentPerson = peopleArray[i];
  outputHTML += "<div class=cards>"
	outputHTML +=  "<header>" + currentPerson.name + ": " + currentPerson.title + "</header>";
  outputHTML += "<section>" + "<img src='" + currentPerson.image + "'>" + currentPerson.bio + "<section>" + "</div>";
}



mainOutput.innerHTML = outputHTML;






