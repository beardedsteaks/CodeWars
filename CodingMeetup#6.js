function isSameLanguage(list) {
    return list.every(isSame);
}

function isSame(element, index, arr){
    return index === 0 ? true : (element.language == arr[index - 1].language);
}

//clever solution submitted by another user
function containsSameLanguage(list) {
    return list.every(dev => dev.language === list[0].language);
}


//Test
var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

var list2 = [
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
];


console.log(isSameLanguage(list1));
console.log(isSameLanguage(list2));
console.log(containsSameLanguage(list1));
console.log(containsSameLanguage(list2));

