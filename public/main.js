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
let sPlayer = document.getElementById('player1')// single player input
let c0 = document.getElementById('cell-0')
let c1 = document.getElementById('cell-1')
let c2 = document.getElementById('cell-2')
let c3 = document.getElementById('cell-3')  // cell elements and array
let c4 = document.getElementById('cell-4')
let c5 = document.getElementById('cell-5')
let c6 = document.getElementById('cell-6')
let c7 = document.getElementById('cell-7')
let c8 = document.getElementById('cell-8')
const cellArray = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
let elapsedTime = document.getElementById('seconds')//Timer display number
let turnCounter = 1 // keep track of # of turns
let boardActive = false

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
    this.token = token  // what do you mark your square with
  }
}

/****   Player Object  *************************************************************** */
const playerX = new Player('', false, false, 'X')
const playerO = new Player('', false, false, 'O')


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

//enable board 
let enableBoard = () => {
  boardActive = true
}
//disable board 
let disableBoard = () => {
  boardActive = false
}

// Computer now decides it's move 
dl5500 = () => {
  // set up array and new array of selectable cells
  let selectableCells = []
  // for each in array, if not owned push to new array of selectable cells
  cellArray.forEach(cell => {
    if (cell.textContent !== 'X' && cell.textContent !== 'O') {
      selectableCells.push(cell)
    }
  })
  // generate random number using length of new array
  let count = selectableCells.length
  randomNum = function (max, min) {
    return Math.floor(min + Math.random() * (max - min + 1))
  }
  let cellPicker = (randomNum(count, 1) - 1)
  //click cell picked - this should fire event listener for the cell
  selectableCells[cellPicker].click()
}
// switch players
toggleTurnIndicator = () => {
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
// Intialize game conditions
let reset = () => {
  playerX.name = ''
  playerX.turn = false
  playerO.name = ''
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
  document.getElementById('player').style.display = 'block'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Enter your name:'
})

playerVsPlayer.addEventListener('click', function () {
  document.getElementById('gameType').style.display = 'none'
  document.getElementById('players').style.display = 'block'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Enter player names then click Save Names'
})

// set up player names from input - use generic if no input
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
  document.getElementById('players').style.display = 'none'
  document.getElementById('turnIndicator').style.display = 'block'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Click start button to begin'
  startUp.removeAttribute('disabled', '')
})
// setup player x name and computer name for single player game
nameIn.addEventListener('click', function () {
  if (sPlayer.value !== '') {
    playerX.name = sPlayer.value
  } else {
    playerX.name = 'Player X'
  }
  playerO.name = 'Dell Latitude 5500'
  document.getElementById('player').style.display = 'none'
  document.getElementById('turnIndicator').style.display = 'block'
  document.getElementById('instructions').style.display = 'block'
  instructionMessage.textContent = 'Click start button to begin'
  startUp.removeAttribute('disabled', '')
})

//Game play - game is live and proceeds by responding to click inputs

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

// add event listener to each cell element
cellArray.forEach(cell => {
  cell.addEventListener('click', () => {
    if (boardActive === true) {
      if (cell.textContent !== '') {
        alert('Please select an empty cell.')
      } else {
        if (playerX.turn === true) {
          cell.textContent = playerX.token
        } else {
          cell.textContent = playerO.token
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
})
