
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomValue = Math.random() * choices.length;
    const randomIndex = Math.floor(randomValue);
    return choices[randomIndex];
}


function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"]; // Define the choices array
    let hChoice = window.prompt("Select your choice in a game of rock, paper, scissors!").toLowerCase(); // Get user input and convert to lower case

    // Validate user choice
    if (choices.includes(hChoice)) {
        return hChoice; // Return valid choice
    } else {
        alert("Invalid choice. Please select 'rock', 'paper', or 'scissors'.");
        return null; // Return null or handle the error as needed
    }
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It is a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++; //Increment human score
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
    } else {
        computerScore++; //Increment computer score
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
    }


}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice(); //Ask for human input
        const computerSelection = getComputerChoice(); //Get computer choice

        const result = playRound(humanSelection, computerSelection);


        const winPattern = `You win! ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)} beats ${computerSelection}`;
        const losePattern = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${humanSelection}`;

        if (result === winPattern) {
            humanScore++;
        } else if (result === losePattern) {
            computerScore++;
        }

        console.log(`Score after round ${i + 1}: You ${humanScore} - ${computerScore} Computer`);

    }

    //Declare the final winner
    if (humanScore > computerScore) {
        console.log(`Congratulations! You win the game with a score of ${humanScore} to ${computerScore}`)
    } else if (computerScore > humanScore) {
        console.log(`Sorry, you lose the game. The computer wins with a score of ${computerScore} to ${humanScore}`);
    } else {
        console.log(`The game is a tie with both scores at ${humanScore}.`);
    }
}



// Call playGame to start the game

playGame()
