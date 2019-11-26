// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
let choice = $("#input").val();
$("#userChoice").text(choice);

var random=[
"Rock","Paper","Scissors"];

$("#shoot").click(function(){
let computerchoice=random[Math.floor(Math.random()*random.length)];
console.log(computerchoice)
$("#computerChoice").text(computerchoice);

if (choice === "Paper" && computerChoice === "Rock" ){
$("#results").html("User Wins");
}else if(choice=== "Rock" && computerChoice === "Paper" ){
    $("#results").html("Computer Wins");
}else{
    $("#results").html("Tie");
}
});



});











