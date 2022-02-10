function getMiddle(s) {
  let half = Math.floor(s.length / 2);
  return s.length % 2 == 0 ? `${s[half - 1]}${s[half]}` : `${s[half]}`;
}



//test

    console.log(getMiddle("test")); //'es'
    console.log(getMiddle("testing"));//'t'
    console.log(getMiddle("middle"));//'dd'
    console.log(getMiddle("A"));//'A'
