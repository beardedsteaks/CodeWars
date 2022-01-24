function broken(x){
    let resultArray = [];
    for (let i = 0, length = x.length; i < length; i++) {
        if (x[i] === "0") {
            resultArray.push(1);
        } else if (x[i] === "1") {
            resultArray.push(0);
        }
    }
    return resultArray.join("");
}


//test cases

broken("100010");
broken("10000000101101111110011001000");
