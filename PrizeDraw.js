const LETTERSCORE = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
}

function rank(st, we, n) {
    if (st == "") {
        return `No participants`;
    }
    let nameArray = st.toLowerCase().split(',');
    let primaryLength = nameArray.length;
    if (primaryLength < n) {
        return `Not enough participants`;
    }
    let finalArray = [];
    let scoreArray = [];

    //Generate Score for Name
    for (let i = 0; i < primaryLength; i++) {
        let nameLength = nameArray[i].length;
        let score = 0;
        for (let j = 0; j < nameLength; j++) {
                score += LETTERSCORE[nameArray[i][j]];
            }
        finalArray.push(nameArray[i], ((nameLength + score) * we[i]));
        scoreArray.push((nameLength + score) * we[i]);
    }
    let sortedScoreArray = scoreArray.sort(compareNumbers);
    //console.log(finalArray);
    //console.log(sortedScoreArray);
    
    //determine highest score
    let rankScore = sortedScoreArray[n - 1];
    let tempIndex = finalArray.indexOf(rankScore);
    let finalName = finalArray[tempIndex - 1];
    let resultName = finalName[0].toUpperCase() + finalName.slice(1);


    ///NEED TO SORT APHABETICALLY IF MULTIPLE ENTRIES HAVE THE SAME SCORE

    return resultName;

}

function compareNumbers (a, b) {
    return b - a;
}

//tests

/*

    describe("Rank",function() {
it("Basic tests",function() {
    Test.assertEquals(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
    Test.assertEquals(rank("Lagon,Lily", [1, 5], 2), "Lagon")
    Test.assertEquals(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
    Test.assertEquals(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")
})})

*/

//console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4));
//console.log(rank("Lagon,Lily", [1, 5], 2));
//console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8));
//console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6));
console.log(rank("Daniel,Michael,Ethan,Mia,Olivia,Ella,Ava,Abigail,Lyli,Mason,Elizabeth,Sofia,Natalie,Benjamin,James,Liam,Robert,Avery,Logan,Andrew,Jacob,Jayden,Samantha,Isabella,Addison,Willaim,Madison", [6,5,2,6,3,6,2,5,5,6,3,2,1,5,1,6,3,4,2,2,3,1,1,1,5,3,4], 23));
