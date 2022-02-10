function removeChar(str){
    let tmpArray = str.split('');
    tmpArray.shift();
    tmpArray.pop();
    return tmpArray.join('');
};

function removeChar2(str){
    return str.slice(1, -1);
}


//tests

    console.log(removeChar('eloquent')); //'loquen'
    console.log(removeChar('country'));//'ountr'
    console.log(removeChar('person'));//'erson'
    console.log(removeChar('place')); //'lac'
    console.log(removeChar('ooopsss')); //'oopss'

    console.log(removeChar2('eloquent')); //'loquen'
    console.log(removeChar2('country'));//'ountr'
    console.log(removeChar2('person'));//'erson'
    console.log(removeChar2('place')); //'lac'
    console.log(removeChar2('ooopsss')); //'oopss'
