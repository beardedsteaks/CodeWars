function meeting(x, need){
    if (need === 0) {
        console.log(`Game On`)
        return `Game On`;
    }
    let resultArray = [];
    let currentSum;
    const REDUCER = (prevValue, curValue) => prevValue + curValue;
    for (let i = 0, length = x.length; i < length; i++) {
        let totalChairs = x[i][1];
        let stringLength = x[i][0].length;
        console.log(stringLength);
        console.log(totalChairs);
        stringLength >= totalChairs ? resultArray.push(0) : resultArray.push(totalChairs - stringLength);
        console.log(resultArray);
        //NEED TO PUT A CONDITIONAL TO ONLY PULL THE NEEDED NUMBER OF CHAIRS FROM THE ROOMS - DO NOT PULL MORE THAN IS NEEDED
        //currentSum is > need -> current sum - need: array.push(array.pop() - difference); <- potential solutions to consider.
        currentSum = resultArray.reduce(REDUCER);
        console.log(currentSum);
        if (currentSum >= need) { //update this IF to contain the needed solution.
            break;
        }
    }
    console.log(`Chairs needed: ${need} and Number of extra chairs: ${currentSum}`);
    console.log(resultArray);
    return currentSum < need ? `Not enough!` : resultArray;

}

//test
/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example tests",() =>{
  it("Tests", () => {
    assert.deepEqual(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4), [0, 1, 3]);
    assert.deepEqual(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5), [0, 0, 1, 2, 2]);
    assert.deepEqual(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0), 'Game On');
  })
});
*/

meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4);
meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5);
meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0);