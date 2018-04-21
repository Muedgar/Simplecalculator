function imput(numberClicked, a, b, c, d) {
  // return operator left operand right operand

  // calculate to update these values above
  // calculator.
  //input
  // listeners
  // listen all pressedkey and return an array containing all of them.
  var objects = {
    number : []
  }
  var left = {
    leftOperand : [],
    sortedLeftOperand : []
  }
  function listenNumbersPressed(key) {
    // select a key pressed
    // update in an array
    objects.number.push(key);
  }
  var arrayToSort = objects.number;
  // listen for operand
    var operatorResult = 'divide';
  // listen for operator left
    var operandLeftResult = operandLeftResult(arrayToSort);

    function operandLeftResult (number) {
      // calculates
      // after listening check if array is empty
      if (number === null) {
        return -1;
      }
      else if (number !== null) {
        var array = number;
        // types of data in an array include numbers and strings
        for (var i = array.length; i > 0 ; i--) {
          // find left operand
            if (array[i] === 'multiplication' || array[i] === 'divide' || array[i] === 'minus' ||array[i] === 'plus') {
                  for (var a = 0; a < i; a++) {
                    left.leftOperand.push(array[a]);
                  }
            }
        }
      }
      // and returns a number
    }

  // listen for operator right
    var operandRightResult = 3;

  // returning values including operator, and two operands

    // pass value to findOperator()
     var findOperator = findOperator(operatorResult);
     function findOperator(operatorResults) {
       // input string
       var operator = operatorResults;
       return operator;
       // output string
     }
    // pass value to findOperandLeft()
     var findOperandLeft = operandLeftResult;
     function findOperandLeft(operandLeftResults) {
       // input number
       var operand = operandLeftResults;
       return operand;
       // output number
     }
    // pass value to findOperandRight()
     var findOperandRight = operandRightResult;
     function findOperandRight(operandRightResults) {
       // input number
       var operand = operandRightResults;
       return operand;
       // output number
     }
}
