//var inquirer = require("inquirer");


var wordtest = ["working on it"];


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
        check(answer);

      });
  }





function check(){





  }


function makeString(arr, holder) { 
    return(arr.toString()).replace(/,/g, holder); 
}


function start(){
    wordHolder =[];
    guessNum=10;
    var currentWord = wordtest[0].toUpperCase();
    currentWord = currentWord.split("");

    for(var i = 0; i < currentWord.length; i++) {
        wordHolder.push("_");
        };
    

    
    console.log(makeString(wordHolder," "));

      

  }


  start();