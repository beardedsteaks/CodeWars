function problem(x){
  var dataType = typeof x;
  if (dataType != "number") {
    return "Error";
  } else if (dataType == "number"){
    var result = (x * 50) + 6;
    return result;
  };
}