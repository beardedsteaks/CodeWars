const CONTINENTS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

//initial solution
function allContinents(list) {
    let listLocations = [];
    list.forEach(element => {listLocations.push(element.continent)});
    let reducedLocations = [...new Set(listLocations)];
    if (CONTINENTS.length !== reducedLocations.length) { return false; }
    let sortedLocations = reducedLocations.sort((a,b) => a - b);
    let match = false;
    for (let i = 0; i < sortedLocations.length; i++) {
        if (CONTINENTS[i] !== sortedLocations[i]) {
            match = false;
        }
    }
    match = true;
    return match;

  }


//secondary solustion
function allContinentsTwo(list) {
    return CONTINENTS.every(x => list.some(y => x == y.continent));
}





//Test

var list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];


var list2 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
];
  
console.log(allContinents(list1)); //true
console.log(allContinents(list2)); //false
console.log(allContinentsTwo(list1)); //true
console.log(allContinentsTwo(list2)); //false
