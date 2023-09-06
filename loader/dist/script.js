var current = 362;
var goal = 500;

// Update the current weight

document.getElementById("current").innerHTML = current;

// Update the goal weight

document.getElementById("goal").innerHTML = goal;

var max = Math.floor((current/ goal) * 100);
console.log(max);

var clock = 10;
var countdownId = 0;

start();

function start() {
  //Start clock

  countdownId = setInterval("countdown()", 100);
}

function countdown() {
  if (clock < max) {
    clock = clock + 1;

    document.getElementById("nums").innerHTML = clock;
  } else {
    //Stop clock
    
    clearInterval(countdownId);
  }

  //Check if the number is manually edited

  var nums = document.getElementById("nums").innerHTML;
  if (nums != clock) {
    clearInterval(countdownId);
  }
}