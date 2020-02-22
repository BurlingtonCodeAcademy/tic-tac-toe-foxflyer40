// const readline = require('readline');
// const readlineInterface = readline.createInterface(process.stdin, process.stdout);

// function ask(questionText) {
//   return new Promise((resolve, reject) => {
//     readlineInterface.question(questionText, resolve);
//   });
// };

/*****global Variables ****************************/
let startUp = document.getElementById('start')         //fetch start button
let playerUp = document.getElementById('turnIndicator') //fetch turn indicator text holder
let instructionMessage = document.getElementById('instructions')  //fetch instruction line
let boardOnOff = document.getElementsByClassName('board')  //fetch board
let playerNamesIn = document.getElementById('saveNames')
let nameIn = document.getElementById('save')
let typeOfGame = document.getElementById('submit')
let xPlayer = (document.getElementById('playerx'))
let oPlayer = (document.getElementById('playero'))
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

let winConditions = {                 // create win condition arrays
      'topRow': [c0, c1, c2],
      'midRow': [c3, c4, c5],
      'lowRow': [c6, c7, c8],
      'leftCol': [c0, c3, c6],
      'midCol': [c1, c4, c7],
      'rightCol': [c2, c5, c8],
      'lToRDiag': [c0, c4, c8],
      'rToLDiag': [c6, c4, c2]
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
const playerX = new Player("Player X", false, false, "X")
const playerO = new Player("Player O", false, false, "O")

const cell0 = new BoardSquare("", true)
const cell1 = new BoardSquare("", true)
const cell2 = new BoardSquare("", true)
const cell3 = new BoardSquare("", true)
const cell4 = new BoardSquare("", true)
const cell5 = new BoardSquare("", true)
const cell6 = new BoardSquare("", true)
const cell7 = new BoardSquare("", true)
const cell8 = new BoardSquare("", true)


/****  functions **********************************/

let reset = () => {
      playerX.name = "Player X";
      playerX.turn = false;
      playerX.won = false;
      playerO.name = "Player O";
      playerO.turn = false;
      playerO.won = false;
      startUp.setAttribute("disabled", "");
      document.getElementById("gameType").style.display = "none";
      document.getElementById("players").style.display = "block";
      document.getElementById("player").style.display = "none";
      document.getElementById("turnIndicator").style.display = "none";
      document.getElementById("instructions").style.display = "none";
}


// check turnCounter =  if even number, player 2 turn / if odd number, player 1 turn
let toggleTurnIndicator = () => {
      winCalc();
      if (turnCounter % 2 === 0) {
            playerUp.textContent = playerO.name + ' - PLAY!'
      } else {
            playerUp.textContent = playerX.name + ' - PLAY!'
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
            playerUp.textContent = playerX.name + ' WINS!'
      } else {
            playerUp.textContent = playerO.name + ' WINS!'
      };
      instructionMessage.textContent = "Refresh page for new game.";
};

/********Game Play****************************** */
reset()
playerNamesIn.addEventListener('click', function () {
      playerX.name = xPlayer.value
      playerO.name = oPlayer.value
      document.getElementById("gameType").style.display = "none";
      document.getElementById("players").style.display = "none";
      document.getElementById("player").style.display = "none";
      document.getElementById("turnIndicator").style.display = "block";
      document.getElementById("instructions").style.display = "block";
})




// start game - disable start button - run turn toggle function
startUp.addEventListener('click', function () {
      startUp.setAttribute("disabled", "");
      instructionMessage.textContent = " Click in a square to place 'X' or 'O' "
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