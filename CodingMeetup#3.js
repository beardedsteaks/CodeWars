function isRubyComing(list) {
    let numOfRubyDevs = list.filter(dev => dev.language === 'Ruby').length;
    return numOfRubyDevs > 0 ? true : false;
}

function isRubyhere(list) {
    return list.some(dev => dev.language === 'Ruby');
}

//TEST


var list1 = [
{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

var list2 = [
{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
];

console.log(isRubyComing(list1));
console.log(isRubyComing(list2));
console.log(isRubyhere(list1));
console.log(isRubyhere(list2));
