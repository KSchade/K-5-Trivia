

function check(){
    var question1 = document.quiz.questionOne.value;
    var question2 = document.quiz.questionTwo.value;
    var question3 = document.quiz.questionThree.value;
    var question4 = document.quiz.questionFour.value;
    var question5 = document.quiz.questionFive.value;
    var question6 = document.quiz.questionSix.value;
var correct=0;
    if( question1=="Chlorophyll") {
        correct++;
    }

if ( question2 == "Michigan") {
    correct++;
}
if (question3 =="northCarolina") {
    correct++;
}
if (question4 == "6"){
    correct++;
}
if (question5 == "Bagheera") {
    correct++;
}
if (question6 == "3") {
    correct++;
}
//    document.getElementById("after_submit").style.visability = 'visible';
    // document.getElementById("number_correct").innerHTML = "(You got " + correct + " out of 6 correct!)";
    // console.log(number_correct)


var messages=["Awesome job!", "Not bad:)", "Mehhhh..."];
var score;
if(correct<=2) {
    score=2;
}
if(correct>2 && correct<=4) {
    score=1;
}
if (correct>4 && correct<=6) {
    score= 0;
}

document.getElementById('message').innerHTML = messages[score];
document.getElementById("number_correct").innerHTML = "(You got " + correct + " out of 6 correct!)";
console.log(number_correct)
}