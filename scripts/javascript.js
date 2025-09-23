/**
 * @fileoverview Rock Paper Scissors game
 * @author James
 * @version 1.0.0
 * @date 23rd September 2025
 * 
 * @description
 * Console based rock paper scissors game
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

    return choice
}

/**
 * Gets human player's choice - assumes only rock, paper, or scissors will be inputted
 * @returns human player's choice as lower case string
 */
function getHumanChoice()
{
    return prompt("Throw Rock, Paper, or Scissors?: ").toLowerCase()
}

/**
 * Play Rock Scissors Paper Game
 * @param {*} rounds defaults to 5
 * @returns 
 */
function playGame(rounds = 5)
{
    let humanScore = 0, computerScore = 0;
    let humanChoice, computerChoice;

    let playRound = function (humanChoice, computerChoice)
    {
        let playerIsWinner;

        if (humanChoice === computerChoice)
        {
            console.log(`Tie! You threw ${humanChoice} and I threw ${computerChoice}`);
            return
        }
        else if (humanChoice === 'rock')
        {
            playerIsWinner = (computerChoice === 'scissors');     
        }
        else if (humanChoice === 'paper')
        {
            playerIsWinner = (computerChoice === 'rock')
        }
        else if (humanChoice === 'scissors')
        {
            playerIsWinner = (computerChoice === 'paper');
        }

        if (playerIsWinner)
        {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else
        {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        return
    };

    for (let i = 0; i < rounds; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore === computerScore)
    {
        console.log(`Tie! ${humanScore} to ${computerScore}`);
        return
    }

    const winner = (humanScore > computerScore) ? "You" : "Computer";

    console.log(`${winner} won.`);
    console.log(`Your score - ${humanScore}, Computer score - ${computerScore}`);
    
}

console.log(playGame());
