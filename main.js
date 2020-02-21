/*****global Variables ****************************/
let startUp = document.getElementById('start');         //fetch start button
let playerUp = document.getElementById('turnIndicator'); //fetch turn indicator text holder
let boardSquare = document.getElementsByClassName('board');  //fetch board
let c0 = document.getElementById('cell-0');          //fetch board squares 
let c1 = document.getElementById('cell-1');                  //
let c2 = document.getElementById('cell-2');                  //
let c3 = document.getElementById('cell-3');                  //
let c4 = document.getElementById('cell-4');                  //
let c5 = document.getElementById('cell-5');                  //
let c6 = document.getElementById('cell-6');                  //
let c7 = document.getElementById('cell-7');                  //
let c8 = document.getElementById('cell-8');                  //


let turnCounter = 1;  //initialize turn counter

let winConditions = {
      'topRow': ("c0", "c1", "c2"),
      'midRow': ("c3", "c4", "c5"),
      'lowRow': ("c6", "c7", "c8"),
      'leftCol': ('c0', 'c3', "c6"),
      'midCol': ('c1', 'c4', 'c7'),
      'rightCol': ('c2', 'c5', 'c8'),
      'lToRDiag': ('c0', 'c4', 'c8'),
      'rToLDiag': ('c6', 'c4', 'c2')
    };

/****  functions **********************************/

// check turnCounter =  if even number, player 2 turn / if odd number, player 1 turn
let toggleTurnIndicator = () => {
      winCalc();
      if (turnCounter % 2 === 0) {
            playerUp.textContent = 'Player Two - PLAY!'
      } else {
            playerUp.textContent = 'Player One - PLAY!'
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

let winCalc = () => {
      for (let winSet of Object.values(winConditions)) {
if (winSet[0].textContent !== "") {
      
}
      }
      // function winCheck() {
      //       //for every index in every element in the array created by winCombos keys
      //       for (let combo of Object.values(winCombos)) {
      //         //Does not set off alert when all cells are blank
              if (combo[0].textContent !== '') {
                //If they are all equal the same thing
                if (combo[0].textContent === combo[1].textContent && combo[1].textContent === combo[2].textContent) {
                  combo[0].style.setProperty('text-decoration', 'line-through');
                  combo[1].style.setProperty('text-decoration', 'line-through');
                  combo[2].style.setProperty('text-decoration', 'line-through');
          
                  return true;
                }
              }
            }
          }


      if ((c0.textContent === c1.textContent && c1.textContent === c2.textContent) ||
            (c0.textContent === c1.textContent && c1.textContent === c2.textContent) ||
            (c3.textContent === c4.textContent && c4.textContent === c5.textContent) ||
            (c6.textContent === c7.textContent && c7.textContent === c8.textContent) ||
            (c0.textContent === c3.textContent && c3.textContent === c6.textContent) ||
            (c1.textContent === c4.textContent && c4.textContent === c7.textContent) ||
            (c2.textContent === c5.textContent && c5.textContent === c8.textContent) ||
            (c0.textContent === c4.textContent && c4.textContent === c8.textContent) ||
            (c6.textContent === c4.textContent && c4.textContent === c2.textContent)) {
            alert('Winner')
      }
}




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
            toggleTurnIndicator()
      }
})

c1.addEventListener('click', () => {
      if (c1.textContent !== "") {
            alert('Please select an empty cell.')
      } else {
            printXorO()
            c1.textContent = squareClicked
            toggleTurnIndicator()
      }
})

c2.addEventListener('click', () => {
      if (c2.textContent !== "") {
            alert('Please select an empty cell.')
      } else {
            printXorO()
            c2.textContent = squareClicked
            toggleTurnIndicator()
      }
})

c3.addEventListener('click', () => {
      if (c3.textContent !== "") {
            alert('Please select an empty cell.')
      } else {
            printXorO()
            c3.textContent = squareClicked
            toggleTurnIndicator()
      }
})

c4.addEventListener('click', () => {
      if (c4.textContent !== "") {
            alert('Please select an empty cell.')
      } else {
            printXorO()
            c4.textContent = squareClicked
            toggleTurnIndicator()
      }
})

c5.addEventListener('click', () => {
      if (c5.textContent !== "") {
            alert('Please select an empty cell.')
      } else {
            printXorO()
            c5.textContent = squareClicked
            toggleTurnIndicator()
      }
})

c6.addEventListener('click', () => {
      if (c6.textContent !== "") {
            alert('Please select an empty cell.')
      } else {
            printXorO()
            c6.textContent = squareClicked
            toggleTurnIndicator()
      }
})

c7.addEventListener('click', () => {
      if (c7.textContent !== "") {
            alert('Please select an empty cell.')
      } else {
            printXorO()
            c7.textContent = squareClicked
            toggleTurnIndicator()
      }
})

c8.addEventListener('click', () => {
      if (c8.textContent !== "") {
            alert('Please select an empty cell.')
      } else {
            printXorO()
            c8.textContent = squareClicked
            toggleTurnIndicator()
      }
})