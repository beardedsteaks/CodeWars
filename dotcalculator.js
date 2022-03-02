function dotCalculator (equation) {
    let equationArray = equation.split(" ");
    let sum = 0;
    switch(equationArray[1]) {
        case '+' :
            sum = equationArray[0].length + equationArray[2].length;
            break;
        case '-' :
            sum = equationArray[0].length - equationArray[2].length;
            break;
        case '*' :
            sum = equationArray[0].length * equationArray[2].length;
            break;
        case '//' :
            sum = Math.floor(equationArray[0].length / equationArray[2].length);
            break;
        default:
            break;
    };

    if (sum < 1) {
        return "";
    }
    let resultArray = [];
    while (sum > 0) {
        resultArray.push('.');
        sum--;
    };

	return resultArray.join('');
}

/*
Expected results
	"...................."
	".."
	"...."
	"..............."
	".........."
	".."
	"....."
	""
	""

*/

const TESTCASES = [
    "..... + ...............", // expected"...................."
    "..... - ...",
    "..... - .",
    "..... * ...",
    "..... * ..",
    "..... // ..",
    "..... // .",
    ". // ..",
    ". - .",
];

let runTestCase = (TESTCASES) => {
    for(let i = 0; i < TESTCASES.length; i++) {
        console.log(dotCalculator(TESTCASES[i]));
    }
    console.log(`Test Complete.`);
    return 0;
}

runTestCase(TESTCASES);