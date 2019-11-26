// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
let choice = $("#input").val();
$("#userChoice").text(choice);

});
var random=[
"Rock","Paper","Scissors"
];
$("#shoot").click(function(){
let computerchoice=random[Math.floor(Math.random()*random.length)];
$("#computerChoice").text(computerchoice);
});