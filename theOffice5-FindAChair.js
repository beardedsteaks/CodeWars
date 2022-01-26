function meeting(x, need){
    if (need === 0) {
        return `Game On`;
    }
    let resultArray = [];
    let currentSum;
    const REDUCER = (prevValue, curValue) => prevValue + curValue;
    for (let i = 0, length = x.length; i < length; i++) {
        let totalChairs = x[i][1];
        let stringLength = x[i][0].length;
        stringLength >= totalChairs ? resultArray.push(0) : resultArray.push(totalChairs - stringLength);
        currentSum = resultArray.reduce(REDUCER);
        if (currentSum > need) {
          let difference = currentSum - need;
          let lastRoom = resultArray.pop() - difference;
          resultArray.push(lastRoom);
          break;
        } else if (currentSum === need) {
          break;
        }
    }
    return currentSum < need ? `Not enough!` : resultArray;
}

//tests

meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4);
meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5);
meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0);