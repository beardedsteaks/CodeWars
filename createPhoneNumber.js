function createPhoneNumber(numbers){
    numbers.unshift('(');
    numbers.splice(4, 0, ')', ' ');
    numbers.splice(9, 0, "-");

    return numbers.join('');
  
}

//test

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //expected "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //expected "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //expected "(123) 456-7890"
