

function getFirstPython(list) {
    let firstPythonDev = list.find(element => element.language === 'Python');
    return firstPythonDev == null ? 'There will be no Python developers' : `${firstPythonDev.firstName}, ${firstPythonDev.country}`;
}






//Test

let list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

let list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

/*
Test.assertSimilar(getFirstPython(list1), 'Victoria, Puerto Rico');
Test.assertSimilar(getFirstPython(list2), 'There will be no Python developers');

*/

console.log(getFirstPython(list1));
console.log(getFirstPython(list2));
