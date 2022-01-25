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

/*
    describe("Tests", () => {
    it("test", () => {
    result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
    Test.assertDeepEquals(wave("hello"),result, "Should return: '"+result+"'");

    result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
    Test.assertDeepEquals(wave("codewars"), result, "Should return: '"+result+"'");

    result = [];
    Test.assertDeepEquals(wave(""), result, "Should return: '"+result+"'");

    result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
    Test.assertDeepEquals(wave("two words"), result, "Should return: '"+result+"'");

    result = [" Gap ", " gAp ", " gaP "];
    Test.assertDeepEquals(wave(" gap "), result, "Should return: '"+result+"'");
    });
    });

*/

wave('hello');
wave();
wave('two words');