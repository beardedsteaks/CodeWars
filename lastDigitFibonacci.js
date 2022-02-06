function lastFibDigit(n, memo = {}){
    if (n in memo){return memo[n]};
    if (n <= 2) {return 1};
    let number = lastFibDigit(n - 1, memo) + lastFibDigit(n - 2, memo);
    memo[n] = number;
    return number % 10;
}


  //test
/*
  describe("Basic tests",() =>{
    Test.assertEquals(lastFibDigit(1),1);
    Test.assertEquals(lastFibDigit(21),6);
    Test.assertEquals(lastFibDigit(302),1);
    Test.assertEquals(lastFibDigit(4003),7);
    Test.assertEquals(lastFibDigit(50004),8);
    Test.assertEquals(lastFibDigit(600005),5);
    Test.assertEquals(lastFibDigit(7000006),3);
    Test.assertEquals(lastFibDigit(80000007),8);
    Test.assertEquals(lastFibDigit(900000008),1);
    Test.assertEquals(lastFibDigit(1000000009),9);
    })

*/
console.log(lastFibDigit(1));
console.log(lastFibDigit(21));
console.log(lastFibDigit(302));
console.log(lastFibDigit(4003));
console.log(lastFibDigit(4999));
//console.log(lastFibDigit(600005));
//console.log(lastFibDigit(7000006));
//console.log(lastFibDigit(80000007));
//console.log(lastFibDigit(900000008));
//console.log(lastFibDigit(1000000009));
