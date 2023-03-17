// Step 1: Variable for player choice
let playerChoice = 'rock'

// Step 2: Function for Computer Choice
function getComputerChoice() {
  let computerOptions = ['rock', 'paper', 'scissors']
  let computerSelect =
    computerOptions[Math.floor(Math.random() * computerOptions.length)]
  console.log(computerSelect)
  return computerSelect
}

getComputerChoice()
