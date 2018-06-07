function check() {
  var question1 = document.quiz.questionOne.value;
  var question2 = document.quiz.questionTwo.value;
  var question3 = document.quiz.questionThree.value;
  var question4 = document.quiz.questionFour.value;
  var question5 = document.quiz.questionFive.value;
  var question6 = document.quiz.questionSix.value;

  var correct = 0;

  if (question1 == "Chlorophyll") {
    correct++;
  }

  if (question2 == "Michigan") {
    correct++;
  }
  if (question3 == "northCarolina") {
    correct++;
  }
  if (question4 == "6") {
    correct++;
  }
  if (question5 == "Bagheera") {
    correct++;
  }
  if (question6 == "3") {
    correct++;
  }

  var messages = ["Awesome job!", "Not bad :)", "Mehhhh..."];
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
  document.getElementById("number_correct").innerHTML =
    "(You got " + correct + " out of 6 correct!)";
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

var slideOne = document.querySelector(".slide1");
var slideSix = document.querySelector(".slide6");
arrowLeft = document.querySelector("#arrow-left");
arrowRight = document.querySelector("#arrow-right");
var sliderQuestions = document.querySelectorAll(".slide"),
  current = 0;

//just shows the first question  _________
function startSlide() {
  reset();
  arrowLeft.style.display = "none";
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
    console.log("fire")
  
    
  }
  if(current === sliderQuestions.length -2){
  arrowRight.style.display= "none";
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

