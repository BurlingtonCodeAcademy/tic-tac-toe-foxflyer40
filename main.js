/*****global Variables ****************************/
let startUp = document.getElementById('start')
let playerUp = document.getElementById('turnIndicator')
let instructionMessage = document.getElementById('instructions')
let boardOnOff = document.getElementsByClassName('board')
let playerNamesIn = document.getElementById('saveNames')
let nameIn = document.getElementById('save')
let playerVsPlayer = document.getElementById('pvp')
let playerVsComputer = document.getElementById('pvc')
let xPlayer = document.getElementById('playerx')
let oPlayer = document.getElementById('playero')
let c0 = document.getElementById('cell-0')
let c1 = document.getElementById('cell-1')
let c2 = document.getElementById('cell-2')
let c3 = document.getElementById('cell-3')
let c4 = document.getElementById('cell-4')
let c5 = document.getElementById('cell-5')
let c6 = document.getElementById('cell-6')
let c7 = document.getElementById('cell-7')
let c8 = document.getElementById('cell-8')
let elapsedTime = 0

let turnCounter = 1 //initialize turn counter

let winConditions = {
  // create win condition arrays
  topRow: [c0, c1, c2],
  midRow: [c3, c4, c5],
  lowRow: [c6, c7, c8],
  leftCol: [c0, c3, c6],
  midCol: [c1, c4, c7],
  rightCol: [c2, c5, c8],
  lToRDiag: [c0, c4, c8],
  rToLDiag: [c6, c4, c2],
}

class Player {
  constructor(name, turn, won, token) {
    this.name = name
    this.turn = turn
    this.won = won
    this.token = token
  }
}

class BoardSquare {
  constructor(owner, active) {
    this.owner = owner
    this.active = active
  }
}

/****   Objects   *************************************************************** */
const playerX = new Player('Player X', false, false, 'X')
const playerO = new Player('Player O', false, false, 'O')

const cell0 = new BoardSquare('', true)
const cell1 = new BoardSquare('', true)
const cell2 = new BoardSquare('', true)
const cell3 = new BoardSquare('', true)
const cell4 = new BoardSquare('', true)
const cell5 = new BoardSquare('', true)
const cell6 = new BoardSquare('', true)
const cell7 = new BoardSquare('', true)
const cell8 = new BoardSquare('', true)

/****  functions **********************************/

let dl5500 = () => {
      //create new array from 
     // create new array from scan of cell objects above
     //use random num generator to select from array new var =compSquare
     // 
     compSquare.textContent = "O"
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
}

let enableBoard = () => {
  cell0.active = true
  cell1.active = true
  cell2.active = true
  cell3.active = true
  cell4.active = true
  cell5.active = true
  cell6.active = true
  cell7.active = true
  cell8.active = true
}

let disableBoard = () => {
  cell0.active = false
  cell1.active = false
  cell2.active = false
  cell3.active = false
  cell4.active = false
  cell5.active = false
  cell6.active = false
  cell7.active = false
  cell8.active = false
}

let reset = () => {
  playerX.name = 'Player X'
  playerX.turn = false
  playerX.won = false
  playerO.name = 'Player O'
  playerO.turn = false
  playerO.won = false
  startUp.setAttribute('disabled', '')
  document.getElementById('gameType').style.display = 'block'
  document.getElementById('players').style.display = 'none'
  document.getElementById('player').style.display = 'none'
  document.getElementById('turnIndicator').style.display = 'none'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Select your Game Type'
  disableBoard()
  elapsedTime = 0
}

// check turnCounter =  if even number, player 2 turn / if odd number, player 1 turn
let toggleTurnIndicator = () => {
  winCalc()
  if (turnCounter % 2 === 0 && playerO.name === 'Dell Latitude 5500') {
    dl5500()
  } else {
    playerUp.textContent = playerO.name + ' - PLAY!'
  }
  if (turnCounter % 2 !== 0) {
    playerUp.textContent = playerX.name + ' - PLAY!'
  }
  turnCounter += 1
  // if turnCounter is = to all squares full then run Draw message
  console.log(turnCounter) //process check
}

// if player 1 print X - if player 2 print O
let printXorO = () => {
  if (turnCounter % 2 === 0) {
    squareClicked = 'X'
  } else {
    squareClicked = 'O'
  }
}

//Checks to see if there is a winner ---------------------------------------------------------------------------------------------------------------------
let winCalc = () => {
  for (let winSet of Object.values(winConditions)) {
    //filter out data sets that include an empty value = a winning set is all values filled
    if (winSet[0].textContent !== '') {
      // evaluate equivelency of data set
      if (
        winSet[0].textContent === winSet[1].textContent &&
        winSet[1].textContent === winSet[2].textContent
      ) {
        winSet[0].style.setProperty('color', 'red')
        winSet[1].style.setProperty('color', 'red')
        winSet[2].style.setProperty('color', 'red')
        winSet[0].style.setProperty('background-color', 'yellow')
        winSet[1].style.setProperty('background-color', 'yellow')
        winSet[2].style.setProperty('background-color', 'yellow')
        return true
      }
    }
  }
}

// Win condition satisfied
let winner1or2 = () => {
  disableBoard()
  if (turnCounter % 2 === 0) {
    playerUp.textContent = playerX.name + ' WINS!'
  } else {
    playerUp.textContent = playerO.name + ' WINS!'
  }
  instructionMessage.textContent = 'Refresh page for new game.'
}

//let startTimer =

function myTimer() {
  elapsedTime += 1
  document.getElementById('seconds').innerHTML = elapsedTime
}

/********Game Play****************************** */
reset()

playerVsComputer.addEventListener('click', function() {
  document.getElementById('gameType').style.display = 'none'
  document.getElementById('players').style.display = 'none'
  document.getElementById('player').style.display = 'block'
  document.getElementById('turnIndicator').style.display = 'none'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Enter your name:'
})

playerVsPlayer.addEventListener('click', function() {
  document.getElementById('gameType').style.display = 'none'
  document.getElementById('players').style.display = 'block'
  document.getElementById('player').style.display = 'none'
  document.getElementById('turnIndicator').style.display = 'none'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Enter player names then click Save Names'
})

playerNamesIn.addEventListener('click', function() {
  if (xPlayer.value === '') {
    playerX.name = 'Player X'
  } else {
    playerX.name = xPlayer.value
  }
  if (oPlayer.value === '') {
    playerO.name = 'Player O'
  } else {
    playerO.name = oPlayer.value
  }
  document.getElementById('gameType').style.display = 'none'
  document.getElementById('players').style.display = 'none'
  document.getElementById('player').style.display = 'none'
  document.getElementById('turnIndicator').style.display = 'block'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Click start button to begin'
  startUp.removeAttribute('disabled', '')
})

nameIn.addEventListener('click', function() {
  if (xPlayer.value === '') {
    playerX.name = 'Player X'
  } else {
    playerX.name = xPlayer.value
  }
  playerO.name = 'Dell Latitude 5500'
  document.getElementById('gameType').style.display = 'none'
  document.getElementById('players').style.display = 'none'
  document.getElementById('player').style.display = 'none'
  document.getElementById('turnIndicator').style.display = 'block'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Click start button to begin'
  startUp.removeAttribute('disabled', '')
})

// start game - disable start button - run turn toggle function
startUp.addEventListener('click', function() {
  startUp.setAttribute('disabled', '')
  enableBoard()
  instructionMessage.textContent = " Click in a square to place 'X' or 'O' "
  toggleTurnIndicator()
  setInterval(myTimer, 1000)
})

// add event listeners for board squares
c0.addEventListener('click', () => {
  if (cell0.active === true) {
    if (c0.textContent !== '') {
      alert('Please select an empty cell.')
    } else {
      printXorO()
      c0.textContent = squareClicked
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
      }
    }
  }
})

c1.addEventListener('click', () => {
  if (cell1.active === true) {
    if (c1.textContent !== '') {
      alert('Please select an empty cell.')
    } else {
      printXorO()
      c1.textContent = squareClicked
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
      }
    }
  }
})

c2.addEventListener('click', () => {
  if (cell2.active === true) {
    if (c2.textContent !== '') {
      alert('Please select an empty cell.')
    } else {
      printXorO()
      c2.textContent = squareClicked
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
      }
    }
  }
})

c3.addEventListener('click', () => {
  if (cell3.active === true) {
    if (c3.textContent !== '') {
      alert('Please select an empty cell.')
    } else {
      printXorO()
      c3.textContent = squareClicked
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
      }
    }
  }
})

c4.addEventListener('click', () => {
  if (cell4.active === true) {
    if (c4.textContent !== '') {
      alert('Please select an empty cell.')
    } else {
      printXorO()
      c4.textContent = squareClicked
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
      }
    }
  }
})

c5.addEventListener('click', () => {
  if (cell5.active === true) {
    if (c5.textContent !== '') {
      alert('Please select an empty cell.')
    } else {
      printXorO()
      c5.textContent = squareClicked
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
      }
    }
  }
})

c6.addEventListener('click', () => {
  if (cell6.active === true) {
    if (c6.textContent !== '') {
      alert('Please select an empty cell.')
    } else {
      printXorO()
      c6.textContent = squareClicked
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
      }
    }
  }
})

c7.addEventListener('click', () => {
  if (cell7.active === true) {
    if (c7.textContent !== '') {
      alert('Please select an empty cell.')
    } else {
      printXorO()
      c7.textContent = squareClicked
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
      }
    }
  }
})

c8.addEventListener('click', () => {
  if (cell8.active === true) {
    if (c8.textContent !== '') {
      alert('Please select an empty cell.')
    } else {
      printXorO()
      c8.textContent = squareClicked
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
      }
    }
  }
})
