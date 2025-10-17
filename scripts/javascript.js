/**
 * @fileoverview Rock Paper Scissors game
 * @author James
 * @version 1.1.0
 * @date 23rd September 2025
 * @updated 17th October 2025
 * 
 * @description
 * Rock paper scissors game
 * For the Odin Project
 */

/**
 * Randomly returns computer choice for rock paper scissors
 * @returns {string} random choice one of the following string values: “rock”, “paper” or “scissors”
 */
function getComputerChoice()
{
    const randomNumber = Math.ceil(Math.random() * 100);
    let choice;

    switch(true)
    {
        case randomNumber <= 33:
            choice = "rock";
            break;
        case randomNumber <= 66:
            choice = "paper";
            break;
        case randomNumber <= 100:
            choice = "scissors";
            break;
    }

    return choice;
}

/**
 * Gets human player's choice - assumes only rock, paper, or scissors will be inputted
 * @returns {string} human player's choice as lower case string
 */
function getHumanChoice()
{
    return prompt("Throw Rock, Paper, or Scissors?: ").toLowerCase();
}

/**
 * Plays a single round of Rock Paper Scissors (RPS or じゃんけん)
 * @param {string} humanChoice rock paper scissors selected from command boxes  
 * @param {string} computerChoice random choice from getComputerChoice
 * @returns {string} humanResult either 'tie' 'win' or 'lose'
 */
function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        roundResult.textContent = `Tie! You threw ${humanChoice} and I threw ${computerChoice}\n`;
        return 'tie';
    }
    else if (humanChoice === 'rock')
    {
        playerIsWinner = (computerChoice === 'scissors');     
    }
    else if (humanChoice === 'paper')
    {
        playerIsWinner = (computerChoice === 'rock');
    }
    else if (humanChoice === 'scissors')
    {
        playerIsWinner = (computerChoice === 'paper');
    }

    if (playerIsWinner)
    {
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}\n`;
        return 'win';
    }
    else
    {
        roundResult.textContent = `You Lose! ${computerChoice} beats ${humanChoice}\n`;
        return 'lose';
    }
};

/**
 * Play Rock Scissors Paper Game
 * @param {string} humanChoice
 * @param {string} computerChoice 
 * @param {number} [winningScore=5]
 * @returns 
 */
function playGame(humanChoice, computerChoice, winningScore = 5)
{
    let playerResult = playRound(humanChoice, computerChoice);

    if (playerResult === 'win')
    {
        humanScore++;
    }
    else if (playerResult === 'lose')
    {
        computerScore++;
    }
    
    currentScore.textContent = `Your Score: ${humanScore}, My Score: ${computerScore}\n`;

    if (humanScore === winningScore || computerScore === winningScore)
    {
        const winner = (humanScore > computerScore) ? "You" : "Computer";
        
        gameResult.textContent = `${winner} won.\n`;
        gameResult.textContent += `Your score - ${humanScore}, Computer score - ${computerScore}\n`;

        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

let humanScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("#btnContainer > button");
const results = document.querySelector("#resultsContainer");
const roundResult = document.createElement("span");
const currentScore = document.createElement("span");
const gameResult = document.createElement("span");

results.appendChild(roundResult);
results.appendChild(currentScore);
results.appendChild(gameResult);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id, getComputerChoice());
    });
});