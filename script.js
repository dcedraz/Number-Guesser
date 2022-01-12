let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {

    let computerDiffTarget = Math.abs(targetNumber - computerGuess);
    let userDiffTarget = Math.abs(userGuess - computerGuess);
 
    /* First I did this way
    switch (true) {
        case userDiffTarget === computerDiffTarget : return true;
        case userDiffTarget > computerDiffTarget : return true;
        case computerDiffTarget > userDiffTarget : return false;
        default: return true;
    };
    */

    // But then I realized all the above lines could be down to a single one:
    return computerDiffTarget > userDiffTarget ? false : true;

};