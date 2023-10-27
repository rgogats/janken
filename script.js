const buttons = document.querySelectorAll("button");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const roundsLeft = document.querySelector("#counter");
const computer = document.querySelector("#computer");
const player = document.querySelector("#player");
const resultDisplay = document.querySelector("#result");

const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

const game = (rounds) => {
        let playerScore = 0;
        let computerScore = 0;

        roundsLeft.innerText = `Rounds left: ${rounds}`;
        computer.innerText = `Computer: ${computerScore}`;
        player.innerText = `Player: ${playerScore}`;

        const playRound = (playerChoice) => {
            console.log(rounds);
            let computerChoice = getComputerChoice();
            console.log("computer choice", computerChoice);

            while (rounds > 0) {
                const result = 
                    // choices are same, tie
                    computerChoice == playerChoice ? 
                    (
                        resultDisplay.innerText = `You both chose ${playerChoice}. It's a Tie`
                    )
                    // winning matches
                    : computerChoice == "Rock" && playerChoice == "Paper" || computerChoice == "Paper" && playerChoice == "Scissors"
                    || computerChoice == "Scissors" && playerChoice == "Rock" ? 
                    (
                        playerScore += 1,
                        resultDisplay.innerText = `${playerChoice} beats ${computerChoice}. You win this round`
                    )
                    // losing matches
                    : computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Paper" && playerChoice == "Rock" 
                    || computerChoice == "Scissors" && playerChoice == "Paper" ? 
                    (
                        computerScore += 1,
                        resultDisplay.innerText = `${computerChoice} beats ${playerChoice}. You lose this round`
                    )
                    // error state
                    : "Something went wrong";
                --rounds;
                console.log("rounds:", rounds);
                roundsLeft.innerText = `Rounds left: ${rounds}`;
                computer.innerText = `Computer: ${computerScore}`;
                player.innerText = `Player: ${playerScore}`;

                rounds == 0 ? 
                (
                    computerScore > playerScore ? resultDisplay.innerText = "Computer wins"
                    : computerScore < playerScore ? resultDisplay.innerText = "Player wins"
                    : "Tie"
                ) : "Something went wrong";
                
                return result;
            }
        }

        rockBtn.addEventListener("click", function() {
            console.log("Rock");
            const playerChoice = "Rock";
            const result = playRound(playerChoice);
        });

        paperBtn.addEventListener("click", function() {
            console.log("Paper");
            const playerChoice = "Paper";
            const result = playRound(playerChoice);
        });

        scissorsBtn.addEventListener("click", function() {
            console.log("Scissors");
            const playerChoice = "Scissors";
            const result = playRound(playerChoice);
        });
}

game(5);