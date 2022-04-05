// set some variable 
//? i should set these values privately 
//* fixed horrible var names :)
var introCard = document.getElementById("introCard")
var firstQuestion = document.getElementById("firstQuestion");
var secondQuestion = document.getElementById("secondQuestion")
var thirdQuestion = document.getElementById("thirdQuestion");
var forthQuestion = document.getElementById("forthQuestion");
var fifthQuestion = document.getElementById("fifthQuestion");
var sixthQuestion = document.getElementById("sixthQuestion");
var seventhQuestion = document.getElementById("seventhQuestion")
var eighthQuestion = document.getElementById("eighthQuestion");
var ninthQuestion = document.getElementById("ninthQuestion");
var tenthQuestion = document.getElementById("tenthQuestion");
var resultsCard = document.getElementById("resultsCard");
// list items set as variables 
var liAns1 = document.getElementById("liAns1")
var liAns2 = document.getElementById("liAns2")
var liAns3 = document.getElementById("liAns3")
var liAns4 = document.getElementById("liAns4")
var liAns5 = document.getElementById("liAns5")
var liAns6 = document.getElementById("liAns6")
var liAns7 = document.getElementById("liAns7")
var liAns8 = document.getElementById("liAns8")
var liAns9 = document.getElementById("liAns9")
var liAns10 = document.getElementById("liAns10")

// counter
// ? i should look into not keeping count as a global var
var count = 0;
// increment counter by 1 if answer was correct
function myFunctionCorrect() {
  count = count + 1;
  localStorage.setItem("score", count);
}

// show user the score
function showScore() {
  var score = localStorage.getItem("score")
  // display users score
  document.getElementById("scoreBord").innerHTML = "Your score is " + score + " out of 10.";
  // if score is between 4 and 8 display "text"
  if (score >= 4 && score <=8) {
    document.getElementById("exitText").innerHTML = "Good Job your a fan You got"
    // if score is 8 or greater display "text"
  } else if(score >=8){
    document.getElementById("exitText").innerHTML = "Great Job your a true fan You got"
  }
  // lose condition
  else {
    document.getElementById("exitText").innerHTML = "Oh Well You tried :( you got"
  }

}
// start the quiz
function btnStart() {
  introCard.style.display = "none";
  firstQuestion.style.display = "block";
}
// submit functions
function SubmitA1() {

  // if no radio buttons are selected
  var rBtn = document.querySelector('input[name="flexRadioDefault"]:checked').value;
  var SelectRadio = document.querySelector("input[name=flexRadioDefault]:checked");
  if (SelectRadio) {

  } else {
    // Otherwise, one or both were not chosen
    alert("You must select an option");
    return;
  }

  if (document.getElementById('Q1A3').checked) {
    myFunctionCorrect();
    // showScore();
    firstQuestion.style.display = "none";
    secondQuestion.style.display = "block";
    console.log(count)
    liAns1.style.setProperty('background-color', 'green', 'important');
  } else {
    firstQuestion.style.display = "none";
    secondQuestion.style.display = "block";
    liAns1.style.setProperty('background-color', 'red', 'important');
    liAns1.innerHTML =  rBtn + " ( all girls are the same)" ;
  }
}

function SubmitA2() {
  var rBtn2 = document.querySelector('input[name="flexRadioDefault2"]:checked').value;
  // if no radio buttons are selected
  var SelectRadio = document.querySelector("input[name=flexRadioDefault2]:checked");
  if (SelectRadio) {

  } else {
    // Otherwise, one or both were not chosen
    alert("You must select an option");
    return;
  }

  if (document.getElementById('Q2A5').checked) {
    myFunctionCorrect();
    // showScore();
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "block";
    console.log(count)
    liAns2.style.setProperty('background-color', 'green', 'important');


  } else {
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "block";
    liAns2.style.setProperty('background-color', 'red', 'important');
    liAns2.innerHTML =  rBtn2 + " ( Lucid dreams)" ;

  }
}

function SubmitA3() {
  var rBtn3 = document.querySelector('input[name="flexRadioDefault3"]:checked').value;
  // if no radio buttons are selected
  var SelectRadio = document.querySelector("input[name=flexRadioDefault3]:checked");
  if (SelectRadio) {

  } else {
    // Otherwise, one or both were not chosen
    alert("You must select an option");
    return;
  }
  if (document.getElementById('Q3A2').checked) {
    myFunctionCorrect();
    // showScore();
    thirdQuestion.style.display = "none";
    forthQuestion.style.display = "block";
    console.log(count)
    liAns3.style.setProperty('background-color', 'green', 'important');


  } else {
    thirdQuestion.style.display = "none";
    forthQuestion.style.display = "block";
    liAns3.style.setProperty('background-color', 'red', 'important');
    liAns3.innerHTML =  rBtn3 + " ( Jarad Higgins)" ;
  }
}

function SubmitA4() {
  var rBtn4 = document.querySelector('input[name="flexRadioDefault4"]:checked').value;
  // if no radio buttons are selected
  var SelectRadio = document.querySelector("input[name=flexRadioDefault4]:checked");
  if (SelectRadio) {

  } else {
    // Otherwise, one or both were not chosen
    alert("You must select an option");
    return;
  }
  if (document.getElementById('Q4A4').checked) {
    myFunctionCorrect();
    // showScore();
    forthQuestion.style.display = "none";
    fifthQuestion.style.display = "block";
    console.log(count)
    liAns4.style.setProperty('background-color', 'green', 'important');


  } else {
    forthQuestion.style.display = "none";
    fifthQuestion.style.display = "block";
    liAns4.style.setProperty('background-color', 'red', 'important');
    liAns4.innerHTML =  rBtn4 + " ( Goodbye & Good Riddance)" ;

  }
}

function SubmitA5() {
  var rBtn5 = document.querySelector('input[name="flexRadioDefault5"]:checked').value;
  // if no radio buttons are selected
  var SelectRadio = document.querySelector("input[name=flexRadioDefault5]:checked");
  if (SelectRadio) {

  } else {
    // Otherwise, one or both were not chosen
    alert("You must select an option");
    return;
  }
  if (document.getElementById('Q5A1').checked) {
    myFunctionCorrect();
    // showScore();
    fifthQuestion.style.display = "none";
    sixthQuestion.style.display = "block";
    liAns5.style.setProperty('background-color', 'green', 'important');
    console.log(count)

  } else {
    fifthQuestion.style.display = "none";
    sixthQuestion.style.display = "block";
    liAns5.style.setProperty('background-color', 'red', 'important');
    liAns5.innerHTML =  rBtn5 + " ( 21 Years)" ;
  }
}

function SubmitA6() {
  var rBtn6 = document.querySelector('input[name="flexRadioDefault6"]:checked').value;
  // if no radio buttons are selected
  var SelectRadio = document.querySelector("input[name=flexRadioDefault6]:checked");
  if (SelectRadio) {

  } else {
    // Otherwise, one or both were not chosen
    alert("You must select an option");
    return;
  }
  if (document.getElementById('Q6A3').checked) {
    myFunctionCorrect();
    // showScore();
    sixthQuestion.style.display = "none";
    seventhQuestion.style.display = "block";
    console.log(count)
    liAns6.style.setProperty('background-color', 'green', 'important');

  } else {
    sixthQuestion.style.display = "none";
    seventhQuestion.style.display = "block";
    liAns6.style.setProperty('background-color', 'red', 'important');
    liAns6.innerHTML =  rBtn6 + " ( Ally Lotti)" ;
  }
}

function SubmitA7() {
  var rBtn7 = document.querySelector('input[name="flexRadioDefault7"]:checked').value;
  // if no radio buttons are selected
  var SelectRadio = document.querySelector("input[name=flexRadioDefault7]:checked");
  if (SelectRadio) {

  } else {
    // Otherwise, one or both were not chosen
    alert("You must select an option");
    return;
  }
  if (document.getElementById('Q7A5').checked) {
    myFunctionCorrect();
    // showScore();
    seventhQuestion.style.display = "none";
    eighthQuestion.style.display = "block";
    console.log(count)
    liAns7.style.setProperty('background-color', 'green', 'important');

  } else {
    seventhQuestion.style.display = "none";
    eighthQuestion.style.display = "block";
    liAns7.style.setProperty('background-color', 'red', 'important');
    liAns7.innerHTML =  rBtn7 + " ( 2019)" ;
  }
}

function SubmitA8() {
  var rBtn8 = document.querySelector('input[name="flexRadioDefault8"]:checked').value;
  // if no radio buttons are selected
  var SelectRadio = document.querySelector("input[name=flexRadioDefault8]:checked");
  if (SelectRadio) {

  } else {
    // Otherwise, one or both were not chosen
    alert("You must select an option");
    return;
  }
  if (document.getElementById('Q8A2').checked) {
    myFunctionCorrect();
    // showScore();
    eighthQuestion.style.display = "none";
    ninthQuestion.style.display = "block";
    console.log(count)
    liAns8.style.setProperty('background-color', 'green', 'important');

  } else {
    eighthQuestion.style.display = "none";
    ninthQuestion.style.display = "block";
    liAns8.style.setProperty('background-color', 'red', 'important');
    liAns8.innerHTML =  rBtn8 + " ( AYE AYEEE)" ;
  }
}

function SubmitA9() {
  var rBtn9 = document.querySelector('input[name="flexRadioDefault9"]:checked').value;
  // if no radio buttons are selected
  var SelectRadio = document.querySelector("input[name=flexRadioDefault9]:checked");
  if (SelectRadio) {

  } else {
    // Otherwise, one or both were not chosen
    alert("You must select an option");
    return;
  }
  if (document.getElementById('Q9A4').checked) {
    myFunctionCorrect();
    // showScore();
    ninthQuestion.style.display = "none";
    tenthQuestion.style.display = "block";
    console.log(count)
    liAns9.style.setProperty('background-color', 'green', 'important');

  } else {
    ninthQuestion.style.display = "none";
    tenthQuestion.style.display = "block";
    liAns9.style.setProperty('background-color', 'red', 'important');
    liAns9.innerHTML =  rBtn9 + " ( 2014)" ;
  }
}
// last question will display renault's card once submitted 
function SubmitA10() {
  var rBtn10 = document.querySelector('input[name="flexRadioDefault10"]:checked').value;
  // if no radio buttons are selected
  var SelectRadio = document.querySelector("input[name=flexRadioDefault10]:checked");
  if (SelectRadio) {

  } else {
    // Otherwise, one or both were not chosen
    alert("You must select an option");
    return;
  }
  if (document.getElementById('Q10A3').checked) {
    myFunctionCorrect();
    showScore();
    tenthQuestion.style.display = "none";
    resultsCard.style.display = "block";
    console.log(count)
    liAns10.style.setProperty('background-color', 'green', 'important');

  } else {
    showScore();
    tenthQuestion.style.display = "none";
    resultsCard.style.display = "block";
    liAns10.style.setProperty('background-color', 'red', 'important');
    liAns10.innerHTML =  rBtn10 + " ( Maze)" ;
  }
}
// end of functions