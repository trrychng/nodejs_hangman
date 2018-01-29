function lettersChecker(userGuess,lettersGuessed) {
    this.guess = userGuess.toUpperCase();
    this.pastGuess = lettersGuessed;
    let status = 0;
    console.log(this.guess)
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    if((letters.indexOf(this.guess) !== -1) && (this.pastGuess.indexOf(this.guess) === -1)){
        this.pastGuess.push(this.guess);
        status = 1;
    }
    return {
        guess : this.guess,
        pastGuess : this.pastGuess,
        status : status
    }
}

module.exports.lettersChecker = lettersChecker;