function countLanguages(list) {
    let finalObject = {}, reducedLanguageArray = [];
    let diffLanguagesArray = list.map(element => element.language);
    diffLanguagesArray.forEach(element => {
        if (!reducedLanguageArray.includes(element)){
            reducedLanguageArray.push(element);
        }}); 
    reducedLanguageArray.forEach( lang => {
        finalObject[lang] = list.filter(element => element.language === lang).length;
    });
    return finalObject;
}


//Test

let list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

/*
Expected:  { C: 2, JavaScript: 1, Ruby: 1 };
*/

console.log(countLanguages(list1));