function findUniq(arr) {
    let findDups = arr.filter((item, index) => arr.indexOf(item) !== index);
    let shortArr = [...new Set(arr)];
    shortArr[0] === findDups[0] ? shortArr.shift() : shortArr.pop();
    
    return shortArr[0];
}

//test

console.log(findUniq([ 1, 0, 0 ])); //expected 1
console.log(findUniq([ 0, 1, 0 ])); //expected 1
console.log(findUniq([ 0, 0, 1 ])); //expected 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); //expected 2
console.log(findUniq([ 1, 1, 2, 1, 1 ])); //expected 2
console.log(findUniq([ 3, 10, 3, 3, 3 ])); //expected 10

