function hello(name) {
	
  var length = name.length;

  if (length > 0){

    var fname = name[0].toUpperCase() + name.slice(1).toLowerCase();

    console.log(fname)

    let message = 'Hello, ' + fname + '!'
	
    return message;

  } else if (length === 0) {
	  
    return 'Hello, World!';

  }

}