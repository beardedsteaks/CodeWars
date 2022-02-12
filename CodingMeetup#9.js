function isAgeDiverse(list) {
    let ageBrackets = {
        teens: 0,
        twenties: 0,
        thirties: 0, 
        forties: 0,
        fifties: 0, 
        sixties: 0,
        seventies: 0,
        eighties: 0,
        ninties: 0,
        hundredplus: 0,
    }

    list.forEach(dev => {
        let ageString = dev.age.toString();
        switch (ageString[0]){
            case '1' : ageString.length > 2 ? ageBrackets.hundredplus++ : ageBrackets.teens++;
            case '2' : ageString.length <= 1 ? ageBrackets.teens++ : ageBrackets.twenties ++;
            case '3' : ageString.length <= 1 ? ageBrackets.teens++ : ageBrackets.thirties ++;
            case '4' : ageString.length <= 1 ? ageBrackets.teens++ : ageBrackets.forties++;
            case '5' : ageString.length <= 1 ? ageBrackets.teens++ : ageBrackets.fifties++;
            case '6' : ageString.length <= 1 ? ageBrackets.teens++ : ageBrackets.sixties++;
            case '7' : ageString.length <= 1 ? ageBrackets.teens++ : ageBrackets.seventies++;
            case '8' : ageString.length <= 1 ? ageBrackets.teens++ : ageBrackets.eighties++;
            case '9' : ageString.length <= 1 ? ageBrackets.teens++ : ageBrackets.ninties += 1; 
            default : ageBrackets.teens + 0;
        }

    });
    console.log(ageBrackets);
    let resultsArray = Object.values(ageBrackets);
    
    let zeroCount = resultsArray.indexOf(0);

    return zeroCount < 0 ? true : false;
    

}




//Test


const list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

const list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

const list3 = [
    { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
    { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
];

console.log(isAgeDiverse(list1)); //true
console.log(isAgeDiverse(list2)); //false
console.log(isAgeDiverse(list3)); //false

