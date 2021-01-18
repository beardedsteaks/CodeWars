function hello(name) {

	if (name == null) {
		return 'Hello, World!';
	
	}
	
	var length = name.length;

  	if (length > 1){

    	var fname = name[0].toUpperCase() + name.slice(1).toLowerCase();

    	console.log(fname)

    	let message = 'Hello, ' + fname + '!'
	
    	return message;

  	} else if (length < 2) {
	  
    	return 'Hello, World!';

  	}

}