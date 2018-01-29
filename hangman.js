const inquirer = require("inquirer"); //package needed to run prompt
const wordFile = require("./word.js"); 
const lettersFile = require("./letters.js");

var userTries = 6
var currentWord;
var wordHolder;
var lettersGuessed;
var win=0;
var loss=0;

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
  console.log(makeString(wordHolder," ")+"\r\n");
  guess();
}

function makeString(arr, holder) { 
  return(arr.toString()).replace(/,/g, holder); 
}

function guess() {
    inquirer
      .prompt([
        {
          name: "letter",
          type: "input",
          message: "Guess a letter: "
        }
      ])
      .then(function(answer) {
        let userGuess=answer.letter;
        //console.log(lettersGuessed)
        let results= lettersFile.lettersChecker(userGuess, lettersGuessed);
        //console.log(results)

        lettersGuessed=results.pastGuess;

        
       if(results.status === 1){
        check(results.guess)  
      }
       else{
        console.log("You already guessed the following: "+lettersGuessed+"\r\n")
        guess();
        return;
      }
    });
  }

function playAgain(){
  let log="**Current Score**\r\n"
  log +="\tWIN: "+win+"\r\n";
  log +="\tLOSS: "+loss+"\r\n";
  
  console.log(log)

  inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          message: "Play Again?",
          choices: ['YES', 'NO']
        }
      ])
      .then(function(answer) {
        if(answer.choice=== 'YES'){
          start(); 
        }
        else{
          return;
        }
      });
    }


function check(answer){
  let results = wordFile.wordChecker(currentWord, wordHolder, answer);

  //console.log(results);

  currentWord=results.currentWord;
  wordHolder=results.wordHolder;
  //console.log(currentWord)  //CHEATS
  if(results.status === 1){
    userTries--;
  }
  console.log(makeString(wordHolder," "));
    if(wordHolder.indexOf("_") == -1) {
      console.log("You Win!!! Onto Next Game!\r\n")
      win++;
      playAgain();
    }       
    else if(userTries === 0){
      console.log("You Lose!!! The word is "+makeString(currentWord,"")+"\r\n");
      loss++;
      playAgain();
    }
    else{
      console.log("You Have "+userTries+" guess left\r\n")
      guess();
    }
  }

  start(); 