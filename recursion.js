function sheepCounter(sheeps) {
  if (sheeps === 0) {
    console.log('All sheep jumped over the fence');
  } else {
    console.log(`${sheeps}: Another sheep jumps over the fence`);
    sheepCounter(sheeps-1);
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
  return baseInt * powerCalculator(baseInt, expoInt -1);
}

//console.log(powerCalculator(10,2));

function reverseString(string) {
  // console.log('string',string)
  // console.log('substring',string.substr(1))
  // console.log('string[0]',string[0])
  return string ? reverseString(string.substr(1)) + string[0] : `Final: ${string}`;
}

console.log(reverseString('Hello my name is Mud and I hate recursion'));
