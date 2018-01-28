var inquirer = require("inquirer");


var wordtest = ["TERRY"];
var userTries = 10
var currentWord;
var wordHolder


function guess() {
    inquirer
      .prompt([
        {
          name: "letter",
          type: "input",
          message: "Guess a letter: ",
        }
      ])
      .then(function(answer) {
        
        
        check(answer.letter);
        
      });
  }





function check(answer){

  if(currentWord.indexOf(answer) == -1) {
    userTries--;
    console.log("WRONG!")
  }
  else{
    console.log("CORRECT!")
  } 

  for(i= 0; i < wordHolder.length; i++){

 

    if(currentWord[i] === answer) {
    wordHolder[i] = answer; //updates place holder variable with correct guess  
  }

  }

    console.log(makeString(wordHolder," "));



    if(wordHolder.indexOf("_") == -1) {
      console.log("You Win!!! Onto Next Game!")
      start();
    }       
    else if(userTries != 0){
     
      console.log("You Have "+userTries+" guess left")
      guess();
    }
    else{
      console.log("You Lose!!!");
      start();
    }




  }


function makeString(arr, holder) { 
    return(arr.toString()).replace(/,/g, holder); 
}


function start(){
    wordHolder =[];
    currentWord=[];
    userTries = 10
    currentWord = wordtest[0].toUpperCase();
    currentWord = currentWord.split("");

    for(var i = 0; i < currentWord.length; i++) {
        wordHolder.push("_");
    };
    

    
    console.log(makeString(wordHolder," "));
    guess();
      

  }


  start();

 