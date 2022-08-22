/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
var questionCount = 0;
var superecoScore = 1;
var ecoScore = 1;
var notecoScore = 0;
var poorlyecoScore = 0;
var total = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q1a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", noteco);
q1a2.addEventListener("click", eco);
q1a3.addEventListener("click", poorlyeco);

q2a1.addEventListener("click", poorlyeco);
q2a2.addEventListener("click", supereco);
q2a3.addEventListener("click", noteco);

q3a1.addEventListener("click", supereco);
q3a2.addEventListener("click", noteco);
q3a3.addEventListener("click", poorlyeco);

q4a1.addEventListener("click", supereco);
q4a2.addEventListener("click", poorlyeco);
q4a3.addEventListener("click", eco);

q5a1.addEventListener("click", supereco);
q5a2.addEventListener("click", poorlyeco);
q5a3.addEventListener("click", noteco);

q6a1.addEventListener("click", eco);
q6a2.addEventListener("click", noteco);
q6a3.addEventListener("click", poorlyeco);

q7a1.addEventListener("click", poorlyeco);
q7a2.addEventListener("click", eco);
q7a3.addEventListener("click", noteco);

var result = document.getElementById("result");

//#TODO: Define quiz functions here
function supereco() {
  total += superecoScore;
  questionCount += 1;
  //alert("One point to horse!");
  if (questionCount <= 7) {
    updateResult();
  }
}
function eco() {
  total += ecoScore;
  questionCount += 1;
  //alert("One point to dolphin!");
  if (questionCount <= 7) {
    updateResult();
  }
}
function noteco() {
  total += notecoScore;
  questionCount += 1;
  //alert("One point to cat!");
  if (questionCount <= 7) {
    updateResult();
  }
}
function poorlyeco() {
  total += poorlyecoScore;
  questionCount += 1;
  //alert("One point to dog!");
  if (questionCount <= 7) {
    updateResult();
  }
}

function updateResult() {
  if (questionCount == 7) {
    if (total >= 6) {
    result.innerHTML =
      "Score: "+total +"...You are Super Eco Friendly! You love helping the enviornment!";
  } else if (total >= 5) {
    result.innerHTML =
      "Score: "+total+"...You are Eco Friendly! You sometimes like to help out towards your environment and community!";
  } else if (total >= 4) {
    result.innerHTML =
      "Score: "+total+"...You are Not Eco Friendly! Try to develop better habits for the sake of the enviroment.";
  } else if (total >= 1) {
    result.innerHTML =
      "Score: " + total + "...You are Poorly Eco Friendly! You do not care about the enviornment around you! You should totally reconsider that! ";
  } else {
    result.innerHTML =
      "Hmm. The Super Eco Family can't decide. Please try again later.";
  }
}
}
