
//using forEach
function findAdmin(list, lang, resultArray = []) {
    list.forEach(dev => {
        if (dev.language === lang && dev.githubAdmin === 'yes'){
            resultArray.push(dev);
        }
    });
    return resultArray;
}


//using filter
function findAdmin2(list, lang) {
  return list.filter(dev => dev.language === lang && dev.githubAdmin === 'yes');
}


var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

console.log(findAdmin(list1, 'JavaScript'));
console.log(findAdmin2(list1, 'JavaScript'));