function wave(str){
    if (str == null) {
        return null;
    }
    let resultArray = [];
    for (let i = 0, length =str.length; i < length; i++) {
        let tempArray = [];
        if (str[i] == " "){
            continue;
        }
        for (let j = 0; j < length; j++) {
            if (i === j) {
                tempArray.push(str[j].toUpperCase());
                continue;
            }
            tempArray.push(str[j]);
        }
        resultArray.push(tempArray.join(''));
    }
    console.log(resultArray);
    return resultArray;
  }




//Tests


wave('hello');
wave();
wave('two words');