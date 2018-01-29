const wordlist = require('wordlist-english'); 

function wordGenerator() {
    Word = wordlist['english/70'];
    x = Math.floor(Math.random() * Word.length); 
    WORD= (Word[x]).toUpperCase();
    return {
        WORD
    }
};



function wordChecker(x,y,z) {
    this.currentWord= x;
    this.answer = z;
    this.wordHolder =y;
    let status = 0;
    
    if(this.currentWord.indexOf(this.answer) == -1){
        console.log("YOUR GUESS OF "+this.answer+" IS INCORRECT!!")
        status = 1;
      }
      else{
        console.log("YOUR GUESS OF "+this.answer+" IS CORRECT!!")
        
        for(i= 0; i < this.wordHolder.length; i++)
        {
            if(this.currentWord[i] === this.answer) {
            this.wordHolder[i] = this.answer;
        }
    }
}
return {
    currentWord : this.currentWord,
    wordHolder : this.wordHolder,
    status : status
}
};

module.exports.wordGenerator = wordGenerator;
module.exports.wordChecker = wordChecker;