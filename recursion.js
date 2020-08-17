function sheepCounter(sheeps) {
  if (sheeps === 0) {
    console.log('All sheep jumped over the fence');
  } else {
    console.log(`${sheeps}: Another sheep jumps over the fence`);
    sheepCounter(sheeps - 1);
  }
}

//(sheepCounter(3));

function powerCalculator(baseInt, expoInt) {
  if (expoInt < 0) {
    return 'exponent should be >= 0';
  }
  if (expoInt === 0) {
    return 1;
  }
  return baseInt * powerCalculator(baseInt, expoInt - 1);
}

//console.log(powerCalculator(10,2));

function reverseString(string) {
  // console.log('string',string)
  // console.log('substring',string.substr(1))
  // console.log('string[0]',string[0])
  return string
    ? reverseString(string.substr(1)) + string[0]
    : `Final: ${string}`;
}

//console.log(reverseString('Hello my name is Mud and I hate recursion'));

function nThTriangleNumber(int) {
  if (int === 1) {
    return 1;
  }
  return int + nThTriangleNumber(int - 1);
}

//console.log(nThTriangleNumber(4));

function strSplit(str, seperator, array = []) {
  if (str.indexOf(seperator) === -1 || str.length <= 0) {
    array.push(str);
    return array;
  } else if (str.indexOf(seperator) !== -1) {
    array.push(str.substring(0, str.indexOf(seperator)));
    return strSplit(
      str.substring(str.indexOf(seperator) + 1),
      seperator,
      array
    );
  }
}

//console.log(strSplit('02/20/2020', '/'));

function fibonacciNumber(num) {
  if (num === 1) {
    return [0, 1];
  } else {
    let sequence = fibonacciNumber(num - 1);
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    return sequence;
  }
}

//console.log(fibonacciNumber(7));

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

//console.log(factorial(5));

// let mySmallMaze = [
//   [' ', ' ', ' '],
//   [' ', '*', ' '],
//   [' ', ' ', 'e'],
// ];

// function mazeSolver(maze, column, row) {
//   if (maze[row[column]] === 'e') {
//     return 'Bingo!';
//   } else if (maze[row[column]] === ' ') {
//     maze[row[column]] = 'b';
//     if (column < maze.length - 1) {
//       mazeSolver(maze, column + 1, row);
//     }
//     if (row < maze[column].length - 1) {
//       mazeSolver(maze, column, row + 1);
//     }
//     if (column > 0) {
//       mazeSolver(maze, column - 1, row);
//     }
//     if (row > 0) {
//       mazeSolver(maze, column, row - 1);
//     }
//   }
// }
let array = [];
function anagramFinder(string) {
  if (string.length <= 1) {
    return string;
  } else {
    /*
    define prefix as first char of string
    add remaining chars of string to prefix
    call anagramFinder on remaining chars
    */
    let prefix = string[0];
    let suffix = string.substr(1);
    console.log(string.substr(1));
    array.push(prefix + anagramFinder(suffix));
    console.log(array);
    return array;
  }
}

console.log(anagramFinder('east'));
