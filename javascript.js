// g = earth, moon, mars, jupiter
// 9,81 - 1,62 - 3,69, 24,79

// var v0 = input user;

// var theAngle = input user (theAngular = theAngle * (Math.PI/ 180))

// var throwingRange (thrrowingRange = ((v0 * v0) * Math.sin(2 * theAngular)) / g)

// var rangeToMonster (rangeToMonster = Math.random() * 90 + 10)

// rangeToMonster = Math.round(rangeToMonster)

//startpoint mobile device

var gravity = 0;


  if (document.getElementById("earth").checked) {
    gravity = document.getElementById("earth").value;
  } else if (document.getElementById("moon").checked) {
    gravity = document.getElementById("moon").value;
  } else if (document.getElementById("mars").checked) {
    gravity = document.getElementById("mars").value;
  } else if (document.getElementById("jupiter").checked) {
    gravity = document.getElementById("jupiter").value;
  }


var v0 = document.getElementById("velocity").value;
var angle = document.getElementById("angle").value * (Math.PI / 180);
var range = Math.round((v0 * v0 * Math.sin(2 * angle)) / gravity);
var rangeToMonster = Math.round(Math.random() * 90 + 10);
var distance = range - rangeToMonster;

function placeMonster() {
   var pos =  rangeToMonster;
}

function collision() {
  if (distance == 0) {
    alert("Congratulations,you hit the monster");
  } else {
    alert("You missed the monster with a distance of: " + distance + " m.");
  }
}

function throwMobileDevice() {

}

function changeImg() {
  if (document.getElementById("earth").checked) {
    document
      .getElementById("wannaPlayAGame")
      .setAttribute("src", "img/earth.jpg");
  } else if (document.getElementById("moon").checked) {
    document
      .getElementById("wannaPlayAGame")
      .setAttribute("src", "img/moon.jpg");
  } else if (document.getElementById("mars").checked) {
    document
      .getElementById("wannaPlayAGame")
      .setAttribute("src", "img/mars.jpg");
  } else if (document.getElementById("jupiter").checked) {
    document
      .getElementById("wannaPlayAGame")
      .setAttribute("src", "img/jupiter.jpg");
  }
}

function setLevel() {
  changeImg();
  checkGravity();
  placeMonster();
}

function throwing() {
  collision();
}

document.getElementById("throw").onclick = throwing;

document.getElementById("earth").onclick = setLevel;

document.getElementById("moon").onclick = changeImg;
document.getElementById("mars").onclick = changeImg;
document.getElementById("jupiter").onclick = changeImg;

// alert(v0);
// alert(angle);
// alert(gravity);
// alert(range);
// alert(rangeToMonster);
// alert(distance);
