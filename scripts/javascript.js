/**
 * @fileoverview Rock Paper Scissors game
 * @author James
 * @version 1.1.0
 * @date 23rd September 2025
 * @updated 16th October 2025
 * 
 * @description
 * Rock paper scissors game
 * For the Odin Project
 */

/**
 * Randomly returns computer choice for rock paper scissors
 * @returns random choice one of the following string values: “rock”, “paper” or “scissors”
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
 * @returns human player's choice as lower case string
 */
function getHumanChoice()
{
    return prompt("Throw Rock, Paper, or Scissors?: ").toLowerCase();
}

/**
 * Plays a single round of Rock Paper Scissors (RPS or じゃんけん)
 * @param {*} humanChoice rock paper scissors selected from command boxes  
 * @param {*} computerChoice random choice from getComputerChoice
 * @returns playerIsWinner boolean
 */
function playRound(humanChoice, computerChoice)
{
    let playerIsWinner = false;

    if (humanChoice === computerChoice)
    {
        roundResult.textContent = `Tie! You threw ${humanChoice} and I threw ${computerChoice}\n`;
        return playerIsWinner;
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
    }
    else
    {
        roundResult.textContent = `You Lose! ${computerChoice} beats ${humanChoice}\n`;
    }

    return playerIsWinner;
};

/**
 * Play Rock Scissors Paper Game
 * @param {*} humanChoice rock paper or scissors
 * @param {*} rounds defaults to 1
 * @returns 
 */
function playGame(rounds = 5)
{
    let humanScore = 0, computerScore = 0;

    for (let i = 0; i < rounds; i++)
    {
        currentScore.textContent = `Your Score: ${humanScore}, My Score: ${computerScore}\n`;
    }

    if (humanScore === computerScore)
    {
        gameResult.textContent = `Tie! ${humanScore} to ${computerScore}\n`;
        return;
    }

    const winner = (humanScore > computerScore) ? "You" : "Computer";

    gameResult.textContent = `${winner} won.\n`;
    gameResult.textContent += `Your score - ${humanScore}, Computer score - ${computerScore}\n`;
}

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
        playRound(button.id, getComputerChoice());
    });
});