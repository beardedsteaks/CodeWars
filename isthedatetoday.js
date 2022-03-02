function isToday(date) {
    let today = Intl.DateTimeFormat('en').format(new Date());
    let formatedGivenDate = Intl.DateTimeFormat('en').format(date);
    return formatedGivenDate === today ? true : false;
   
}


//test


  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  console.log(isToday(new Date()));//, true
  console.log(isToday(tomorrow));//, false
  console.log(isToday(yesterday));//, false
