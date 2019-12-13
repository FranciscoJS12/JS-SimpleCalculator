// Declare number array for screen display
let currNumber = [];
let prevNumber = [];
let operator;
let opNum = Number.NaN;

// Dsiplay something on screen
function displayInScreen(arr) {
  // Convert array to number
  let arrToNum = parseInt(arr.join(''), 10);

  // Check if is 0 or NaN or string
  if (arrToNum === 0 || typeof(arrToNum) !== 'number' || Number.isNaN(arrToNum))  {
    document.querySelector('.screen').innerText = '0';
  } else {
    document.querySelector('.screen').innerText = arrToNum;
  }
  // Screen max capacity is 18 characters
}
displayInScreen(currNumber);

// Operations Object
const result = {
  plus : function(prevNumber, currNumber) {return prevNumber + currNumber},
  minus : function(prevNumber, currNumber) {return prevNumber - currNumber},
  multiply : function(prevNumber, currNumber) {return prevNumber * currNumber},
  divide : function(prevNumber, currNumber) {return prevNumber / currNumber},
}


// Button events
document.querySelector('.calculator').addEventListener('click', function(event) {
  if(event.target.tagName === 'BUTTON') {
    // console.log(`Button ${event.target.innerText} pressed`);
    pressed = event.target.innerText;
    
    switch (pressed) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        currNumber.push(pressed);
        break;
      case '←':
        currNumber.pop();
        break;
      case 'C':
        currNumber.length = 0;
        prevNumber.length = 0;
        opNum = NaN;
        break;
      case '+':
        prevNumber.push(parseInt(currNumber.join(''), 10));
        operator = '+';
        currNumber.length = 0;
        break;
      case '-':
        prevNumber.push(parseInt(currNumber.join(''), 10));
        operator = '-';
        currNumber.length = 0;
        break;
      case 'x':
        prevNumber.push(parseInt(currNumber.join(''), 10));
        operator = '*';
        currNumber.length = 0;
        break;
      case '÷':
        prevNumber.push(parseInt(currNumber.join(''), 10));
        operator = '/';
        currNumber.length = 0;
        break;
      case '=':
        currNum = parseInt(currNumber.join(''), 10);
        prevNum = parseInt(currNumber.join(''), 10);
        if (isNaN(opNum)) {
          opNum = currNum;
        }
        switch (operator) {
          case '+':
            currNumber.length = 0;
            currNumber.push(result.plus(prevNumber[0], opNum));
            break;
          case '-':
            currNumber.length = 0;
            currNumber.push(result.minus(prevNumber[0], opNum));
            break;
          case '*':
            currNumber.length = 0;
            currNumber.push(result.multiply(prevNumber[0], opNum));
            break;
          case '/':
            currNumber.length = 0;
            currNumber.push(result.divide(prevNumber[0], opNum));
            break;
        }
        prevNumber.length = 0;
        prevNumber.push(currNumber[0]);
        break;
    }
    displayInScreen(currNumber);
  }
  event.stopPropagation();
});