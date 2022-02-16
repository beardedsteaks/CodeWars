function zero(opsFunction) {
    console.log ('Zero fuction called');
    return processCalculations(0, opsFunction);

}
function one(opsFunction) {
    console.log ('One fuction called');
    return processCalculations(1, opsFunction);
}
function two(opsFunction) {
    console.log ('Two fuction called');
    return processCalculations(2, opsFunction);
}
function three(opsFunction) {
    console.log ('Three fuction called');
    return processCalculations(3, opsFunction);
}
function four(opsFunction) {
    console.log ('Four fuction called');
    return processCalculations(4, opsFunction);
}
function five(opsFunction) {
    console.log ('Five fuction called');
    return processCalculations(5, opsFunction);
}
function six(opsFunction) {
    console.log ('Six fuction called');
    return processCalculations(6, opsFunction);
}
function seven(opsFunction) {
    console.log ('Seven fuction called');
    return processCalculations(7, opsFunction);
}
function eight(opsFunction) {
    console.log ('Eight fuction called');
    return processCalculations(8, opsFunction);
}
function nine(opsFunction) {
    console.log ('Nine fuction called');
    return processCalculations(9, opsFunction);
}

function plus(inner) {
    console.log ('Plus fuction called');
    return outer => outer + inner;
}
function minus(inner) {
    console.log ('Minus fuction called');
    return outer => outer - inner;

}
function times(inner) {
    console.log ('multiply fuction called');
    return outer => outer * inner;

}
function dividedBy(inner) {
    console.log ('Divide fuction called');
    return outer => outer / inner;

}

function processCalculations(number, opsFunction) {
    if (!opsFunction){
        return number;
    }
    return opsFunction(number);
}

//test


console.log(seven(times(five()))); //35
console.log(four(plus(nine()))); //13
console.log(eight(minus(three()))); //5
console.log(six(dividedBy(two()))); //3
