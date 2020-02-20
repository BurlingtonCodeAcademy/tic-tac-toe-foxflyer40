/*****global Variables ****************************/
let startUp = document.getElementById('start');         //fetch start button
let playerUp = document.getElementById('turnIndicator') //fetch turn indicator text holder
let boardSquare = document.getElementsByClassName('board')  //fetch board
let c0 = document.getElementById('cell-0')          //fetch board squares 
let c1 = document.getElementById('cell-1')
let c2 = document.getElementById('cell-2')
let c3 = document.getElementById('cell-3')
let c4 = document.getElementById('cell-4')
let c5 = document.getElementById('cell-5')
let c6 = document.getElementById('cell-6')
let c7 = document.getElementById('cell-7')
let c8 = document.getElementById('cell-8')


let turnCounter = 1  //initialize turn counter

/****  functions **********************************/

// check turnCounter =  if even number, player 2 turn / if odd number, player 1 turn
let toggleTurnIndicator = () => {
      if (turnCounter % 2 === 0) {
            playerUp.textContent = 'Player Two - PLAY!'
      } else {
            playerUp.textContent = 'Player One - PLAY!'
      }
      turnCounter += 1
}

/********Game Play****************************** */

// start game - disable start button - run turn toggle function
startUp.addEventListener('click', function () {
      startUp.setAttribute("disabled", "")
      toggleTurnIndicator()
})


// add event listeners for board squares