// Step 1: Variable for player choice

// Step 2: Function for Computer Choice
function getComputerChoice() {
  let computerOptions = ['rock', 'paper', 'scissors']
  let computerPick =
    computerOptions[Math.floor(Math.random() * computerOptions.length)]
  return computerPick
}

let playerChoice = 'rock'
let computerSelection = getComputerChoice()

// Step 3: Play a single round of RPS
function playRound(playerChoice, computerSelection) {
  if (playerChoice === computerSelection) {
    return 'The result is a tie.'
  } else if (computerSelection === 'paper') {
    return `You lose. ${computerSelection} beats ${playerChoice}`
  } else if (computerSelection === 'scissors') {
    return `You win! ${playerChoice} beats ${computerSelection}`
  } else {
    return 'No round was played'
  }
}

console.log(playRound(playerChoice, computerSelection))
