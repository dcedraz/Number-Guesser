let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {

    computerDiffTarget = Math.abs(targetNumber - computerGuess);
    userDiffTarget = Math.abs(userGuess - computerGuess);

    switch (true) {
        case userDiffTarget === computerDiffTarget : return true;
        case userDiffTarget > computerDiffTarget : return true;
        case computerDiffTarget > userDiffTarget : return false;
        default: return true;
    };
};