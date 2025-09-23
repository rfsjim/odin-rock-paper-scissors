/**
 * @fileoverview Rock Paper Scissors game
 * @author James  <5404425+rfsjim@users.noreply.github.com>
 * @version 0.0.1
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

console.log(getComputerChoice());
