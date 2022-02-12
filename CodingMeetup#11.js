function getAverageAge(list, ageSum = 0) {
    list.forEach(dev => {
        ageSum += dev.age;
    });
    return Math.round((ageSum/list.length));
  }




var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ];

console.log(getAverageAge(list1));