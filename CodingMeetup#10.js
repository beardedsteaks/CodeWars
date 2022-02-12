function addUsername(list) {
    if (list.length === 0) {return "No Array given"};
    const thisYear = new Date().getFullYear();
    list.forEach(element => {
        let userName = `${element.firstName.toLowerCase()}${element.lastName[0].toLowerCase()}${thisYear - element.age}`
        element.username = userName;
    });
    return list;
  }








var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
 console.log(addUsername(list1));


//test

/*
[
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
      username: 'emilyn1990' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
      username: 'nore2000' }
]
*/