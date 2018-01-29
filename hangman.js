const inquirer = require("inquirer");
const wordFile = require("./word.js");
const lettersFile = require("./letters.js");

var userTries = 6
var currentWord;
var wordHolder;
var lettersGuessed;

function start(){
  wordHolder =[];
  currentWord=[];
  lettersGuessed=[];
  userTries = 6

  let randomWord = wordFile.wordGenerator()
  currentWord = randomWord.WORD.toUpperCase();

  //console.log(currentWord) //View random word generator
  currentWord = currentWord.split("");

  for(var i = 0; i < currentWord.length; i++) {
      wordHolder.push("_");
  };
  

  console.log(makeString(wordHolder," "));
  guess();

}




start();

function makeString(arr, holder) { 
  return(arr.toString()).replace(/,/g, holder); 
}


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
        let userGuess=answer.letter;
        let results= lettersFile.lettersChecker(userGuess, lettersGuessed);
        

       if(results.status === 1){
        check(results.guess)
        lettersGuessed=results.pastGuess;
       }
       else{
        guess();
       }


  
        
      });
  }





function check(answer){


  let results = wordFile.wordChecker(currentWord, wordHolder, answer)

  //console.log(results);

  currentWord=results.currentWord;
  wordHolder=results.wordHolder;

  if(results.status === 1){
    userTries--;
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













