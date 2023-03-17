function playerChoice() {
  let playerOption = String(
    prompt('What is your choice? Rock, Paper, or Scissors?')
  )

  // Case Sensitivity
  playerOption = playerOption.toLowerCase()
  if (
    playerOption !== 'rock' &&
    playerOption !== 'paper' &&
    playerOption !== 'scissors'
  ) {
    return 'This is not a valid input. Please enter a valid answer'
  } else {
    return playerOption
  }
}

function getComputerChoice() {
  let computerOptions = ['rock', 'paper', 'scissors']
  let computerPick =
    computerOptions[Math.floor(Math.random() * computerOptions.length)]
  return computerPick
}

// Step 3: Play a single round of RPS
function playRound(playerSelection, computerSelection) {
  // Condition: Tie
  if (playerSelection === computerSelection) {
    return 'The result is a tie.'
    // Condition 1: Computer = Paper and Player = Rock
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    return `You lose. The computer selected ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }, and that beats your choice of ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`
    // Condition 2: Computer = Scissors and Player = Rock
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    return `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`
    // Condition 3: Computer = Paper and Player = Scissors
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    return `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`
    // Condition 4: Computer = Scissors and Player = Paper
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    return `You lose. The computer selected ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }, and that beats your choice of ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`
    // Condition 5: Computer = Rock and Player = Paper
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    return `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`
    // Condition 6: Computer = Rock and Player = Scissors
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    return `You lose. The computer selected ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }, and that beats your choice of ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`
  } else {
    return 'No round was played'
  }
}

// Step 4: New function that plays a round 5 times
function game(numRounds) {
  let roundResult

  for (let i = 0; i < numRounds; i++) {
    let playerSelection = playerChoice()
    let computerSelection = getComputerChoice()
    roundResult = playRound(playerSelection, computerSelection)
    console.log(roundResult)
  }

  return roundResult
}

game(5)
