//using form scan html for the attribute name"quiz", scan for "questionOne" get the value//


 
    var correct = 0;
function check() {
  var quiz = document.getElementById("quiz");
  
  var question1 = document.quiz.querySelector(".sciOne");
  var question2 = document.quiz.querySelector(".geoTwo");
  var question3 = document.quiz.querySelector(".histThree");
  var question4 = document.quiz.querySelector(".artTwo");
  var question5 = document.quiz.querySelector(".popThree");
  var question6 = document.quiz.querySelector(".sportTwo");
 console.log(question1)
  //starting score is 0

document.querySelector("#button").addEventListener("click", function () {
  // if value equals answer add one point to the total
  if (question1.value === ("Chlorophyll")) {
    correct++;
  }
  console.log(question1)
  if (question2.value === ("Michigan")) {
    correct++;
  }
  console.log(question2)
  if (question3.value == ("northCarolina")) {
    correct++;
    console.log(question3)
  }
  if (question4.value == "6") {
    correct++;
  }
  if (question5.value == "Bagheera") {
    correct++;
  }
  if (question6.value == "3") {
    correct++;
  }

  var messages = ["Awesome job!", "Not bad :)", "Try Again!"];
  var score;
  if (correct <= 2) {
    score = 2;
  }
  if (correct > 2 && correct <= 4) {
    score = 1;
  }
  if (correct > 4 && correct <= 6) {
    score = 0;
  }
  document.getElementById("message").innerHTML = messages[score];
})
  var results = (document.getElementById("number_correct").innerHTML =
  "(You got " + correct + " out of 6 correct!)");

  
  console.log(number_correct);
}

var sliderQuestions = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;
//clear all images
function reset() {
  for (let i = 0; i < sliderQuestions.length; i++) {
    sliderQuestions[i].style.display = "none";
  }
}

arrowLeft = document.querySelector("#arrow-left");
arrowRight = document.querySelector("#arrow-right");
var sliderQuestions = document.querySelectorAll(".slide"),
  current = 0;

//just shows the first question  _________
function startSlide() {
  reset();
  arrowLeft.classList.add("hidden");
  sliderQuestions[0].style.display = "block";
}

//show previous slide
function slideLeft() {
  reset();
  arrowLeft.style.display = "block";
  arrowRight.style.display = "block";
  sliderQuestions[current - 1].style.display = "block";
  current--;
}
//show next slide
function slideRight() {
  reset();
  arrowLeft.style.display = "block";
  sliderQuestions[current + 1].style.display = "block";
  current++;
}
//right arrow click event
arrowRight.addEventListener("click", function() {
  if (current === sliderQuestions.length - 1) {
    current = -1;
    console.log("fire");
  }
  if (current === sliderQuestions.length - 2) {
    arrowRight.style.display = "none";
  }
  slideRight();
});

//add event listener so the arrows click left
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderQuestions.length;
  }
  slideLeft();
});
startSlide();
