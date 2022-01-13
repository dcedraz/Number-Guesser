let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {

    let computerDiffTarget = getAbsoluteDistance(targetNumber, computerGuess);
    let userDiffTarget = getAbsoluteDistance(userGuess, computerGuess);
       
    return computerDiffTarget > userDiffTarget ? false : true;
 
    /* First I did this way
    switch (true) {
        case userDiffTarget === computerDiffTarget : return true;
        case userDiffTarget > computerDiffTarget : return true;
        case computerDiffTarget > userDiffTarget : return false;
        default: return true;
    };
    But then I realized all the above lines could be down to a single one as we see in the return above.
    */
   
};

const getAbsoluteDistance = (a, b) => Math.abs(a - b);

const updateScore = winner => {
    winner == 'human' ? humanScore++ : 
    winner == 'computer' ? computerScore++ : 
    false ;
}

const advanceRound = () => currentRoundNumber++;