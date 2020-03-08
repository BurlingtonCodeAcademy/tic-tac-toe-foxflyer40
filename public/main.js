/*****global Variables ****************************/
let startUp = document.getElementById('start')//Start Button
let playerUp = document.getElementById('turnIndicator')//Play Display
let instructionMessage = document.getElementById('instructions')//Instruction Line
let playerNamesIn = document.getElementById('saveNames')//enter 2 names button
let nameIn = document.getElementById('save')//enter 1 name button
let playerVsPlayer = document.getElementById('pvp')// game type chooser button
let playerVsComputer = document.getElementById('pvc')// game type chooser button
let xPlayer = document.getElementById('playerx')// player x name input
let oPlayer = document.getElementById('playero')// player o name input
let c0 = document.getElementById('cell-0')
let c1 = document.getElementById('cell-1')
let c2 = document.getElementById('cell-2')
let c3 = document.getElementById('cell-3')
let c4 = document.getElementById('cell-4')
let c5 = document.getElementById('cell-5')
let c6 = document.getElementById('cell-6')
let c7 = document.getElementById('cell-7')
let c8 = document.getElementById('cell-8')
let elapsedTime = document.getElementById('seconds')//Timer display number
let turnCounter = 1 // keep track of # of turns

let winConditions = {   // create win condition arrays  
  topRow: [c0, c1, c2],
  midRow: [c3, c4, c5],
  lowRow: [c6, c7, c8],
  leftCol: [c0, c3, c6],
  midCol: [c1, c4, c7],
  rightCol: [c2, c5, c8],
  lToRDiag: [c0, c4, c8],
  rToLDiag: [c6, c4, c2],
}

class Player {  // create player class objects
  constructor(name, turn, won, token) {
    this.name = name  //what is your name
    this.turn = turn  //is it your turn t/f
    this.won = won  // did you win -- NOT USED
    this.token = token  // what do you mark your square with
  }
}

class BoardSquare {  // create boardsquare class objects
  constructor(owner, active) {
    this.location = location  // global variable that maps to board element
    this.owner = owner  // whose token is in the square  = to board Element .textContent
    this.active = active  // clickable or not
  }
}

/****   Objects   *************************************************************** */
const playerX = new Player('Player X', false, false, 'X')
const playerO = new Player('Player O', false, false, 'O')

const cell0 = new BoardSquare(c0, '', true)
const cell1 = new BoardSquare(c1, '', true)
const cell2 = new BoardSquare(c2, '', true)
const cell3 = new BoardSquare(c3, '', true)
const cell4 = new BoardSquare(c4, '', true)
const cell5 = new BoardSquare(c5, '', true)
const cell6 = new BoardSquare(c6, '', true)
const cell7 = new BoardSquare(c7, '', true)
const cell8 = new BoardSquare(c8, '', true)

/****  functions **********************************************************************/



//startTimer =
function myTimer() {
  elapsedTime += 1
  document.getElementById('seconds').innerHTML = elapsedTime
}

gameTime = () => {
  setInterval(myTimer, 1000)
}

// stop timer
stopTimer = () => {
  clearInterval(gameTime)
}

//enable board - could be a single variable, do not need individual on-off switches
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

//disable board - could be a single variable, do not need individual on-off switches
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

// Computer now decides it's move - UNSUCCESSFUL
dl5500 = () => {
  // set up array and new array of selectable cells
  const cellArray = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
  let selectableCells = []

  console.log(selectableCells)

  // for each in array, if not owned push to new array of selectable cells
  cellArray.forEach(cell => {
    if (cell.textContent !== 'X' && cell.textContent !== 'O') {
      selectableCells.push(cell)
    }
  })
  console.log(selectableCells)

  // generate random number using length of new array
  let count = selectableCells.length
  console.log(count)

  randomNum = function (max, min) {
    return Math.floor(min + Math.random() * (max - min + 1))
  }
  let cellPicker = (randomNum(count, 1) - 1)


  console.log(selectableCells)
  console.log(cellPicker)
  console.log(selectableCells[cellPicker])
  //click cell picked - this should fire event listener for the cell
  selectableCells[cellPicker].click()


}



toggleTurnIndicator = () => {
  //winCalc()
  turnCounter += 1
  if (turnCounter === 10) {
    console.log(turnCounter + "turn")
    disableBoard()
    playerUp.textContent = 'This game is a DRAW!'
    instructionMessage.textContent =
      'This game lasted ' + elapsedTime + ' seconds. Refresh page for new game.'
    document.getElementById('timer').style.display = 'none'
  } else if (playerO.turn === true && playerO.name !== 'Dell Latitude 5500') {
    playerUp.textContent = playerX.name + ' - PLAY!'
    playerO.turn = false
    playerX.turn = true
  } else if (playerX.turn === true) {

    playerUp.textContent = playerO.name + ' - PLAY!'
    playerX.turn = false
    playerO.turn = true
    if (playerO.name === 'Dell Latitude 5500') {
      dl5500()
      playerUp.textContent = playerX.name + ' - PLAY!'
      console.log("in the turn counter")
      playerO.turn = false
      playerX.turn = true
    }
  }


}

//Checks to see if there is a winner 
winCalc = () => {
  for (let winSet of Object.values(winConditions)) {
    //filter out data sets that include an empty value = a winning set is all values filled
    if (winSet[0].textContent !== '') {
      // evaluate equivelency of data set
      if (
        winSet[0].textContent === winSet[1].textContent &&
        winSet[1].textContent === winSet[2].textContent
      ) {  //set win condition game display
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
winner1or2 = () => {
  disableBoard()
  if (playerX.turn === true) {
    playerUp.textContent = playerX.name + ' WON!'
  } else {
    playerUp.textContent = playerO.name + ' WINS!'
  }
  instructionMessage.textContent =
    'This game lasted ' + elapsedTime + ' seconds. Refresh page for new game.'
  document.getElementById('timer').style.display = 'none'
}

//  Game Play set up inputs********************************************************


let reset = () => {  // Intialized game conditions
  playerX.name = 'Player X'
  playerX.turn = false
  playerO.name = 'Player O'
  playerO.turn = false
  startUp.setAttribute('disabled', '')// start button not clickable
  document.getElementById('gameType').style.display = 'block'//show game type choosers
  document.getElementById('players').style.display = 'none'//hide enter 2 names
  document.getElementById('player').style.display = 'none'// hide enter 1 name
  document.getElementById('turnIndicator').style.display = 'none'// hide play display
  document.getElementById('instructions').style.display = 'block'//show instruction line
  document.getElementById('timer').style.display = 'none'// hide timer display
  instructionMessage.textContent = 'Select your Game Type' //instructions at start up
  disableBoard() // board is not clickable
  elapsedTime = 0 //initialize timer
}

reset()

playerVsComputer.addEventListener('click', function () {
  document.getElementById('gameType').style.display = 'none'
  document.getElementById('players').style.display = 'none'
  document.getElementById('player').style.display = 'block'
  document.getElementById('turnIndicator').style.display = 'none'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Enter your name:'
})

playerVsPlayer.addEventListener('click', function () {
  document.getElementById('gameType').style.display = 'none'
  document.getElementById('players').style.display = 'block'
  document.getElementById('player').style.display = 'none'
  document.getElementById('turnIndicator').style.display = 'none'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Enter player names then click Save Names'
})

playerNamesIn.addEventListener('click', function () {
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

nameIn.addEventListener('click', function () {
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

//     Game play - game live and proceeds by responding to click inputs

// start game - disable start button 
startUp.addEventListener('click', function () {
  startUp.setAttribute('disabled', '')
  enableBoard()
  document.getElementById('timer').style.display = 'block'
  instructionMessage.textContent = " Click in a square to place 'X' or 'O' "
  gameTime()
  playerX.turn = true
  playerUp.textContent = playerX.name + ' - PLAY!'
})

// add event listeners for board squares
c0.addEventListener('click', () => {
  if (cell0.active === true) {
    if (c0.textContent !== '') {
      alert('Please select an empty cell.')
    } else {
      if (playerX.turn === true) {
        cell0.owner = 'X'
        c0.textContent = playerX.token
      } else {
        cell0.owner = 'O'
        c0.textContent = playerO.token
      }
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
      if (playerX.turn === true) {
        cell1.owner = 'X'
        c1.textContent = playerX.token
      } else {
        cell1.owner = 'O'
        c1.textContent = playerO.token
      }
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
      if (playerX.turn === true) {
        cell2.owner = 'X'
        c2.textContent = playerX.token
      } else {
        cell2.owner = 'O'
        c2.textContent = playerO.token
      }
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
      if (playerX.turn === true) {
        cell3.owner = 'X'
        c3.textContent = playerX.token
      } else {
        cell3.owner = 'O'
        c3.textContent = playerO.token
      }
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
      if (playerX.turn === true) {
        cell4.owner = 'X'
        c4.textContent = playerX.token
      } else {
        cell4.owner = 'O'
        c4.textContent = playerO.token
      }
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
      if (playerX.turn === true) {
        cell5.owner = 'X'
        c5.textContent = playerX.token
      } else {
        cell5.owner = 'O'
        c5.textContent = playerO.token
      }
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
      if (playerX.turn === true) {
        cell6.owner = 'X'
        c6.textContent = playerX.token
      } else {
        cell6.owner = 'O'
        c6.textContent = playerO.token
      }
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
      if (playerX.turn === true) {
        cell7.owner = 'X'
        c7.textContent = playerX.token
      } else {
        cell7.owner = 'O'
        c7.textContent = playerO.token
      }
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
      if (playerX.turn === true) {
        cell8.owner = 'X'
        c8.textContent = playerX.token
      } else {
        cell8.owner = 'O'
        c8.textContent = playerO.token
      }
      winCalc()
      if (winCalc() === true) {
        winner1or2()
      } else {
        toggleTurnIndicator()
      }
    }
  }
})
