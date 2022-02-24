function getCount(str) {
    var vowelsCount = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowelsCount++;
        }
    }
    return vowelsCount;
}



//test

console.log(getCount("abracadabra")); //5
console.log(getCount("weoifeoryuoreldhsdlkjaeovubaeoghaoieuowiefrowjef")); //5
