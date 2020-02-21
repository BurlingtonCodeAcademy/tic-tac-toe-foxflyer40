/*****global Variables ****************************/
let startUp = document.getElementById('start')         //fetch start button
let playerUp = document.getElementById('turnIndicator') //fetch turn indicator text holder
let boardSquare = document.getElementsByClassName('board')  //fetch board
let c0 = document.getElementById('cell-0')          //fetch board squares 
let c1 = document.getElementById('cell-1')                  //
let c2 = document.getElementById('cell-2')                  //
let c3 = document.getElementById('cell-3')                  //
let c4 = document.getElementById('cell-4')                  //
let c5 = document.getElementById('cell-5')                  //
let c6 = document.getElementById('cell-6')                  //
let c7 = document.getElementById('cell-7')                  //
let c8 = document.getElementById('cell-8')                  //


let turnCounter = 1;  //initialize turn counter

let winConditions = {
      'topRow': [c0, c1, c2],
      'midRow': [c3, c4, c5],
      'lowRow': [c6, c7, c8],
      'leftCol': [c0, c3, c6],
      'midCol': [c1, c4, c7],
      'rightCol': [c2, c5, c8],
      'lToRDiag': [c0, c4, c8],
      'rToLDiag': [c6, c4, c2]
}


/****  functions **********************************/

// check turnCounter =  if even number, player 2 turn / if odd number, player 1 turn
let toggleTurnIndicator = () => {
      winCalc();
      if (turnCounter % 2 === 0) {
            playerUp.textContent = 'Player Two-(O) - PLAY!'
      } else {
            playerUp.textContent = 'Player One-(X) - PLAY!'
      };
      turnCounter += 1;
};


// if player 1 print X - if player 2 print O
let printXorO = () => {
      if (turnCounter % 2 === 0) {
            squareClicked = 'X'
      } else {
            squareClicked = 'O'
      };
};
 
//Checks to see if there is a winner ---------------------------------------------------------------------------------------------------------------------
let winCalc = () => {
      for (let winSet of Object.values(winConditions)) {
            //filter out data sets that include an empty value = a winning set is all values filled
            if (winSet[0].textContent !== "") {
                  // evaluate equivelency of data set
                  if (winSet[0].textContent === winSet[1].textContent && winSet[1].textContent === winSet[2].textContent) {
                        winSet[0].style.setProperty('color', 'red');
                        winSet[1].style.setProperty('color', 'red');
                        winSet[2].style.setProperty('color', 'red'); 
                        winSet[0].style.setProperty('background-color', 'yellow');
                        winSet[1].style.setProperty('background-color', 'yellow');
                        winSet[2].style.setProperty('background-color', 'yellow'); 
                        return true;
                  }
            }
      }
} 

// Win condition satisfied
let winner1or2 = () => {
      if (turnCounter % 2 === 0) {
            playerUp.textContent = 'Player One-(X) WINS!'
      } else {
            playerUp.textContent = 'Player Two-(O) WINS!'
      };
      process.exit()
};

/********Game Play****************************** */

// start game - disable start button - run turn toggle function
startUp.addEventListener('click', function () {
      startUp.setAttribute("disabled", "")
      toggleTurnIndicator()
}) 


// add event listeners for board squares
c0.addEventListener('click', () => {
      if (c0.textContent !== "") {
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
})

c1.addEventListener('click', () => {
      if (c1.textContent !== "") {
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
})

c2.addEventListener('click', () => {
      if (c2.textContent !== "") {
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
})

c3.addEventListener('click', () => {
      if (c3.textContent !== "") {
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
})

c4.addEventListener('click', () => {
      if (c4.textContent !== "") {
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
})

c5.addEventListener('click', () => {
      if (c5.textContent !== "") {
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
})

c6.addEventListener('click', () => {
      if (c6.textContent !== "") {
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
})

c7.addEventListener('click', () => {
      if (c7.textContent !== "") {
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
})

c8.addEventListener('click', () => {
      if (c8.textContent !== "") {
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
})