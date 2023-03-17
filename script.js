// Step 1: Variable for player choice
let playerChoice = 'rock'

// Step 2: Function for Computer Choice
function getComputerChoice() {
  let computerOptions = ['rock', 'paper', 'scissors']
  let computerPick =
    computerOptions[Math.floor(Math.random() * computerOptions.length)]
  return computerPick
}

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
let result = playRound()

// Step 4: New function that plays a round 5 times
function game(numRounds) {
  for (let i = 0; i < 5; i++) {
    let playerChoice = 'rock'
    let computerSelection = getComputerChoice()
    console.log(playRound(playerChoice, computerSelection))
    let result = playRound()
  }
  return result
}

game()
