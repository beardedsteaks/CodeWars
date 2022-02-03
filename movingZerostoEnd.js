var moveZeros = function (arr) {
    let finalArray = [], zeroArray = [];
    arr.forEach(index => {index === 0 ? zeroArray.push(0) : finalArray.push(index)});
    zeroArray.forEach(index => finalArray.push(index));
    return finalArray;
  }

  //test
  /* 

  Test call: moveZeros([1,2,0,1,0,1,0,3,0,1])
  Expected output: [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])

  */

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));